import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router";
import { FaBars } from "react-icons/fa";
import LogoTitle from "../shared/LogoTitle";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-slate-900 relative">
      {/* Sidebar for desktop */}
      <div className="hidden md:block w-64">
        <AdminSidebar />
      </div>

      {/* Sidebar for mobile (overlay) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 w-64 h-full z-50 bg-slate-800 text-white transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <AdminSidebar />
      </div>

      {/* Content area */}
      <div className="flex-1 p-4  w-full">
        {/* Mobile top bar */}
        <div className="md:hidden flex gap-3 items-center mb-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-800 dark:text-white text-xl"
          >
            <FaBars />
          </button>
          <LogoTitle></LogoTitle>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
