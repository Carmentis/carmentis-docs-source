---
sidebar_position: 1
---
# Getting started

## Prerequisites
To develop your application, you have some pre-requisites to follow:
- A configured, deployed and running operator.
- A valid, enabled API key created from the operator (of the form `cmts_...`);


## Development workflow
Developing an application in the Carmentis ecosystem is simple: interacting with the Carmentis
chain is as simple as calling the API of the operator. The API is documented in swagger of your operator 
at `<operator-domain-name>/swagger` or the [already accessible Carmentis operator](https://operator.testnet.carmentis.io/swagger).

:::warning An operator is personal
The operator is personal to an enterprise: never share the usage of your operator in production with another enterprise.
:::
