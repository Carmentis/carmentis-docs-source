---
sidebar_position: 4
---

# Hold verifiable credentials

Each wallet of Carmentis Desk can hold verifiable credentials in the **SD-JWT** format and present them to applications, revealing only what is requested.

## Add a credential

1. Open the **Credentials** tab of your wallet and choose **Add Credential**.
2. Paste the credential in its compact SD-JWT form.
3. Give it a name. By default, Desk uses the `vct` claim of the credential.

Desk stores the credential with the wallet. You can delete it at any time.

## Share part of a credential manually

Open a credential and choose the presentation dialog: select which claims to disclose, and Desk produces the presentation, ready to be copied. This manual presentation is not bound to a key.

## Present a credential to an application

When an application asks for a credential, Desk opens a request that you can approve or decline:

1. Desk selects the wallet that matches the request, which you can change.
2. It lists the credentials that match the request and the claims that would be revealed.
3. When you approve, Desk returns a presentation bound to your wallet key and to the application's nonce.

Applications send this request with the `/v1/credential/presentation` method, see the [Desk JSON-RPC reference](/build/reference/desk-json-rpc).

:::note One credential per request
Desk currently handles a single credential entry in a request.
:::
