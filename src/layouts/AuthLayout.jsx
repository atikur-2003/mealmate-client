import React from "react";
import { Outlet } from "react-router";
import lottie from "../assets/lottie files/login.json";
import Lottie from "lottie-react";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-[80%]">
      <Navbar></Navbar>
      <div className="hero-content pt-20 flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <Lottie
            style={{
              width: "300px",
            }}
            animationData={lottie}
            loop={true}
          ></Lottie>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
