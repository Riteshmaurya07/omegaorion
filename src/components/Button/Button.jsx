import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    return (
        <button
            className={`btn custom-btn custom-btn-${variant} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
