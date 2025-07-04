import { useEffect, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

export function RemoteCodeBlock({ url, title, language }: { url: string, title: string, language: string }): JSX.Element {
    const [content, setContent] = useState<string>('Loading...');
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Loading failure');
                return res.text();
            })
            .then(setContent)
            .catch(() => {
                setError(true);
                setContent('Loading failure');
            });
    }, [url]);

    return (
        <CodeBlock
            language={language}
            title={title}
            showLineNumbers>
            {content}
        </CodeBlock>
    )

}