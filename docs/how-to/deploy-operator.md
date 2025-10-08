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

### Step 1: Set up operator configuration
The first step is to create the configuration files for the operator, composed of the following files:
- `config.toml` describing the operator configuration.
- `docker-compose.yml` describing the deployed architecture.
- `.env` describing necessary environment variables used by the `docker-compose.yml` file.
- `Caddyfile` describing the Caddy configuration (optional if not using Caddy).

**Create the operator configuration file `config.toml`:** The operator requires the configuration file `config.toml` to 
be present, otherwise the operator will not start. 

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
    

    **Create the `.env` file:** 
    <RemoteCodeBlock url="https://raw.githubusercontent.com/Carmentis/architectures/refs/heads/main/operator/.env.example" title=".env" language="text" />


    **Create the `Caddyfile` file:** 

    <RemoteCodeBlock url="https://raw.githubusercontent.com/Carmentis/architectures/refs/heads/main/operator/Caddyfile" title="Caddyfile" language="caddy" />




  </TabItem>
  <TabItem value="without-caddy" label="Without caddy" default>
    You only need to create the `docker-compose.yml` file below:
    <RemoteCodeBlock url="https://raw.githubusercontent.com/Carmentis/architectures/refs/heads/main/operator/docker-compose-without-caddy.yml" title="docker-compose.yml" language="yml" />


  </TabItem>
</Tabs>


### Step 2: Launch your operator
To launch the operator, run the following command:
```shell
docker compose up -d
```
Once launched, the operator can be accessed at `operator-front-domain-name` in your browser.
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


The registration also requires a **public key**, be sure to **provide the public key of
your wallet**. Once an account associated with your
public key is registered, you can now log in on the operator.

### Step 4: Create your first organization and application

#### Step 1: Create your first organization
When launched for the first time, the operator displays a registration page to create your first organization.
Click on the "Create organization" button to create your first organization.

#### Step 2: Create the token account for your organization

To create the token account for your organisation, copy the *tagged* public key of your organisation and 
paste the key and number of desired tokens at the <DynamicLink target="exchange" env="beta"/>.
Proceed to the payment. Once paid, tokens will be credited to your token account associated to the public key
of your organization.


#### Step 3: Publish your organization
Once your token account has been created and associated with the public key of your organization, click on the publish 
button to declare your organization on chain. The publication can take few seconds.

#### Step 4: Create, edit and publish your application
Once your organization has been published, you can access the list of applications inside your organization.
Click on the application creation button and provide a name for your application. Then, click on publish to publish
your application.


#### Step 5: Create your API Key
The API key creation is done by accessing an application. Recall that an API key is always associated with an application.
For this reason, we do not allow the creation of an API key outside the application page. To create an API key, provide
a name for the key and an expiration date. Then, copy the created API key and paste the key on your environment to 
allow your server to contact the operator in order to perform an action.


## Most frequent actions

### Create an organisation
![operator-organisations](/img/operator-organisations.png)

To create an organisation, go to the "Organisations" section and click on "Create organisation". Provide the name
of your organisation and click on "Create".

### Manage an organisation
![](/img/operator-organisation.png)

**Edit an organisation:** To edit the organisation name, city, country, and website, update the relevant fields with the new information.
Once you've made the necessary changes, be sure to save your updates to ensure the new details are reflected in your operator.

**Publish an organisation:** To publish your organisation on chain, click on the "Publish" button.
Once published, "Virtual blockchain ID" field will be filled. You can now see your organisation on the explorer.

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
along with the privileges you want to assign (Visit our [Share my public key](./wallet-usage.md#share-my-public-key) to show how to share
your public key). This setup allows you to control each user's access level,
ensuring they have the appropriate permissions for their role in the operator.


**Remove user from the operator:** To remove an administrator from your operator, go to the **Organization** section and select the **Users** tab.
Locate the administrator you wish to remove, and find the deletion button. Click this deletion button to remove the
administrator from your organisation.

:::note
An organisation should always have an administrator, so the last administrator cannot remove himself from the organisation.
:::

### Manage members of an organisation
![](/img/operator-members.png)


**Add existing user in organisation:** To add an existing user in your organisation, click on "Add user" and select
the user to add.

:::info
You cannot create a user directly from the members page of your organisation. To create a user, your have
to move on the users page.
:::


**Remove a user from organisation:** To remove a user from your organisation, you can click on the "Delete" icon.
:::info
Removing a user from the organisation do not delete the user.
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


## Troubleshooting

:::info Operator requests end in 404
In development, if the request
ends in 404, ensure that the operator listens at the right port by checking the logs.
Indeed, when starting the operator, if the specified port is not available, the operator attempts to listen on another free port.
:::
