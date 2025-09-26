---
title: config.toml
description: Description of the TOML configuration file for the operator.
---
## operator

### node_url

URL of the blockchain node used by the operator to anchor information on-chain.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### port

Port where the operator listens for incoming requests.

| Property | Value |
|----------|-------|
| Type | `number` |
| Required | No |
| Default | `3000` |

## operator.workspace

## operator.workspace.jwt

### secret

Secret key used for signing JWT tokens to authenticate users on the Workspace API.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | - |

### tokenValidity

Validity duration of the generated JWT tokens (e.g., '8h').

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `8h` |

## operator.workspace.graphql

### debug

Enable or disable GraphQL debug mode.

| Property | Value |
|----------|-------|
| Type | `boolean` |
| Required | No |
| Default | `true` |

## operator.swagger

### path

Path under which Swagger UI and API docs are served.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `swagger` |

## operator.cors

### origin

Allowed origins for CORS requests (e.g., '*').

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `*` |

### methods

Allowed HTTP methods for CORS requests.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `GET,POST,PUT,DELETE,OPTIONS` |

## operator.database

## operator.database.encryption

### algorithm

Encryption algorithm used to protect sensitive data.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `chacha20-poly1305` |

### iv_length

Length of the initialization vector (IV) for encryption.

| Property | Value |
|----------|-------|
| Type | `number` |
| Required | No |
| Default | `12` |

### encryption_key

Custom encryption key. If omitted and generation is allowed, a key will be generated.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | - |

### allow_encryption_key_generation

Whether the system is allowed to generate an encryption key if none is provided.

| Property | Value |
|----------|-------|
| Type | `boolean` |
| Required | No |
| Default | `true` |

## operator.database.postgresql

### user

PostgreSQL user.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### password

PostgreSQL password.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### database

Name of the PostgreSQL database.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### url

PostgreSQL connection URL.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### port

Port number of the PostgreSQL server.

| Property | Value |
|----------|-------|
| Type | `number` |
| Required | Yes |
| Default | - |

## operator.database.mysql

### user

MySQL user.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### password

MySQL password.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### database

Name of the MySQL database.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### url

MySQL connection URL.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### port

Port number of the MySQL server.

| Property | Value |
|----------|-------|
| Type | `number` |
| Required | Yes |
| Default | - |

## operator.database.sqlite

### database

Path to the SQLite database file (relative to paths.home).

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

## operator.protocols

## operator.protocols.wap

### version

Version of the Wallet Authentication Protocol (WAP) used to obtain wallet information and signatures.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `v0` |

## operator.paths

### home

Base directory for all relative paths.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `/home/runner/work/carmentis-operator/carmentis-operator/operator` |

### init_token

Path to the initialization token file used for first-time setup.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `admin-token.txt` |

### db_encryption_key

Path where the database encryption key is stored.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `db-encryption-key.txt` |

### jwt_secret

Path to the JWT secret file.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `jwt-secret.txt` |

