// src/components/StatusMessage.tsx
import { useEffect, useState } from 'react';

interface StatusMessageProps {
    endpoint: string;
    message: string;
}

export const StatusMessage: React.FC<StatusMessageProps> = ({ endpoint, message }) => {
    const [renderedMessage, setRenderedMessage] = useState<string>('Loading...');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await fetch(endpoint);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP: ${response.status}`);
                }
                const data = await response.json();

                // Extraction des valeurs
                const latestBlockHash = data.result?.sync_info?.latest_block_hash || 'N/A';
                const latestBlockHeight = data.result?.sync_info?.latest_block_height || 'N/A';
                const id = data.result?.node_info?.id || 'N/A';

                // Remplacement dans le message
                const filledMessage = message
                    .replace('{{latest_block_hash}}', latestBlockHash)
                    .replace('{{latest_block_height}}', latestBlockHeight)
                    .replace('{{id}}', id);

                setRenderedMessage(filledMessage);
            } catch (err: any) {
                setError(`Failed to load: ${err.message}`);
            }
        };

        fetchStatus();
    }, [endpoint, message]);

    if (error) return <span style={{ color: 'red' }}>{error}</span>;

    return <span>{renderedMessage}</span>;
};
