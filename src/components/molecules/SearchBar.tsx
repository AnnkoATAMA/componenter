import React from 'react';

type SearchBarProps = {
    placeholder?: string;
    onSearch: (query: string) => void;
};

export default function SearchBar({ placeholder = "Search...", onSearch }: SearchBarProps) {
    const [value, setValue] = React.useState('');

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch(value.trim());
        }
    };

    const handleClick = () => {
        onSearch(value.trim());
    };

    return (
        <div style={{
            display: 'flex',
            gap: '8px',
            background: 'var(--color-surface-light)',
            padding: '12px 16px',
            borderRadius: 'var(--radius)',
            alignItems: 'center',
        }}>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyPress}
                style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--color-cyan)',
                    background: '#1e1e2f',
                    color: 'white',
                    fontSize: '1rem',
                }}
            />
            <button
                onClick={handleClick}
                style={{
                    padding: '8px 16px',
                    background: 'var(--color-cyan)',
                    color: '#000',
                    borderRadius: 'var(--radius)',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                }}
            >
                Search
            </button>
        </div>
    );
}
