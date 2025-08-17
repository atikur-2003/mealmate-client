import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyReviews = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["user-reviews", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews?email=${user.email}`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this review?");
    if (!confirm) return;

    try {
      await axiosSecure.delete(`/reviews/${id}`);
      refetch();
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl md:text-3xl text-blue-500 font-bold mb-4">My Reviews</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Meal Title</th>
              <th>Likes</th>
              <th>Review</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <tr key={review._id} className="border-t">
                  <td>{index + 1}</td>
                  <td>{review.mealTitle}</td>
                  <td>{review.likes}</td>
                  <td>{review.review}</td>
                  <td className="flex justify-center gap-2 py-2">
                    <Link
                      to={`/dashboard/user/edit-review/${review._id}`}
                      className="text-blue-500 hover:text-blue-700"
                      title="Edit"
                    >
                      <FaEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                    <Link
                      to={`/meal/${review.mealId}`}
                      className="text-green-600 hover:text-green-800"
                      title="View Meal"
                    >
                      <FaEye />
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4">
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
