import React from "react";
import userLogo from '../assets/images/profile.png'
import money from '../assets/images/money.png'
import request from '../assets/images/request.png'

const HowItWorks = () => {
  return (
    <div className="my-10">
      <section className="mb-16 px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl text-blue-500 font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center py-7 px-5 bg-base-200 rounded-lg shadow-md">
            <div className="mb-5">
              <img src={userLogo} className="w-20" alt="" />
            </div>
            <div className="text-center px-5">
              <h3 className="text-xl text-blue-500 font-semibold mb-3">
              Create An Account
            </h3>
            <p>
              Create a account using Registration form to enjoy our service properly
            </p>
            </div>
          </div>
          <div className="flex flex-col items-center py-7 px-5 bg-base-200 rounded-lg shadow-md">
            <div className="mb-5">
              <img src={money} className="w-20" alt="" />
            </div>
            <div className="text-center px-5">
              <h3 className="text-xl text-blue-500 font-semibold mb-3">
              Buy A Membership
            </h3>
            <p>
              Choose a membership for using our premium service
            </p>
            </div>
          </div>
          <div className="flex flex-col items-center py-7 px-5 bg-base-200 rounded-lg shadow-md">
            <div className="mb-5">
              <img src={request} className="w-20" alt="" />
            </div>
            <div className="text-center px-5">
              <h3 className="text-xl text-blue-500 font-semibold mb-3">
              Request A Meal
            </h3>
            <p>
              Request your favorite meal and enjoy it within some time
            </p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
