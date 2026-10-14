---
sidebar_position: 2
---

import {DynamicLink} from '@site/src/components/DynamicLink';

# Getting started

Carmentis lets you anchor data on a blockchain so that anyone can later verify it is authentic and unaltered. Three kinds of people use it, and each starts differently: **users** approve and verify actions with their wallets, managed in Carmentis Desk, **developers** publish data through an operator they run, and **node runners** secure the network.

Pick the path that sounds like you.

## As a user

All you need is **Carmentis Desk**. It manages your wallets, which hold your tokens and your credentials and let you sign in to applications that use Carmentis.

1. **Download and install [Carmentis Desk](/use/install-desk)** from the download page. It is available on Linux, Windows and macOS.
2. **Create a wallet.** Set a vault password at first launch, then [create a wallet](/use/wallets) on the network you want to use. Back up your key (seed, passphrase or JWK) somewhere safe: it is the only way to get your wallet back.
3. **Try an application.** The [File Sign demo](/resources/demo-applications) lets you send a file for signature and watch it being recorded on the blockchain.

**You are done when** you have signed a file in File Sign and downloaded a proof for it.

## As an application developer

Your application never talks to the blockchain directly. It calls an **operator**: a server you run on your own infrastructure, which builds, signs and publishes your data on-chain and pays the fees. You set this up once.

```text
Your application  ──HTTP + API key──►  Operator  ──►  Carmentis blockchain
                                          ▲
                                          └── administration: log in with Carmentis Desk
```

1. **Install [Carmentis Desk](/use/install-desk) and create a wallet.** The operator's admin interface has no password: you log in by signing a challenge with a wallet from Desk.
2. **Fund the wallet.** The operator pays a fee for every publication, and a publication from an unfunded wallet is rejected. On the testnet, get tokens from the <DynamicLink id="testnet:exchange" message="exchange"/>.
3. **Deploy an operator.** Follow the [operator guide](/operate/operator): run it with Docker, then create the first administrator with the setup token printed at first start.
4. **Configure it from its admin UI.** Add your wallet, then create and publish your **organization** and your **application**.
5. **Create an API key.** It is displayed only once: store it as a secret of your backend, never in client-side code.
6. **Anchor your first data.** Send a `POST /api/v1/wallet/anchor` request with your key in the `x-api-key` header, then poll its status until it is `anchored`. The [developer quickstart](/build/quickstart) walks through it, and [Anchor data on-chain](/build/guides/anchoring/anchor-on-chain) describes the request body.

**You are done when** an anchor request reaches the `anchored` status.

Where to go next:

- Integrate Carmentis in a Node.js stack with the [Nest / Next.js guide](/resources/code-examples/nest-next/getting-started).
- Learn how to [anchor, reference and resolve data](/build/guides/anchoring/overview).
- Understand [organizations, applications, application ledgers and channels](/concepts/overview).

:::note Approval from the user's wallet
Publishing data after an end user approves it from their own wallet is currently unavailable and being reworked. Do not build new integrations on it. See the [operator guide](/operate/operator#anchoring-endpoints).
:::

## As a node runner

Carmentis is secured by the people who run its nodes. You start with a replicator node, and can then stake tokens on it to become a validator.

1. **Deploy a replicator node.** The [replicator guide](/operate/node/replicator) installs the CLI, generates the configuration and starts the node with Docker.
2. **Wait for it to synchronize.** Open your node's status endpoint: when `is_catching_up` is `false` and `latest_block_height` is set, the node is up to date.
3. **Prepare your identity on-chain.** Install [Carmentis Desk](/use/install-desk), create a wallet, and publish an **organization**. A node belongs to an organization.
4. **Hold enough tokens.** Claiming a node requires at least 1M tokens. On the testnet, get them from the <DynamicLink id="testnet:exchange" message="exchange"/>.
5. **Claim and stake your node.** Link the node to your organization, then stake your tokens on it. The [validator guide](/operate/node/validator) details these steps.
6. **Wait for governance approval.** The chain is currently permissioned: your node becomes a validator, and starts earning rewards, once the governance approves it. This can take a few days.

**You are done when** your node shows as claimed and staked, and the governance has approved it.

:::warning Unstaking takes 30 days
Only one unstaking operation can run at a time per node, and it completes 30 days after your request. Check the amount before you stake.
:::

## Where next

- [Concepts overview](/concepts/overview): how accounts, organizations, applications and channels fit together.
- [API reference](/build/reference/desk-json-rpc): Desk, operator and indexer APIs.
- [Getting help](/resources/getting-help).
