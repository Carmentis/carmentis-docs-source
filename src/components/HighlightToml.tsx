import * as React from "react";


type Highlight = {
    keyPath: string; // Ex: "server.port"
    value: string;   // Ex: "8080"
    comment?: string;
};

type Props = {
    highlights: Highlight[];
    isOmitting?: boolean;
};

export const HighlightedToml: React.FC<Props> = ({ highlights, isOmitting }) => {
    // Regrouper les clés par section
    const sections = new Map<string, { key: string; value: string; comment?: string }[]>();

    highlights.forEach(({ keyPath, value, comment }) => {
        const parts = keyPath.split('.');
        const hasSection = parts.length > 1;
        let section, key;
        if (hasSection) {
            section = parts.slice(0, -1).join('.');
            key = parts[parts.length-1]
        } else {
            section = '';
            key = parts[0];
        }


        if (!sections.has(section)) {
            sections.set(section, []);
        }

        sections.get(section)!.push({ key, value, comment });
    });

    const renderSection = (section: string, entries: { key: string; value: string; comment?: string }[]) => (
        <div key={section} style={{ marginBottom: '1rem' }}>
            {section && (
                <div style={{ color: '#c678dd' }}>
                    <code>[{section}]</code>
                </div>
            )}
            {entries.map(({ key, value, comment }, idx) => (
                <div key={idx} style={{ marginBottom: comment ? '0.5rem' : 0 }}>
                    {comment && (
                        <div
                            style={{
                                fontSize: '0.85rem',
                                color: '#fdbc40',
                                marginTop: '2px',
                            }}
                        >
                            {comment.split('\n').map(line => `# ${line}`).join("\n")}
                        </div>
                    )}
                    <code>
                        <span style={{ color: '#61dafb' }}>{key}</span> ={' '}
                        <span style={{ color: '#98c379' }}>{value}</span>
                    </code>
                </div>
            ))}
        </div>
    );

    return (
        <pre
            style={{
                backgroundColor: '#282c34',
                color: '#ffffff',
                padding: '1rem',
                borderRadius: '8px',
                fontFamily: 'Fira Code, monospace',
                overflowX: 'auto',
                fontSize: '0.9rem',
            }}
        >
      {Array.from(sections.entries()).map(([section, entries], idx, arr) => (
          <React.Fragment key={section}>
              {renderSection(section, entries)}
          </React.Fragment>
      ))}
            {isOmitting && <div style={{ color: '#666' }}>...</div>}
    </pre>
    );
};
