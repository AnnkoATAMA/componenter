import React, { Suspense } from 'react';

type Props = {
    componentKey: string;
    modules: Record<string, () => Promise<{ default: React.ComponentType<any> }>>;
    props: any;
    children?: React.ReactNode;
};

export default function ComponentRenderer({ componentKey, modules, props, children }: Props) {
    const LazyComponent = React.lazy(modules[componentKey] as any);
    return (
        <div style={{ backgroundColor: 'var(--color-surface)', padding: '24px', borderRadius: 'var(--radius)' }}>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent {...props}>{children}</LazyComponent>
            </Suspense>
        </div>
    );
}
