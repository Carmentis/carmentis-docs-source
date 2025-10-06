---
sidebar_position: 3
---
# Anchor Data on Chain

We offer two solutions to anchor on-chain from your back server:
- *without* the approval of a user (using its wallet).
- *with* the approval of a user.

## Event approval workflow

### With user approval

```ts
// put all the data you want to anchor on chain here
const data = {
    // ...
}

// the gas price is in atomic unit, here we affect one CMTS token
const gasPriceInAtomic = CMTSToken.oneCMTS().getAmountAsAtomic();

// the approval message shown on the wallet on the user's device
const approvalMessage = "Please, approve this message"

// we define roles used within the transaction
const server = "server";
const user = "user";

// we create the body of the anchoring request
const request = {
    author: 'server',
    endorser: 'user',
    data,
    channels: [
        {
            name: 'mainChannel',
            public: false, // at true to make all the data stored on the channel private (encrypted on-chain)
        }
    ],
    channelAssignations: [
        {
            channelName: 'mainChannel',
            fieldPath: 'this.*'
        }
    ],
    actors: [
        { name: "server" },
        { name: "user" },
    ],
    actorAssignations: [
        {
            channelName: 'mainChannel',
            actorName: 'server'
        },
        {
            channelName: 'mainChannel',
            actorName: 'user'
        },
    ],
    approvalMessage,
    gasPriceInAtomic,
}

// send the request to the operator server at /api/anchorWithWallet (since we want to anchor with the user's wallet)
const apiKey = 'cmts_...';
const operatorUrl = 'https://...';
const url = `${operatorUrl}/api/anchorWithWallet`;
const response = await axios.post(url, request,
    {
        headers: {
            "Authorization": `Bearer ${apiKey}`,
        },
    },
);

// we handle the response
console.assert(response.status === 201);

// at this point, the anchoring request has been sent to the operator server
// we can now check the status of the request
const {anchorRequestId} = answer.data;
const statusResponse = await axios.get(
    `${operatorUrl}/api/anchor/status/${anchorRequestId}`,
    {
        headers: {
            "Authorization": `Bearer ${apiKey}`,
        },
    },
);
const { status, published, virtualBlockchainId, microBlockHash } = statusResponse.data;
console.assert(published === false);

// we now forward the anchor request identifier to the front...
```

On the front, once we have the `anchorRequestId`, we use the SDK to display a QRCode used to establish a connection
between the operator server and the user's wallet:
```tsx
import { wiClient } from '@cmts-dev/carmentis-sdk/client';

export function CarmentisApprovalQRCode({anchorRequestId, operatorUrl}: {anchorRequestId: string, operatorUrl: string}) {
    useEffect(() => {
        // this code is used to prevent the QRCode to be displayed before the anchorRequestId is available
        if (typeof anchorRequestId !== 'string' || typeof operatorUrl !== 'string') {
            return
        }
        
        const w = new wiClient();
        w.attachQrCodeContainer(`qr`);
        w.setServerUrl(operatorUrl);
        w.attachExtensionButton(`extension-button`);
        w.getApprovalData(anchorRequestId)
            .then(() => {
                console.log("Approved!")
            }).catch((e) => {
                console.error(`[Carmentis QR] error: ${e}`)
            });

        return () => {
            w.detach()
        }

    }, [anchorRequestId]);

    // we display a loading screen while the QRCode is being displayed, otherwise we display the QRCode
    let QRCodeContent;
    if (!anchorRequestId || !operatorUrl) {
        QRCodeContent = <Skeleton height={"150px"} width={"100px"} />
    } else {
        QRCodeContent = <>
            <div id={`qr`}  />
            <button id={`extension-button`}>Use Extension</button>
        </>
    }
    return (
        <>{QRCodeContent}</>
    );
}
```

### Without user approval

```ts
// put all the data you want to anchor on chain here
const data = {
    // ...
}

// the gas price is in atomic unit, here we affect one CMTS token
const gasPriceInAtomic = CMTSToken.oneCMTS().getAmountAsAtomic();

// the approval message shown on the wallet on the user's device
const approvalMessage = "Please, approve this message"

// we define roles used within the transaction
const server = "server";

// we create the body of the anchoring request
const request = {
    author: 'server',
    data,
    channels: [
        {
            name: 'mainChannel',
            public: false, // at true to make all the data stored on the channel private (encrypted on-chain)
        }
    ],
    channelAssignations: [
        {
            channelName: 'mainChannel',
            fieldPath: 'this.*'
        }
    ],
    actors: [
        { name: "server" },
    ],
    actorAssignations: [
        {
            channelName: 'mainChannel',
            actorName: 'server'
        },
    ],
    gasPriceInAtomic,
}

// send the request to the operator server at /api/anchorWithWallet (since we want to anchor with the user's wallet)
const apiKey = 'cmts_...';
const operatorUrl = 'https://...';
const url = `${operatorUrl}/api/anchor`;
await axios.post(url, request,
    {
        headers: {
            "Authorization": `Bearer ${apiKey}`,
        },
    },
);

```
