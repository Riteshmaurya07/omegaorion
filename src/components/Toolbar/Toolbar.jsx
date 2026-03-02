import React from 'react';
import { FiSearch, FiDownload, FiFilter, FiPlus, FiGrid, FiList, FiGitMerge } from 'react-icons/fi';
import Button from '../Button/Button';

export default function Toolbar() {
    return (
        <div className="toolbar d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <div className="search-bar position-relative">
                <FiSearch className="position-absolute top-50 translate-middle-y text-muted ms-3" />
                <input
                    type="text"
                    className="form-control rounded-pill ps-5 pe-4 w-100"
                    placeholder="Search by Employee Name or Number"
                />
            </div>

            <div className="actions d-flex gap-2 align-items-center">
                <Button variant="outline" className="custom-btn-icon">
                    <FiDownload size={18} />
                </Button>
                <Button variant="outline" className="custom-btn-icon">
                    <FiFilter size={18} />
                </Button>
                <Button variant="primary" className="custom-btn-icon text-white">
                    <FiPlus size={20} />
                </Button>

                <div className="view-toggle d-flex bg-light rounded px-2 py-1 ms-2 border">
                    <button className="btn btn-sm btn-white shadow-sm p-1 rounded me-1">
                        <FiGrid size={16} />
                    </button>
                    <button className="btn btn-sm text-muted p-1 border-0 hover-bg-light rounded">
                        <FiList size={16} />
                    </button>
                    <button className="btn btn-sm text-muted p-1 border-0 hover-bg-light rounded ms-1">
                        <FiGitMerge size={16} className="rotate-90" />
                    </button>
                </div>
            </div>
        </div>
    );
}
