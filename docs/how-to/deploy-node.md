
import {RemoteCodeBlock} from '@site/src/components/RemoteFile';
import {DynamicLink} from '@site/src/components/DynamicLink';


# Deploy your node

In this page, we introduce instructions to deploy your Carmentis node.
Whatever the manner you choose, the deployment is organized in two steps: **(1) setup
a node configuration and (2) launch the node based on the provided configuration.** 

:::warning CometBFT v1
The current version requires CometBFT v1.0.1 or higher.
:::


## Setup node configuration

### Setup node configuration using Setup-Wizard CLI
The *Setup Wizard* is a simple, native-dependencies, python CLI used to simplify the generation of a ready-to-use configuration, available
publicly on our [Github](https://github.com/Carmentis/carmentis-node/blob/main/setup-wizard/setup.py).

:::info CometBFT dependency
The wizard *should* be executed on a system in which the CometBFT CLI is installed.
The installation is straightforward:
```shell
go install github.com/cometbft/cometbft/cmd/cometbft@latest
```
:::



Below is show the help the wizard.
```shell
[nix-shell:~]$ python3 setup-wizard.py --help
usage: setup-wizard.py [-h] --home HOME (--new | --from-peer PEER_ENDPOINT)

CometBFT setup utility for initializing and managing CometBFT configurations

options:
  -h, --help            show this help message and exit
  --home HOME           Home directory for CometBFT configuration
  --new                 Initialize a new CometBFT configuration
  --from-peer PEER_ENDPOINT
                        Create configuration from peer (format: http(s)://host:ip)

```
Note that you can download and execute the wizard in a single command as shown below:
```shell title test
curl https://github.com/Carmentis/carmentis-node/blob/e613c1f91518b75bf2b6701939ad31a99fed0c7a/setup-wizard/setup.py > setup-wizard.py && python3 setup-wizard.py --help
```

#### Create configuration for joining an existing network
Most of the time, you will deploy a node to join an existing network.
Under this setting, the setup wizard is particularly well-suited. 
Assuming an existing node running at `https://node.example.com`, the wizard can generate a
ready-to-be-used configuration as follows: 

```shell title test
python3 setup-wizard.py  --home ~/carmentis-node --from-peer https://node.example.com
```

The resulting configuration at `~/carmentis-node` is consisting of two folders, `~/carmentis-node/config` 
containing the configuration files for your node and 
`~/carmentis-node/data` where all data (including the blockchain state) are stored.

#### Create a new configuration
Creating a new configuration for your node to create a new network is fairly simple: replace the `--from-peer`
option with a `--new` as shown below:
```shell
python3 setup-wizard.py  --home ~/carmentis-node --new
```


:::info Advanced configuration
Generated configuration is ultimately a CometBFT configuration. Feel free to edit the configuration
following the [CometBFT official documentation](https://docs.cometbft.com/v1.0/)!
:::

### Setup node configuration using Setup-Wizard Docker CLI
All the commands introduced above require the installation of both `python` and `cometbft`.
We also provide the setup wizard CLI as a self-contained docker container. The only required tool is `docker`.
To use the setup wizard CLI as a docker container, use the following command:
```shell
[nix-shell:~]$ docker run -v $(pwd)/node-cometbft:/app/config ghcr.io/carmentis/node/setup-wizard --help
usage: setup.py [-h] --home HOME [--node-name NODE_NAME] [--cors-allowed-origins CORS_ALLOWED_ORIGINS] [--rpc-laddr RPC_LADDR] [--p2p-laddr P2P_LADDR] (--new | --from-peer PEER_ENDPOINT)

CometBFT setup utility for initializing and managing CometBFT configurations

options:
  -h, --help            show this help message and exit
  --home HOME           Home directory for CometBFT configuration
  --node-name NODE_NAME
                        Name of the node
  --cors-allowed-origins CORS_ALLOWED_ORIGINS
                        Comma-separated list of CORS allowed origins
  --rpc-laddr RPC_LADDR
                        Address where CometBFT is exposing RPC
  --p2p-laddr P2P_LADDR
                        Address where CometBFT is exposing RPC
  --new                 Initialize a new CometBFT configuration
  --from-peer PEER_ENDPOINT
                        Create configuration from peer (format: http(s)://host:ip)

```

:::info Bind volumes
Since the CLI is executed inside the container, you have to bind a volume between the host and the
container, otherwise the generated configuration cannot be accessed. 
:::


### Setup node configuration directly with CometBFT
As explained, all the tools we provide are wrappers around the CometBFT CLI.
It means that one can use the CometBFT CLI on its own, while it involves navigating through the configuration.
Be sure to have installed the `cometbft` CLI. First, generate the initial configuration which includes the 
private key pair of your node:

```shell
cometbft init --home ./node-cometbft
```

Within the `~/carmentis-node/config/genesis.json` file is described, the initial state of the blockchain.
To join an existing network, you have to contact a running node in this network, at `https://<running-node>/genesis`
which returns a JSON that should be put at the place of your `genesis.json` file.
The `~/carmentis-node/config/config.toml` contains the configuration of your node, in which the `persistent_peer`
line should contain the location of the running node, being of the form `<node-id>@<host>:<port>`. The id of the running node
can be obtained by containing the node at `https://<running-node>/status`.

:::info Speedup node synchronization
Enable the `statesync.enable` parameter to speedup the synchronization of your node.
More information on the [official CometBFT documentation](https://docs.cometbft.com/main/references/config/config.toml#state-synchronization).
:::


## Launch the node

:::warning Docker and Docker-compose
We currently propose to launch a node only using `docker` and  `docker-compose`, be sure to have installed these
tools on your system.
:::


<RemoteCodeBlock url="https://raw.githubusercontent.com/Carmentis/architectures/refs/heads/main/node/.env.example" title=".env.example" language="txt" />
<RemoteCodeBlock url="https://raw.githubusercontent.com/Carmentis/architectures/refs/heads/main/node/docker-compose.yml" title="docker-compose" language="txt" />


By running the following command, the node (consisting of the ABCI server and the CometBFT server) will be launched.
```shell
docker-compose up -d
```