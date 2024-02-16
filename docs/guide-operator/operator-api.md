---
sidebar_position: 5
---

# Operator's API

Operator's API is a set of methods that allow you to interact with the Operator about the microblockchains you manage through the Carmentis network.

## Specification

### `prepareUserApproval` method

The `prepareUserApproval` method is used to prepare the user approval data. It is called by your application when a user has to approve a record.
It will return the microblock an URL to the Carmentis signature page where the user will be able to approve the record.

### OpenAPI Specification

A swagger is currently available at the following address: [http://www.dev.carmentis.io:8080/](http://www.dev.carmentis.io:8080/)

### Libraries

We provide a set of libraries to interact with the Operator's API in several languages :
- [NodeJS](https://github.com/Carmentis/carmentis-sdk-nodejs)
- [PHP](https://github.com/Carmentis/carmentis-sdk-php)
