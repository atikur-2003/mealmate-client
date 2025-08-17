import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "../components/Loading";
import Swal from "sweetalert2";

const UpcomingMeals = () => {
  const { user } = useAuth();
  const [likedMeals, setLikedMeals] = useState([]);
  const axiosSecure = useAxiosSecure();

  const {
    data: meals = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["upcomingMeals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/upcoming-meals");
      return res.data;
    },
  });

  const handleLike = async (mealId) => {
    if (!user || user.badge !== "premium") {
      return toast.error("Only premium users can like meals");
    }

    if (likedMeals.includes(mealId)) {
      return toast.error("You already liked this meal");
    }

    try {
      const res = await axiosSecure.patch(`/meals/${mealId}/like`, {
        userEmail: user.email,
      });

      if (res.data.modifiedCount > 0) {
        Swal.fire("Liked the meal!");
        setLikedMeals((prev) => [...prev, mealId]);
        refetch();
      }
    } catch (error) {
      console.error("Error liking meal:", error);
      toast.error("Failed to like meal");
    }
  };

  if (isLoading) return <Loading></Loading>;

  if (!meals.length)
    return (
      <div className="pt-30 text-center">
        <h1 className= "text-2xl text-blue-500 font-bold">No Upcoming Meal Available</h1>
      </div>
    );

  return (
    <div className="grid py-30 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {meals.map((meal) => (
        <div
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

          <button
            onClick={() => handleLike(meal._id)}
            disabled={likedMeals.includes(meal._id)}
            className={`w-full mt-2 px-4 py-2 border border-blue-500 text-blue-500 cursor-pointer rounded-lg ${
              likedMeals.includes(meal._id)
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-blue-500 hover:text-white"
            }`}
          >
            {likedMeals.includes(meal._id) ? "Liked" : "Like"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default UpcomingMeals;
