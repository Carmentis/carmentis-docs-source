---
sidebar_position: 2
title: Issue and verify credentials
---

# Issue and verify credentials

Carmentis Desk can store **verifiable credentials** (SD-JWT). These snippets show both sides: a service that **issues** an email credential after checking the user owns the address, and a service that **verifies** a presentation of that credential.

*Sources: `carmentis-certified-email-vc-issuer` and `carmentis-file-sign`.*

## Issue a credential

After the user has proven control of an email (a one-time code sent by email, here), the back end asks an issuance service to sign an SD-JWT credential. The **subject** is the user's Desk public key, so the credential is bound to their wallet. Every claim is listed in `disclosableClaims`, which lets the holder choose what to reveal when presenting it.

```ts
private async issueCredential(subject: string, claims: Record<string, unknown>): Promise<string> {
  const { url, api_key, name, vct } = this.config.get().issuer;

  const res = await fetch(`${url.replace(/\/$/, '')}/api/${name}/issue`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-API-Key': api_key },
    body: JSON.stringify({
      vct,                                         // credential type
      subject,                                     // holder public key
      claims,                                      // e.g. { email, codeVerifiedAt }
      disclosableClaims: Object.keys(claims),
    }),
  });
  if (!res.ok) throw new BadGatewayException('Credential issuance failed');

  const { credential } = (await res.json()) as { credential?: string };
  if (!credential) throw new BadGatewayException('Invalid issuance service response');
  return credential; // the compact SD-JWT, ready to import in Desk
}
```

The front end then hands the credential to Desk, see [Import a credential](../vue/talk-to-desk.md#import-a-credential-in-desk).

## Request a presentation

To verify a credential, first tell Desk what you want to see. The back end builds a **nonce** (single-use) and a DCQL-style **query**, and stores the nonce for the user. The front end forwards both to Desk.

```ts
@Get('/emails/presentation')
async initializeEmailCredentialPresentation(@Req() req: Request) {
  const user = await this.userService.getAuthenticatedUserFromRequest(req);
  const nonce = randomBytes(32).toString('base64');
  this.presentationRequests.set(user.publicKey, { nonce, publicKey: user.publicKey, createdAt: Date.now() });

  return {
    publicKey: user.publicKey,
    nonce,
    query: {
      credentials: [
        { id: 'email_credential', format: 'vc+sd-jwt', claims: [{ path: ['email'] }] },
      ],
    },
  };
}
```

## Verify the presentation

Desk answers with a `vp_token`. The operator verifies it: format, issuer signature, required claims, that the presentation is bound to the expected holder key and to **your nonce**.

```ts
async verifyPresentation(publicKey: string, vp: string, nonce: string) {
  const res = await axios.post(
    `${operatorUrl}/api/v1/vp/sdjwt/verify`,
    {
      credential: vp,
      allowedFormats: ['vc+sd-jwt'],
      requiredClaimKeys: ['email'],
      expectedSubject: publicKey,
      nonce,
    },
    { headers: { 'x-api-key': operatorApiKey } },
  );
  if (!res.data.success) {
    throw new Error(`Presentation verification failed: ${res.data.errors.join(',')}`);
  }
  return res.data.claims.email as string;
}
```

Consume the nonce when you verify (`presentationRequests.delete(publicKey)`) so a presentation cannot be replayed.

:::warning
Both example applications leave a `TODO: add trusted issuers`: in production, restrict the accepted issuers, otherwise anyone can mint an "email" credential.
:::
