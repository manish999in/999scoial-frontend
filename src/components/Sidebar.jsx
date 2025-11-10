import React from 'react';
import icon from '../utils/icons';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { iconClass: icon.house, label: 'Home', path: '/dashboard' },
    { iconClass: icon.magnifyingglass, label: 'Search', path: '/search' },
    { iconClass: icon.plus, label: 'Create', path: '/create' },
    { iconClass: icon.heart, label: 'Notifications', path: '/notifications' },
    { iconClass: icon.user, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="sidebar d-flex flex-column justify-content-between h-100 py-3">
      <div>
        <div className="logo mb-4">Instagram</div>
        <ul className="list-unstyled">
          {menuItems.map((item, idx) => (
            <li key={idx} className="d-flex align-items-center mb-3 sidebar-item">
              <Link to={item.path}>
              <i className={item.iconClass}></i>
              <span className="ms-2">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer text-muted small">© 2025 Instagram</div>
    </div>
  );
};

export default Sidebar;
