import React from "react";
import { Outlet } from "react-router";
import lottie from '../assets/lottie files/login.json'
import Lottie from "lottie-react";

const AuthLayout = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <Lottie
       style={{
            width: '300px'
          }}
          animationData={lottie}
           loop={true}
       ></Lottie>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
