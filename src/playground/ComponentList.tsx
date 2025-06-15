import React from 'react';
import { Link } from 'react-router-dom';
import { categoryColors } from './categoryColors';

type Props = {
    modules: Record<string, () => Promise<{ default: React.ComponentType<any> }>>;
};

export default function ComponentList({ modules }: Props) {
    return (
        <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px' }}>
                Available Components
            </h2>
            <ul className="component-list fade-in">
                {Object.keys(modules)
                    .map((file) => file.replace('../components/', '').replace('.tsx', ''))
                    .sort()
                    .map((route) => {
                        const category = route.split('/')[0] as keyof typeof categoryColors;
                        const style = categoryColors[category] ?? {
                            color: 'white',
                            bg: 'var(--color-surface)',
                            border: 'transparent',
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
                                        borderRadius: 'var(--radius)',
                                        padding: '12px 16px',
                                        textDecoration: 'none',
                                        boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
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
        </div>
    );
}
