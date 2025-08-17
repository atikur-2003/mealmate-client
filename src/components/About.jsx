import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <section id="about" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
            alt="About Us"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl text-blue-500 font-bold mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
            Welcome to our Meal Management System! We are dedicated to making
            daily meal planning simple, efficient, and enjoyable. Our platform
            helps users organize meals, track preferences, and stay connected
            with the best dining experiences.
          </p>
          <p className="text-gray-600 mb-6">
            Whether you’re a student, professional, or food enthusiast, our
            service is designed to save you time and provide you with
            convenience. We also value your feedback and continuously improve
            based on your suggestions.
          </p>
          <Link to='/about-details'>
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white cursor-pointer transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
