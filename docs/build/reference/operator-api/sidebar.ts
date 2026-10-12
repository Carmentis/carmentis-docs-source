import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "build/reference/operator-api/carmentis-operator-api",
    },
    {
      type: "category",
      label: "Chain",
      items: [
        {
          type: "doc",
          id: "build/reference/operator-api/chain-controller-is-microblock-published-on-blockchain-v-1",
          label: "Check if a microblock is published on blockchain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/chain-controller-get-application-ledger-state-v-1",
          label: "ChainController_getApplicationLedgerState_v1",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/chain-controller-get-actor-keys-v-1",
          label: "ChainController_getActorKeys_v1",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Anchor Request",
      items: [
        {
          type: "doc",
          id: "build/reference/operator-api/anchor-request-controller-get-anchor-request-status-v-1",
          label: "Returns the status of an anchor request",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/anchor-request-controller-cancel-anchor-request-v-1",
          label: "Cancel an anchor request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/anchor-request-controller-get-all-anchor-requests-v-1",
          label: "Returns all anchor requests",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/anchor-request-controller-get-record-v-1",
          label: "Get authenticity proof for a virtual blockchain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/anchor-request-controller-get-anchor-request-by-id-v-1",
          label: "Get an anchor request by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/anchor-request-controller-delete-anchor-request-by-id-v-1",
          label: "Delete an anchor request",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/anchor-request-controller-is-published-on-chain-v-1",
          label: "Checks if a microblock is published on the blockchain.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Health",
      items: [
        {
          type: "doc",
          id: "build/reference/operator-api/health-controller-health-v-1",
          label: "Health check endpoint",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/health-controller-hello-v-1",
          label: "Hello request handler.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/health-controller-public-hello-v-1",
          label: "Public hello request handler.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Wallet Proof",
      items: [
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-proof-controller-get-record-v-1",
          label: "Get authenticity proof for a virtual blockchain",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Wallet Record",
      items: [
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-record-controller-get-record-v-1",
          label: "Get a record from a virtual blockchain",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Wallet Anchoring",
      items: [
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-anchoring-controller-anchor-v-1",
          label: "Initiate an anchor request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-anchoring-controller-anchor-using-implicit-wallet-v-1",
          label: "Initiate an anchor request",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Verifiable Credentials",
      items: [
        {
          type: "doc",
          id: "build/reference/operator-api/verifiable-credential-controller-verify-verifiable-credential-v-1",
          label: "Verify an SD-JWT verifiable credential",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/verifiable-credential-controller-verify-verifiable-presentation-v-1",
          label: "Verify an SD-JWT verifiable presentation",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Crypto",
      items: [
        {
          type: "doc",
          id: "build/reference/operator-api/crypto-controller-generate-challenge-v-1",
          label: "Generate a cryptographic challenge",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/crypto-controller-generate-nonce-v-1",
          label: "Generate a cryptographic nonce",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/crypto-controller-generate-uuid-v-1",
          label: "Generate a UUID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Crypto Signature",
      items: [
        {
          type: "doc",
          id: "build/reference/operator-api/crypto-signature-controller-verify-binary-signature-0-v-1",
          label: "Verify a binary message signature",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/crypto-signature-controller-verify-binary-signature-1-v-1",
          label: "Verify a binary message signature",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/crypto-signature-controller-verify-json-signature-v-1",
          label: "Verify a JSON signature",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Wallet Crypto",
      items: [
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-crypto-controller-sign-0-v-1",
          label: "Sign a binary message with wallet signature key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-crypto-controller-sign-1-v-1",
          label: "Sign a binary message with wallet signature key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-crypto-controller-sign-json-signature-v-1",
          label: "Sign a JSON payload with the wallet signature key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-crypto-controller-verify-0-v-1",
          label: "Verify a binary message signature with the wallet's public key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-crypto-controller-verify-1-v-1",
          label: "Verify a binary message signature with the wallet's public key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-crypto-controller-verify-json-signature-v-1",
          label: "Verify a JSON signature with the wallet's public key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-crypto-controller-get-public-signature-key-v-1",
          label: "Get wallet public signature key",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
