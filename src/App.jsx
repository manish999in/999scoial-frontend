import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ correct import

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Notifications from "./pages/Notifications";
import PostCreate from "./pages/PostCreate";
import Profile from "./pages/Profile";

import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* No Sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Pages with Sidebar */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/search" element={<Layout><Search /></Layout>} />
        <Route path="/notifications" element={<Layout><Notifications /></Layout>} />
        <Route path="/create" element={<Layout><PostCreate /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
