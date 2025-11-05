import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "../components/Loading";
import { Link } from "react-router";
import { motion } from "framer-motion";

const UpcomingMeals = () => {
  const axiosSecure = useAxiosSecure();

  const { data: meals = [], isLoading } = useQuery({
    queryKey: ["upcomingMeals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/upcoming-meals");
      return res.data;
    },
  });

  if (isLoading) return <Loading></Loading>;

  if (!meals.length)
    return (
      <div className="pt-30 text-center">
        <h1 className="text-xl text-blue-500 font-bold">
          No Upcoming Meal Available
        </h1>
      </div>
    );

  return (
    <div className="py-28 gap-6 px-4 md:px-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-500">All Upcoming Meals</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {meals.map((meal) => (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ once: true }}
            key={meal._id}
            className="bg-base-100 shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <img
              src={meal.image}
              alt={meal.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{meal.title}</h2>
            <p className="text-sm mb-1">
              <strong>Category:</strong> {meal.category}
            </p>
            <p className="text-sm mb-1">
              <strong>Distributor:</strong> {meal.distributorName}
            </p>
            <p className="text-sm mb-1">
              <strong>Scheduled for:</strong>{" "}
              {new Date(meal.postTime).toLocaleString()}
            </p>
            <p className="text-sm mb-2">
              <strong>Likes:</strong> {meal.likes || 0}
            </p>
            <Link to={`/meal/${meal._id}`}>
              <button
                className={`w-full mt-2 px-4 py-2 border border-blue-500 text-blue-500 cursor-pointer rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300`}
              >
                View Details
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMeals;
