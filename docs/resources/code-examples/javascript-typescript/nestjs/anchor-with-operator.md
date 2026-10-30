---
sidebar_position: 3
title: Anchor and prove with the operator
---

# Anchor and prove with the operator

A NestJS back end can delegate anchoring and proof building to a Carmentis operator through its REST API. This snippet comes from a file-delivery application where a message is anchored **twice** in the same virtual blockchain: when the sender approves the sending, then when the recipient approves the reception.

*Source: `carmentis-file-sign`.*

All calls authenticate with an API key in the `x-api-key` header.

```ts
@Injectable()
export class OperatorService {
  private get baseUrl() { return `${this.config.operatorUrl}/api/v1`; }
  private get headers() { return { 'x-api-key': this.config.operatorApiKey }; }
  // ...
}
```

## Anchor an application ledger microblock

`/applicationLedger/anchor` submits the data and returns an **anchor request id**. Publishing is asynchronous, so you track the request afterwards.

```ts
async anchor(request: OperatorAnchorRequest): Promise<string> {
  const res = await axios.post(
    `${this.baseUrl}/applicationLedger/anchor`,
    { ...request, walletId: this.config.walletId, applicationId: this.config.applicationId },
    { headers: this.headers },
  );
  return res.data.anchorRequestId as string;
}
```

## Build the request

The first microblock holds the message and the sender's approvals. Two special wrappers tell the operator how to store a value:

- `__vp__` embeds a verifiable presentation, so the sender's email is provable;
- `__signature__` embeds the JSON signature produced by Desk.

```ts
export function buildSendingAnchorRequest(message, senderEmailVp: string, signature: object, params) {
  return {
    author: 'fileSign',
    data: {
      title: message.title,
      recipientEmail: message.recipientEmail.emailAddress,
      files: message.files.map(({ filename, mimetype, size, sha256 }) => ({ filename, mimetype, size, sha256 })),
      sender: {
        email: { __vp__: { type: 'SDJWT_IETF', sdjwt_ietf: senderEmailVp } },
        sendingApproval: { __signature__: signature },
      },
    },
    channels: [{ name: 'mainChannel', public: false }],
    channelAssignations: [{ channelName: 'mainChannel', fieldPath: 'this.*' }],
    actors: [{ name: 'fileSign' }],
    actorAssignations: [{ channelName: 'mainChannel', actorName: 'fileSign' }],
    maskableFields: [],
    gasPriceInAtomics: params.gasPriceInAtomics,
    chainStorageInDays: params.chainStorageInDays,
  };
}
```

The second microblock is appended to the same virtual blockchain by passing `virtualBlockchainId`; channels and actors are already declared, so they are empty.

```ts
export function buildReceptionAnchorRequest(message, recipientEmailVp: string, signature: object, params) {
  return {
    author: 'fileSign',
    virtualBlockchainId: message.virtualBlockchainId, // append instead of creating
    data: {
      recipient: {
        email: { __vp__: { type: 'SDJWT_IETF', sdjwt_ietf: recipientEmailVp } },
        receptionApproval: { __signature__: signature },
      },
    },
    channels: [],
    channelAssignations: [{ channelName: 'mainChannel', fieldPath: 'this.*' }],
    actors: [],
    actorAssignations: [],
    maskableFields: [],
    gasPriceInAtomics: params.gasPriceInAtomics,
  };
}
```

## Sign a payload the server controls

The signed JSON must never come from the client, otherwise a user could get an arbitrary payload anchored. The server rebuilds it from its own records, then verifies that the signature returned by Desk covers exactly that payload before anchoring.

```ts
const result = await this.operatorService.verifyJsonSignature(
  dto.signature,
  user.publicKey,
  buildSendingApprovalPayload(message), // rebuilt server-side
);
if (!result.verified) throw new BadRequestException(`Invalid signature: ${result.errors?.join(', ')}`);

message.sendingAnchorRequestId = await this.operatorService.anchor(
  buildSendingAnchorRequest(message, senderEmailVp, dto.signature, anchorParams),
);
```

## Wait for publication

Poll the request until it is published; the status then gives you the virtual blockchain id and the microblock hash. Here a scheduled job (`@nestjs/schedule`) does it.

```ts
@Cron(CronExpression.EVERY_10_SECONDS)
async checkAnchoringOfSentMessage() {
  const messages = await MessageEntity.findBy({ isSentToRecipient: false, sendingAnchorRequestId: Not(IsNull()) });
  for (const message of messages) {
    const base = `${operatorUrl}/api/v1/anchorRequest/${message.sendingAnchorRequestId}`;

    const published = (await (await fetch(`${base}/published`, { headers })).json()).isPublished === true;
    if (!published) continue;

    const { virtualBlockchainId, submittedMicroblockHash } = await (await fetch(`${base}/status`, { headers })).json();
    message.virtualBlockchainId = virtualBlockchainId;
    message.isSentToRecipient = true;
    await message.save();
  }
}
```

## Resolve a proof

To give users a verifiable receipt, ask the operator to resolve links to the anchored microblocks (see [Reference microblocks](/build/guides/anchoring/reference-microblocks)). Each `__link__` is replaced by the content of the microblock, and the optional `__representation__` renders it with a [Liquid](https://shopify.github.io/liquid/) template.

```ts
const link = (height: number) => `cmts://resolve/vb/${vbId}/mb/h/${height}`;

const linkedJson = {
  sending: { __link__: link(1) },
  ...(receptionPublished ? { reception: { __link__: link(2) } } : {}),
  __representation__: {
    templateEngine: 'Liquid',
    format: 'markdown',
    template: '# Delivery receipt\n\nSent by **{{ sending.sender.sendingApproval.__signature__.payload.senderEmail }}**',
  },
};

const res = await axios.post(
  `${operatorUrl}/api/v1/resolve`,
  {
    walletId,
    linkedJson,
    digestData: {},
    policies: { onResolutionFailure: 'throw', onCyclicResolution: 'throw' },
  },
  { headers },
);
return res.data; // the proof, ready to be downloaded
```
