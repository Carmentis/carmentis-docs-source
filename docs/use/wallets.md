---
sidebar_position: 2
---

# Manage your wallets

A wallet in Carmentis Desk is a signature key pair attached to a network. It identifies you on the blockchain and holds your tokens. You can create as many wallets as you need; each one belongs to a single network.

## Create a wallet

From the home page, create a new wallet and fill in:

- **General**: the name of the wallet.
- **Network**: where the wallet lives (see [Networks](#networks)).
- **Private key**: how the key is obtained, with one of the following.
  - **Seed**: Desk generates a new key.
  - **Passphrase**: the key is derived from a BIP39 passphrase.
  - **JWK**: you paste an existing private JWK.

  For a seed or a passphrase, choose the signature scheme: `SECP256K1` or `ML_DSA_65`.

:::warning Back up your key
The key is the only way to get your wallet back. Keep a copy of your seed, passphrase or JWK somewhere safe, and never share it.
:::

The private key is stored encrypted in Desk's vault, on your machine.

## Networks

Each wallet is connected to a node and to an indexer. Choose one of the presets, or enter your own URLs.

| Network | Node | Indexer |
| ------- | ---- | ------- |
| Mainnet | `https://mercurius.carmentis.io` | `https://indexer.carmentis.io` |
| Testnet | `https://ares.testnet.carmentis.io` | `https://indexer.testnet.carmentis.io` |
| Devnet  | `https://node2.server2.devnet.carmentis.io` | `https://indexer.server4.devnet.carmentis.io` |
| Custom  | your own node URL | your own indexer URL |

You can change them later in the **Connectivity** tab of the wallet.

## Wallet overview

Opening a wallet shows the following tabs.

| Tab | Content |
| --- | ------- |
| Overview | Your keys and your balance. |
| Organizations | Your [organizations](/use/organizations-and-nodes), when the developer or node holder role is enabled. |
| Credentials | Your [verifiable credentials](/use/credentials). |
| Connectivity | The node and indexer URLs of the wallet. |

### Keys

The **keys** card shows the type of key (seed or JWK), your private and public keys (masked by default) and the passphrase of your actor keys. Use **Check keys** to sign a test message and verify the signature.

For a JWK wallet, the card also shows the public JWK, and the private JWK once you choose to reveal it. Both can be copied.

### Balance, transfers and history

The **balance** card shows your tokens broken down into spendable, staked, vested and escrowed amounts. From a wallet you can also:

- **Transfer tokens** to another account. The destination account is created if it does not exist yet, and a maximum amount applies to a single transfer.
- **Read your transaction history.**

### Synchronize with the chain

If you already published organizations, applications or nodes with this wallet, for instance from another machine, the synchronization view compares the chain with your local data and imports what is missing.

## Delete a wallet

You can delete a wallet from Desk. This only removes it from Desk: nothing is removed from the blockchain. Make sure you have backed up your key first, otherwise you will not be able to use the wallet again.
