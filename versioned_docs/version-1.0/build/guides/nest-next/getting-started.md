---
sidebar_position: 1
---
# Getting Started

## Prerequisites
Whatever you are developing a back server or front application, you need to install the SDK:
```shell
npm install @cmts-dev/carmentis-sdk
```

*Be careful*, the import of the SDK in your back server differs from the front.
Write the following to import the SDK on your back server:
```ts
import { ... } from '@cmts-dev/carmentis-sdk/server';
```
On the other side, to import the SDK on your front application:
```ts
import { ... } from '@cmts-dev/carmentis-sdk/client';
```




