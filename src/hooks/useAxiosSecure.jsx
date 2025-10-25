import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  // baseURL: `https://assignment-12-server-bay-tau.vercel.app`,
  baseURL: `http://localhost:5000`,
});

const useAxiosSecure = () => {
  const { user,} = useAuth();

  useEffect(() => {
    if (!user) return;

    const setupInterceptor = async () => {
      const token = await user.getIdToken();

      axiosSecure.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${token}`;
          return config;
        },
        (error) => Promise.reject(error)
      );
    };

    setupInterceptor();
  }, [user]);

  axiosSecure.interceptors.response.use(
    (res) => res,
    (error) => {
      console.log("inside interceptor", error.response?.status);

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
