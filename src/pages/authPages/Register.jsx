import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen pl-7 md:l-0">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mr-10">
        <div className="card-body">
            <div className="text-center my-5">
                <h1 className="text-xl font-bold text-blue-500">Register Your Account Here</h1>
            </div>
          <form>
            <fieldset className="fieldset">

            <label className="label text-lg font-semibold">Name</label>
            <input type="text" className="input" placeholder="Enter Name" />

            <label className="label text-lg font-semibold">Email</label>
            <input type="email" className="input" placeholder="Enter Email" />

            <label className="label text-lg font-semibold">Password</label>
            <input type="password" className="input" placeholder="Enter Password" />

            <div>
              <a className="link link-hover text-base">Forgot password?</a>
            </div>
            <p className="text-base">Already have an account? <Link to='/login' className="underline text-blue-500">Login here</Link></p>
            <button className="btn border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">Register</button>
          </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
