---
title: Verifiable credentials
sidebar_position: 5
---

# Verifiable credentials

Carmentis supports **verifiable credentials** (VC), also called verifiable certificates.

- A credential is **issued** by an *issuer* (for example a court officer) on behalf of a *holder* (for example a corporate officer). It is signed with the issuer's private key.
- A **verifiable presentation** (VP) is the object the holder builds to show the credential to a *verifier*. It contains the cryptographically signed **claims**, and is signed with the holder's private key.
- The verifier here is the **proof checker**.

## Anchor a presentation

Anchor the presentation in a `__vp__` field, and state its format. The supported format is SD-JWT (IETF), in `__sdjwt_ietf__`:

```json
{
  "id": "414067330",
  "timestamp": "2025-09-16T08:00:00Z",
  "corporate_officer": {
    "__vp__": {
      "__sdjwt_ietf__": "eyJ0eXAiOiJ2YytzZC1qd3QiLCJhbGciOiJFZERTQSJ9"
    }
  }
}
```

Here `id` is the company registration number (SIREN).

## Resolve

Resolution returns the claims of the presentation:

```json
{
  "id": "414067330",
  "timestamp": "2025-09-16T08:00:00Z",
  "corporate_officer": {
    "lastName": "Badiche",
    "firstName": "Xavier",
    "birthDate": "1973-12-20",
    "iat": "...",
    "exp": "...",
    "nbf": "...",
    "iss": "did:jwk:...",
    "sub": "did:..."
  }
}
```

| Claim | Meaning                                              |
| ----- | ---------------------------------------------------- |
| `iat` | Issued at (timestamp).                               |
| `exp` | Expiration date (timestamp).                         |
| `nbf` | Not before (timestamp).                              |
| `iss` | The issuer's public key.                             |
| `sub` | The subject (holder) wallet key.                     |

:::note The issuer's identity is not resolved yet
Resolution does not yet establish *who* the issuer is. This feature may come later, which is why you should anchor the whole **presentation** and not only the claims.
:::

To verify a credential or a presentation yourself, the operator also exposes the endpoints `vc/sdjwt/verify` and `vp/sdjwt/verify` (see the [Operator API](/build/reference/operator-api/carmentis-operator-api)).
