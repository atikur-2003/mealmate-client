import React from "react";
import logo from "../assets/logo.png";

const LogoTitle = () => {
  return (
    <div className="flex gap-2 items-center">
      <img className="w-10 rounded-full" src={logo} alt="" />
      <h1 className="text-xl md:text-3xl font-bold text-blue-500">MealMate</h1>
    </div>
  );
};

export default LogoTitle;
