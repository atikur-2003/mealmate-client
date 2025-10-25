import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaEye, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Loading from '../../components/Loading';

const AllReviews = () => {
  const axiosSecure = useAxiosSecure();

  const { data: reviews = [], refetch, isLoading } = useQuery({
    queryKey: ['allReviews'],
    queryFn: async () => {
      const res = await axiosSecure.get('/reviews');
      return res.data;
    }
  });

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Delete this review?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    });

    if (confirm.isConfirmed) {
      const res = await axiosSecure.delete(`/reviews/${id}`);
      if (res.data.deletedCount > 0) {
        Swal.fire('Deleted!', 'The review has been removed.', 'success');
        refetch();
      }
    }
  };

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Reviews</h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border">
          <thead>
            <tr className="text-left">
              <th className="p-2">Meal Title</th>
              <th className="p-2">Likes</th>
              <th className="p-2">Review</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review._id} className="border-t">
                <td className="p-2">{review.mealTitle}</td>
                <td className="p-2">{review.likes}</td>
                <td className="p-2 w-100">{review.review}</td>
                <td className="p-2 space-x-2">
                  <a
                    href={`/meal/${review.mealId}`}
                    className="text-blue-500 hover:underline inline-block"
                  >
                    <FaEye />
                  </a>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="text-red-500 hover:underline"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReviews;
