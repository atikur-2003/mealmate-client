import React, { useState } from "react";
import Lottie from "lottie-react";
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

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <div className="text-center my-3">
            <h1 className="text-xl font-bold text-blue-500">
              Login Your Account
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset">
              <label className="label text-lg font-semibold">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Enter Email"
              />

              {errors.email?.type === "required" && (
                <p className="text-red-500 text-base">Email is required</p>
              )}

              <label className="label text-lg font-semibold">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  {...register("password", { required: true, minLength: 6 })}
                  className="input"
                  placeholder="Enter Password"
                />
                <button
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                  className="btn btn-xs absolute right-5 top-2 z-10"
                >
                  {showPass ? <FaRegEye></FaRegEye> : <FaEyeSlash></FaEyeSlash>}
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
        </div>
      </div>
    </div>
  );
};

export default Login;
