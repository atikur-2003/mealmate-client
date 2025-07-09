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
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="lg:hidden">
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
            <img className="w-14 -mr-3 rounded-full" src={logo} alt="" />
            <span className="text-xl md:text-2xl font-bold text-blue-500">
              MealMate
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
