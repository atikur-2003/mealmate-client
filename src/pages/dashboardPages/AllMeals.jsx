import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Loading from '../../components/Loading';

const AllMeals = () => {
  const [sortBy, setSortBy] = useState('likes');
  const axiosSecure = useAxiosSecure();

  const { data: meals = [], refetch, isLoading } = useQuery({
    queryKey: ['adminMeals', sortBy],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meals?sort=${sortBy}`);
      return res.data;
    }
  });

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this meal?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    });

    if (confirm.isConfirmed) {
      const res = await axiosSecure.delete(`/meals/${id}`);
      if (res.data?.deletedCount > 0) {
        Swal.fire('Deleted!', 'Meal has been deleted.', 'success');
        refetch();
      }
    }
  };

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Meals</h2>

      <div className="mb-4">
        <label className="font-semibold mr-2">Sort By:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="likes">Likes</option>
          <option value="reviews_count">Reviews Count</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border">
          <thead>
            <tr className="text-left">
              <th className="p-2">Title</th>
              <th className="p-2">Likes</th>
              <th className="p-2">Reviews</th>
              <th className="p-2">Rating</th>
              <th className="p-2">Distributor</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {meals.map((meal) => (
              <tr key={meal._id} className="border-t">
                <td className="p-2">{meal.title}</td>
                <td className="p-2">{meal.likes}</td>
                <td className="p-2">{meal.reviews_count}</td>
                <td className="p-2">{meal.rating}</td>
                <td className="p-2">{meal.distributorName}</td>
                <td className="p-2 space-x-2">
                  <button className="text-blue-500 hover:underline">
                    <FaEye />
                  </button>
                  <button className="text-green-500 hover:underline">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(meal._id)}
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

export default AllMeals;
