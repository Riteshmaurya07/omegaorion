import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="app-footer text-center py-3 text-muted small">
            <p>&copy; {new Date().getFullYear()} CORE Assignment. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
