---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Warm Up

Depending on your technical background, your experience with Carmentis may be different. To match every need, we 
have developed customized scenarios, feel free to explore them as you want.

- **I do not want to install anything**: Perfect! Everything is already accessible online. You only have to [install and configure our
wallet](./wallet.md), a necessary step to create an account. Once installed, go to our warm-up section [below](./warm-up#installation-free-warm-up).

- **I want to install the application locally**: The demonstration application (shown in our installation-free warm-up) can be 
used from anywhere, not necessarily from the server of Carmentis. Go to our warm-up section [below](./warm-up#).




## Installation-Free Warm-Up

### Step 1: Installing and Configuring Your Wallet
To agree on the sending of your message, you will relies on digital signature, authenticating the message your are sending
in the board. Don't worry, in this tutorial and even the others, no signature key pair generation is required, it is
completely transparent for you, thanks to the [wallet of Carmentis](./wallet.md).

The wallet of Carmentis takes the form of an extension in your browser, from which every approval steps is based.
We refer you to the installation guide ([here](./wallet.md#wallet-installation)) to install the wallet in your favorite browser.

Once installed, you have to create your personal account (which is ultimately your signature key pair). Again, we refer
you to the wallet configuration page in the documentation ([here](./wallet.md#wallet-configuration)).
To verify that your account has been successfully created, try to authenticate yourself at login page of Carmentis ([here](https://data.testapps.carmentis.io/workspace/sign-in)).


### Step 2: Visit Our Demonstration Applications

Once your wallet has been installed and configured, you are now ready to interact with our demonstration applications.
Check out our demo applications: 

- Verifiabl.ai [https://app.verifiabl.ai](https://app.verifiabl.ai)
- Filesign : [https://sign.apps.carmentis.io](https://sign.apps.carmentis.io)




## Warm-Up with your Own Application
This tutorial is specifically designed for developers trying to understand *how to develop an application based on Carmentis*.
For this purpose, we have designed a "Hello World" application, whose the  source code and the installation instructions
are accessible on [GitHub](https://github.com/Carmentis/carmentis-app-hello-world), being  easy to install

The goal of this application is to construct a publicly-available messaging board, in which anyone can post a message, 
later being displayed in the public board.


### Step 1: Installing and Configuring Your Wallet
To agree on the sending of your message, you will relies on digital signature, authenticating the message your are sending
in the board. Don't worry, in this tutorial and even the others, no signature key pair generation is required, it is
completely transparent for you, thanks to the [wallet of Carmentis](./wallet.md).

The wallet of Carmentis takes the form of an extension in your browser, from which every approval steps is based.
We refer you to the installation guide ([here](./wallet.md#wallet-installation)) to install the wallet in your favorite browser.

Once installed, you have to create your personal account (which is ultimately your signature key pair). Again, we refer
you to the wallet configuration page in the documentation ([here](./wallet.md#wallet-configuration)).
To verify that your account has been successfully created, try to authenticate yourself at login page of Carmentis ([here](https://data.testapps.carmentis.io/workspace/sign-in)).

### Step 2: Create your application in the Carmentis workspace
To interact with the system of Carmentis (including the already running operator, the blockchain and so on), it is
necessary to declare your application in your [personnal workspace](https://data.testapps.carmentis.io/workspace).
Note that if you are not logged in already, you will be automatically redirected to the login page.

Observe on the left of the workspace page, the "Applications" section as shown below:

![carmentis-workspace](/img/workspace-nav.png)


Create a new application using the `New` button and insert a name of your choice (the name you provide is not relevant).
For simplicity, assume that our application is called "Hello World".
A new row describing your freshly created application should appear.  Click in the Edit field as shown below:


![carmentis-list-applications](/img/list-applications.png)


At this point, your application is declared to Carmentis, but you must specify now *what* Carmentis is supposed to deal with,
namely your data. For the "Hello World" application, three (public) fields have to be declared:
- `Date` of type `string`
- `Sender` of type `string`
- `Message` of type `string`

To declare these three fields, go to the `Fields` section and for each of them, click on `New Field`, enter the name of
the field (**Note: every field's name is case-sensitive**), made it public by clicking on `Public Data` and finalize
using the `Confirm` button. Once all fields have been declared, you should obtain the following (the order of the variables is not relevant):


![carmentis-workspace-application-fields](/img/application-fields.png)


Then, move to the `Messages` section. These messages are used by Carmentis during the approval step by sending this
message directly to the user. These messages allow some flexibility but we voluntarily keep the message simple.
Add a new message by clicking on the `New message` button, put `approvalMessage` as the name of your message, and a message of your choice.
Suppose we have written `Do you agree?`. To learn more about messages, we refer you to the documentation ([here](https://docs.carmentis.io/docs/application/message)).

Finally, click on `Publish` to finalize the declaration of the application. In the `Overview` section is displayed the
ID of your application as well as the version number.

:::note
The ID of your application is set once and never change. Nevertheless, you are still allowed to apply modification
to your application: The publication of an updated application leads to an incrementation of the application's version
number. To use the updated application, only update the version number to match the latest version.
:::

### Step 3: Download, Configure and Run the Hello World Application

:::info Git Requirement
Be sure to have `git` installed in your system to download the repository.
:::

:::info NodeJS and NPM Requirements
This "Hello World" application has been developed using NodeJS that should be installed in your system. The installation
of NodeJS (as well as `npm`) depends on your system in configuration, we refer to the official NodeJS installation page
([here](https://nodejs.org/en/download/package-manager)).
:::

Download our [Github repository](https://github.com/Carmentis/carmentis-app-hello-world) containing all the required
source code following these commands:
```shell
git clone https://github.com/Carmentis/carmentis-app-hello-world.git
cd carmentis-app-hello-world
```
Duplicate the `.env.example` file and
rename the duplicated file as `.env`. Only two variables has to be modified, namely `CARMENTIS_APPLICATION_ID` and 
`CARMENTIS_APPLICATION_VERSION`.

:::note
The `CARMENTIS_APPLICATION_ID` and `CARMENTIS_APPLICATION_VERSION` values are displayed in your workspace
([here](https://data.testapps.carmentis.io/workspace/applications)) in your application under the `Overview` section.
:::


Launching the NodeJS web server (which is our application) is done with the following command:

```shell
nmp install && node app.mjs
```
You can observe that everything works by looking at the address specified in the `.env` file (by default, it is `http://localhost:3000`).
Once in your browser, observe the "Operator" and "Wallet" notifications, which should be **green** as shown below:

![all-checks.png](/img/all-checks.png)


At this step, you are now ready to interact with our Hello-World application, starting at the default web page consisting of a form block and a list of approved messages.
In the form, one enters a name (which is not necessarily tied to your real identity) and a message of its choice.

By clicking on the submit button, an approval popup will show up to ask you to approve your message.
Following the instruction, the page will be refreshed automatically with your message being displayed.
Why not observing your message in the blockchain using the [blochain explorer)](https://data.testapps.carmentis.io/explorer)?




## Warm-Up with your Own Operator

In this tutorial, your goal is to run locally the "Hello World" application, this time 
connected to your *own* operator. 
:::info 
This tutorial assumes you have already launched your application. If not, please see our tutorial to [launch your own application](./warm-up.md#warm-up-with-your-own-application)
to learn how to configure and launch the Hello-World application.
:::


### Step 1: Download, Configure and Run the Operator
:::danger ERROR
It remains to solve the  `unable to load 'key.json' file` error properly.
:::

:::info Docker and Docker-Compose Requirement
To run an operator, be sure to have [Docker](https://docs.docker.com/engine/install/) and [Docker-Compose](https://docs.docker.com/compose/install/)
installed in your system. Docker is a crucial technical layer to made the installation of our components easy.
:::

:::info Git Requirement
Be sure to have `git` installed in your system to download the repository.
:::

First, download the repository containing our `docker-compose.yml` to run the operator as well as
our example environment variables file `.env.example`. Duplicate the example configuration file 
and add a valid `IPINFO` token to your `.env` file and finally run the operator using docker.

The commands to perform all these steps are given below (be sure to have your `IPINFO` variable assigned before to execute
the second part of the command):
```shell
IPINFO=<your ipinfo token>

git clone https://github.com/Carmentis/carmentis-operator-docker.git
cd carmentis-operator-docker
cp .env.example .env
echo "CARMENTIS_OPERATOR_IPINFO_TOKEN = $IPINFO" >> .env
docker compose up
```


### Step 2: Configure and Run the Application
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


## Warm-Up with your Own Blockchain  
In this tutorial, you will learn how to deploy a node contributing to the network of Carmentis.

:::info
This tutorial assumes that you have an application and an operator running in your own system or infrastructure.
If not, please see our tutorials to [launch your own application](./warm-up.md#warm-up-with-your-own-application) 
and to [launch your own operator](./warm-up.md#warm-up-with-your-own-operator).
:::


### Step 1: Get Your Private Validator Key

<div class="coming-soon"></div>


### Step 2: Download, Configure and Run Your Node

<Tabs>
    <TabItem value="Linux">
```shell
git clone https://github.com/Carmentis/carmentis-node-docker.git
cd carmentis-node-docker
```
    </TabItem>
</Tabs>

Then, Copy your private key in the `priv_validator_key.json` file at the root of the project and run :
```shell
chmod u+x ./scripts/carmentis.sh
./scripts/carmentis.sh start:themis
```

