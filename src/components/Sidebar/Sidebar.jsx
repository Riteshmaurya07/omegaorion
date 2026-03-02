import React from 'react';
import { FiChevronLeft, FiChevronRight, FiSettings } from 'react-icons/fi';
import { menuItems } from '../../data/mockData';

export default function Sidebar({ isOpen, activeMenu }) {
    return (
        <aside className={`sidebar d-flex flex-column h-100 ${isOpen ? 'show' : ''}`}>
            <div className="sidebar-header d-flex justify-content-between align-items-center mb-4">
                <h2 className="logo m-0 text-white fw-bold">CORE</h2>
                <button className="collapse-btn btn p-0 text-muted">
                    <FiChevronLeft size={20} />
                </button>
            </div>

            <nav className="nav-menu flex-grow-1 overflow-auto">
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        className={`nav-item d-flex align-items-center justify-content-between p-2 mb-2 rounded ${activeMenu === item.name ? 'active' : ''}`}
                    >
                        <div className="d-flex align-items-center gap-3">
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-text text-sm">{item.name}</span>
                        </div>
                        {item.hasSub && <FiChevronRight size={14} className="nav-arrow" />}
                    </div>
                ))}
            </nav>

            <div className="sidebar-footer mt-auto pt-3">
                <div className="nav-item d-flex align-items-center gap-3 p-2 rounded">
                    <FiSettings className="nav-icon" />
                    <span className="nav-text text-sm">Settings</span>
                </div>
            </div>
        </aside>
    );
}
