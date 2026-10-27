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

## Export and import a wallet

Desk can save a wallet into a **wallet file** with the extension `.ecw` (*encrypted Carmentis wallet*). The file is encrypted with a password you choose, so it can be stored as a backup or sent to another machine without exposing your key.

A wallet file contains:

- the wallet name and its creation date;
- the private key (seed and signature scheme, or private JWK);
- the passphrase of the actor keys;
- the node and indexer URLs of the wallet.

### Export a wallet

1. Open the wallet and choose **Export wallet** in its menu.
2. Enter a password and confirm it.
3. Choose where to save the `.ecw` file. By default it is named `wallet-<name>.ecw`.

Desk encrypts the wallet and, before writing the file, decrypts it again to check it can be recovered. The password is used for this operation only: Desk does not store it.

:::warning The password cannot be recovered
Without the password, the file cannot be read, and nobody can reset it. Store it in a password manager, and never in the same place as the file. Anyone who holds both the file and the password holds your wallet.
:::

### Import a wallet in Desk

1. On the home page, choose **Import**, then select the `.ecw` file.
2. Enter the password of the file.

Desk creates the wallet with the name, key, actor passphrase and network settings stored in the file, and opens it. If the password is wrong, or if the file has been modified, nothing is imported.

### Import a wallet in the Operator

The same file can be used to give an [Operator](/operate/operator) the wallet you first created in Desk, without copying a key by hand.

1. In the admin UI of the Operator, open **Wallets** and choose **Import**.
2. Select the `.ecw` file and enter its password.
3. Choose the network used for the wallets whose file does not carry its own node and indexer URLs. For a custom network, enter the RPC and indexer endpoints. You can also set an allowed-endpoints regex.

The Operator decrypts the file on the server and neither stores the file nor the password. A file is imported entirely or not at all.

:::tip Use a dedicated password
The password protects only the file. Choose a long and unique one, because anyone who obtains the file can try to guess it offline. See the [Encrypted Carmentis Wallet File specification](/resources/specifications/encrypted-carmentis-wallet-file#security-considerations) for details.
:::

## Delete a wallet

You can delete a wallet from Desk. This only removes it from Desk: nothing is removed from the blockchain. Make sure you have backed up your key first, otherwise you will not be able to use the wallet again.
