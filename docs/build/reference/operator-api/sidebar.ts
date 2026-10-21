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
      label: "Wallet Application Ledger",
      items: [
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-application-ledger-controller-anchor-v-1",
          label: "Initiate an anchor request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-application-ledger-controller-get-record-v-1",
          label: "Get a record from an application ledger",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-application-ledger-controller-get-authenticity-proof-v-1",
          label: "Get the authenticity proof of an application ledger",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-application-ledger-controller-get-application-ledger-state-v-1",
          label: "Get the state of an application ledger",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-application-ledger-controller-get-actor-keys-v-1",
          label: "Get the public keys of an application ledger actor",
          className: "api-method get",
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
        {
          type: "doc",
          id: "build/reference/operator-api/crypto-controller-get-json-digest-v-1",
          label: "Computes digest data of JSON",
          className: "api-method post",
        },
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
      label: "Wallet",
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
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-controller-list-wallets-v-1",
          label: "List the wallets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-controller-list-organizations-v-1",
          label: "List the organizations of a wallet",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-controller-list-applications-v-1",
          label: "List the applications of a wallet",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Resolver",
      items: [
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-resolver-controller-resolve-v-1",
          label: "Resolve data stored in microblocks",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Wallet Organization",
      items: [
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-organization-controller-list-applications-v-1",
          label: "List the applications of an organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-organization-controller-publish-custom-section-v-1",
          label: "Publish a custom JSON on an organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "build/reference/operator-api/wallet-organization-controller-publish-certificate-v-1",
          label: "Publish an X.509 certificate on an organization",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
