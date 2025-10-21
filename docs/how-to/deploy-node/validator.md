---
sidebar_position: 1
aliases:
  - /how-to/deploy-node
---

import {RemoteCodeBlock} from '@site/src/components/RemoteFile';
import {DynamicLink} from '@site/src/components/DynamicLink';
import {HighlightedToml} from '@site/src/components/HighlightToml';
import {StatusMessage} from '@site/src/components/StatusMessage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Deploy your validator node

In this page, we introduce instructions to deploy your Carmentis node.
Whatever the manner you choose, the deployment is organized in two steps: **(1) setup
a node configuration and (2) launch the node based on the provided configuration.**

:::info Difference between replicator and validator
A replicator node can be launched with a minimal configuration. Validator nodes, however,
are expected to run both a *node* and an *operator*. For more convenience, we provide two distinct
documentation pages:
- Follow this link to deploy a [replicator node](/how-to/deploy-node/replicator)
- Follow this link to deploy a [validator node](/how-to/deploy-node/validator)
:::

## Prerequisites
- For *replicator nodes*, a laptop is enough even more when testing the network. In production, we recommend a server with at least 2 cores and 4GB of RAM.
- For *validator nodes*, we recommend a server with at least 2 cores and 4GB of RAM. The server should be externally accessible with a public IP address and 
a *domain name* (e.g., `node.your-domain-name`) pointing to your server. We do not assume the server to handle TLS as we use a reverse proxy server (like Caddy) to handle TLS while it is not mandatory.

## Set up node configuration

### Docker installation
Docker is intensively used in our procedure to install, configure and run components.
Follow the instructions on the [official Docker documentation](https://docs.docker.com/engine/install/) to install Docker.
To check your installation, run `docker run --rm hello-world`. 

:::warning Docker compose binary name
Be careful, old docker versions are using `docker-compose` name.
:::

### Set up node configuration using CLI
We provide a CLI to set up the configuration quickly.

#### Step 1: Install npm and the CLI
The first step is to install the node package manager ([npm](https://npmjs.com)).
```shell
sudo apt update && sudo apt upgrade -y && sudo apt install npm && sudo npm i -g @cmts-dev/carmentis-cli
```

#### Step 2: Init the CLI
Before to proceed to the generation, you have to initialize the CLI, notably by importing the reference networks:
```shell
cmts networks import
```
You can list the loaded networks using the `cmts networks list` command.

#### Step 3: Generate the config
To generate the configuration of your node, execute the following command and answer to the response interactively
(replace the `$PATH_TO_GENERATE_CONFIG` with the path where the configuration is generated):
```shell
cmts node init-config --home $PATH_TO_GENERATE_CONFIG
```

#### Step 4: Run the node
To run the node, execute the following command (replace the `$PATH_TO_GENERATE_CONFIG` with the path where the configuration has been generated):
```shell
cd $PATH_TO_GENERATE_CONFIG && docker compose up -d
```

## Launch the node
By running the following command, the node will be launched.
```shell
docker compose up -d
```

## Next steps

### Checking node status
To check if the node status is alive, you can proceed to the domain name associated where the node is deployed.
A list of endpoints should be displayed. Check one of our nodes, for example, at [https://ares.testnet.carmentis.io](https://ares.testnet.carmentis.io).
Then, click on the `status` endpoint to check the node status and search for the `is_catching_up` and `latest_block_height` fields.
If the value of `is_catching_up` is `true`, the node is still catching up with the blockchain.
If the value is `false` and `latest_block_height` is defined, the node is up, synchronized and running.

### Access to the logs
To check the logs of the node, you can use docker using the `docker compose logs -f` command.

### Stop the node
To stop the node, run the following command:
```shell
docker compose down
```

### Reset the node from scratch
To reset the node from scratch (like a fresh node), you can use the following command:
```shell
# down the ABCI and CometBFT containers
docker compose down node-abci node-cometbft

# clear the local data (be careful, this command will delete all the data, requiring a new synchronization)
cometbft unsafe-reset-all --home ./cometbft && rm -Rf abci 

# restart the node
docker compose up -d
```
### Update the CLI
To keep your CLI up-to-date, execute the following method:
```shell
npm update -g @cmts-dev/carmentis-cli
```

## Security considerations
Based on the CometBFT documentation, for security reasons, the [port](/configuration/node/abci/config#port) (26658 by default) 
of the ABCI server handling CometBFT requests **SHOULD NEVER** be exposed (except for the CometBFT server).


## Troubleshooting

<details>
    <summary>Docker not permitted</summary>
    
    In a fresh install of Docker, you might be unable to execute the `docker run hello-world` command.
    To solve this issue, we highly recommend you to follow the [official Docker documentation for post-installations](https://docs.docker.com/engine/install/linux-postinstall/).
    For more convinience, you can run the following commands but remember to check the official Docker documentation:

    ```shell
    sudo groupadd docker
    sudo usermod -aG docker $USER
    newgrp docker
    docker run --rm hello-world
    ```
    
</details>

<details>
    <summary>The `docker-compose` command is not found</summary>

    Have you tried `docker compose`?
</details>

<details>
    <summary>The `sudo` command is not found</summary>

    The `sudo` command does not exist when logged as root.
    Either log in as a regular user to execute the commands or  adapt the command by removing the `sudo`.
</details>


<details>
    <summary>The `curl` and/or `jq` commands are not found</summary>

    Ensure that you have installed `curl` and `jq` on your system using the following command:
    
```shell
sudo apt install curl jq        
```
</details>


