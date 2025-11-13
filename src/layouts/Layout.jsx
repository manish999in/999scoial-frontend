// src/layouts/Layout.jsx
import React from "react";
import Sidebar from "../components/Sidebar";

function Layout({ children }) {
    return (
        <div className="container-fluid">
            <div className="row min-vh-100">
                
                {/* Sidebar */}
                <aside className="col-md-3 col-lg-2 d-none d-md-block bg-light p-0">
                    <div 
                        className="position-sticky" 
                        style={{ top: 0, height: "100vh", overflowY: "auto" }}
                    >
                        <Sidebar />
                    </div>
                </aside>

                {/* Main Content */}
                <main className="col-12 col-md-9 col-lg-10 p-0">
                    {children}
                </main>
            </div>
        </div>
    );
}


export default Layout;
