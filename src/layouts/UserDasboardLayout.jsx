import { useState } from "react";
import { Link, Outlet } from "react-router";
import {
  FaBars,
  FaUser,
  FaUtensils,
  FaStar,
  FaMoneyBill,
  FaTimes,
} from "react-icons/fa";
import LogoTitle from "../shared/LogoTitle";

const UserDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Top bar for small devices */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 bg-slate-800 text-white shadow">
        <Link to="/">
          <LogoTitle />
        </Link>
        <button onClick={() => setIsSidebarOpen(true)} className="text-white">
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-slate-800 text-white p-4 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0 md:block md:h-screen`}
      >
        {/* Logo & Close button (on small only) */}
        <div className="flex items-center justify-between md:justify-center mb-6">
          <Link to="/">
            <LogoTitle />
          </Link>
          <button
            className="md:hidden text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-4 overflow-y-auto">
          <li>
            <Link
              to="/dashboard/user/my-profile"
              className="flex items-center gap-2 hover:text-blue-400"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaUser /> My Profile
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/user/requested-meal"
              className="flex items-center gap-2 hover:text-blue-400"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaUtensils /> Requested Meals
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/user/my-reviews"
              className="flex items-center gap-2 hover:text-blue-400"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaStar /> My Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/user/my-payments"
              className="flex items-center gap-2 hover:text-blue-400"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaMoneyBill /> Payment History
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default UserDashboardLayout;
