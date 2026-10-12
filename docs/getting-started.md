---
sidebar_position: 2
---

import {DynamicLink} from '@site/src/components/DynamicLink';

# Getting started

How you start with Carmentis depends on what you want to do. Pick the path that sounds like you.

<div class="get-started">
    <a href="#as-a-user" class="role">
        <img class="get-started-image" src="/img/user.png"/>
        <span>I want to use a Carmentis application</span>
    </a>
    <a class="role" href="#as-an-application-developer">
        <img class="get-started-image" src="/img/developer.png"/>
        <span>I want to build an application</span>
    </a>
    <a class="role" href="#as-a-token-holder">
        <img class="get-started-image" src="/img/blockchain.png"/>
        <span>I want to run a node and stake tokens</span>
    </a>
</div>

## As a user

All you need is a wallet. It keeps your credentials and lets you approve actions in applications that use Carmentis.

1. **Install the Carmentis Wallet** from the <DynamicLink id="chrome:wallet" message="Chrome Web Store"/>.
2. **Create your account.** Write down the recovery phrase and keep it somewhere safe: it is the only way to get your wallet back.
3. **Try it out.** The [File Sign demo](/build/tutorials/file-sign) shows how a wallet and an application work together.

## As an application developer

Your application never talks to the blockchain directly. It calls an **operator**, a small server that you run and that publishes your data on-chain for you. Setting this up takes a few steps, and you only do them once.

1. **Install [Carmentis Desk](/use/install-desk).** Desk is the tool you use to manage your wallets. You also need it to log in to your operator's admin interface, because the login relies on your wallet rather than a password.
2. **Create a wallet and publish your organization** from Desk, then create and publish your application.
3. **Deploy an operator.** Follow the [operator guide](/operate/operator) to install and configure it.
4. **Generate an API key** in the operator's admin interface. Your application sends this key with each request.
5. **Start building.** The [developer quickstart](/build/quickstart) shows how to anchor your first data.

If you just want to see what an application looks like first, try the [File Sign demo](/build/tutorials/file-sign).

## As a token holder

Carmentis is secured by the people who run its nodes. By running one, you help keep the network reliable, and you can be rewarded for it.

1. **Install [Carmentis Desk](/use/install-desk)** and create a wallet.
2. **Deploy a replication node.** The [replicator guide](/operate/node/replicator) walks you through it in a few minutes.
3. **Claim your node** from Desk, so that it is linked to your wallet.
4. **Stake tokens** on it. You can then turn it into a [validator node](/operate/node/validator) to earn rewards.
