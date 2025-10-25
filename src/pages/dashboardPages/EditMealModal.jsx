import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const EditMealModal = ({ meal, onClose, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit,  } = useForm({
    defaultValues: meal,
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.put(`/meals/${meal._id}`, data);

      if (response.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Meal Updated Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch && refetch();
        onClose(); 
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed to update meal",
        text: error.message,
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6">
        <h2 className="text-xl font-semibold mb-4">Edit Meal</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input
            {...register("mealName", { required: true })}
            className="border rounded w-full p-2"
            placeholder="Meal Name"
          />
          <input
            {...register("price", { required: true })}
            type="number"
            className="border rounded w-full p-2"
            placeholder="Price"
          />
          <textarea
            {...register("description")}
            className="border rounded w-full p-2"
            placeholder="Description"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMealModal;
