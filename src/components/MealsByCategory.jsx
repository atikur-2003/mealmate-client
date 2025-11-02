import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "./Loading";
import { motion } from "framer-motion";

const MealsByCategory = () => {
  const [selected, setSelected] = useState("All");
  const axiosSecure = useAxiosSecure();

  const { data: meals = [], isLoading } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/meals");
      return res.data;
    },
  });

  const filterMeals = (category) => {
    if (category === "All") return meals;
    return meals.filter(
      (meal) => meal.category.toLowerCase() === category.toLowerCase()
    );
  };

  const tabs = ["All", "Breakfast", "Lunch", "Dinner"];

  if (isLoading) return <Loading></Loading>;

  return (
    <section className="my-16 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl text-blue-500 font-bold text-center mb-8">
          Meals by Category
        </h2>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelected(tab)}
              className={`px-5 py-2 rounded-full border text-sm transition-all font-semibold cursor-pointer hover:bg-blue-500 hover:text-white ${
                selected === tab
                  ? "bg-blue-500 text-white border-none"
                  : "border-blue-500 text-blue-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Meals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterMeals(selected)
          .slice(0, 3)
          .map((meal) => (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeIn", delay:0.3 }}
              viewport={{ once: true }}
              key={meal._id}
              className="rounded-lg overflow-hidden shadow-lg bg-base-200 p-5 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={meal.image}
                alt={meal.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="py-4">
                <h3 className="text-xl font-semibold mb-2">{meal.title}</h3>
                <p>
                  <strong>Category: </strong>
                  {meal.category}
                </p>

                {/* <p className="text-sm mt-1 text-gray-600 dark:text-gray-300 mb-2">
                  Rating: {meal.rating ?? 0}
                </p> */}
                <p className="text-lg font-bold text-primary">৳{meal.price}</p>
                <Link
                  to={`/meal/${meal._id}`}
                  className="inline-block mt-3 px-4 py-2 border  border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default MealsByCategory;
