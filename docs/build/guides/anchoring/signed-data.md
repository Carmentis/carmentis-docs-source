---
title: Signed data
sidebar_position: 4
---

# Signed data from another operator

An operator may need data that has been signed by **another operator**. Your application can bridge the two: it asks a first operator to sign some data, then uses that data in the second operator.

The example is a corporate officer whose KYC was performed by a first court officer, and whose identity must be used in a second operator.

## Sign the data

Send the data to sign, with a `context` that states its purpose:

```json
{
  "context": {
    "purpose": "Signature of the corporate officer identity"
  },
  "payload": {
    "lastName": "Dupont",
    "firstName": "Jean",
    "role": "President"
  }
}
```

The operator returns a signed JSON:

```json
{
  "signatureType": "json-canonical+utf8",
  "signature": "nICVdQIgsA+fS1RxG0Neiz",
  "signatureEncoding": "base64",
  "publicKey": "did:jwk:eyJhbGciOiJQU",
  "context": {
    "signedAt": 1789743188398,
    "purpose": "Signature of the corporate officer identity"
  },
  "payload": {
    "lastName": "Dupont",
    "firstName": "Jean",
    "role": "President"
  }
}
```

| Field               | Meaning                                                              |
| ------------------- | -------------------------------------------------------------------- |
| `signatureType`     | How the data was serialized before signing (canonical JSON, UTF-8).  |
| `signature`         | The signature, in the encoding given by `signatureEncoding`.         |
| `publicKey`         | The signer's public key, as a `did:jwk`.                             |
| `context`           | The purpose, and the signature time (`signedAt`, in milliseconds).   |
| `payload`           | The signed data.                                                     |

## Anchor the signed data

Anchor the signed JSON as is, under the `__signature__` key:

```json
{
  "applicationId": "...",
  "data": {
    "date": "2026-03-03",
    "recipient": { "email": "adupont@example.com" },
    "sender": {
      "companyName": "Cabot",
      "siren": "123456789",
      "officer": {
        "__signature__": {
          "signatureType": "json-canonical+utf8",
          "signature": "nICVdQIgsA+fS1RxG0Neiz",
          "signatureEncoding": "base64",
          "publicKey": "did:jwk:eyJhbGciOiJQU",
          "context": {
            "signedAt": 1789743188398,
            "purpose": "Signature of the corporate officer identity"
          },
          "payload": {
            "lastName": "Dupont",
            "firstName": "Jean",
            "role": "President"
          }
        }
      }
    }
  }
}
```

## Resolve

Resolving the microblock verifies the signature and returns the payload in place of the signature:

```json
{
  "type": "resolutionProof",
  "proof": {
    "linkedMicroblock": "cmts://resolve/al/A1480947BF02147CC62FE8163C/h/259",
    "resolvedMicroblock": {
      "date": "2026-03-03",
      "recipient": { "email": "adupont@example.com" },
      "sender": {
        "companyName": "Cabot",
        "siren": "123456789",
        "officer": {
          "lastName": "Dupont",
          "firstName": "Jean",
          "role": "President"
        }
      }
    },
    "proofs": {}
  }
}
```

The signature of the officer's data is checked during resolution. See [Resolve and check proofs](./resolution-and-proof-checker).
