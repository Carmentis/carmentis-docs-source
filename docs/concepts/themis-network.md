# Themis network (Testnet)

The currently deployed Testnet in Carmentis is called **Themis**. This network is composed of two types of nodes: 
Replication nodes and validator nodes. A *replication node* receives an approved event from the 
[operator](./operator), taking the form of a micro-block, later being anchored in the chain.
A *validation node* follows the same specification of the replication node, and is also in charge to validate the 
micro blocks, create the master blocks and anchor them in the blockchain.

The Carmentis network is composed of three validator nodes:

|Validator name|Validator domain|Validator IPv4| Public key                                     |
|---|---|---|------------------------------------------------|
|**Aphrodite**|`aphrodite.carmentis.io`| `148.113.194.97` | `ircknIP9z3vVHF1J9PmW/Z6cyFoLIVxJ1HibuK2DtgU=` |
|**Apollo**|`apollo.carmentis.io`| `57.128.159.173` | `XJMIspPDnlyo55RhN6X99tpi3vE2V93R+CUBfDirWJ8=`                                               |
|**Ares**|`ares.carmentis.io`| `54.36.209.141` |`2O1nNS8Y1MZBWBBoF9w9wyMs7NVQZp6g56wfim6N7eU=`|

To check the liveness of `Aphrodite`, go to 
the following address [http://aphrodite.carmentis.io:26657/status](http://aphrodite.carmentis.io:26657/status).
The URL is the same for `Apollo` and `Ares` validators.

## Static set of validators setup
Currently, the set of validators is static. The list of validators is defined
in the genesis block of Themis, accessible at `http://ares.carmentis.io:26657/genesis` and can be obtained
below:
```shell live
wget http://ares.carmentis.io:26657/genesis
```

## Replication nodes
In addition to the three existing validators, we have set up a replication node available at 
[https://node.testapps.carmentis.io](https://node.testapps.carmentis.io). Be aware that this replication
node is **optional**: We provide all the necessary to let you launch your own node replication node. See the
[dedicated page](../how-to/deploy-node) for more details.