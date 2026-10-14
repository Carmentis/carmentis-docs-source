---
sidebar_position: 3
---

# Manage your organizations, applications and nodes

Inside a wallet, you create and publish the objects that identify you on the blockchain: organizations, and the applications and nodes that belong to them. See the [concepts](/concepts/overview#accounts-organizations-and-applications) for how they relate.

:::info Roles
These tabs are shown according to the roles enabled in Desk's [settings](/use/install-desk#settings): **Organizations** for the developer or node holder role, **Applications** for the developer role and **Nodes** for the node holder role.
:::

Every publication is paid with tokens from the wallet, so make sure it is funded.

## Organizations

An organization is described by a name, a country code, a city and a website.

1. **Create** an organization from the Organizations tab of your wallet and fill in its details. They are first saved locally.
2. **Publish** it on-chain. The page then shows its **Organization ID**.
3. To change the details later, edit them and publish again: the existing organization is updated.

An already published organization can be **imported** with its ID. A banner tells you whether the organization is found on-chain; it can take a short while after publication.

## Applications

*Developer role.* An application belongs to a published organization. You can create one, import an existing one by its ID, edit it, publish it and delete it. Publishing it gives you the application ID that your [operator](/operate/operator) uses.

## Nodes

*Node holder role.* From an organization, add or import your nodes. The page of a node shows whether it is published, claimed, owned by your wallet and a validator, and how many tokens are staked on it.

- **Claim** a node you run, so that it is linked to your organization. See [Claim and stake your node](/operate/node/validator).
- **Stake** tokens on a claimed node.
- **Unstake** tokens. Only one unstaking can run at a time, and it follows the delay described in the [validator guide](/operate/node/validator).

## Anchor a certificate

An organization can anchor certificates, to link it to an identity known outside Carmentis. These tabs are available whatever your role.

### X509 certificates

1. Open **X509 Certificates**, which is available once the organization is found on-chain: the certificates already anchored are listed with their height and microblock hash.
2. Choose **Publish New Certificate** and paste the certificate chain in PEM format.
3. Desk checks the chain: `valid`, `incomplete` (the root certificate is missing) or `invalid`. You can publish only a `valid` chain.

### Key attestation

A key attestation proves that a Carmentis public key is controlled by the holder of an X.509 certificate.

1. Provide the **certificate chain**, pasted as PEM or, on Windows, chosen from the system certificate store.
2. **Sign the attestation** (a JWT) with the key of the certificate, either by pasting the signed JWT or, on Windows, with the system certificate store. Desk verifies it.
3. **Publish** it on-chain. The attestations already anchored are listed.

## Custom data

*Developer role.* Publish any JSON document in your organization, and list the documents already published.
