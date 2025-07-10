import React from "react";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContexts";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen pl-7 md:l-0">
      
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mr-10">
        <div className="card-body">
          <div className="text-center my-5">
            <h1 className="text-xl font-bold text-blue-500">
              Register Your Account Here
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset">
              <label className="label text-lg font-semibold">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input"
                placeholder="Enter Name"
              />

              {errors.name?.type === "required" && (
                <p className="text-red-500 text-base">Name is required</p>
              )}

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
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className="input"
                placeholder="Enter Password"
              />

              {errors.password?.type === "required" && (
                <p className="text-red-500 text-base">Password is required</p>
              )}

              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-base">
                  Password must 6 character or longer
                </p>
              )}

              <p className="text-base my-1">
                Already have an account?{" "}
                <Link to="/login" className="underline text-blue-500">
                  Login here
                </Link>
              </p>
              <button className="btn border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                Register
              </button>
            </fieldset>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
