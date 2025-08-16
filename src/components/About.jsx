import React from "react";

const About = () => {
  return (
    <div id="about" className="my-10">
      <section className="mb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-blue-500 font-bold mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl dark:text-gray-300">
          Welcome to <span className="font-semibold text-blue-500">QueryNest</span>, your
          go-to platform for sharing and discovering the best product
          recommendations from real users like you. You can post your query here
          and can find your best solution.
        </p>
      </section>
    </div>
  );
};

export default About;
