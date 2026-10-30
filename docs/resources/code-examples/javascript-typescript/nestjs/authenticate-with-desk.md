---
sidebar_position: 1
title: Authenticate users with Desk
---

# Authenticate users with Desk

Carmentis Desk holds the user's key pair. Your back end can use it as a passwordless login: it issues a random **challenge**, the user signs it in Desk, and the back end verifies the signature.

The flow is:

1. the front end asks the back end for a challenge;
2. the front end sends a `/v2/auth/pk` request to Desk (see [Talk to Desk from Vue](./../vue/talk-to-desk.md));
3. the back end verifies the signature returned by Desk and opens a session.

*Sources: `carmentis-file-sign` and `carmentis-certified-email-vc-issuer`.*

## Issue a single-use challenge

The challenge is random, kept server-side and short-lived. It is deleted on first use, whatever the verification outcome, to prevent replays.

```ts
import { randomBytes, randomUUID } from 'node:crypto';

const CHALLENGE_VALIDITY_MS = 3 * 60 * 1000;
const challenges = new Map<string, { challenge: string; validUntil: Date }>();

export function createChallenge() {
  const id = randomUUID();
  const challenge = randomBytes(32).toString('base64url');
  challenges.set(id, { challenge, validUntil: new Date(Date.now() + CHALLENGE_VALIDITY_MS) });
  return { challengeId: id, challenge };
}
```

## Verify the signature with the SDK

Desk returns a JSON signature object. `JsonSignatureVerifier` from `@cmts-dev/carmentis-sdk-core` checks it locally against the signer's public key, then you compare the signed payload with the challenge you issued.

```ts
import {
  CryptoEncoderFactory,
  JsonSignatureParser,
  JsonSignatureVerifier,
} from '@cmts-dev/carmentis-sdk-core';

async function authenticate(challengeId: string, signatureObject: any) {
  const entry = challenges.get(challengeId);
  challenges.delete(challengeId); // single use
  if (!entry || entry.validUntil.getTime() < Date.now()) {
    throw new Error('Invalid or expired challenge');
  }

  const signature = JsonSignatureParser.parse(signatureObject);
  const publicKey = signatureObject.publicKey as string;
  const pk = await CryptoEncoderFactory.defaultStringSignatureEncoder().decodePublicKey(publicKey);

  const verification = await new JsonSignatureVerifier().verify(pk, signature);
  if (!verification.verified) throw new Error(verification.errors.join(', '));

  // bind the signed payload to the challenge we issued (anti-replay)
  if ((verification.payload as { challenge?: string }).challenge !== entry.challenge) {
    throw new Error('Signed payload does not match the challenge');
  }
  return publicKey; // the user is identified by their public key
}
```

Once authenticated, issue your own session token (an opaque token or a JWT) bound to the public key.

## Alternative: let the operator verify

If you already run a Carmentis operator, you can delegate the verification to it instead of embedding the SDK verifier. The operator also returns the `context` that Desk displayed to the user, which lets you check the signature targets *your* application.

```ts
import axios from 'axios';

const AUTH_ORIGIN = 'FileSign'; // the `origin` sent in the /v2/auth/pk request

async function verifyChallenge(challenge: string, publicKey: string, signature: object) {
  const res = await axios.post(
    `${operatorUrl}/api/v1/crypto/signature/verify/json`,
    { signature, publicKey, payload: { challenge } },
    { headers: { 'x-api-key': operatorApiKey } },
  );
  return res.data.verified && res.data.context?.target === AUTH_ORIGIN;
}
```

## Protect your routes

A guard turns the session into a request-scoped identity. This one validates a JWT signed by your server and exposes the public key to controllers.

```ts
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true; // e.g. the login endpoints

    const request = context.switchToHttp().getRequest();
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (type !== 'Bearer' || !token) throw new UnauthorizedException();
    try {
      request.publicKey = this.jwtService.verify(token).publicKey;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
}
```
