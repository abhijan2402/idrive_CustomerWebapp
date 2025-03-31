import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Aside from "../components/Aside/Aside";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Aside setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Header setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />

        {/* Render Routes Here */}
        <main className="layout-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
