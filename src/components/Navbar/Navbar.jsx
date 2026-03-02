import React from 'react';
import './Navbar.css';
import { FiEdit, FiMail, FiMenu } from 'react-icons/fi';

export default function Navbar({ title, onMenuClick }) {
    return (
        <header className="top-navbar d-flex align-items-center justify-content-between px-4 py-3">
            <div className="d-flex align-items-center gap-2">
                <button className="btn d-lg-none p-0 me-2 border-0" onClick={onMenuClick}>
                    <FiMenu size={24} />
                </button>
                <h1 className="navbar-title m-0 fs-5">{title}</h1>
            </div>
            <div className="navbar-actions d-flex align-items-center gap-3">
                <span className="time-display text-muted small">HST 02:03:02</span>
                <button className="icon-btn btn btn-light rounded-circle p-2 shadow-sm d-flex align-items-center justify-content-center">
                    <FiEdit size={16} />
                </button>
                <button className="icon-btn btn btn-light rounded-circle p-2 shadow-sm d-flex align-items-center justify-content-center position-relative">
                    <FiMail size={16} />
                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                        <span className="visually-hidden">New alerts</span>
                    </span>
                </button>
                <div className="user-avatar ms-2">
                    <img src="https://i.pravatar.cc/150?u=admin" alt="User avatar" />
                </div>
            </div>
        </header>
    );
}
