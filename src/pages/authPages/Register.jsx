import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import axios, { Axios } from "axios";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const [profilePic, setProfilePic] = useState('');
  const [showPass, setShowPass] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then( async(result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register Successful",
          showConfirmButton: false,
          timer: 1500,
        });

        //update userinfo in mongodb
        const userInfo = {
          email:data.email,
          role: 'user',
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString()
        }

        const userRes = await axios.post('https://assignment-12-server-bay-tau.vercel.app/users', userInfo);
        console.log(userRes.data);

        //update userinfo in firebase
        const userProfile = {
          displayName: data.name,
          photoURL: profilePic
        }
        updateUserProfile(userProfile)
        .then(()=>{
          console.log('profile updated');
        })
        .catch(error =>{
          console.log(error);
        })

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUploadImage = async(e) => {
    const image = e.target.files[0];

    const formData = new FormData();
    formData.append("image", image);

    const imageHostingKey = import.meta.env.VITE_IMGBB_API_KEY;
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

    const res = await axios.post(imageHostingUrl, formData);
    console.log(res.data);
    const imageUrl = res.data.data.display_url;
    setProfilePic(imageUrl);
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
                className="input focus:outline-none focus:border-blue-500"
                placeholder="Enter Your Name"
              />

              {errors.name?.type === "required" && (
                <p className="text-red-500 text-base">Name is required</p>
              )}

              <label className="label text-lg font-semibold">Phot URL</label>
              <input
                onChange={handleUploadImage}
                type="file"
                className="input focus:outline-none focus:border-blue-500"
                placeholder="Enter Profile Picture"
              />

              <label className="label text-lg font-semibold">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input focus:outline-none focus:border-blue-500"
                placeholder="Enter Email"
              />

              {errors.email?.type === "required" && (
                <p className="text-red-500 text-base">Email is required</p>
              )}

              <label className="label text-lg font-semibold">Password</label>
              <div className="relative">
                <input
                type={showPass ? "text" : "password"}
                {...register("password", { required: true, minLength: 6, pattern: /(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]/})}
                className="input focus:outline-none focus:border-blue-500"
                placeholder="Enter Password"
              />
              <button
                onClick={() => {
                  setShowPass(!showPass);
                }}
                className="btn btn-xs absolute right-5 top-2 z-10"
              >
                {showPass ? <FaRegEye></FaRegEye>: <FaEyeSlash></FaEyeSlash>}
              </button>
              </div>

              {errors.password?.type === "required" && (
                <p className="text-red-500 text-base">Password is required</p>
              )}

              {errors.password?.type === "pattern" && (
                <p className="text-red-500 text-base">
                  Password must have one uppercase, one lowercase 
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-base">
                  Password must be at least 6 character or longer 
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
