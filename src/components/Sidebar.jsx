import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import icon from "../utils/icons";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ correct hook usage

  // ✅ Logout handler
  const userLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      await fetch("https://nine99social.onrender.com/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // ✅ Remove token and redirect
      localStorage.removeItem("token");
      navigate("/"); // ✅ use navigate, not navigator
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const menuItems = [
    { iconClass: icon.house, label: "Home", path: "/dashboard" },
    { iconClass: icon.magnifyingglass, label: "Search", path: "/search" },
    { iconClass: icon.compass, label: "Explore", path: "/explore" },
    { iconClass: icon.video, label: "Reels", path: "/reels" },
    { iconClass: icon.message, label: "Messages", path: "/messages" },
    { iconClass: icon.heart, label: "Notifications", path: "/notifications" },
    { iconClass: icon.plus, label: "Create", path: "/create" },
    { iconClass: icon.user, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">Instagram</div>

      {/* Menu */}
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`sidebar-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <Link to={item.path}>
              <i className={item.iconClass}></i>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}

        {/* ✅ Logout Button */}
        <li className="sidebar-item">
          <button onClick={userLogout} className="logout-btn">
            <i className={icon.logout}></i> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
