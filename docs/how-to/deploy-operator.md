---
sidebar_position: 3
---

import {RemoteCodeBlock} from '@site/src/components/RemoteFile';
import {DynamicLink} from '@site/src/components/DynamicLink';


# Deploy your operator

## Deploy using Docker
The recommended approach to deploy your operator is via Docker and Docker-compose. 
We assume that these tools are installed on your system.

### Step 1: Get the Docker-Compose and .env files

The best way to get your ready-to-use `docker-compose.yml` file is to access our architectures repository at [https://github.com/Carmentis/architectures](https://github.com/Carmentis/architectures)
containing the appropriate `docker-compose.yml` files. In the context of this tutorial,
we focus on the `operator` architecture containing all the required pieces to deploy the operator.
Below is shown the docker-compose file you are looking for:


<RemoteCodeBlock url="https://raw.githubusercontent.com/Carmentis/architectures/refs/heads/main/operator/docker-compose.yml" title="docker-compose.yml" language="docker-compose" />


:::info External Postgres database
The `operator` architecture contains an embedded Postgres database. If you have your own database, feel free
to update the `docker-compose` file based on your need.
:::


All variables environments are put in a single .env file. While almost all variables are already defined, some need 
to be filled. Again, a `.env.example` file for the operator is accessible at [https://github.com/Carmentis/architectures](https://github.com/Carmentis/architectures).
Below is shown the `.env.exemple` file:


<RemoteCodeBlock url="https://raw.githubusercontent.com/Carmentis/architectures/refs/heads/main/operator/.env.example" title=".env.example" language="txt" />


:::note Environment file name
Do not forget to rename the file as `.env`!
:::


### Step 2: Launch your operator
Once all environment variables are filled, execute the following command:
```shell
$ ls -a
docker-compose.yml
.env
$ docker-compose up -d
```

## Configure your operator

1. Create the first administrator
2. Create and publish your organization
3. Create and publish your application
4. Create your first API key


### Step 1: Create the first administrator

![operator-setup](/img/operator-setup.png)

Once deployed, the (front of the) operator serves a registration page to create the first administrator.
For security reason, the registration requires **an administrator creation token** accessible either in the logs of the operator
or at the `admin_token.txt` file. In the logs, the token should be displayed as below:
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

### Step 2: Create and edit your organization
1. Create your organization
2. Edit your organization

![operator-organisations](/img/operator-organisations.png)


![](/img/operator-organisation.png)

### Step 3: Create the token account for your organization

To create the token account for your organisation, copy the *tagged* public key of your organisation and 
paste the key and number of desired tokens at the <DynamicLink target="exchange" env="beta"/>.
Proceed to the payment. Once paid, tokens will be credited to your token account associated to the public key
of your organization.


### Step 4: Publish your organization
Once your token account has been created and associated with the public key of your organization, click on the publish 
button to declare your organization on chain. The publication can take few seconds.

### Step 5: Create, edit and publish your application
Once your organization has been published, you can access the list of applications inside your organization.
Click on the application creation button and provide a name for your application. Then, click on publish to publish
your application.


### Step 6: Create your API Key
The API key creation is done by accessing an application. Recall that an API key is always associated with an application.
For this reason, we do not allow the creation of an API key outside the application page. To create an API key, provide
a name for the key and an expiration date. Then, copy the created API key and paste the key on your environment to 
allow your server to contact the operator in order to perform an action.
