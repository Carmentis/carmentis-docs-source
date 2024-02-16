---
sidebar_position: 4
---

# What you need to implement on your side

In this section, we will see what you need to implement on your side as an Operator.

## Run an operator server

The first thing you need to do is to run an operator server. The operator server is a server that will be used to interact with the Carmentis network. It will be used to create and manage microblockchains, to sign transactions, and to interact with the Carmentis network.

## Implement your application with the operator server API (via our libraries)

You must implement your application with the operator API. We provide a set of libraries to interact with the Operator's API in several languages (see [Operator API](/docs/guide-operator/operator-api)).

## Endpoint to expose the operator server API

The operator server must expose an API that will be used by the Carmentis network to interact with it. This API will be used to create and manage microblockchains, to sign transactions, and to interact with the Carmentis network.

You must implement an endpoint in your application that will be used to expose the operator's API.

:::danger Security

The operator must not be exposed directly to the internet. You must implement a secure way to expose the operator's API.

:::

:::warning CORS

You must implement CORS (Cross-Origin Resource Sharing) to allow the Carmentis network to interact with the operator's API through the browser.

:::

Here is an example of an endpoint that you can implement in your application (here in NodeJs with Express):

```javascript

const express = require('express');
const cors = require('cors');
const Operator = require('carmentis-sdk-nodejs');
const app = express();

// Configure CORS
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}));
app.use(express.json()); // for parsing application/json

// Initialize Operator with necessary configuration
const operator = new Operator("your_operator_url");


// Generic endpoint to handle calls to any Operator method
app.post('/api/operator/:methodName', async (req, res) => {
    const { methodName } = req.params;
    const args = req.body || [];

    try {
        if (typeof operator[methodName] === 'function') {
            
            // Call the operator's method
            const result = await operator[methodName](...args);
            
            // Return the result
            res.json({ result });
        } else {
            res.status(404).send('Method not found');
        }
    } catch (error) {
        res.status(500).send(`Error processing request: ${error.message}`);
    }
});

app.listen(3000, () => console.log('Operator API exposed on http://localhost:3000'));

```

