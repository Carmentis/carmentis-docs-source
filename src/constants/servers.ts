type ServerConfig = {
    name: string;
    frontendUrl: string;
    apiUrl?: string;
    environment: 'resources' | 'testnet'
};

export const SERVERS: ServerConfig[] = [

    // exchange
    {
        name: 'exchange',
        frontendUrl: 'https://exchange.testnet.carmentis.io',
        apiUrl: 'https://api.exchange.testnet.carmentis.io',
        environment: 'testnet'
    },

    // Explorer
    {
        name: 'explorer',
        frontendUrl: 'https://explorer.tesnet.carmentis.io',
        environment: 'testnet'
    },


    // others
    {
        name: 'Documentation',
        frontendUrl: 'https://docs.carmentis.io',
        environment: 'resources'
    },
    {
        name: 'SDK on NPM',
        frontendUrl: 'https://www.npmjs.com/package/@cmts-dev/carmentis-sdk',
        environment: 'resources'
    },
    {
        name: 'Wallet on Chrome',
        frontendUrl: 'https://chromewebstore.google.com/detail/carmentis-wallet/ekchappkfhfkbgekcleodkhlfcadocmj?pli=1',
        environment: 'resources'
    }
];