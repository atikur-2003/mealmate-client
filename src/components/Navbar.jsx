import React from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router";
import { IoMenu } from "react-icons/io5";
import { Menu } from "@headlessui/react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import LogoTitle from "../shared/LogoTitle";
import useRole from "../hooks/useRole";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [role] = useRole();
  
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="text-slate-800 font-semibold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/meals" className="text-slate-800 font-semibold">
          Meals
        </NavLink>
      </li>
      <li>
        <NavLink to="/upcoming-meals" className="text-slate-800 font-semibold">
          Upcoming Meals
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You Logged Out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-gray-100 shadow-sm fixed top-0 left-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="lg:hidden mr-1">
            <IoMenu size={20}></IoMenu>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        <Link to="/">
          <LogoTitle></LogoTitle>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <Menu as="div" className="relative inline-block text-left ">
            <Menu.Button className="flex items-center focus:outline-none">
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-60 origin-top-right bg-white border rounded shadow-lg z-50">
              <div className="px-4 py-2 border-b font-medium text-gray-700">
                {user.displayName}
              </div>

              <div className="w-full text-left px-4 py-2 hover:bg-gray-100">
                <Link
                  to={
                    role === "admin"
                      ? "/dashboard/admin/admin-profile"
                      : "/dashboard/user/my-profile"
                  }
                >
                  Dashboard
                </Link>
              </div>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLogout}
                    className={`w-full text-left px-4 py-2 ${
                      active ? "bg-gray-100" : ""
                    } text-red-600 cursor-pointer`}
                  >
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ) : (
          <Link
            to="/login"
            className="px-3 py-1 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer rounded-lg mr-2"
          >
            Join Us
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
