---
sidebar_position: 1
title: Talk to Desk from Vue
---

# Talk to Desk from Vue

Your web application reaches the user's Carmentis Desk through a **relay**. The `@cmts-dev/carmentis-desk-connect-vuejs` package provides `CarmentisJsonRpcPopup`: it shows a QR code / deep link, connects to Desk over the relay, sends one JSON-RPC request and emits the response.

*Sources: `carmentis-desk-playground`, `carmentis-file-sign` and `carmentis-certified-email-vc-issuer`.*

```shell
npm install @cmts-dev/carmentis-desk-connect-vuejs
```

```ts
// main.ts
import '@cmts-dev/carmentis-desk-connect-vuejs/style.css';
```

## The generic pattern

Every interaction is the same: build a JSON-RPC 2.0 request, mount the popup, react to `response` or `error`.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { CarmentisJsonRpcPopup } from '@cmts-dev/carmentis-desk-connect-vuejs'

const relayUrl = 'https://relay.testnet.carmentis.io'
const visible = ref(false)
const request = { jsonrpc: '2.0', id: 1, method: 'ping', params: {} }

function onResponse(response: { result: unknown }) {
  visible.value = false
  console.log(response.result)
}
</script>

<template>
  <button @click="visible = true">Ping Desk</button>

  <CarmentisJsonRpcPopup
    v-if="visible"
    :visible="visible"
    :relay-url="relayUrl"
    :request="request"
    title="Ping"
    @response="onResponse"
    @error="(e: Error) => { visible = false; console.error(e.message) }"
    @disconnected="visible = false"
    @close-requested="visible = false"
  />
</template>
```

Mount the popup with `v-if` so that each interaction opens a fresh session. Always handle `disconnected` and `close-requested`, otherwise a cancelled request leaves your UI stuck in a loading state.

## Requests supported by Desk

The playground lists the requests Desk understands. Use `discover` to list the methods of the installed version.

| Method | Purpose |
|---|---|
| `ping`, `discover` | Test the connection, list supported methods |
| `/v2/auth/pk` | Authenticate: sign a challenge |
| `/v1/sign/json` | Sign a JSON payload |
| `/v1/credential/presentation` | Present a verifiable credential (SD-JWT) |
| `/v1/credential/issue` | Import a credential in the wallet |

`/v1/auth/pk` still exists but is deprecated.

## Authenticate

Fetch a challenge from your back end ([see the back-end side](../nestjs/authenticate-with-desk.md)), send it to Desk, and post the returned signature.

```ts
const authRequest = computed(() => ({
  jsonrpc: '2.0',
  id: 1,
  method: '/v2/auth/pk',
  params: {
    origin: 'Carmentis Certified Email',                  // shown to the user
    logoUrl: 'https://docs.carmentis.io/img/carmentis-logo-color.png', // optional
    challenge: challenge.value,
  },
}))

async function onAuthResponse(response: { result: unknown }) {
  const { signature } = response.result as { pk: string; publicKey: string; signature: object }
  const { sessionToken, publicKey } = await api('/issuer/auth', {
    method: 'POST',
    body: JSON.stringify({ challengeId: challengeId.value, signature }),
  })
  store.setAuth(sessionToken, publicKey)
}
```

## Ask the user to sign a JSON

`/v1/sign/json` displays a `purpose` to the user and returns a signature of the payload. Optionally pin the expected `publicKey` so Desk uses the right wallet.

```ts
export const buildSignJsonRequest = (approval: ApprovalRequest, publicKey?: string) => ({
  jsonrpc: '2.0',
  id: 1,
  method: '/v1/sign/json',
  params: {
    payload: approval.approvalPayload,        // built and stored by your back end
    context: { purpose: approval.purpose },   // shown in Desk
    ...(publicKey ? { publicKey } : {}),
  },
})

export const extractSignature = (response: { result: unknown }): object => {
  const signature = (response.result as { signature?: object } | undefined)?.signature
  if (!signature) throw new Error('Desk did not return a signature')
  return signature
}
```

Post the signature back to your server, which verifies it and anchors it ([see the back-end side](../nestjs/anchor-with-operator.md#sign-a-payload-the-server-controls)).

```ts
async function handleApprovalSigned(response: { result: unknown }) {
  approvalPopupVisible.value = false
  await submitSendingApproval(approval.value.messageId, extractSignature(response))
}
```

## Present a credential

The back end provides the `publicKey`, the `nonce` and the `query`; the front end only relays them to Desk. The answer carries a `vp_token` to forward to the back end ([verification](../nestjs/credentials.md#verify-the-presentation)).

```ts
const presentationRequest = computed(() => ({
  jsonrpc: '2.0',
  id: 2,
  method: '/v1/credential/presentation',
  params: {
    publicKey: publicKey.value,
    audience: window.location.origin,
    nonce: nonce.value,
    query: query.value,
  },
}))

async function onPresentationResponse(response: { result: unknown }) {
  const { vp_token } = response.result as { vp_token: string }
  await sendEmailVerifiablePresentation({ vp: vp_token })
}
```

## Import a credential in Desk

Once your service has issued a credential, let the user store it in their wallet.

```ts
const importRequest = computed(() => ({
  jsonrpc: '2.0',
  id: 1,
  method: '/v1/credential/issue',
  params: {
    publicKey: store.publicKey,
    credentialType: 'sdjwt_ietf',
    credential: credential.value, // compact SD-JWT returned by your back end
  },
}))
```