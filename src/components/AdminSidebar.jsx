import { Link, NavLink } from "react-router";
import {
  FaUsers,
  FaPlus,
  FaUtensils,
  FaList,
  FaHome,
  FaConciergeBell,
  FaCalendarAlt,
} from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { GrOverview } from "react-icons/gr";
import LogoTitle from "../shared/LogoTitle";
import logo from "../assets/logo.png";
// import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const AdminSidebar = () => {
  // const {  logOut } = useAuth();
  // const navigate = useNavigate();

  // logout handle function
  // const handleLogout = () => {
  //   logOut()
  //     .then(() => {
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "You Logged Out successfully",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       navigate("/login");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <aside className="w-full md:w-64 h-full bg-slate-800 text-white fixed md:static top-0 left-0 z-50">
      <Link to="/">
        <div className="flex gap-2 p-6 border-b border-slate-600">
          <img
            src={logo}
            className="w-12 md:hidden rounded-full bg-white"
            alt=""
          />
          <LogoTitle></LogoTitle>
        </div>
      </Link>
      <nav className="flex flex-col p-4 space-y-3">
        <NavLink
          to="/dashboard/admin/admin-profile"
          className={({ isActive }) =>
            `hover:text-primary flex items-center gap-2 ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          <FaHome /> Profile
        </NavLink>
        <NavLink
          to="/dashboard/admin/overview"
          className={({ isActive }) =>
            `hover:text-primary flex items-center gap-2 ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          <GrOverview /> Overview
        </NavLink>
        <NavLink
          to="/dashboard/admin/add-meal"
          className={({ isActive }) =>
            `hover:text-primary flex items-center gap-2 ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          <FaPlus /> Add Meal
        </NavLink>
        <NavLink
          to="/dashboard/admin/all-meals"
          className={({ isActive }) =>
            `hover:text-primary flex items-center gap-2 ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          <FaList /> All Meals
        </NavLink>
        <NavLink
          to="/dashboard/admin/manage-users"
          className={({ isActive }) =>
            `hover:text-primary flex items-center gap-2 ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          <FaUsers /> Manage Users
        </NavLink>
        <NavLink
          to="/dashboard/admin/all-reviews"
          className={({ isActive }) =>
            `hover:text-primary flex items-center gap-2 ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          <FaUtensils /> All Reviews
        </NavLink>
        <NavLink
          to="/dashboard/admin/serve-meal"
          className={({ isActive }) =>
            `hover:text-primary flex items-center gap-2 ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          <FaConciergeBell /> Serve Meals
        </NavLink>
        <NavLink
          to="/dashboard/admin/upcoming-meals"
          className={({ isActive }) =>
            `hover:text-primary flex items-center gap-2 ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          <FaCalendarAlt /> Upcoming Meals
        </NavLink>
        {/* <button
          onClick={handleLogout}
          className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
        >
          <LuLogOut /> Logout
        </button> */}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
