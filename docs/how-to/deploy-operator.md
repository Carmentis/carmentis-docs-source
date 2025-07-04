---
sidebar_position: 3
---

import {RemoteCodeBlock} from '@site/src/components/RemoteFile';


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