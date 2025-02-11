import React from 'react';
import './styles.css';

interface TooltipProps {
    text: string;
    position: 'top' | 'bottom' | 'left' | 'right';
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, position, children }) => {
    return (
        <div 
            className="tooltip-container"
        >
            {children}
            <span className={`tooltip-text ${position}`}>{text}</span>
        </div>
    )
}

export default Tooltip;