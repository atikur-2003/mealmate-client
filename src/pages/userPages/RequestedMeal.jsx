import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const RequestedMeals = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Fetch requested meals by user email
  const { data: meals = [], refetch } = useQuery({
    queryKey: ["requestedMeals", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/requested-meals?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  // Cancel meal request
  const handleCancel = async (id) => {
    const res = await axiosSecure.delete(`/requested-meals/${id}`);
    if (res.data.deletedCount > 0) {
      toast.success("Meal request cancelled");
      refetch();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl md:text-3xl text-blue-500 font-bold mb-4">My Requested Meals</h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Likes</th>
              <th className="p-2 border">Reviews</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {meals.map((meal, index) => (
              <tr key={meal._id} className="text-center">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{meal.mealTitle}</td>
                <td className="p-2 border">{meal.likes}</td>
                <td className="p-2 border">{meal.reviews_count}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      meal.status === "approved"
                        ? "bg-green-200 text-green-800"
                        : meal.status === "pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {meal.status}
                  </span>
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleCancel(meal._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
            {meals.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No requested meals found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedMeals;
