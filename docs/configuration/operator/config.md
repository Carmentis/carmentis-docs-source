---
title: config.toml
description: Description of the TOML configuration file for the operator.
---

## operator


### node_url

URL of the node to interact with the blockchain.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### port

Used port where the operator listens

| Property | Value |
|----------|-------|
| Type | `number` |
| Required | No |
| Default | `3000` |

## operator.workspace

## operator.workspace.jwt

### secret

JWT secret used to authenticate users when interacting with the Workspace API.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | - |

### tokenValidity

Validity of the JWT secret

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `8h` |

## operator.workspace.graphql

### debug

Enable graphql debug mode.

| Property | Value |
|----------|-------|
| Type | `boolean` |
| Required | No |
| Default | `true` |

## operator.swagger

### path

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `swagger` |

## operator.cors

### origin

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `*` |

### methods

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `GET,POST,PUT,DELETE,OPTIONS` |

## operator.database

## operator.database.encryption

### algorithm

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `chacha20-poly1305` |

### iv_length

| Property | Value |
|----------|-------|
| Type | `number` |
| Required | No |
| Default | `12` |

### encryption_key

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | - |

### allow_encryption_key_generation

| Property | Value |
|----------|-------|
| Type | `boolean` |
| Required | No |
| Default | `true` |

## operator.database.postgresql

### user

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### password

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### database

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### url

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### port

| Property | Value |
|----------|-------|
| Type | `number` |
| Required | Yes |
| Default | - |

## operator.database.mysql

### user

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### password

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### database

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### url

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### port

| Property | Value |
|----------|-------|
| Type | `number` |
| Required | Yes |
| Default | - |

## operator.database.sqlite

### database

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

## operator.protocols

## operator.protocols.wap

### version

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `v0` |

## operator.paths

### home

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `/home/runner/work/carmentis-operator/carmentis-operator/operator` |

### init_token

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `admin-token.txt` |

### db_encryption_key

Path where database encryption key is stored.

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `db-encryption-key.txt` |

### jwt_secret

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `jwt-secret.txt` |

