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

In our initial setup for the Carmentis overview, we assume that the user possesses their own [Wallet](./concepts/wallet), which is pivotal 
for interacting with the protocol. This wallet not only serves as a secure digital identity for signing in various 
applications but also plays a crucial role in approving transactions. By leveraging their wallet, users can 
authenticate their identity seamlessly and provide consent for actions, ensuring that each approval is secure and 
verifiable. 

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
