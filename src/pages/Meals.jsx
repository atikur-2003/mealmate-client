import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const axiosSecure = useAxiosSecure();

  const fetchMeals = async () => {
    const res = await axiosSecure.get("/meals", {
      params: {
        search,
        category,
        priceRange,
      },
    });
    return res.data;
  };

  const { data: meals = [], isLoading } = useQuery({
    queryKey: ["meals", search, category, priceRange],
    queryFn: fetchMeals,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-28 ">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl text-blue-500 font-bold mb-7 text-center">
          All Meals Here
        </h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search meals..."
            className="input input-bordered w-full md:w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="select select-bordered w-full md:w-1/4"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>

          <select
            className="select select-bordered w-full md:w-1/4"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="All">All Prices</option>
            <option value="0-100">৳0 - ৳100</option>
            <option value="101-200">৳101 - ৳200</option>
            <option value="201-300">৳201 - ৳300</option>
            <option value="301+">৳301+</option>
          </select>
        </div>
      </motion.div>

      <div>
        {isLoading ? (
          <Loading></Loading>
        ) : meals.length === 0 ? (
          <p className="text-center text-gray-500">No meals found.</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {meals.map((meal) => (
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                viewport={{ once: true }}
                key={meal._id}
                className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="h-52 w-full object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold">{meal.title}</h3>

                  <h3 className="text-xl font-semibold">{meal.category}</h3>

                  <p className="text-sm text-gray-500">
                    Rating: {meal.rating} ⭐
                  </p>
                  <p className="text-lg font-bold mb-3">৳{meal.price}</p>
                  <Link
                    to={`/meal/${meal._id}`}
                    className="border border-blue-500 text-blue-500 px-3 py-2 rounded-lg hover:bg-blue-500 hover:text-white"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Meals;
