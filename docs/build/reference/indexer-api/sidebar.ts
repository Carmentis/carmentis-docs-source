import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "build/reference/indexer-api/carmentis-indexer-api",
    },
    {
      type: "category",
      label: "App",
      items: [
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-root",
          label: "AppController_getRoot",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-chain",
          label: "AppController_getChain",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-gas-price",
          label: "AppController_getGasPrice",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-search",
          label: "AppController_search",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-blocks",
          label: "AppController_getBlocks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-microblocks",
          label: "AppController_getMicroblocks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-microblock-proof",
          label: "AppController_getMicroblockProof",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-microblock-stats",
          label: "AppController_getMicroblockStats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-accounts",
          label: "AppController_getAccounts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-account-history",
          label: "AppController_getAccountHistory",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-account-proof",
          label: "AppController_getAccountProof",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-organizations",
          label: "AppController_getOrganizations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-applications",
          label: "AppController_getApplications",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-validator-nodes",
          label: "AppController_getValidatorNodes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-validator-stats",
          label: "AppController_getValidatorStats",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-node-status",
          label: "AppController_getNodeStatus",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-virtual-blockchains",
          label: "AppController_getVirtualBlockchains",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-voting-powers",
          label: "AppController_getVotingPowers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "build/reference/indexer-api/app-controller-get-node-reward",
          label: "AppController_getNodeReward",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
