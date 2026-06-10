import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownViewer( input: { link: string }) {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(input.link)
            .then((r) => r.text())
            .then(setContent);
    }, []);

    return <ReactMarkdown>{content}</ReactMarkdown>;
}