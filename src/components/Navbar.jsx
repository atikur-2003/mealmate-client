import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="text-slate-800 font-semibold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="text-slate-800 font-semibold">
          Meals
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="text-slate-800 font-semibold">
          Upcoming Meals
        </NavLink>
      </li>
    </>
  );

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
          <div className="flex items-center">
            <img className="w-14 hidden md:block rounded-full" src={logo} alt="" />
            <span className="text-xl md:text-3xl font-bold text-blue-500">
              MealMate
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="px-3 py-1 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer rounded-lg">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
