import React from "react";
import logo from '../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
      <aside>
       <img className="w-20 rounded-full" src={logo} alt="" />
        <p className="text-2xl font-bold">
          MealMate
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://facebook.com" target="_blank">
          <FaFacebook size={25}></FaFacebook>
          </a>
        <a href="https://instagram.com" target="_blank">
            <FaInstagram size={25}></FaInstagram>
            
          </a>
         <a href="https://youtube.com" target="_blank">
            <FaYoutube size={25}></FaYoutube>
          </a>
         <a href="https://x.com" target="_blank">
            <FaTwitter size={25}></FaTwitter>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
