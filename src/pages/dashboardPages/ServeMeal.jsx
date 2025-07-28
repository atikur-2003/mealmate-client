import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ServeMeal = () => {
  const axiosSecure = useAxiosSecure();
  const [requestedMeals, setRequestedMeals] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch meals
  const fetchMeals = async () => {
    try {
      const res = await axiosSecure.get(`/requested-meals?search=${search}`);
      setRequestedMeals(res.data);
    } catch (err) {
      console.error("Failed to fetch requested meals:", err);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [search]);

  // Handle serve
  const handleServe = async (id) => {
    try {
      const res = await axiosSecure.patch(`/requested-meals/${id}`, {
        status: "delivered",
      });
      if (res.data.modifiedCount > 0) {
        fetchMeals();
      }
    } catch (err) {
      console.error("Failed to serve meal:", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Serve Requested Meals</h2>

      <input
        type="text"
        placeholder="Search by user name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full md:w-1/3"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">User Email</th>
              <th className="p-2 border">User Name</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {requestedMeals.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No requested meals found
                </td>
              </tr>
            ) : (
              requestedMeals.map((meal) => (
                <tr key={meal._id} className="border-t">
                  <td className="p-2 border">{meal.mealTitle}</td>
                  <td className="p-2 border">{meal.requestedBy}</td>
                  <td className="p-2 border">{meal.name || "N/A"}</td>
                  <td className="p-2 border capitalize">{meal.status}</td>
                  <td className="p-2 border">
                    {meal.status === "delivered" ? (
                      <span className="text-green-500 font-medium">Served</span>
                    ) : (
                      <button
                        onClick={() => handleServe(meal._id)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Serve
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServeMeal;
