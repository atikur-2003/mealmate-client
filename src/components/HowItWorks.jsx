import React from "react";

const HowItWorks = () => {
  return (
    <div className="my-10">
      {/* How It Works Section */}
      <section className="mb-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-blue-500 font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-base-300 rounded-lg shadow-md">
            <h3 className="text-xl text-blue-500 font-semibold mb-3">
              Ask for Recommendations
            </h3>
            <p>
              Post your query and let our community suggest products based on
              their personal experience.
            </p>
          </div>
          <div className="p-8 bg-base-300 rounded-lg shadow-md">
            <h3 className="text-xl text-blue-500 font-semibold mb-3">
              Share Your Experience
            </h3>
            <p>
              Have a favorite product? Recommend it to others and help them make
              better choices.
            </p>
          </div>
          <div className="p-8 bg-base-300 rounded-lg shadow-md">
            <h3 className="text-xl text-blue-500 font-semibold mb-3">
              Make Informed Decisions
            </h3>
            <p>
              Browse through recommendations, compare options, and pick what’s
              best for you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
