import React from "react";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router";

const packages = [
  {
    name: "Silver",
    price: 499,
    benefits: ["Request 5 meals/month", "Like upcoming meals", "Basic support"],
    // color: "border-gray-300 bg-white text-gray-800 hover:border-blue-500",
  },
  {
    name: "Gold",
    price: 899,
    benefits: ["Request 15 meals/month", "Priority meal requests", "Access to all reviews"],
    // color: "border-yellow-500 bg-yellow-100 text-yellow-900 hover:border-yellow-600",
  },
  {
    name: "Platinum",
    price: 1299,
    benefits: ["Unlimited meal requests", "Meal tracking & stats", "Premium support"],
    // color: "border-purple-500 bg-purple-100 text-purple-900 hover:border-purple-600",
  },
];

const PricingSection = () => {
  return (
    <div className="py-16 px-4 md:px-12 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">Choose Your Plan</h2>
        <p className="text-gray-600 text-lg font-medium mb-10">
          Upgrade your hostel experience with a premium membership.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl shadow-lg p-6`}
            >
              <h3 className="text-2xl md:text-3xl text-blue-500 font-bold mb-2">{pkg.name} Package</h3>
              <p className="text-2xl font-extrabold mb-4">৳ {pkg.price}</p>
              <ul className="text-left space-y-2 mb-6">
                {pkg.benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="flex items-center">
                        <TiTick></TiTick> <span>{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to={`/checkout/${pkg.name.toLowerCase()}`}
                className="block text-center border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-500 hover:text-white font-semibold"
              >
                Get {pkg.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
