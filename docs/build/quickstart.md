---
sidebar_position: 1
---
# Getting started

Your application does not talk to the Carmentis blockchain directly. It talks to an **operator**: a server you run on your own infrastructure, which exposes a simple HTTP API and takes care of everything blockchain-specific (building and signing microblocks, paying fees, publishing to a node, confirming publication, producing proofs).

```text
┌─────────────┐  HTTP + API key  ┌──────────────┐        ┌────────────────┐
│ Your        │ ───────────────► │   Operator   │ ─────► │ Carmentis chain │
│ application │ ◄─────────────── │              │        └────────────────┘
└─────────────┘                  └──────────────┘
                                        ▲
                                        │ administration (public-key login)
                                 ┌──────┴───────┐
                                 │ Carmentis Desk│
                                 └──────────────┘
```

## Why you need an operator

An operator is required for two reasons:

1. **Anchoring data on-chain.** Every publication (an organization, an application, or data in an application ledger) is a microblock that must be built, signed with a funded wallet and submitted to a node. The operator does this for you: your backend sends the data in a single request, then follows its status until it is `anchored`.
2. **Integration utilities.** The operator also exposes helper endpoints that ease the integration of Carmentis into your ecosystem: proofs and records, challenge/nonce/UUID generation, signature verification, SD-JWT credential and presentation verification, and checks that a microblock is published on a given node.

See the [operator reference](/operate/operator) for the complete list of endpoints and the [concepts overview](/concepts/overview#carmentis-operator) for the role the operator plays in the architecture.

:::warning An operator is personal
The operator is personal to an enterprise: never share the usage of your operator in production with another enterprise.
:::

## Prerequisites

Before writing any code, you need:

- **Carmentis Desk**, installed on your machine (see below).
- **A configured, deployed and running operator.**
- **A valid, enabled API key** created from the operator (of the form `cmts_...`).

### 1. Install Carmentis Desk

The administration interface of the operator does not use passwords. You log in with **public-key authentication**: the operator sends a challenge that is signed by your wallet in Carmentis Desk. You therefore cannot administrate an operator, and so cannot create an API key, without Desk.

[Download and install Carmentis Desk](/use/install-desk), then create (or import) a wallet. Desk is also where you create and publish your organization and application. You then configure the operator from its own admin UI, which Desk gives you access to.

### 2. Run an operator

Deploy your own operator, for example with Docker, and open its admin UI. The [operator guide](/operate/operator) walks you through the installation, the initial setup and the configuration (wallet, RPC and indexer endpoints).

### 3. Create an API key

Once logged in to the operator with Desk, create an API key from the admin UI. The API key is **displayed only once**: copy it and store it as a secret of your backend, never in client-side code.

An API key can be restricted to one application and one wallet, to endpoints matching a regex, to a gas range, and given an expiry date. Scope it as narrowly as your use case allows.

## Development workflow

Once you have an operator and an API key, interacting with the Carmentis chain is as simple as calling the operator's API from your backend, sending the key in the `x-api-key` header:

```bash
curl -H "x-api-key: cmts_..." https://<operator-domain-name>/api/v1/anchorRequest
```

The API is documented with Swagger on your operator at `<operator-domain-name>/swagger`.

A typical integration looks like this:

1. **Create an anchor request** with the data to publish.
2. **Poll its status** until it reaches `anchored` (the final success state).
3. **Retrieve proofs and records** to let third parties verify your data.

## Next steps

- Try the [File Sign demo](/build/tutorials/file-sign) to see an application anchoring data on-chain.
- Integrate Carmentis in your stack with the [Nest / Next.js guide](/build/guides/nest-next/getting-started).
- Learn the [concepts](/concepts/overview) behind application ledgers, channels and actors.
