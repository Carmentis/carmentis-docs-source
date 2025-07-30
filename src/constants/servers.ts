type ServerConfig = {
    name: string;
    frontendUrl: string;
    apiUrl?: string;
    environment: 'resources' | 'beta' | 'alpha' | 'themis';
};

export const SERVERS: ServerConfig[] = [
    // operator
    {
        name: 'operator',
        frontendUrl: 'https://workspace.beta.carmentis.io',
        apiUrl: 'https://operator.beta.carmentis.io',
        environment: 'beta'
    },
    {
        name: 'operator',
        frontendUrl: 'https://workspace.alpha.carmentis.io',
        apiUrl: 'https://operator.alpha.carmentis.io',
        environment: 'alpha'
    },


    // exchange
    {
        name: 'exchange',
        frontendUrl: 'https://exchange.beta.carmentis.io',
        apiUrl: 'https://exchange.beta.carmentis.io',
        environment: 'beta'
    },
    {
        name: 'exchange',
        frontendUrl: 'https://exchange.alpha.carmentis.io',
        apiUrl: 'https://exchange.alpha.carmentis.io',
        environment: 'alpha'
    },

    // Explorer
    {
        name: 'explorer',
        frontendUrl: 'https://explorer.beta.carmentis.io',
        environment: 'beta'
    },
    {
        name: 'explorer',
        frontendUrl: 'https://explorer.alpha.carmentis.io',
        environment: 'alpha'
    },

    // file-sign
    {
        name: 'File-Sign',
        frontendUrl: 'https://file-sign.beta.carmentis.io',
        apiUrl: 'https://api.file-sign.beta.carmentis.io',
        environment: 'beta'
    },
    {
        name: 'File-Sign',
        frontendUrl: 'https://file-sign.alpha.carmentis.io',
        apiUrl: 'https://api.file-sign.alpha.carmentis.io',
        environment: 'alpha'
    },

    // themis
    {
        name: 'Ares',
        frontendUrl: 'http://ares.carmentis.io:26657',
        environment: 'themis'
    },
    {
        name: 'Apollo',
        frontendUrl: 'http://apollo.carmentis.io:26657',
        environment: 'themis'
    },
    {
        name: 'Arthemis',
        frontendUrl: 'http://arthemis.carmentis.io:26657',
        environment: 'themis'
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