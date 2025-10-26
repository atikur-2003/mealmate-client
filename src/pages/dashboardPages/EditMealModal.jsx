import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EditMealModal = ({ meal, onClose, refetch }) => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
  if (meal) {
    const formattedDate = meal.postTime
      ? new Date(meal.postTime).toISOString().split("T")[0]
      : "";

    reset({
      title: meal.title,
      category: meal.category,
      description: meal.description,
      price: meal.price,
      postTime: formattedDate,
    });
  }
}, [meal, reset]);

  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.put(`/meals/${meal._id}`, data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Meal updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
        onClose();
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to update meal", "error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-base-200 rounded-2xl p-6 w-full max-w-3xl max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Meal</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Title */}
            <div>
              <label className="block mb-1 font-medium">Title</label>
              <input
                type="text"
                {...register("title")}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-1 font-medium">Category</label>
              <input
                type="text"
                {...register("category")}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block mb-1 font-medium">Price</label>
              <input
                type="number"
                {...register("price")}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="date"
                {...register("postTime")}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          {/* Description (full width) */}
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              {...register("description")}
              rows="4"
              className="w-full border rounded-lg px-3 py-2"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
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
