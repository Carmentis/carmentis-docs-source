---
sidebar_position: 3
---

# Install and configure an Operator

## Prerequisites

Before proceeding, ensure you have the following installed:
- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://www.docker.com/get-started/)

## Installation

Clone the repository and navigate to the directory where the `docker-compose.yml` file is located.

## Configuration

Create a `.env` file in the same directory as the `docker-compose.yml` file. This file is used to set environment variables for the application.

| Variable                         | Description                                         | Default Value                    |
|----------------------------------|-----------------------------------------------------|----------------------------------|
| `CARMENTIS_OPERATOR_DATA_URL`    | The URL of the Carmentis Explorer. | `https://themis.carmentis.io`    |
| `CARMENTIS_OPERATOR_NODE_URL`    | The URL of the Carmentis node.                      | `https://mercurius.carmentis.io` |
| `CARMENTIS_OPERATOR_DB_USER`     | The username of the internal database administrator. | `postgres`                       |
| `CARMENTIS_OPERATOR_DB_PASSWORD` | The password of the internal database administrator. | **********                       |
| `CARMENTIS_OPERATOR_DB_HOST`     | The hostname of the internal database.              | `db`                             |
| `CARMENTIS_OPERATOR_DB_PORT`     | The port of the internal database.                  | `5432`                           |
| `CARMENTIS_OPERATOR_DB_DATABASE` | The name of the internal database.                  | `carmentis_operator`             |

## Additional Notes

- The .data/db directory is used to store the application's database files. This directory is created automatically when the application is started.
- The .data/storage directory is used to store the application's storage files, and in particular the signing private key that you should take care to backup. This directory is created automatically when the application is started.
- You can test your own operator with our swagger available on http://www.dev.carmentis.io:8080/
