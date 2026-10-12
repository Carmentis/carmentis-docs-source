---
title: Anchor data on-chain
sidebar_position: 1
---

# Anchor data on-chain

Anchoring data on-chain is the simplest method. It gives you:

- **Irrefutable data**: once anchored, it cannot be altered.
- **Signed data**: the operator signs what it publishes.
- **Distributed storage**: the data is stored by the network.
- **A bounded lifetime**: you choose how long the data is kept.
- **Asymmetric access**: each piece of information can be visible to some parties only.

The example is an assignment of receivable with three parties: the assignor, the assignee and the debtor. Anchoring is done with the operator endpoint `wallet/{walletId}/anchor` (see the [Operator API](/build/reference/operator-api/carmentis-operator-api)).

## Create the virtual blockchain

The object below describes the assignment between the assignor and the assignee.

```json
{
  "applicationId": "1E89377BFCDF8165059AA97",
  "chainStorageInDays": 3600,
  "gasPriceInAtomics": 1000,
  "data": {
    "receivable": {
      "name": "Energy supply invoice",
      "reference": "F-2025-11873",
      "issuer": "EDF",
      "date": "2023-12-05",
      "principal": 358.2,
      "interest": 12.5,
      "debtor": { "lastName": "Durand", "firstName": "Pierre" }
    },
    "deed": {
      "reference": "CES-2026-0087",
      "date": "2026-09-02",
      "deedDigest": "sha256:4b1e...",
      "assignor": { "name": "Cabot" },
      "assignee": { "name": "EOS" }
    },
    "transaction": {
      "price": 15.2,
      "enjoymentDate": "2026-10-02",
      "pricePaymentDate": "2026-11-02"
    }
  },
  "channels": [
    { "name": "public", "public": true },
    { "name": "receivable", "public": false },
    { "name": "transaction", "public": false }
  ],
  "actors": [{ "name": "debtor" }, { "name": "assignor" }, { "name": "assignee" }],
  "channelAssignations": [
    { "channelName": "receivable", "fieldPath": "this.receivable.*" },
    { "channelName": "transaction", "fieldPath": "this.transaction.*" },
    { "channelName": "transaction", "fieldPath": "this.deed.*" },
    { "channelName": "public", "fieldPath": "this.deed.deedDigest" }
  ],
  "actorAssignations": [
    { "channelName": "receivable", "actorName": "debtor" },
    { "channelName": "receivable", "actorName": "assignor" },
    { "channelName": "receivable", "actorName": "assignee" },
    { "channelName": "transaction", "actorName": "assignor" },
    { "channelName": "transaction", "actorName": "assignee" }
  ],
  "author": "Alexandre & Associates, court officers"
}
```

| Field                 | Meaning                                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`       | Id of your application.                                                                                                                                           |
| `chainStorageInDays`  | Storage duration, in days. After it, the **whole virtual blockchain disappears**.                                                                                 |
| `gasPriceInAtomics`   | Maximum amount of tokens allocated to the anchoring. The higher it is, the faster the request is processed. It is set for **each** microblock.                    |
| `data`                | The data to anchor in the microblock.                                                                                                                             |
| `author`              | Name of the operator, as configured in the operator.                                                                                                              |
| `channels`            | The channels. Data in public channels is readable by anyone; data in private channels only by the assigned actors. New channels can be added in later microblocks. |
| `actors`              | The actors. New actors can be introduced in later microblocks. Linking a real user to an actor is the job of your application (through the operator).             |
| `channelAssignations` | Assigns data to channels. `*` assigns all the fields under a path.                                                                                                |
| `actorAssignations`   | Assigns actors to channels. At least one actor and one channel are required for the data to be accessible.                                                        |

In this example, the deed digest is the only public data. Someone holding the original deed can check that it matches. This information must be provided in every microblock where it is needed.

The assignor and the assignee can read everything. The debtor can read the receivable but not the transaction, and in particular cannot see the assignment price.

## Chain microblocks

Microblocks chain together to follow the sequence of operations. Here, the sequence could be:

1. the assignor signs the transaction;
2. the assignee signs the transaction;
3. the assignment price is paid;
4. the debtor is notified.

Each microblock is timestamped, and you access a given microblock through its height in the virtual blockchain.

The following microblock anchors the debtor notification. It appends to the existing virtual blockchain through `virtualBlockchainId`:

```json
{
  "applicationId": "1E89377BFCDF8165059AA97",
  "virtualBlockchainId": "92F3EA839720A2444922E9",
  "gasPriceInAtomics": 800,
  "data": {
    "notification": { "date": "2026-11-03" }
  },
  "channelAssignations": [{ "channelName": "receivable", "fieldPath": "this.*" }]
}
```

- `virtualBlockchainId` is the id of the blockchain created in the previous step.
- `gasPriceInAtomics` can differ from the previous microblock.
- The notification is assigned to the `receivable` channel, so it is readable by the three actors.

## Next

- [Reference other microblocks](./reference-microblocks) to avoid repeating data.
- [Resolve and check proofs](./resolution-and-proof-checker).
