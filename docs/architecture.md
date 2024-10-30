---
sidebar_position: 2
---

# Overview of Carmentis
Carmentis is a protocol designed to provide secure, transparent, and privacy-preserving approvals for blockchain-based 
actions. To introduce the components of Carmentis, we’ll walk through what happens each time a user approves an action, 
guiding you step-by-step and introducing each party involved. For a more detailed explanation of a component, we refer
you to the [Concepts](./category/concepts) page.

![schema-carmentis.png](/img/workflow.svg)

### Step 0: Initial setup


### Step 1: Event approval initiation
The first interaction in an event approval within the Carmentis protocol begins with the end-user, who initiates the 
approval process through the front-end of a web application. Here, the user confirms their intent to approve an action, 
triggering the creation of an approval request. This request is then securely transmitted from the front-end interface 
to the back-end server. Once the transaction reaches the server, it contains all necessary information for the protocol 
to begin processing the approval. 

Note that a transaction is a block of data containing *only* information related to the running action.
In Carmentis, a block of data associated with a single event is called a [Micro Block](./concepts/flow-and-micro-block).

### Step 2: Transaction forwarding
In the second step of the approval process, the back-end server forwards the micro block to a so-called [Operator](./concepts/operator) server. 
The [Operator](./concepts/operator) server is responsible for verifying the data provided in the micro block, ensuring it meets all necessary 
requirements before it can proceed. This verification step is essential for maintaining the integrity and security of 
the event approval process, as the [Operator](./concepts/operator)  server acts as a gatekeeper, confirming the validity with respect to constraints 
from the [Application definition](./concepts/application) defined on the [Workspace](./concepts/workspace).

### Step 3: Transaction approval
In the third step, the operator signs the (hash of the) micro block, confirming its validity according to the [Application definition](./concepts/application)
This signature confirms that the transaction complies with the [Application definition](./concepts/application) and aligns with the current 
blockchain state. By signing, the [Operator](./concepts/operator) assures that the data is accurate and meets protocol standards, creating a 
trusted validation that will be securely anchored in the blockchain in subsequent steps.

### Step 4: Wallet approval

In the fourth step, the user signs the operator’s approval using their [Wallet](./concepts/wallet), confirming their 
consent. This personal signature finalizes the approval, ensuring it reflects the user’s authenticated intent within the protocol.

### Step 5: Anchor on the blockchain

In the fifth step, the [Operator](./concepts/operator) sends the micro block—approved by both the user (via their [Wallet](./concepts/wallet)) and the [Operator](./concepts/operator)—to 
a node within the Carmentis network. Once received, this [Micro block](./concepts/flow-and-micro-block) is anchored in the blockchain. Within the 
Carmentis protocol, the blockchain consists of [Master blocks](./concepts/flow-and-micro-block), each containing one or more [Micro blocks](./concepts/flow-and-micro-block). This structure 
ensures that individual approved actions are securely recorded within larger, immutable [Master block](./concepts/flow-and-micro-block), enhancing
traceability.


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



### Oracle
An oracle is a service provider, executing an action and authenticating the result. For example, the email verification
is built using an oracle.

### Carmentis blockchain network
The network of nodes maintaining the ledger consists of numerous nodes. A node comes in two flavor: A *replication node*, being
a server listening the ledger and updating the blockchain when a new block is approved, and a *validation node* doing the same
as a replication node but also verifying the consistency of a block waiting for approval. 

### Token 
A token is a valuable object allowing you to use the plate-form of Carmentis, more precisely the blockchain
in which Carmentis is based.  

### Proof
In the context of Carmentis, a proof allows you to prove to anyone that you hold knowledge, without
revealing any information about this knowledge. 