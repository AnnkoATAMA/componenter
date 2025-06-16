import React from 'react';

type Variant = 'h1' | 'h2' | 'body' | 'small';

type TypographyProps = {
    variant?: Variant;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

const variantMap: Record<Variant, React.CSSProperties> = {
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    body: { fontSize: '1rem', fontWeight: 400 },
    small: { fontSize: '0.875rem', fontWeight: 300, color: '#666' },
};

export default function Typography({
                                       variant = 'body',
                                       children,
                                       className = '',
                                       style = {},
                                   }: TypographyProps) {
    const Tag = variant.startsWith('h') ? variant : 'p';
    return (
        <Tag
            className={className}
            style={{
                margin: 0,
                color: '#222',
                ...variantMap[variant],
                ...style,
            }}
        >
            {children}
        </Tag>
    );
}
