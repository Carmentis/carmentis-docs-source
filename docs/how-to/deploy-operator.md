---
sidebar_position: 5
---

# Deploy an operator
An operator is the root of trust in your validation process. Hence, for security reasons, it is **highly recommended**
to run your own operator in your infrastructure. Once installed and deployed, your operator can be used by your
applications by changing the operator's information.


### Download, configure and run the operator

:::info Docker and Docker-Compose Requirement
To run an operator, be sure to have [Docker](https://docs.docker.com/engine/install/) and [Docker-Compose](https://docs.docker.com/compose/install/)
installed in your system. Docker is a crucial technical layer to made the installation of our components easy.
:::

:::info Git Requirement
Be sure to have `git` installed in your system to download the repository.
:::

First, download the repository containing our `docker-compose.yml` to run the operator as well as
our example environment variables file `.env.example`. Duplicate the example configuration file
to get a `.env` file and finally run the operator using docker.

The commands to perform all these steps are given below :
```shell
git clone https://github.com/Carmentis/carmentis-operator-docker.git
cd carmentis-operator-docker
cp .env.example .env
docker compose up
```


### Configure and run the application
The configure your application to use your own operator instead of the operator of Carmentis, update the environment
variables `CARMENTIS_OPERATOR_HOST` AND `CARMENTIS_OPERATOR_PORT` in the `.env` of your *application*.

Using the `.env.example` file, the configuration for your application should be the following:
```text
...
# Operator host and port. This tutorial is based on the already running operating available
# at https://testapps.carmentis.io. Modify only if you want to run your own operator.
// highlight-deleted-start
CARMENTIS_OPERATOR_HOST=https://testapps.carmentis.io
CARMENTIS_OPERATOR_PORT=443
// highlight-deleted-end
// highlight-added-start
CARMENTIS_OPERATOR_HOST=http://localhost
CARMENTIS_OPERATOR_PORT=3005
// highlight-added-end
...
```
Then, restart your application.

