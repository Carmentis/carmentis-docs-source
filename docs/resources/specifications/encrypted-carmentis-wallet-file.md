---
sidebar_position: 1
---

# Encrypted Carmentis Wallet File

This page specifies the **Encrypted Carmentis Wallet File** (extension `.ecw`), or *wallet file*, produced by Carmentis Desk and read by Desk and the Operator. It is implemented by the `WalletKeyFileService` class of `@cmts-dev/carmentis-sdk-core` (since version 1.11.3). For the user-facing procedure, see [Export and import a wallet](/use/wallets#export-and-import-a-wallet).

The key words MUST, SHOULD and MAY are used as in RFC 2119.

## Overview

A wallet file is a **CBOR** (RFC 8949) document made of a clear **header** and an encrypted **payload**. The payload holds one or more wallets, and is encrypted with a key derived from a password. The header is not encrypted but is authenticated together with the payload, so it cannot be altered without detection.

```
┌─────────────────────────── envelope (CBOR map) ───────────────────────────┐
│ magic, formatVersion, encryption {scheme, kdf{salt,t,m,p}}   ← header     │
│ ciphertext = IV (12 bytes) ‖ AES-256-GCM(payload) ‖ tag (16 bytes)        │
└───────────────────────────────────────────────────────────────────────────┘
                                   ▲
 AAD = canonical CBOR of the header┘      payload = CBOR of the JSON document
```

## Envelope

The envelope is a CBOR map with the following members.

| Member          | Type        | Description |
| --------------- | ----------- | ----------- |
| `magic`         | text        | Always `CMTS-KEYFILE`. |
| `formatVersion` | integer     | Version of the structure of the file. The current value is `1`. |
| `encryption`    | map         | Encryption parameters. Its `scheme` member designates the encryption scheme, which defines the other members. |
| `ciphertext`    | byte string | The encrypted payload, in the format defined by the scheme. |

A reader MUST reject a file whose `formatVersion` it does not support, and a file whose `encryption.scheme` it does not know. Byte strings are encoded as plain CBOR byte strings, without tag 64.

The file is binary. The SDK also offers a Base64 form (`exportToBase64` and `importFromBase64`), where the whole file is encoded in standard Base64.

## Encryption schemes

A scheme turns a password into a key and uses it to protect the payload. It owns the schema of the `encryption` member and is designated by its identifier. Readers keep older schemes registered, so files written with a previous default remain readable when the default scheme changes.

### `argon2id-aes256gcm-v1`

This is the only scheme defined, and the default.

`encryption` has the following members:

| Member   | Type        | Constraint |
| -------- | ----------- | ---------- |
| `scheme` | text        | `argon2id-aes256gcm-v1` |
| `kdf`    | map         | Argon2id parameters, see below. |

`kdf` has the following members:

| Member | Type        | Written value | Accepted when reading |
| ------ | ----------- | ------------- | --------------------- |
| `salt` | byte string | 16 random bytes | 16 to 64 bytes |
| `t`    | integer     | `3` (passes) | 1 to 10 |
| `m`    | integer     | `65536` (memory, in KiB, i.e. 64 MiB) | 8 to 1 048 576, and at least `8 × p` |
| `p`    | integer     | `1` (parallelism) | 1 to 16 |

The bounds applied when reading prevent a hostile file from imposing an absurd cost on the reader.

**Key derivation.** The password is normalized with Unicode NFKC, encoded in UTF-8, then given to Argon2id (RFC 9106, version 0x13) with the salt and the cost parameters of the header, to produce a **32-byte** key. The password MUST NOT be empty.

**Encryption.** The payload is encrypted with AES-256-GCM, with a fresh random 12-byte IV, and the **canonical serialization of the header** as associated data (AAD). The `ciphertext` member is the concatenation:

```
ciphertext = IV (12 bytes) ‖ encrypted payload ‖ GCM tag (16 bytes)
```

## Authenticated header

The AAD is the CBOR encoding of the header, that is the envelope without `ciphertext`: `magic`, `formatVersion` and `encryption`. To make this encoding independent of how the header was built or decoded, the members of every map are **sorted by key** (in code-unit order, recursively) before encoding.

On reading, the AAD is computed from the header **as read from the file**, not from the parsed and validated parameters, which could have dropped unknown members. Consequently, any change to the version, the scheme, the salt or the cost parameters makes the decryption fail.

## Payload

Once decrypted, the payload is a CBOR-encoded JSON document with the following structure.

| Member       | Type            | Description |
| ------------ | --------------- | ----------- |
| `exportedAt` | text            | ISO 8601 timestamp of the export. |
| `wallets`    | array           | At least one wallet. Names MUST be unique within the file. |

Additional members are accepted and ignored by readers. Each element of `wallets` is an object:

| Member            | Type   | Description |
| ----------------- | ------ | ----------- |
| `name`            | text   | Name of the wallet. Not empty. |
| `createdAt`       | text   | ISO 8601 creation timestamp. |
| `privateKey`      | object | The private key, see below. |
| `actorPassphrase` | text   | Passphrase from which the actor keys are derived. |
| `connectivity`    | object | Optional. Node and indexer of the wallet. |

### Private key

The `keyType` member discriminates the variants.

**`seed`**

| Member       | Type    | Description |
| ------------ | ------- | ----------- |
| `keyType`    | text    | `seed` |
| `schemeId`   | integer | Identifier of the signature scheme (`SECP256K1` or `ML_DSA_65`). |
| `seed`       | text    | The seed, in standard Base64. |
| `passphrase` | text    | Optional. The BIP39 passphrase the key was derived with. |

**`jwk`**

| Member    | Type   | Description |
| --------- | ------ | ----------- |
| `keyType` | text   | `jwk` |
| `jwk`     | object | The private JWK. It MUST contain `kty`; other members are kept as is. |

### Connectivity

| Member            | Type | Description |
| ----------------- | ---- | ----------- |
| `networkName`     | text | Name of the network, for example `mainnet`. |
| `nodeEndpoint`    | text | URL of the node. |
| `indexerEndpoint` | text | URL of the indexer. |

When a wallet has no `connectivity`, the reader applies its own defaults: Desk falls back to the mainnet, and the Operator uses the network chosen in the import form.

## Procedures

**Writing.**

1. Build and validate the payload.
2. Encode it in CBOR.
3. Generate the scheme parameters (random salt, cost).
4. Build the header, and serialize it as the AAD.
5. Derive the key, encrypt, and zero the key and the plaintext from memory.
6. Encode the envelope in CBOR.

**Reading.**

1. Decode the envelope. Reject it if it is not valid CBOR, if the version is unsupported, or if it does not match the envelope schema.
2. Look up the scheme from `encryption.scheme`, and validate `encryption` with the schema of this scheme.
3. Compute the AAD from the header as read.
4. Derive the key and decrypt. Any failure raises a single decryption error.
5. Decode the payload and validate it. Reject it if it does not match the payload schema.

## Security considerations

- **Confidentiality** relies on the strength of the password. An attacker who gets the file can test passwords offline. Argon2id with 64 MiB of memory and 3 passes slows down each guess, but cannot make a weak password safe. Use a long and unique password.
- **Integrity**: AES-GCM authenticates the payload and, through the AAD, the header. A file whose header or ciphertext was altered does not decrypt.
- **No distinction between errors.** A wrong password and an altered file produce the same error (`Cannot decrypt the key file: wrong password or corrupted file`), so the error does not help an attacker.
- **Metadata in clear**: the format version, the scheme and the cost parameters are readable without the password. The wallet name, the endpoints and the number of wallets are not.
- **No recovery.** The password is never stored in the file, in Desk or in the Operator. A lost password makes the file unreadable.
- **Memory**: the derived key and the decrypted payload are zeroed after use, within the limits of a garbage-collected runtime.
- **Atomic import.** The Operator checks every wallet of the file before saving, and saves them in a single database transaction.

## Evolution

- A new encryption scheme is added by registering it under a new identifier. Existing schemes are never modified, as their parameters are authenticated and replayed when reading.
- A change in the structure of the envelope or the payload increments `formatVersion`.

## Using the SDK

```ts
import {
  WalletKeyFileBuilder,
  WalletKeyFileService,
  ExportedWalletMapper,
} from '@cmts-dev/carmentis-sdk-core';

const service = new WalletKeyFileService();

// Export
const payload = new WalletKeyFileBuilder()
  .addWallet({
    name: 'my-wallet',
    privateKey: ExportedWalletMapper.seedKey(schemeId, seed),
    actorPassphrase,
    connectivity: {
      networkName: 'testnet',
      nodeEndpoint: 'https://ares.testnet.carmentis.io',
      indexerEndpoint: 'https://indexer.testnet.carmentis.io',
    },
  })
  .build();
const bytes: Uint8Array = await service.export(payload, password);

// Import: throws if the password is wrong or the file is altered
const { wallets } = await service.import(bytes, password);
```

`ExportedWalletMapper.toPrivateSignatureKey(wallet.privateKey)` converts an exported key into an SDK signature key.
