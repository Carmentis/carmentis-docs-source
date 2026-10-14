---
sidebar_position: 3
---
# Anchor Data on Chain

Your back server anchors data on-chain by sending an anchor request to your operator. The operator signs and publishes the data with its wallet, so no user interaction is needed.

:::info API key required
Be sure to have an API key of your operator server. All requests below are authenticated with the `x-api-key` header.
:::

:::note Approval from the user's wallet
Anchoring after an end user approves from their own wallet (`anchorWithWallet`) is currently unavailable and being reworked. Do not build new integrations on it.
:::

## Send the anchor request

```ts
import axios from 'axios';

const operatorUrl = 'https://...';
const apiKey = 'cmts_...';

// we create the body of the anchoring request
const request = {
    // gas price in atomic units
    gasPriceInAtomics: 1000,
    // storage duration, required for the first microblock of a virtual blockchain only
    chainStorageInDays: 3600,
    // put all the data you want to anchor on chain here
    data: {
        message: 'Hello World!',
    },
    // a private channel is encrypted on-chain, a public one is readable by anyone
    channels: [
        { name: 'main', public: false },
    ],
    // the roles involved in the transaction
    actors: [
        { name: 'server' },
    ],
    // all the fields of data go in the main channel...
    channelAssignations: [
        { channelName: 'main', fieldPath: 'this.*' },
    ],
    // ...which the server can read
    actorAssignations: [
        { actorName: 'server', channelName: 'main' },
    ],
    // the actor authoring the microblock
    author: 'server',
};

const response = await axios.post(`${operatorUrl}/api/v1/wallet/anchor`, request, {
    headers: { 'x-api-key': apiKey },
});
const { anchorRequestId } = response.data;
```

The `applicationId` is omitted here because the API key is bound to an application. Otherwise, add it to the request. See [Anchor data on-chain](/build/guides/anchoring/anchor-on-chain) for the meaning of every field.

## Follow the request

Poll the status of the request until it is `anchored` (`cancelled` and `failed` are the other final states):

```ts
const statusResponse = await axios.get(
    `${operatorUrl}/api/v1/anchorRequest/${anchorRequestId}/status`,
    { headers: { 'x-api-key': apiKey } },
);
const { status, virtualBlockchainId, submittedMicroblockHash } = statusResponse.data;
```

To append a microblock to the same virtual blockchain later, send a new request with `virtualBlockchainId` set to the returned value.
