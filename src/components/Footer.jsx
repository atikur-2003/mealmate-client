import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import LogoTitle from "../shared/LogoTitle";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-slate-800 text-neutral-content p-6 md:p-10">
      <aside>
        <div className="flex gap-3">
          <img src={logo} className="w-10 md:hidden bg-white rounded-full" alt="" />
          <LogoTitle></LogoTitle>
        </div>
        <p className='text-base font-medium'>
          Providing quality and affordable meal.
        </p>
        <p className='text-base font-medium'>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <h3 className="text-lg font-semibold">Join Us</h3>
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
