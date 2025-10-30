import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  console.log(user.email);
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["myReviews", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const handleDelete = async (id) => {
    try {
      const confirm = await Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this review?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      });

      if (confirm.isConfirmed) {
        const res = await axiosSecure.delete(`/reviews/${id}`);
        if (res.data?.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Review Deleted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      }
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl md:text-3xl text-blue-500 font-bold mb-4">
        My Reviews
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-center ">
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
                  <td className="px-2">{index + 1}</td>
                  <td>{review.mealTitle}</td>
                  <td>{review.likes}</td>
                  <td>{review.review}</td>
                  <td className="flex justify-center gap-2 py-2 px-2">
                    <Link
                      to={`/meal/${review.mealId}`}
                      className="text-green-600 hover:text-green-800"
                      title="View Meal"
                    >
                      <FaEye />
                    </Link>

                    <button
                      onClick={() => handleDelete(review._id)}
                      className="text-red-500 cursor-pointer hover:text-red-700"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
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
