import React from "react";
import bannerImg1 from "../assets/images/banner1.avif";
import bannerImg2 from "../assets/images/banner2.avif";
import bannerImg3 from "../assets/images/banner3.avif";
import bannerImg4 from "../assets/images/banner4.avif";
import bannerImg5 from "../assets/images/banner5.avif";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-900 my-20 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Welcome to <span className="text-blue-500">MealMate</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Manage your hostel meals, upgrade your membership, and enjoy a
            smarter campus life.
          </p>

          {/* Search Box */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search meals..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white"
            />
            <button className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-blue-600 transition duration-200">
              Search
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full">
         <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3500}
            showArrows={false}
         >
            <div>
                <img className="rounded-lg" src={bannerImg1} alt="" />
            </div>
            <div>
                <img className="rounded-lg" src={bannerImg2} alt="" />
            </div>
            <div>
                <img className="rounded-lg" src={bannerImg3} alt="" />
            </div>
            <div>
                <img className="rounded-lg" src={bannerImg4} alt="" />
            </div>
            <div>
                <img className="rounded-lg" src={bannerImg5} alt="" />
            </div>
         </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Banner;
