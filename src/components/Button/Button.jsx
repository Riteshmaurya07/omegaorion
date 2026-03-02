import React from 'react';
import './Button.css';

export default function Button({ children, variant = 'primary', className = '', ...rest }) {
    const classes = ['btn', 'custom-btn', `custom-btn-${variant}`, className].filter(Boolean).join(' ');

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}
