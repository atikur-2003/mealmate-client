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
    <div className="w-full bg-gray-100 pt-30 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 ">
            Welcome to <span className="text-blue-500">MealMate</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your hostel meals, upgrade your membership, and enjoy a
            smarter campus life.
          </p>

          {/* Search Box */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search meals..."
              className="w-full px-4 py-2 border border-gray-300  rounded-xl shadow-sm focus:outline-none focus:border-2 focus:border-blue-500 "
            />
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white cursor-pointer">
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
