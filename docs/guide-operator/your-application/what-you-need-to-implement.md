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

The operator must not be exposed directly to the internet. You must implement an endpoint in your application that will be used to expose the operator's `getApprovalData` && `getRecordData` methods in order to be consumed by the Carmentis proof pages.

:::

:::warning HTTPS

Your server endpoint must be exposed over HTTPS and accessible to the Internet, even if it is in a local hosting environment.
If you cannot expose your server over HTTPS, you can use a reverse proxy like Nginx or Caddy to expose your server over HTTPS or use a service like [ngrok](https://ngrok.com/) to expose your server over HTTPS.

:::

:::warning CORS

You must implement CORS (Cross-Origin Resource Sharing) to allow the Carmentis network to interact with the operator's API through the browser.

:::

### Code samples

Here is a **non-production code sample** of an endpoint that you have to implement in your application :

#### Node.js

Using Express.js and the [carmentis-sdk-nodejs](https://github.com/Carmentis/carmentis-sdk-nodejs) library.

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
        if (typeof operator[methodName] === 'function' && ['getRecordData', 'getApprovalData'].includes(methodName)) {
            
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

#### PHP

Using PHP and the [carmentis-sdk-php](https://github.com/Carmentis/carmentis-sdk-php) library: 

```php 
<?php
// Assuming autoload for classes; require or include necessary files otherwise
// require 'carmentis-sdk-php/autoload.php';

use Carmentis\Operator;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, HEAD, PUT, PATCH, POST, DELETE");
header("Content-Type: application/json");

$operator = new Operator("your_operator_url");

// Parsing the request
$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'POST') {
    $uri = explode('/', trim($_SERVER['REQUEST_URI'], '/'));
    $methodName = $uri[2] ?? ''; // Adjust depending on your URL structure
    $input = json_decode(file_get_contents('php://input'), true);

    if (in_array($methodName, ['getRecordData', 'getApprovalData'])) {
        try {
            // Assuming Operator class methods can be called dynamically with arguments
            $result = call_user_func_array([$operator, $methodName], $input['args'] ?? []);
            echo json_encode(['result' => $result]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Error processing request: ' . $e->getMessage()]);
        }
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Method not found']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
```
