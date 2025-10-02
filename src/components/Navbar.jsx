import React from "react";
import {
  Link,
  Navigate,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router";
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

  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      // Already on Home: just scroll smoothly to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // If not on Home, NavLink will navigate normally and ScrollToTop will run
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={handleHomeClick}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-semibold ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          Home
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/meals"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-semibold ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upcoming-meals"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-semibold ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Upcoming Meals
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/about-page"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-semibold ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/user-review"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-semibold ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          User Reviews
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
    <div className="navbar bg-base-100 px-2 md:px-7 shadow-sm fixed top-0 left-0 z-10">
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

      <div className="navbar-end space-x-2">
        {/* theme toggle button */}
        <label className="toggle text-base-content mr-3">
          <input
            type="checkbox"
            value="dark"
            className="theme-controller"
            onChange={(e) => {
              const newTheme = e.target.checked ? "dark" : "light";
              document.documentElement.setAttribute("data-theme", newTheme);
              localStorage.setItem("theme", newTheme);
            }}
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>

        {/* user icon */}
        {user ? (
          <Menu as="div" className="relative inline-block text-left ">
            <Menu.Button className="flex items-center focus:outline-none">
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-60 origin-top-right bg-white border border-blue-500 rounded shadow-lg z-50">
              <div className="px-4 py-2 border-b border-blue-500 font-medium text-gray-700">
                {user.displayName}
              </div>

              <div className="w-full text-gray-700 text-left px-4 py-2 hover:bg-gray-100">
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
