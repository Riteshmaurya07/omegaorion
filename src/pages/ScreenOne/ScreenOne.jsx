import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import './ScreenOne.css';
import {
    FiHome, FiUser, FiUsers, FiBriefcase, FiFolder, FiUserPlus,
    FiBarChart2, FiSettings, FiChevronLeft, FiSearch, FiDownload,
    FiFilter, FiPlus, FiGrid, FiList, FiGitMerge, FiChevronRight,
    FiAward, FiMic, FiHelpCircle, FiTool, FiShield
} from 'react-icons/fi';

// Mock Data
const employees = [
    { id: 1, name: 'Ethan Lee', role: 'IT Specialist', avatar: 'https://i.pravatar.cc/150?u=1', badgeIcon: <FiAward />, statusDots: ['#10b981', '#f59e0b', '#3b82f6', '#10b981'] },
    { id: 2, name: 'Emily Baker', role: 'Marketing Manager', avatar: 'https://i.pravatar.cc/150?u=2', badgeIcon: <FiBarChart2 />, statusDots: ['#10b981', '#3b82f6', '#f59e0b'] },
    { id: 3, name: 'Micheal Shaun', role: 'Sales Director', avatar: 'https://i.pravatar.cc/150?u=3', badgeIcon: <FiBriefcase />, statusDots: ['#f59e0b', '#10b981', '#3b82f6'] },
    { id: 4, name: 'Liam Carter', role: 'Product Designer', avatar: 'https://i.pravatar.cc/150?u=4', badgeIcon: <FiTool />, statusDots: ['#10b981', '#f59e0b', '#3b82f6'] },
    { id: 5, name: 'Grace Kim', role: 'Customer Lead', avatar: 'https://i.pravatar.cc/150?u=5', badgeIcon: <FiMic />, statusDots: ['#f59e0b', '#10b981', '#3b82f6'] },
    { id: 6, name: 'Noah Williams', role: 'Finance Head', avatar: 'https://i.pravatar.cc/150?u=6', badgeIcon: <FiHelpCircle />, statusDots: ['#10b981', '#3b82f6'] },
    { id: 7, name: 'Isabella Rossi', role: 'Operations Manager', avatar: 'https://i.pravatar.cc/150?u=7', badgeIcon: <FiShield />, statusDots: ['#f59e0b', '#10b981', '#3b82f6'] },
    { id: 8, name: 'Ava Thompson', role: 'HR Executive', avatar: 'https://i.pravatar.cc/150?u=8', badgeIcon: <FiUser />, statusDots: ['#10b981', '#f59e0b', '#3b82f6'] },
    { id: 9, name: 'Oliver Davis', role: 'Software Engineer', avatar: 'https://i.pravatar.cc/150?u=9', badgeIcon: <FiTool />, statusDots: ['#3b82f6'] },
    { id: 10, name: 'Sophia Martinez', role: 'Legal Advisor', avatar: 'https://i.pravatar.cc/150?u=10', badgeIcon: <FiAward />, statusDots: ['#10b981', '#f59e0b'] },
    { id: 11, name: 'Mason Garcia', role: 'Content Writer', avatar: 'https://i.pravatar.cc/150?u=11', badgeIcon: <FiMic />, statusDots: ['#10b981', '#f59e0b', '#3b82f6'] },
    { id: 12, name: 'Evelyn Rodriguez', role: 'Data Analyst', avatar: 'https://i.pravatar.cc/150?u=12', badgeIcon: <FiBarChart2 />, statusDots: ['#10b981'] }
];

const ScreenOne = () => {
    const [activeMenu, setActiveMenu] = useState('People');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { name: 'Home', icon: <FiHome /> },
        { name: 'My Info', icon: <FiUser />, hasSub: true },
        { name: 'People', icon: <FiUsers /> },
        { name: 'Team Management', icon: <FiBriefcase />, hasSub: true },
        { name: 'Project Setup', icon: <FiFolder />, hasSub: true },
        { name: 'Hiring', icon: <FiUserPlus /> },
        { name: 'Report', icon: <FiBarChart2 /> },
    ];

    return (
        <div className="d-flex screen-container vh-100 overflow-hidden p-3 gap-3">
            {/* Mobile Overlay */}
            {isSidebarOpen && <div className="sidebar-overlay d-lg-none" onClick={() => setIsSidebarOpen(false)}></div>}

            {/* Sidebar */}
            <aside className={`sidebar d-flex flex-column h-100 ${isSidebarOpen ? 'show' : ''}`}>
                <div className="sidebar-header d-flex justify-content-between align-items-center mb-4">
                    <h2 className="logo m-0 text-white fw-bold">CORE</h2>
                    <button className="collapse-btn btn p-0 text-muted"><FiChevronLeft size={20} /></button>
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

            {/* Main Content Area */}
            <main className="main-content flex-grow-1 d-flex flex-column h-100 overflow-hidden">
                <div className="content-wrapper bg-white flex-grow-1 shadow-sm d-flex flex-column overflow-hidden">
                    <Navbar title="People" onMenuClick={() => setIsSidebarOpen(true)} />

                    <div className="content-body p-4 flex-grow-1 d-flex flex-column overflow-hidden">
                        {/* Toolbar */}
                        <div className="toolbar d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                            <div className="search-bar position-relative">
                                <FiSearch className="position-absolute top-50 translate-middle-y text-muted ms-3" />
                                <input type="text" className="form-control rounded-pill ps-5 pe-4 w-100" placeholder="Search by Employee Name or Number" />
                            </div>

                            <div className="actions d-flex gap-2 align-items-center">
                                <Button variant="outline" className="custom-btn-icon"><FiDownload size={18} /></Button>
                                <Button variant="outline" className="custom-btn-icon"><FiFilter size={18} /></Button>
                                <Button variant="primary" className="custom-btn-icon text-white"><FiPlus size={20} /></Button>

                                <div className="view-toggle d-flex bg-light rounded px-2 py-1 ms-2 border">
                                    <button className="btn btn-sm btn-white shadow-sm p-1 rounded me-1"><FiGrid size={16} /></button>
                                    <button className="btn btn-sm text-muted p-1 border-0 hover-bg-light rounded"><FiList size={16} /></button>
                                    <button className="btn btn-sm text-muted p-1 border-0 hover-bg-light rounded ms-1"><FiGitMerge size={16} className="rotate-90" /></button>
                                </div>
                            </div>
                        </div>

                        {/* Employee Grid */}
                        <div className="employee-grid flex-grow-1 overflow-auto">
                            <div className="row g-4">
                                {employees.map(employee => (
                                    <div key={employee.id} className="col-12 col-sm-6 col-md-4 col-xl-3">
                                        <Card employee={employee} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="pagination justify-content-start align-items-center mt-4 pt-3 border-top gap-3">
                            <div className="d-flex align-items-center text-muted small">
                                <span className="me-2">Rows per page:</span>
                                <select className="form-select form-select-sm w-auto border-0 bg-light">
                                    <option>10</option>
                                    <option>50</option>
                                    <option defaultValue>100</option>
                                </select>
                            </div>
                            <div className="text-muted small ms-2">
                                1-12 of 500
                            </div>
                            <div className="d-flex gap-2 ms-2">
                                <button className="btn btn-sm btn-light p-1"><FiChevronLeft size={16} /></button>
                                <button className="btn btn-sm btn-light p-1"><FiChevronRight size={16} /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default ScreenOne;
