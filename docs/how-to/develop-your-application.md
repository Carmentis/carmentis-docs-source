---
sidebar_position: 21
---

# Develop your application
Once your application has been [declared](./declare-your-application) 
you have to implement the back-end and the front-end of your application.

## Using Express

### Configure Environment Variables
The first things to do is to configure the environment variables. These variables are not mandatory but follow
the best programming practice. Be sure to have registered your application in your workspace beforehand.

```text
# Port listened by your application
APPLICATION_PORT=3000

# Application ID and version must be obtained from https://data.testapps.carmentis.io/workspace once
# your application has been created and registered.
CARMENTIS_APPLICATION_ID=<your application ID>
CARMENTIS_APPLICATION_VERSION=<your application version>

# Operator host and port.
CARMENTIS_OPERATOR_HOST=https://testapps.carmentis.io
CARMENTIS_OPERATOR_PORT=443
```

### Download the Application and Client SDK
Carmentis provides you two SDKs to help you to construct your back-end and your front-end. On a hand, the back-end SDK 
is designed to be used by your back-end server and hence should be not accessible publicly. On another hand, the 
client SDK should be made available by your server to the front (via a publicly-available directory, say `public` containing
all your assets including all the css and the javascript).

<a class="download-button" href="https://github.com/Carmentis/carmentis-wallet-extension/releases" target="_blank">
    <p>Download Application SDK</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
      <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
    </svg>
</a>

<a class="download-button" href="https://github.com/Carmentis/carmentis-wallet-extension/releases" target="_blank">
<p>Download Client SDK</p>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
<path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg>
</a>



### Create Your Back-End 
Initialize your project and create a new `config.mjs` file containing the configuration, and an `app.mjs` file 
containing the standard server configuration and launch commands.

```js title="config.mjs"
import dotenv from "dotenv";
dotenv.config()

export const APPLICATION_URL                 = process.env.APPLICATION_URL;
export const APPLICATION_PORT      = process.env.APPLICATION_PORT;

export const CARMENTIS_APPLICATION_VERSION = parseInt(process.env.CARMENTIS_APPLICATION_VERSION);
export const CARMENTIS_APPLICATION_ID = process.env.CARMENTIS_APPLICATION_ID;

export const CARMENTIS_OPERATOR_HOST       = process.env.CARMENTIS_OPERATOR_HOST;
export const CARMENTIS_OPERATOR_PORT       = process.env.CARMENTIS_OPERATOR_PORT;

```


```js title="app.mjs"
import express from 'express'
const app = express()
import cors from 'cors';
import bodyParser from 'body-parser';
import * as sdk from "./carmentis-application-sdk.js";
import dotenv from "dotenv";
import * as config from "./config.mjs" 


// Define the operator URL (domain:port) and initialize the SDK
const OPERATOR_URL = `${config.CARMENTIS_OPERATOR_HOST}:${config.CARMENTIS_OPERATOR_PORT}`;
sdk.initialize({
    host: config.CARMENTIS_OPERATOR_HOST,
    port: config.CARMENTIS_OPERATOR_PORT,
});


// configure the dependencies (express, body-parser to recover parameters, CORS)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors({
    origin: ['https://' + config.CARMENTIS_OPERATOR_HOST],
}));


// configure pug
app.set('views', './views')
app.set("view engine", "pug")


app.get('/', (req, res) => {
    res.render('index', {
        operator_url: OPERATOR_URL,
    });
});


// Your code here ...

// launch node
const port = config.APPLICATION_PORT
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
```

To ask the approval for an event, the back-end server requires to obtain the data. The data can be either obtained
when handling the output of a form or by using a Rest API (as done in our "Hello World" application, 
see [here](https://github.com/Carmentis/carmentis-app-hello-world/blob/1dc02d4aa675ed2c263b5cb3cd5102bf18dff9db/app.mjs#L59)).
The following code relies on a single actor role `actor` and a single channel `mainChannel`.

```js
// receive the data either from a form or from a post query from your front-end.

let data =
    {
        application: config.CARMENTIS_APPLICATION_ID,
        version: config.CARMENTIS_APPLICATION_VERSION,
        fields: field,
        actors: [
            {
                name: "actor",
                authentication: {
                    method: "email",
                    value : "x"
                }
            },
        ],
        channels: [
            "mainChannel",
        ],
        subscriptions: {
            sender: [
                "mainChannel",
            ],
        },
        permissions: {
            mainChannel: ["*"],
        },
        approval: {
            actor: "actor",
            message: "" // The ID of a message defined under the "Messages" tab in your workspace 
        }
    }

let answer = await sdk.query(
    "prepareUserApproval",
    data
);

if (!answer.success) {
    // Handle the failure
}


let data_response = answer["data"]
let id = data_response["id"]
let recordId = data_response["recordId"]

// send the data required for the user approval to the front-end...

```


### Create Your Front-End
In our application, the front-end is created using [pug](https://expressjs.com/fr/guide/using-template-engines.html).
As you can observe, the `app.mjs` package already configure the `pug` package. Feel free to rely on another front-end
package. 

In the following example, the data is taken by the front-end via javascript and sent to the back-end to prepare the user
approval. Once the approval has been prepared by the [operator](../../architecture.md) (communicating with your back-end
through the application SDK), the back-end responds with an ID which is handled with `await Carmentis.web.openApprovalPopup`.
q
```js
// The organisation's id is no more significant and will be removed.
const ORGANIZATION_ID = "0000000000000000000000000000000000000000000000000000000000000000";

async function startApproval() {
    // load the data from the input using JS

    // send the approval request to the back-end 
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/submitMessage", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    // when the back-end responds with the output of the `sdk.query` function, call the `Carmentis.web.openApprovalPopup`
    // function displaying an approval popup.
    xhr.onreadystatechange = async function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let response = JSON.parse(xhr.response);
            
            let id = response.id;
            await Carmentis.web.openApprovalPopup({
                id: id,
                operatorURL: "https://" + operatorURL,
                onSuccessCallback: () => {
                    // do something when the approval is succesfully done
                }
            })
        }
    }
    
    xhr.send(JSON.stringify({
        // put here the data taken from the content
    }))
}
```



