---
sidebar_position: 3
---

import {RemoteCodeBlock} from '@site/src/components/RemoteFile';
import {DynamicLink} from '@site/src/components/DynamicLink';
import {HighlightedToml} from '@site/src/components/HighlightToml';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy your operator

## Set up the operator
The deployment of the operator is done using Docker Compose.

### Prerequisites
To set up your operator, you need to have docker installed on your system.
Please, be sure to have installed docker or follow 
the [official Docker installation guide](https://docs.docker.com/engine/install/).

You also need to have **two DNS entries** pointing on the IP address of your server:
- One for `operator.your-domain-name` pointing to the operator server.
- One for `workspace.your-domain-name` pointing to the workspace (operator's front) server.

### Step 1: Set up operator configuration
The first step is to create the configuration files for the operator composed of the following files:
- `config.toml` describing the operator configuration.
- `docker-compose.yml` describing the deployed architecture.
- `.env` describing necessary environment variables used by the `docker-compose.yml` file.
- `Caddyfile` describing the Caddy configuration (optional if not using Caddy).

You can either create the configuration files manually, or use the <DynamicLink id="cli"/>.


<Tabs>
  <TabItem value="cli" label="Using CLI" default>

    #### Step 1: Install npm and the CLI
    The first step is to install the node package manager ([npm](https://npmjs.com)).
    ```shell
    sudo apt update && sudo apt upgrade -y && sudo apt install npm && sudp npm i -g @cmts-dev/carmentis-cli
    ```
    
    #### Step 2: Init the CLI
    Before to proceed to the generation, you have to initialize the CLI, notably by importing the reference networks:
    ```shell
    cmts networks import
    ```
    You can list the loaded networks using the `cmts networks list` command.
    
    #### Step 3: Generate the config
    To generate the configuration of your operator, execute the following command and answer to the response interactively
    (replace the `$PATH_TO_GENERATE_CONFIG` with the path where the configuration is generated):
    ```shell
    cmts operator init-config --home $PATH_TO_GENERATE_CONFIG
    ```
    
    #### Step 4: Run the operator
    To run the operator, execute the following command (replace the `$PATH_TO_GENERATE_CONFIG` with the path where the configuration has been generated):
    ```shell
    cd $PATH_TO_GENERATE_CONFIG && docker compose up -d
    ```

  </TabItem>
  <TabItem value="manual" label="Manually">

**Create the operator configuration file `config.toml`:** The operator requires the configuration file `config.toml` to
be present, otherwise the operator will not start.

:::note Node URL
In the configuration below, we have used an already deployed node `https://apollo.testnet.carmentis.io` within the Carmentis network.
If you have followed the [node deployment guide](./deploy-node.md) and have already deployed your own node, then feel-free
to replace the node URL with your own node address (e.g., `http://node.your-domain-name:26667` or `https://node.your-domain-name` if
you have set up a TLS-enabled reverse-proxy like [Caddy](https://caddyserver.com)).
:::

<HighlightedToml
highlights={[
{
keyPath: 'operator.node_url',
value: '"https://apollo.testnet.carmentis.io"',
comment: 'The URL of the node the operator connects to.',
},
{
keyPath: 'operator.paths.home',
value: '"/operator"',
comment: 'The home directory path used by the operator.',
},
{
keyPath: 'operator.database.encryption.allow_encryption_key_generation',
value: 'true',
comment: 'Whether to allow automatic generation of encryption keys for the database.',
},
{
keyPath: 'operator.database.postgresql.user',
value: '"user"',
comment: 'Username for connecting to the PostgreSQL database.',
},
{
keyPath: 'operator.database.postgresql.password',
value: '"password"',
comment: 'Password for the PostgreSQL user.',
},
{
keyPath: 'operator.database.postgresql.database',
value: '"database"',
comment: 'Name of the PostgreSQL database.',
},
{
keyPath: 'operator.database.postgresql.url',
value: '"operator-db"',
comment: 'Host or URL of the PostgreSQL service.',
},
{
keyPath: 'operator.database.postgresql.port',
value: '5432',
comment: 'Port used to connect to the PostgreSQL database.',
},
]}
/>



**Create the Docker files:** To deploy the operator, we use Docker Compose.
For security reasons, the operator must be accessed over TLS (HTTPS) in production.
In our architecture, we delegate the handling of TLS to [Caddyserver](https://caddyserver.com).
However, you can also use another reverse proxy or even handle yourself TLS. We let you
with two different deployment options: with Caddy or without Caddy. When Caddy is used,
you have to create the `Caddyfile` file.


In addition to the `docker-compose.yml` file, you have to create the `.env` file.
The `.env` file contains the environment variables used by the `docker-compose.yml` file.
This file can be made optional by inlining the environment variables in the `docker-compose.yml` file.

:::info Postgresql
The operator uses a PostgreSQL database. By default, the operator uses a Docker container to run a PostgreSQL database.
However, you can also use your own PostgreSQL database. In this case, you have to change the `docker-compose.yml` file
accordingly.
:::

<Tabs>
  <TabItem value="with-caddy" label="With caddy" default>

    To set up the operator with Caddy, you have to create the files below.

    **Create the `docker-compose.yml` file:**  
    <RemoteCodeBlock url="https://raw.githubusercontent.com/Carmentis/architectures/refs/heads/main/operator/docker-compose-with-caddy.yml" title="docker-compose.yml" language="yml" />
    

    **Create the `.env` file:** Be sure to correctly adapt the postgres variables according to your environment and to correctly update the domaine name.
    <RemoteCodeBlock url="https://raw.githubusercontent.com/Carmentis/architectures/refs/heads/main/operator/.env.example" title=".env" language="text" />


    **Create the `Caddyfile` file:**  Replace the domain names with yours.

    <RemoteCodeBlock url="https://raw.githubusercontent.com/Carmentis/architectures/refs/heads/main/operator/Caddyfile" title="Caddyfile" language="caddy" />




  </TabItem>
  <TabItem value="without-caddy" label="Without caddy" default>
    You only need to create the `docker-compose.yml` and `.env` files below:
    <RemoteCodeBlock url="https://raw.githubusercontent.com/Carmentis/architectures/refs/heads/main/operator/docker-compose-without-caddy.yml" title="docker-compose.yml" language="yml" />
    <RemoteCodeBlock url="https://raw.githubusercontent.com/Carmentis/architectures/refs/heads/main/operator/.env.example" title=".env" language="text" />


  </TabItem>
</Tabs>
  </TabItem>
</Tabs>



### Step 2: Launch your operator
To launch the operator, run the following command:
```shell
docker compose up -d
```
Once launched, the operator can be accessed at `operator.your-domain-name` in your browser.
In local development, you can access the operator at `localhost:3000` by default. 
To check that the operator is running, you can access the `/api/public/hello` endpoint.


### Step 3: Create the first administrator

Once deployed, the (front of the) operator serves a registration page **to create the first administrator**.
For security reason, the registration requires *an administrator creation token* accessible either in the logs of the operator
or at the `admin_token.txt` file.

![operator-setup](/img/operator-setup.png)

In the logs, the token should be displayed as below:
```txt
[Nest] 697594  - 18/04/2025 13:37:01     LOG [CryptoService] Below is shown the administrator creation token:
-------------------------------------------------------------
Administrator creation token location: [redacted]/admin-token.txt
Administrator creation token: E241C2E4BB9AFD31383D8802847FA69D4D40F7553FA0EF0D09EDE6222AE80E11
--------------------------------------------------------------
```
:::info Accessing first administration token
When using the CLI, you can obtain the first administration token using the following command:
```shell
cmts operator token --home $PATH_WHERE_CONFIG_HAS_BEEN_GENERATED
```
:::


The registration also requires a **public key**, be sure to **provide the public key of
your wallet**. Once an account associated with your
public key is registered, you can now log in on the operator.

### Step 4: Create your first organization
When launched for the first time, the operator displays a registration page to create your first organization.
Click on the "Create organization" button to create your first organization.

:::info Specify organization's private key
When creating an organization, you have the possibility to provide a **private** signature key.
It is useful when you want to load an existing organization from the blockchain.
When no private key is provided, the operator generates a new one.
:::

To create the token account for your organization, copy the public key of your organization and
paste the key and number of desired tokens at the <DynamicLink id="testnet:exchange"/>.
Proceed to the payment. Once paid, tokens will be credited to your token account associated to the public key
of your organization.


Once your token account has been created and associated with the public key of your organization, click on the publish 
button to declare your organization on-chain. The publication can take few seconds.

:::warning Required information
All the fields are required to publish an organization on-chain.
:::

### Step 5: Create your first application

Once your organization has been published, you can access the list of applications inside your organization.
Click on the application creation button and provide a name for your application. Then, click on publish to publish
your application.


The API key creation is done by accessing an application. Recall that an API key is always associated with an application.
For this reason, we do not allow the creation of an API key outside the application page. To create an API key, provide
a name for the key and an expiration date. Then, copy the created API key and paste the key on your environment to 
allow your server to contact the operator to perform an action.

## Troubleshooting

<details>
    <summary>Operator requests end in 404</summary>

In development, if the request
ends in 404, ensure that the operator listens at the right port by checking the logs.
Indeed, when starting the operator, if the specified port is not available, the operator attempts to listen on another free port.
</details> 

<details>
    <summary>The `docker-compose` command is not found</summary>
    
    Have you tried `docker compose` instead of `docker-compose`? You might have an old version of docker.
</details> 


<details>
    <summary>The workspace shows an operator connection error</summary>

When the workspace cannot establish a connection with the operator, it displays an error message.
The problem might come from several issues:
- The operator server is not running.
- The operator server does not listen to the correct port. It might come from an invalid port specification in the
  configuration, from a port conflict (the operator tries another free port), or an invalid docker port mapping.
- The `Caddyfile` is invalid if you have provided twice the same URL for the two servers or an invalid URL.
- The DNS configuration is not updated. You might have to update the DNS configuration to point to the correct IP address.
</details> 



## Most frequent actions

### Create an organization
![operator-organisations](/img/operator-organisations.png)

To create an organization, go to the "Organizations" section and click on "Create organization". Provide the name
of your organization and click on "Create".

:::info Specify organization's private key
When creating an organization, you have the possibility to provide a **private** signature key.
It is useful when you want to load an existing organization from the blockchain.
When no private key is provided, the operator generates a new one.
:::

### Manage an organization
![](/img/operator-organisation.png)

**Edit an organization:** To edit the organization name, city, country, and website, update the relevant fields with the new information.
Once you've made the necessary changes, be sure to save your updates to ensure the new details are reflected in your operator.

**Publish an organization:** To publish your organization on chain, click on the "Publish" button.
Once published, "Virtual blockchain ID" field will be filled. You can now see your organization on the explorer.

:::info
The country code and the city are required for the publication.
:::


### Create an application
![operator-applications](/img/operator-applications.png)
To create an application, navigate to the **Application** section and click on the **New** button.
A popup will prompt you to enter the name of the application you wish to create. After you submit the name,
the application will be marked as pending until you publish it.

### Manage an application
![](/img/operator-application.png)

**Edit an application:** Edit the fields directly and click on save to save the updated fields.


**Publish an application:** Click on the "Publish" button to publish your application on-chain.

### Manage users on the operator
![](/img/operator-users.png)

**Add user on the operator:** To add a user to your operator, go to the **Organization** section in the left sidebar, then select the **Users** tab.
Click on **Add User**, and a form will appear prompting you to enter the public key of the user you wish to add,
along with the privileges you want to assign (Visit our [Share my public key](./get-your-carmentis-wallet#share-my-public-key) to show how to share
your public key). This setup allows you to control each user's access level,
ensuring they have the appropriate permissions for their role in the operator.


**Remove user from the operator:** To remove an administrator from your operator, go to the **Organization** section and select the **Users** tab.
Locate the administrator you wish to remove, and find the deletion button. Click this deletion button to remove the
administrator from your organization.

:::note
An organization should always have an administrator, so the last administrator cannot remove himself from the organization.
:::

### Manage members of an organization
![](/img/operator-members.png)


**Add existing user in organization:** To add an existing user in your organization, click on "Add user" and select
the user to add.

:::info
You cannot create a user directly from the members page of your organization. To create a user, your have
to move on the users page.
:::


**Remove a user from organization:** To remove a user from your organization, you can click on the "Delete" icon.
:::info
Removing a user from the organization do not delete the user.
:::
### Manage API keys
![](/img/operator-application.png)

**Create an API key:** On the application, you can click on the "Generate key" button. Provide a name and the period of
time of validity for the key.

**Delete an API key:** Click on the "Delete" icon to delete the key.

:::warning
All usage logs will be deleted. If you want to disable the key but keep the logs of the key,
prefer to disable the key instead.
:::

### API key usages
![](/img/operator-key.png)

**See API key usages:** We propose an interface to observe the usage of a specific key.

**Disable an API key:** You can enable/disable a key but clicking on the switch button.
:::warning
After being disabled, all requests embedding the disabled key will be rejected.
:::



### Claim a node
When your operator is up and your organization published on-chain, you can claim the possession of a node:
1. Go to the *Nodes* section.
2. Create a new node connection by indicating an alias (local to the operator) and a RPC endpoint. Then, click on create.
3. If the node is not already claimed, drop down the menu on the top-right of the node and click on "Claim node".
4. Check the operator by checking the <DynamicLink id="testnet:explorer"/> under the "Nodes" section.

