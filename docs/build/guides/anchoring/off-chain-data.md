---
title: Off-chain data
sidebar_position: 3
---

# Off-chain data

The operator can store information **on-chain** or **off-chain**. Off-chain storage has two main use cases:

- **Data that may need to be deleted**, such as personal data that a person can ask you to erase.
- **Data too large** to be stored on the chain.

The principle: the application stores the data in clear, and only a **digest** of the data is anchored on-chain. Anyone given the clear data can later check that it matches the anchored digest.

## Get the digest of your data

Suppose you want to anchor the identity of the debtor off-chain:

```json
{ "lastName": "Durand", "firstName": "Pierre" }
```

You send this data to the operator, which answers with the digest of the data:

```json
{
  "digestData": {
    "ABCD1234": {
      "__salt__": "123456AB",
      "lastName": "Durand",
      "firstName": "Pierre"
    }
  },
  "digest": {
    "digest": "ABCD1234",
    "type": "json",
    "encoding": "canonical",
    "digestAlg": "sha256"
  }
}
```

- `digestData` is the data to **keep in your application**, indexed by its digest. It contains a random `__salt__`, so that the digest cannot be guessed from the data alone.
- `digest` describes the digest to anchor.

The operator guarantees the exact string that represents the JSON. It handles whitespace and sorts the keys (*canonical* encoding), so that the same JSON always gives the same digest.

## Anchor the digest

Use the `__digest__` key to anchor a receivable that references the debtor without any personal data:

```json
{
  "applicationId": "...",
  "data": {
    "name": "Energy supply invoice",
    "reference": "F-2025-11873",
    "issuer": "EDF",
    "date": "2023-12-05",
    "principal": 358.2,
    "interest": 12.5,
    "debtor": {
      "__digest__": {
        "digest": "ABCD1234",
        "type": "json",
        "encoding": "canonical",
        "digestAlg": "sha256"
      }
    }
  }
}
```

## Resolve

At resolution time, you provide the clear data in the `digestData` field of the request sent to the resolver:

```json
{
  "linkedMicroblock": "cmts://resolve/vb/A1480947BF02147CC62FE8163C/mb/h/259",
  "policies": {
    "onResolutionFailure": "throw",
    "onCyclicResolution": "throw"
  },
  "digestData": {
    "ABCD1234": {
      "__salt__": "123456AB",
      "lastName": "Durand",
      "firstName": "Pierre"
    }
  }
}
```

The resolver replaces the `__digest__` with the clear data, and checks that it matches the digest. The result is a [resolution proof](./resolution-and-proof-checker) that carries the `digestData`, so the proof checker can repeat the check:

```json
{
  "type": "resolutionProof",
  "proof": {
    "linkedMicroblock": "cmts://resolve/vb/A1480947BF02147CC62FE8163C/mb/h/259",
    "resolvedMicroblock": {
      "name": "Energy supply invoice",
      "reference": "F-2025-11873",
      "issuer": "EDF",
      "date": "2023-12-05",
      "principal": 358.2,
      "interest": 12.5,
      "debtor": { "lastName": "Durand", "firstName": "Pierre" }
    },
    "proofs": {},
    "digestData": {
      "ABCD1234": {
        "__salt__": "123456AB",
        "lastName": "Durand",
        "firstName": "Pierre"
      }
    }
  }
}
```

The `proofs` object holds the authenticity proofs; it is shown empty here for brevity.

## Re-anchor off-chain data on-chain

Sometimes off-chain data must later be anchored on-chain for good. For instance, the debtor's digest can be anchored with no expiry, since it holds no personal data (`chainStorageInDays` is `null`):

```json
{
  "applicationId": "...",
  "chainStorageInDays": null,
  "data": {
    "__digest__": {
      "digest": "ABCD1234",
      "type": "json",
      "encoding": "canonical",
      "digestAlg": "sha256"
    }
  },
  "channels": [],
  "actors": [],
  "channelAssignations": [],
  "actorAssignations": [],
  "author": "..."
}
```

Suppose this microblock is referenced by `cmts://resolve/vb/3008327736206FA139A/mb/h/598`.

Now suppose you must anchor a *report* that lives 25 years, and about which the data subject **cannot** ask for deletion. The report must then contain the clear data too. You reference the debtor's microblock with `__link__` and carry the clear data in `__digest_data__`:

```json
{
  "applicationId": "...",
  "chainStorageInDays": 9000,
  "data": {
    "name": "Report",
    "receivable": {
      "reference": "F-2025-11873",
      "issuer": "EDF",
      "date": "2023-12-05",
      "principal": 358.2,
      "interest": 12.5
    },
    "debtor": {
      "__link__": "cmts://resolve/vb/3008327736206FA139A/mb/h/598",
      "__digest_data__": {
        "ABCD1234": {
          "__salt__": "123456AB",
          "lastName": "Durand",
          "firstName": "Pierre"
        }
      }
    }
  },
  "channels": [],
  "actors": [],
  "channelAssignations": [],
  "actorAssignations": [],
  "author": "..."
}
```

This has two effects:

- the debtor's proof is anchored along with the report;
- the personal data is used only within the scope of the report.

Resolution first resolves and checks the `__link__`, then checks that each `__digest_data__` matches the corresponding `__digest__`. The resolved result is then a regular [resolution proof](./resolution-and-proof-checker).

## GDPR

Off-chain storage lets you honour the **right to erasure**: your application is responsible for finding the data of the person concerned and deleting it. Once deleted, only the salted digest remains on-chain.

:::warning
This mechanism does **not** cover the **right to rectification** of what is already anchored.
:::
