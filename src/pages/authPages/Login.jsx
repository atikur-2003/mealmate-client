import React from "react";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
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
        console.log(error);
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
                {...register("email")}
                className="input"
                placeholder="Enter Email"
              />

              <label className="label text-lg font-semibold">Password</label>
              <input
                type="password"
                {...register("password")}
                className="input"
                placeholder="Enter Password"
              />

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
