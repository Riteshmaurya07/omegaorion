import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import Sidebar from '../../components/Sidebar/Sidebar';
import Toolbar from '../../components/Toolbar/Toolbar';
import { employees } from '../../data/mockData';
import './ScreenOne.css';

export default function ScreenOne() {
    const [activeMenu] = useState('People');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="d-flex screen-container vh-100 overflow-hidden p-3 gap-3">
            {isSidebarOpen && (
                <div
                    className="sidebar-overlay d-lg-none"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <Sidebar isOpen={isSidebarOpen} activeMenu={activeMenu} />

            <main className="main-content flex-grow-1 d-flex flex-column h-100 overflow-hidden">
                <div className="content-wrapper bg-white flex-grow-1 shadow-sm d-flex flex-column overflow-hidden">
                    <Navbar title="People" onMenuClick={() => setIsSidebarOpen(true)} />

                    <div className="content-body p-4 flex-grow-1 d-flex flex-column overflow-hidden">
                        <Toolbar />

                        <div className="employee-grid flex-grow-1 overflow-auto">
                            <div className="row g-4">
                                {employees.map(employee => (
                                    <div key={employee.id} className="col-12 col-sm-6 col-md-4 col-xl-3">
                                        <Card employee={employee} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pagination justify-content-start align-items-center mt-4 pt-3 border-top gap-3">
                            <div className="d-flex align-items-center text-muted small">
                                <span className="me-2">Rows per page:</span>
                                <select className="form-select form-select-sm w-auto border-0 bg-light">
                                    <option>10</option>
                                    <option>50</option>
                                    <option defaultValue>100</option>
                                </select>
                            </div>
                            <div className="text-muted small ms-2">1-12 of 500</div>
                            <div className="d-flex gap-2 ms-2">
                                <button className="btn btn-sm btn-light p-1">
                                    <FiChevronLeft size={16} />
                                </button>
                                <button className="btn btn-sm btn-light p-1">
                                    <FiChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
