type ServerConfig = {
    id: string;
    label: string;
    link: string;
};

export const SERVERS: ServerConfig[] = [
    {
        id: 'testnet:exchange',
        link: 'https://exchange.testnet.carmentis.io',
        label: "Exchange (testnet)"
    },
    {
        id: 'testnet:explorer',
        link: 'https://explorer.testnet.carmentis.io',
        label: "Explorer (testnet)"
    },
    {
        id: 'docs',
        link: 'https://docs.carmentis.io',
        label: "Official Carmentis documentation"
    },
    {
        id: 'npmjs:sdk',
        link: 'https://www.npmjs.com/package/@cmts-dev/carmentis-sdk',
        label: 'Carmentis SDK (on npm)'
    },
    {
        id: 'testnet:explorer',
        link: 'https://explorer.testnet.carmentis.io',
        label: "Explorer (testnet)"
    },
    {
        id: 'chrome:wallet',
        link: 'https://chromewebstore.google.com/detail/carmentis-wallet/ekchappkfhfkbgekcleodkhlfcadocmj?pli=1',
        label: "Wallet (Chrome)"
    },
    {
        id: 'cli',
        link: 'https://www.npmjs.com/package/@cmts-dev/carmentis-cli',
        label: "CLI"
    },
];