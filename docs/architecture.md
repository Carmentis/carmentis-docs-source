---
sidebar_position: 2
---

# Carmentis Architecture
Carmentis is a network that allows operators to make secure and private digital proofs 
for their end-users and store them in a resilient transversal blockchain.  As a result, the network of Carmentis relies 
on several entities. 

![schema-carmentis.png](/img/workflow.svg)

## Involved Entities

### Carmentis Blockchain
Being at the heart of Carmentis, the blockchain constitutes the root of all the trust. Virtually, the blockchain
constitutes the database in which all the transactions are stored.

:::info Master and Micro Chains
For technical reasons, Carmentis operates in the blockchain at two different levels: On a hand, every transaction is 
stored in a *dedicated* chain called the Micro-Chain. On the other hand, the Master-Chain stores the Micro-chains.
:::

:::info Themis
**Themis** is the name of our mainnet and is the first network that will be launched on the Carmentis platform.

Its architecture will be released in Q1 2024 as a centralized Saas (Software as a Service) and we are currently working hard to make it a decentralized network in the future (see our [roadmap](/docs/roadmap)).
:::

(When Alice wants to sign a contract with Bob through an operator, the operator will create and use a microchain as a dedicated blockchain to store the proof of the signature.)




### Operator Server
The operator server is a service provider (like an invoicing service, a contract signing service, etc.) 
who wants to offer a Carmentis service to its customers. It constitutes the final step before observing the transaction
being inserted in the blockchain.

An Operator, in the [Carmentis](https://carmentis.io) environment, is a service that manages signatures and encrypted calls to the Carmentis network.
The Operator is hosted by a operator who wants to offer a Carmentis service to its customers.


![schema-carmentis.png](/img/schema-carmentis.png)

:::info Operator Server
While Carmentis provides an already running operator server, you are allowed to run your own operator server.
:::


### Application

An application is  the services that are offered to the end-users. They are proposed, hosted and provided 
by application providers and are independent of Carmentis. For a better understanding, we encourage you to
play with our already running application examples [here](./examples.md). 

:::info Application and Client SDK
Carmentis provides a Software Development Kit (SDK) to help you on the development of your application. 
See our [API documentation](/docs/category/api-documentation) for more details.
:::

### Wallet
The wallet constitutes your identity in Carmentis. Indeed, the main interest of a wallet is to store
a private signature key used to authenticate data. Carmentis provides its own wallet, taking the form of either a browser
extension or a mobile application.

### End-User Front
The front sent to the end-user should perform critical actions (such as displaying a QR code) but also interact with your
application back end. 



### Oracles

### Validator node
### Replicator node

### Token + Token Economy

### Proof