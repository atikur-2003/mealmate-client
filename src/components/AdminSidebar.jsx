import { Link, NavLink } from "react-router";
import { FaUsers, FaPlus, FaUtensils, FaList, FaHome,FaConciergeBell,
  FaCalendarAlt, } from "react-icons/fa";
import LogoTitle from "../shared/LogoTitle";

const AdminSidebar = () => {
  return (
    <aside className="w-full md:w-64 h-full bg-slate-800 text-white fixed md:static top-0 left-0 z-50">
      <Link to="/">
        <div className="p-6 border-b border-slate-600">
          <LogoTitle></LogoTitle>
        </div>
      </Link>
      <nav className="flex flex-col p-4 space-y-3">
        <NavLink to="/dashboard/admin/admin-profile" className="hover:text-primary flex items-center gap-2">
          <FaHome /> Profile
        </NavLink>
        <NavLink to="/dashboard/admin/add-meal" className="hover:text-primary flex items-center gap-2">
          <FaPlus /> Add Meal
        </NavLink>
        <NavLink to="/dashboard/admin/all-meals" className="hover:text-primary flex items-center gap-2">
          <FaList /> All Meals
        </NavLink>
        <NavLink to="/dashboard/admin/manage-users" className="hover:text-primary flex items-center gap-2">
          <FaUsers /> Manage Users
        </NavLink>
        <NavLink to="/dashboard/admin/all-reviews" className="hover:text-primary flex items-center gap-2">
          <FaUtensils /> All Reviews
        </NavLink>
        <NavLink to="/dashboard/admin/serve-meal" className="hover:text-primary flex items-center gap-2">
          <FaConciergeBell /> Serve Meals
        </NavLink>
        <NavLink to="/dashboard/admin/upcoming-meals" className="hover:text-primary flex items-center gap-2">
          <FaCalendarAlt /> Upcoming Meals
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
