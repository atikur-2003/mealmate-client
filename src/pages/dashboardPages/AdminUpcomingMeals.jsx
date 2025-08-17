import { useEffect, useState } from "react";
import { format } from "date-fns";
import { FaPlus } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";

const AdminUpcomingMeals = () => {
  const axiosSecure = useAxiosSecure();
  const [upcomingMeals, setUpcomingMeals] = useState([]);

  // Load upcoming meals sorted by likes
  useEffect(() => {
    axiosSecure.get("/upcoming-meals").then((res) => {
      const sorted = res.data.sort((a, b) => b.likes - a.likes);
      setUpcomingMeals(sorted);
    });
  }, [axiosSecure]);

  
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Upcoming Meals</h2>
        <Link to="/dashboard/admin/add-meal">
          <button className="flex items-center gap-2 cursor-pointer px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">
            <FaPlus /> Add Upcoming Meal
          </button>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border text-sm">
          <thead className="">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Category</th>
              <th className="p-2">Likes</th>
              <th className="p-2">Post Time</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {upcomingMeals.length ? (
              upcomingMeals.map((meal) => (
                <tr key={meal._id} className="border-t text-center">
                  <td className="p-2">{meal.title}</td>
                  <td className="p-2">{meal.category}</td>
                  <td className="p-2">{meal.likes}</td>
                  <td className="p-2">
                    {format(new Date(meal.postTime), "PPP p")}
                  </td>
                  <td className="p-2">
                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Publish
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center">
                  No upcoming meals found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUpcomingMeals;
