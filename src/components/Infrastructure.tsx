import {useEffect, useState} from 'react';
import {SERVERS} from "../constants/servers";



export function Infrastructure(): JSX.Element {
    const [serverStatus, setServerStatus] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const checkServerStatus = async () => {
            const newStatus: Record<string, boolean> = {};

            for (const server of SERVERS) {
                try {
                    const response = await fetch(server.frontendUrl, {method: 'OPTIONS', mode: 'no-cors'});
                    newStatus[server.frontendUrl] = true;

                    if (server.apiUrl) {
                        const apiResponse = await fetch(server.apiUrl, {method: 'OPTIONS', mode: 'no-cors'});
                        newStatus[server.apiUrl] = true;
                    }
                } catch {
                    newStatus[server.frontendUrl] = false;
                    if (server.apiUrl) {
                        newStatus[server.apiUrl] = false;
                    }
                }
            }

            setServerStatus(newStatus);
        };

        checkServerStatus();
        const interval = setInterval(checkServerStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto',
        },
        environmentSection: {
            marginBottom: '30px',
        },
        environmentTitle: {
            fontSize: '1.5em',
            marginBottom: '15px',
            color: '#333',
        },
        serverCard: {
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            marginBottom: '15px',
            backgroundColor: '#fff',
        },
        serverName: {
            fontSize: '1.2em',
            marginBottom: '10px',
            color: '#444',
        },
        urlContainer: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '5px',
        },
        statusDot: {
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            marginRight: '10px',
        },
        url: {
            color: '#666',
            textDecoration: 'none',
        },
    };

    const environments = ['beta', 'alpha', "resources"] as const;

    return (
        <div style={styles.container}>
            {environments.map((env) => {
                const envServers = SERVERS.filter((server) => server.environment === env);
                if (envServers.length === 0) return null;

                return (
                    <div key={env} style={styles.environmentSection}>
                        <h2 style={styles.environmentTitle}>
                            {env.charAt(0).toUpperCase() + env.slice(1)} { env !== 'resources' && <>Environment</> }
                        </h2>
                        {envServers.map((server) => (
                            <div key={server.name} style={styles.serverCard}>
                                <h3 style={styles.serverName}>{server.name}</h3>
                                <div style={styles.urlContainer}>
                                    <div
                                        style={{
                                            ...styles.statusDot,
                                            backgroundColor: serverStatus[server.frontendUrl]
                                                ? '#4caf50'
                                                : '#f44336',
                                        }}
                                    />
                                    <a
                                        href={server.frontendUrl}
                                        style={styles.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {server.frontendUrl}
                                    </a>
                                </div>
                                {server.apiUrl && (
                                    <div style={styles.urlContainer}>
                                        <div
                                            style={{
                                                ...styles.statusDot,
                                                backgroundColor: serverStatus[server.apiUrl]
                                                    ? '#4caf50'
                                                    : '#f44336',
                                            }}
                                        />
                                        <a
                                            href={server.apiUrl}
                                            style={styles.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {server.apiUrl} (API)
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}