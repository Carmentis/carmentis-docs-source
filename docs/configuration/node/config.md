## genesis

## genesis.private_key

### sk

The private key string used at genesis (optional if using env or path)

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | - |

### path

Filesystem path to the private key file for genesis

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | - |

### env

Environment variable name containing the private key for genesis

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | - |

## genesis_snapshot

### path

Filesystem path to the genesis snapshot file

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | - |

### rpc_endpoint

RPC endpoint used to retrieve or verify the genesis snapshot

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | - |

## snapshots

### snapshot_block_period

Number of blocks between taking snapshots (default: 1)

| Property | Value |
|----------|-------|
| Type | `number` |
| Required | No |
| Default | `1` |

### block_history_before_snapshot

Number of previous blocks to include before the snapshot block (default: 0)

| Property | Value |
|----------|-------|
| Type | `number` |
| Required | No |
| Default | `0` |

### max_snapshots

Maximum number of snapshots to keep before pruning (default: 3)

| Property | Value |
|----------|-------|
| Type | `number` |
| Required | No |
| Default | `3` |

## cometbft

### exposed_rpc_endpoint

Publicly exposed RPC endpoint for CometBFT

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

## abci

## abci.grpc

### port

Port number for the ABCI gRPC server

| Property | Value |
|----------|-------|
| Type | `number` |
| Required | No |
| Default | - |

## abci.query

## abci.query.rest

### port

Port number for the REST API used for ABCI queries

| Property | Value |
|----------|-------|
| Type | `number` |
| Required | No |
| Default | - |

## paths

### cometbft_home

Base directory for CometBFT-related data

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### storage

Root directory for node storage (snapshots, DB, microblocks)

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | Yes |
| Default | - |

### storage_relative_snapshots_folder

Relative path under storage for storing snapshots

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `snapshots` |

### storage_relative_db_folder

Relative path under storage for the main database

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `db` |

### storage_relative_microblocks_folder

Relative path under storage for microblock data

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `microblocks` |

### storage_relative_genesis_snapshot_file

Relative path under storage for the genesis snapshot file

| Property | Value |
|----------|-------|
| Type | `string` |
| Required | No |
| Default | `genesis_snapshot.json` |

