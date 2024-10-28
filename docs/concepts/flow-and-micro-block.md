# Flow and micro block

In our system, the concepts of flow and micro-block organize and record sequences of related interactions within the blockchain structure.

![flow](/img/flow-micro-block..png)

A **flow** represents a micro-chain, with each interaction in the flow documented as a micro-block. Conceptually, a flow is a sequence of related events or interactions. For example, consider a file-sharing scenario: the sharing begins when a sender initiates the transfer, and this initial event is captured as a single micro-block. This block initiates a new flow (or micro-chain) representing the file-sharing process. Subsequently, each time the file is accessed, a new micro-block is added, further extending the flow and reflecting each access event.

Each **micro-block** serves as a logical unit within the flow, recording individual events. However, for storage 
and anchoring purposes, micro-blocks are physically contained within **master blocks**. These master blocks 
are anchored on the blockchain’s primary chain, referred to as the master chain. Each master block 
can house one or more micro-blocks, with each micro-block either initiating a new flow or extending an existing one. 
This architecture allows flows to capture detailed interaction histories within a streamlined blockchain structure, enhancing traceability and transparency.