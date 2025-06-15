import React, {type JSX} from 'react';

type Variant = 'h1' | 'h2' | 'body' | 'small';

type TypographyProps = {
    variant?: Variant;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

const variantTagMap: Record<Variant, keyof JSX.IntrinsicElements> = {
    h1: 'h1',
    h2: 'h2',
    body: 'p',
    small: 'p',
};

export default function Typography({
   variant = 'body',
   children,
   className = '',
   style,
}: TypographyProps) {
    const Tag = variantTagMap[variant];

    return (
        <Tag
            className={`typography typography-${variant} ${className}`}
            style={style}
        >
            {children}
        </Tag>
    );
}
