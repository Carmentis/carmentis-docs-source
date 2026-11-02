---
sidebar_position: 0
---

# Glossary

Key terms used throughout the Carmentis documentation, in alphabetical order.

| Term | Definition |
| :--- | :--- |
| **ABCI** | Interface between CometBFT (consensus) and the application that enforces the Carmentis rules. |
| **Account** | A virtual blockchain holding a public key and a CMTS balance. It pays the fees. |
| **Actor** | Named participant in an application ledger (for example "seller" or "notary"), either a wallet or an operator. |
| **Application** | A service declared by an organization, with a name, logo, homepage and description. |
| **Application ledger** | A virtual blockchain carrying one instance of an application, such as a file or a transaction. |
| **API key** | Secret (`cmts...`) created in the Operator admin interface to authenticate requests to its API. |
| **Channel** | Data space of an application ledger, either public or encrypted. |
| **CometBFT** | Byzantine fault-tolerant consensus engine (version 0.38) used by Carmentis nodes. |
| **CMTS** | Native utility token. It pays for anchoring, rewards validators and carries governance. |
| **Crypto-agility** | Ability to add new cryptographic algorithms without breaking existing data, because every key and signature carries its scheme identifier. |
| **Desk** | Desktop application serving as the Carmentis wallet, and used to manage organizations, applications and nodes. |
| **Desk relay** | Server that routes end-to-end encrypted JSON-RPC requests between a website and the user's Desk. |
| **Endorser** | Co-signer of a microblock. |
| **Explorer** | Read-only tool for browsing the chain and producing account and anchoring proofs. |
| **Fingerprint** | Salted hash of data, anchored on chain in place of the data itself. |
| **Gas** | Unit measuring the cost of a microblock, from which the fee is computed (gas × gas price). |
| **Indexer** | Service that indexes the chain, confirms anchorings for the Operator and computes validator rewards. |
| **Microblock** | Block of a virtual blockchain: a header, sections and a signature. The smallest unit that can be anchored. |
| **ML-DSA / ML-KEM** | NIST-standardized post-quantum algorithms for signatures and key encapsulation. |
| **Off-chain data** | Data kept by the application, with only its salted fingerprint anchored on chain. |
| **Operator** | A company's server that prepares, signs, encrypts and broadcasts microblocks. |
| **Organization** | A registered company, created from an account, with a name, city, country and website. |
| **Pepper / salt** | Random values that make it impossible to guess an undisclosed field. |
| **Proof** | Self-contained JSON file that anyone can verify against the public chain. Types are account, microblock anchoring, record authenticity and resolution. |
| **Proof Checker** | Open-source web application for independent verification of proofs. |
| **Replicator** | Node that follows the chain without taking part in consensus. It is the first step towards becoming a validator. |
| **Resolution** | Operation that replaces tagged objects in a JSON with their verified on-chain content, producing a resolution proof. |
| **Resolution link** | Reference to a microblock or section on chain, in the form `cmts://resolve/...`. |
| **SD-JWT VC** | Selective-disclosure verifiable credential format (IETF), adopted by the EUDI ecosystem. |
| **Section** | Typed unit of content in a microblock. |
| **Selective disclosure** | Proving a subset of the data, using a salted Merkle tree, without revealing the rest. |
| **Slashing** | Penalty applied to a validator's staked tokens. |
| **Staking** | Locking CMTS tokens on an object, such as a validator node. |
| **Tag** | Reserved `__name__` property (for example `__link__`, `__digest__`, `__signature__`, `__vp__`) interpreted by the resolver. |
| **Validator** | Node that takes part in consensus. It is declared on chain, approved by governance and must stake CMTS. |
| **Virtual blockchain (VB)** | A chain of microblocks dedicated to one object. Types are protocol, account, validator node, organization, application and application ledger. |
| **Wallet** | A pair of private signing key and seed, either a seed wallet (12-word BIP39 phrase) or a provider wallet (key held by a third party). |
