---
title: Hello World
description: Hello World demo application to demonstrate the usage of the Carmentis Operator's API.
sidebar_position: 1
---

# Hello World

This is a simple demo application, easy to install, to ensure that your operator is working.
Be sure to have docker installed on your system.

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
