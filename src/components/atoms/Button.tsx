import React from 'react';
import '../../styles/atoms/Button.module.css';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
};

export default function Button({
   children,
   onClick,
   disabled = false,
   className = '',
   style,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                button 
                ${disabled ? 'button-disabled' : 'button-enabled'} 
                ${className}
            `}
            style={style}
        >
            {children}
        </button>
    );
}
