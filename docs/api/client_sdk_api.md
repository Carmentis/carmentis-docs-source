---
sidebar_position: 5
---

# Client SDK API

### `async Carmentis.web.openApprovalPopup()`
```javascript title="Example"
await Carmentis.web.openApprovalPopup({
    id: ...,
    operatorURL: ...,
    onSuccessCallback: () => {
        ...
    }
})
```

### `Carmentis.web.closeApprovalPopup()`


### `async Carmentis.wallet.request()`

```javascript title="Example"
let answer = await Carmentis.wallet.request({
    qrElementId   : "qr", // ID of HTML element where QR code is placed
    type          : "eventApproval",
    organizationId: ORGANIZATION_ID,
    data: {
        id: id,
    },
    allowReconnection: true,
    operatorURL: operatorURL
});
```