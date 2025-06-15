type Props = {
    previewText: string;
    previewColor: string;
    previewFontSize: number;
    onTextChange: (text: string) => void;
    onColorChange: (color: string) => void;
    onFontSizeChange: (size: number) => void;
};

export default function PlaygroundControlPanel({
   previewText,
   previewColor,
   previewFontSize,
   onTextChange,
   onColorChange,
   onFontSizeChange,
}: Props) {
    return (
        <div className="control-panel">
            <div className="control-group">
                <label className="control-label">Children</label>
                <input
                    type="text"
                    value={previewText}
                    onChange={(e) => onTextChange(e.target.value)}
                    className="control-input"
                />
            </div>

            <div className="control-group">
                <label className="control-label">Text Color</label>
                <input
                    type="color"
                    value={previewColor}
                    onChange={(e) => onColorChange(e.target.value)}
                    className="control-input"
                    style={{ width: '48px', height: '48px', padding: 0 }}
                />
            </div>

            <div className="control-group">
                <label className="control-label">Font Size</label>
                <input
                    type="range"
                    min={8}
                    max={64}
                    value={previewFontSize}
                    onChange={(e) => onFontSizeChange(Number(e.target.value))}
                    className="control-input"
                />
                <div style={{ fontSize: '0.75rem', marginTop: '4px' }}>{previewFontSize}px</div>
            </div>
        </div>
    );
}
