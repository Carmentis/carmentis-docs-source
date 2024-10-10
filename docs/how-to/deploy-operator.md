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

Then run the application using the following command (see [here](./warm-up.md#step-3-download-and-configure-and-run-the-hello-world-application)):
```shell
nmp install && node app.mjs
```


----
## Prerequisites

Before proceeding, ensure you have the following installed:
- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://www.docker.com/get-started/)

## Installation

Clone the repository and navigate to the directory where the `docker-compose.yml` file is located.

```bash
git clone https://github.com/Carmentis/carmentis-operator-docker.git
cd carmentis-operator-docker
```

Or if you prefer to download the repository as a zip file, you can do so by clicking [here](https://github.com/Carmentis/carmentis-operator-docker/archive/refs/heads/main.zip).

## Configuration

Create a `.env` file in the same directory as the `docker-compose.yml` file if you want to change the default settings. This file is used to set environment variables for the application.

| Variable                         | Description                                         | Default Value                     |
|----------------------------------|-----------------------------------------------------|-----------------------------------|
| `CARMENTIS_OPERATOR_DATA_URL`    | The URL of the Carmentis Explorer. | `https://testnet.carmentiscan.io` |
| `CARMENTIS_OPERATOR_NODE_URL`    | The URL of the Carmentis node.                      | `https://testnode.carmentis.io`   |
| `CARMENTIS_OPERATOR_NODE_URL`    | The URL of the Carmentis node.                      | `https://testnode.carmentis.io`   |
| `CARMENTIS_OPERATOR_DB_USER`     | The username of the internal database administrator. | `postgres`                        |
| `CARMENTIS_OPERATOR_DB_PASSWORD` | The password of the internal database administrator. | **********                        |
| `CARMENTIS_OPERATOR_DB_HOST`     | The hostname of the internal database.              | `db`                              |
| `CARMENTIS_OPERATOR_DB_PORT`     | The port of the internal database.                  | `5432`                            |
| `CARMENTIS_OPERATOR_DB_DATABASE` | The name of the internal database.                  | `carmentis_operator`              |


## Run the Operator

### Unix Users

- **Starting the Application:** Run `./scripts/operator.sh start` to start the application. This command launches the Operator service in detached mode.

- **Stopping the Application:** Execute `./scripts/operator.sh stop` to stop and remove container instances.

- **Restarting the Application:** Use `./scripts/operator.sh restart` to restart the Operator service.

- **Viewing Logs:** To view the application logs, run `./scripts/operator.sh logs`.

- **Checking the Status:** For the current status of the service, execute `./scripts/operator.sh status`.
- **Upgrading the Application:** To update the application, run `./scripts/operator.sh update`.
- **Resetting the Application:** To reset the application's database, execute `./scripts/operator.sh reset:db`.

## Windows Users

- **Starting the Application:** Run `scripts/operator.cmd start` in the command prompt to start the application.

- **Stopping the Application:** Use `scripts/operator.cmd stop` to stop and remove container instances.

- **Restarting the Application:** To restart the Operator service, execute `scripts/operator.cmd restart`.

- **Viewing Logs:** View the application logs by running `scripts/operator.cmd logs`.

- **Checking the Status:** Check the current status of the service with `scripts/operator.cmd status`.
- **Upgrading the Application:** To update the application, run `scripts/operator.cmd update`.
- **Resetting the Application:** To reset the application's database, execute `scripts/operator.cmd reset:db`.


### Additional Notes

- The .data/db directory is used to store the application's database files. This directory is created automatically when the application is started.
- The .data/storage directory is used to store the application's storage files, and in particular the signing private key that you should take care to backup. This directory is created automatically when the application is started.
- You can test your own operator with our swagger available on http://www.dev.carmentis.io:8080/
