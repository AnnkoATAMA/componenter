import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ComponentList from './ComponentList';
import ComponentRenderer from './ComponentRenderer';
import PlaygroundControlPanel from './PlaygroundControlPanel';
import samplePropsMap from './samplePropsMap.json';
import { getComponentPath, findMatchKey } from './utils';

const modules = import.meta.glob<{ default: React.ComponentType<any> }>(
    '../components/**/*.tsx'
);

export default function ComponentPlayground() {
    const location = useLocation();
    const pathParts = getComponentPath(location.pathname);
    const targetRoute = pathParts.join('/');
    const componentName = pathParts.at(-1)?.toLowerCase() ?? '';
    const matchKey = findMatchKey(modules, targetRoute);
    const sampleProps = (samplePropsMap as Record<string, any>)[componentName] ?? {};

    const [previewText, setPreviewText] = useState('Sample Text');
    const [previewColor, setPreviewColor] = useState('#00e5ff');
    const [previewFontSize, setPreviewFontSize] = useState(16);

    if (!matchKey) {
        if (pathParts.length === 0) return <ComponentList modules={modules} />;
        return <div>Component "{targetRoute}" not found.</div>;
    }

    return (
        <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Link to="/components" style={{ fontSize: '0.875rem', color: '#aaa', textDecoration: 'underline' }}>
                ← Back to list
            </Link>

            <PlaygroundControlPanel
                previewText={previewText}
                previewColor={previewColor}
                previewFontSize={previewFontSize}
                onTextChange={setPreviewText}
                onColorChange={setPreviewColor}
                onFontSizeChange={setPreviewFontSize}
            />

            <ComponentRenderer
                componentKey={matchKey}
                modules={modules}
                props={{ style: { color: previewColor, fontSize: `${previewFontSize}px` }, ...sampleProps }}
                children={previewText}
            />
        </div>
    );
}
