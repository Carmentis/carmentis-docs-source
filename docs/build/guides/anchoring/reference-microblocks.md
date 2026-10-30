---
title: Reference microblocks
sidebar_position: 2
---

# Reference microblocks

A microblock can reference other microblocks. This lets you:

- **share storage** on the blockchain;
- **make your objects more readable**.

:::note
A reference is only possible between microblocks managed by the **same operator**.
:::

## Syntax

A reference to a microblock can take several forms.

**By virtual blockchain id and height:**

```text
cmts://resolve/vb/B304934D7D323D412621A6A8A9FB4919/mb/h/123
                  └──────────────┬───────────────┘      └┬┘
                    id of the virtual blockchain   height in the VB
```

:::note
The legacy form `cmts://resolve/al/${vbId}/h/${height}` (and the `/al` segment in general) is still accepted but optional.
:::

**By microblock hash:**

```text
cmts://resolve/vb/mb/06002A069410C5BBB975B53337C1E506391F176887F3470D8191FA83C4822023
```

**A section of a microblock:**

```text
cmts://resolve/mb/215210905CBF9CA0D2FA8F20E0C00ACF567733A96CBA7D4AB7BCB685D5FA60D7/sect/0
```

A reference is written as an object with the `__link__` key:

```json
"someVariable": { "__link__": "cmts://resolve/vb/B304934D7D323D/mb/h/123" }
```

At resolution time, the `__link__` object is replaced by the resolved content of the referenced microblock, so you get `"someVariable": { <resolved content> }`.

:::warning
Writing a bare string (`"someVariable": "cmts://..."`) or using the former `__resolution_link__` key is no longer supported. Always use `__link__`.
:::

Suppose the debtor's data is anchored on-chain in a microblock:

```json
{
  "applicationId": "...",
  "chainStorageInDays": 360,
  "data": { "lastName": "Durand", "firstName": "Pierre" }
}
```

A receivable can then reference that debtor:

```json
{
  "applicationId": "...",
  "chainStorageInDays": 720,
  "data": {
    "name": "Energy supply invoice",
    "reference": "F-2025-11873",
    "issuer": "EDF",
    "date": "2023-12-05",
    "principal": 358.2,
    "interest": 12.5,
    "debtor": {
      "__link__": "cmts://resolve/vb/B304934D7D323D/mb/h/123"
    }
  }
}
```

After resolution, `debtor` holds the debtor's data in place of the link:

```json
"debtor": { "lastName": "Durand", "firstName": "Pierre" }
```

## Lifetime

:::warning Mind the storage durations
Virtual blockchains can have different lifetimes (`chainStorageInDays`). In the example above, the receivable is anchored for 720 days but the debtor it references for only 360. The receivable is therefore **really valid for 360 days**: once the debtor's chain disappears, the link can no longer be resolved and the proof is invalidated.
:::

Choose the lifetime of a referenced chain at least as long as that of every microblock that references it.

## Next

- [Resolve and check proofs](./resolution-and-proof-checker) to see how links are followed.
