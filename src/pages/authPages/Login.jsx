import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [activeTab, setActiveTab] = useState("user");

  // default admin credentials
  const ADMIN_EMAIL = "atikur947382@gmail.com";
  const ADMIN_PASSWORD = "Atikur123";

  // user login handle
  const onSubmit = (data) => {
    console.log(data);
    setError("");
    login(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  // admin login handle
  const handleAdminLogin = () => {
    setError("");
    login(ADMIN_EMAIL, ADMIN_PASSWORD)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <div className="text-center my-3">
            <h1 className="text-xl md:text-2xl font-bold text-blue-500">
              Login Your Account
            </h1>
            <div className="mt-7 space-x-5">
              <button
                onClick={() => setActiveTab("user")}
                className={`px-3 py-1  rounded-full cursor-pointer  transition duration-300 ${
                  activeTab === "user"
                    ? "bg-blue-500 text-white"
                    : "border border-blue-500 text-blue-500"
                }`}
              >
                login as user{" "}
              </button>
              <button
                onClick={() => setActiveTab("admin")}
                className={`px-3 py-1  rounded-full cursor-pointer  transition duration-300 ${
                  activeTab === "admin"
                    ? "bg-blue-500 text-white"
                    : "border border-blue-500 text-blue-500"
                }`}
              >
                login as admin
              </button>
            </div>
          </div>
          {activeTab === "user" && (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                  <label className="label text-lg font-semibold">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="input w-full focus:outline-none focus:border-blue-500"
                    placeholder="Enter Email"
                  />

                  {errors.email?.type === "required" && (
                    <p className="text-red-500 text-base">Email is required</p>
                  )}

                  <label className="label text-lg font-semibold">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                      className="input w-full focus:outline-none focus:border-blue-500"
                      placeholder="Enter Password "
                    />
                    <button
                      onClick={() => {
                        setShowPass(!showPass);
                      }}
                      className="btn btn-xs absolute right-5 top-2 z-10"
                    >
                      {showPass ? (
                        <FaRegEye></FaRegEye>
                      ) : (
                        <FaEyeSlash></FaEyeSlash>
                      )}
                    </button>
                  </div>

                  {errors && <p className="text-red-500">{error}</p>}

                  <div>
                    <a className="link link-hover text-sm text-gray-600">
                      Forgot password?
                    </a>
                  </div>

                  <button className="btn border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                    Login
                  </button>

                  <p className="text-base">
                    Don't have an account?{" "}
                    <Link to="/register" className="underline text-blue-500">
                      Register here
                    </Link>
                  </p>
                </fieldset>
              </form>
              <SocialLogin></SocialLogin>
            </>
          )}

          {activeTab === "admin" && (
            <>
                <fieldset className="fieldset">
                  <label className="label text-lg font-semibold">Email</label>
                  <input
                    type="email"
                    value={ADMIN_EMAIL}
                    readOnly
                    className="input w-full focus:outline-none focus:border-blue-500"
                    placeholder="Enter Email"
                  />

                  <label className="label text-lg font-semibold">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      value={ADMIN_PASSWORD}
                      readOnly
                      className="input w-full focus:outline-none focus:border-blue-500"
                      placeholder="Enter Password"
                    />
                    <button
                      onClick={() => {
                        setShowPass(!showPass);
                      }}
                      className="btn btn-xs absolute right-5 top-2 z-10"
                    >
                      {showPass ? (
                        <FaRegEye></FaRegEye>
                      ) : (
                        <FaEyeSlash></FaEyeSlash>
                      )}
                    </button>
                  </div>

                  <button onClick={handleAdminLogin} className="btn border mt-4 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                    Login
                  </button>
                </fieldset>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
