import React from 'react';
import {
    FiHome, FiUser, FiUsers, FiBriefcase, FiFolder, FiUserPlus,
    FiBarChart2, FiAward, FiMic, FiHelpCircle, FiTool, FiShield
} from 'react-icons/fi';

export const employees = [
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

export const menuItems = [
    { name: 'Home', icon: <FiHome /> },
    { name: 'My Info', icon: <FiUser />, hasSub: true },
    { name: 'People', icon: <FiUsers /> },
    { name: 'Team Management', icon: <FiBriefcase />, hasSub: true },
    { name: 'Project Setup', icon: <FiFolder />, hasSub: true },
    { name: 'Hiring', icon: <FiUserPlus /> },
    { name: 'Report', icon: <FiBarChart2 /> },
];
