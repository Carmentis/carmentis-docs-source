---
title: Hello World
description: Hello World demo application to demonstrate the usage of the Carmentis Operator's API.
sidebar_position: 1
---

# Hello World

This is a simple demo application, easy to install, to ensure that your operator is working.
Be sure to have docker installed on your system.

## Requirements
### Running operator
The demo application requires a running operator. 
We refer to the [Deploy your operator](../../how-to/deploy-operator) section to learn how to deploy your operator.

### Declared organization
The demo application requires a declared application in your workspace. Again, we refer to the 
[Deploy your operator](../../how-to/deploy-operator) section explaining how to declare your organization.


### Create and declare the 'Hello World' application
The first step is to declare the application in your workspace.
This is done by creating a new application in your workspace and publishing it on-chain.
Once published, generate an API key for this application. 

:::info
The publication is not mandatory to generate an API key. However, if your application is not published, 
any request leading to a publication on-chain will be rejected.
::: 

## Launch the demo application
The demo application is written in [Vue](vuejs.org) and is available on [GitHub](https://github.com/Carmentis/carmentis-demo-hello-world).
The simplest way to launch it is to use the docker image as below:
```shell
docker run --rm -p 3000:80 ghcr.io/carmentis/demo/hello-world
```
Once running, the application will be available on [http://localhost:3000](http://localhost:3000).

## Provide configuration
The demo application expects from you to provide the endpoint of your operator (**the operator, not the workspace!**)
and an API key (of the form `cmts_*`) previously generated in the workspace.
Once provided, the application will display actions to perform and expose the results.
