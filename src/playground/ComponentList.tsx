import React from 'react';
import { Link } from 'react-router-dom';
import { categoryColors } from './categoryColors';

type Props = {
    modules: Record<string, () => Promise<{ default: React.ComponentType<any> }>>;
};

export default function ComponentList({ modules }: Props) {
    return (
        <ul className="component-list fade-in">
            {Object.keys(modules)
                .map((file) => file.replace('../components/', '').replace('.tsx', ''))
                .sort()
                .map((route) => {
                    const category = route.split('/')[0] as keyof typeof categoryColors;
                    const style = categoryColors[category] ?? {
                        color: '#333',
                        bg: 'var(--glass-bg)',
                        border: 'var(--glass-border)',
                    };

                    return (
                        <li key={route}>
                            <Link
                                to={route}
                                style={{
                                    display: 'block',
                                    backgroundColor: style.bg,
                                    color: style.color,
                                    border: `1px solid ${style.border}`,
                                    borderRadius: 'var(--glass-radius)',
                                    padding: '12px 16px',
                                    textDecoration: 'none',
                                    boxShadow: 'var(--glass-shadow)',
                                    transition: 'var(--transition)',
                                    fontWeight: 500,
                                }}
                            >
                <span
                    style={{
                        display: 'inline-block',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: style.color,
                        marginRight: '8px',
                        verticalAlign: 'middle',
                    }}
                />
                                {route}
                            </Link>
                        </li>
                    );
                })}
        </ul>
    );
}
