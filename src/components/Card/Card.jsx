import React from 'react';
import './Card.css';

export default function Card({ employee }) {
    const { name, role, avatar, statusDots, badgeIcon } = employee;

    return (
        <div className="employee-card p-3 d-flex flex-column align-items-center text-center">
            <div className="avatar-container position-relative mb-3 mt-2">
                <img src={avatar} alt={name} className="employee-avatar rounded-circle" />
                {badgeIcon && (
                    <div className="badge-icon position-absolute bottom-0 end-0 bg-white rounded-circle d-flex align-items-center justify-content-center">
                        {badgeIcon}
                    </div>
                )}
            </div>
            <h6 className="employee-name fw-semibold mb-1">{name}</h6>
            <p className="employee-role text-muted small mb-2">{role}</p>

            <div className="status-dots d-flex gap-1 justify-content-center align-items-center">
                {statusDots.map((color, idx) => (
                    <span
                        key={idx}
                        className="status-dot rounded-circle"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
        </div>
    );
}
