---
sidebar_position: 1
---
# Getting started
Before to start developing your application, you need to set up your own operator.

## Deploy your operator
:::info Requirements
To run an operator, be sure to have [Docker](https://docs.docker.com/engine/install/), [Docker-Compose](https://docs.docker.com/compose/install/) and `git`
installed in your system. Docker is a crucial technical layer to make the installation of our components easy.
:::

### Launch the operator
First, you have to deploy your operator. Since two or more servers are required to execute the operator, we 
encourage to visit our [architectures deployment guide](https://github.com/Carmentis/architectures) repository
in which all information about how to launch your operator.

### Add your first administrator

![operator-setup](/img/operator-setup.png)

Once deployed, the (front of the) operator serves a registration page to create the first administrator.
For security reason, the registration requires **an administrator creation token** accessible either in the logs of the operator
or at the `admin_token.txt` file. In the logs, the token should be displayed as below:
```txt
[Nest] 697594  - 18/04/2025 13:37:01     LOG [CryptoService] Below is shown the administrator creation token:
-------------------------------------------------------------
Administrator creation token location: [redacted]/admin-token.txt
Administrator creation token: E241C2E4BB9AFD31383D8802847FA69D4D40F7553FA0EF0D09EDE6222AE80E11
--------------------------------------------------------------
```


The registration also requires a **public key**, be sure to **provide the public key of 
your wallet** (or the public key of the administrator that will add your later). Once an account associated with your
public key is registered, you can now log in on the operator.

### Create your API Key
Once logged, you have to create your API Key to interact with the operator. The key generation is done in *four* steps:
1. Create an organisation (or take an existing one on your operator).
2. Create an application (or take an existing one attached to your organisation)
3. Publish **both** and **in this order** your *organisation* and your *application*.
4. Create your API Key *under your application page* (not the API Keys page listing only existing keys).

All these steps are explained on the [Manage your operator](../deploy-operator.md) page.


:::info Why creating and publishing an organisation and an application?
Recall that when interacting with your operator, data are anchored on the chain.
More than being conceptual, an organisation and an application allow us to bring more structure on the 
data being anchored. For this reason, an API Key is *linked* to an application, itself being *linked* to an organisation.

```
Organisation <- Application <- API Key
```

When you are using an API Key, you implicitly specify which application and hence which organisation you are using.
For this reason, it is *highly recommended* to use **one API key by application**.
:::
