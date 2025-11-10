// src/layouts/Layout.jsx
import React from "react";
import Sidebar from "../components/Sidebar";

function Layout({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">

        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 d-none d-md-block">
          <div className="position-sticky" style={{ top: 0, height: "100vh", overflowY: "auto" }}>
            <Sidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 p-3">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
