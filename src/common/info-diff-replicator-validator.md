:::info Difference between replicator and validator
A replicator node can be launched with a minimal configuration by running only a *node*. 
Validator nodes, however, are expected to run both a *node* and an *operator*. In theory, we encourage to install
a node and an operator in *distinct* servers to improve security and modularity. In practice, 
since we are using Docker, both node and operator can be installed on the same server, this
configuration is called *validator* set up.
For more convenience, we provide two distinct documentation pages:
- Follow this link to deploy a [replicator node](/how-to/deploy-node/replicator)
- Follow this link to deploy a [validator node](/how-to/deploy-node/validator)
:::
