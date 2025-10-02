import * as  React from 'react';

type DiagramElement = {
    id: string;
    type: 'rect' | 'circle'; // extensible
    x: number;
    y: number;
    width?: number;
    height?: number;
    radius?: number;
    fill?: string;
    stroke?: string;
    text?: string;
    textColor?: string;
};

type DiagramLink = {
    from: string;
    to: string;
    label?: string;
};

type Props = {
    elements: DiagramElement[];
    links?: DiagramLink[];
    width?: number;
    height?: number;
};

export const Diagram: React.FC<Props> = ({
                                      elements,
                                      links = [],
                                      width = 600,
                                      height = 300,
                                  }) => {
    const getElementCenter = (el: DiagramElement) => {
        if (el.type === 'rect') {
            return {
                x: el.x + (el.width ?? 0) / 2,
                y: el.y + (el.height ?? 0) / 2,
            };
        } else if (el.type === 'circle') {
            return {
                x: el.x,
                y: el.y,
            };
        }
        return { x: 0, y: 0 };
    };

    const elementMap = new Map(elements.map((e) => [e.id, e]));

    return (
        <svg width={width} height={height} style={{ border: '1px solid #ccc' }}>
            {/* Draw arrows first (behind elements) */}
            {links.map((link, i) => {
                const fromEl = elementMap.get(link.from);
                const toEl = elementMap.get(link.to);
                if (!fromEl || !toEl) return null;

                // @ts-ignore
                const from = getElementCenter(fromEl);
                // @ts-ignore
                const to = getElementCenter(toEl);

                const dx = to.x - from.x;
                const dy = to.y - from.y;
                const angle = Math.atan2(dy, dx);
                const arrowLength = 10;

                // Position of arrowhead
                const arrowX = to.x - Math.cos(angle) * arrowLength;
                const arrowY = to.y - Math.sin(angle) * arrowLength;

                return (
                    <g key={i}>
                        <line
                            x1={from.x}
                            y1={from.y}
                            x2={arrowX}
                            y2={arrowY}
                            stroke="#333"
                            strokeWidth={2}
                            markerEnd="url(#arrow)"
                        />
                        {link.label && (
                            <text
                                x={(from.x + to.x) / 2}
                                y={(from.y + to.y) / 2 - 5}
                                textAnchor="middle"
                                fontSize="12"
                                fill="#333"
                            >
                                {link.label}
                            </text>
                        )}
                    </g>
                );
            })}

            {/* Define arrow marker */}
            <defs>
                <marker
                    id="arrow"
                    markerWidth="10"
                    markerHeight="10"
                    refX="10"
                    refY="5"
                    orient="auto"
                >
                    <path d="M0,0 L10,5 L0,10 Z" fill="#333" />
                </marker>
            </defs>

            {/* Draw elements */}
            {elements.map((el, idx) => {
                const key = `el-${idx}`;
                const fill = el.fill ?? '#ddd';
                const stroke = el.stroke ?? '#333';
                const textColor = el.textColor ?? '#fff';

                if (el.type === 'rect') {
                    return (
                        <g key={key}>
                            <rect
                                x={el.x}
                                y={el.y}
                                width={el.width}
                                height={el.height}
                                fill={fill}
                                stroke={stroke}
                                rx={6}
                            />
                            {el.text && (
                                <text
                                    x={el.x + (el.width ?? 0) / 2}
                                    y={el.y + (el.height ?? 0) / 2 + 4}
                                    textAnchor="middle"
                                    fontSize="14"
                                    fill={textColor}
                                    fontFamily="sans-serif"
                                >
                                    {el.text}
                                </text>
                            )}
                        </g>
                    );
                }

                if (el.type === 'circle') {
                    return (
                        <g key={key}>
                            <circle
                                cx={el.x}
                                cy={el.y}
                                r={el.radius ?? 20}
                                fill={fill}
                                stroke={stroke}
                            />
                            {el.text && (
                                <text
                                    x={el.x}
                                    y={el.y + 4}
                                    textAnchor="middle"
                                    fontSize="14"
                                    fill={textColor}
                                    fontFamily="sans-serif"
                                >
                                    {el.text}
                                </text>
                            )}
                        </g>
                    );
                }

                return null;
            })}
        </svg>
    );
};

