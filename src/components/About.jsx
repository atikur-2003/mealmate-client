import React from "react";

const About = () => {
  return (
    <div className="my-10">
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

      {/* Mission Section */}
      <section className="mb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-blue-500 font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl">
            Our mission is simple: to create a trustworthy space where people
            can share honest opinions and discover products that truly meet
            their needs. We believe that recommendations should come from real
            experiences, not just advertisements.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-blue-500 font-bold mb-4">Our Values</h2>
          <p className="text-lg mb-6">
            We stand by transparency, trust, and community. Our platform thrives
            on genuine connections and real product experiences.
          </p>
          <ul className="flex flex-wrap justify-center gap-4">
            <li className=" px-4 py-2 bg-base-200 font-semibold text-blue-500 rounded-full shadow">
              Honesty
            </li>
            <li className=" px-4 py-2 bg-base-200 font-semibold text-blue-500 rounded-full shadow">
              Community
            </li>
            <li className=" px-4 py-2 bg-base-200 font-semibold text-blue-500 rounded-full shadow">
              Quality
            </li>
            <li className=" px-4 py-2 bg-base-200 font-semibold text-blue-500 rounded-full shadow">
              Transparency
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
