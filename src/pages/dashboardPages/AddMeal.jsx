import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddMeal = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure()

  const imageHostingKey = import.meta.env.VITE_IMGBB_API_KEY;
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  const onSubmit = async (data) => {
    try {
      // Upload image to imgbb
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const imgbbRes = await axios.post(imageHostingUrl, formData);
      const imageUrl = imgbbRes.data.data.display_url;

      // Construct meal object
      const mealData = {
        title: data.title,
        category: data.category,
        image: imageUrl,
        description: data.description,
        price: parseFloat(data.price),
        postTime: data.postTime,
        distributorName: user?.displayName,
        distributorEmail: user?.email,
        rating: 0,
        likes: 0,
        reviews_count: 0,
      };

      // Save to DB
      const res = await axiosSecure.post('/meals', mealData);
      if (res.data.insertedId) {
        Swal.fire("Success", "Meal added successfully", "success");
        reset();
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-base-200 p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Meal</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 space-x-2">
        <input {...register("title", { required: true })} placeholder="Meal Title" className="input focus:outline-none focus:border focus:border-blue-500" />

        <input {...register("category", { required: true })} placeholder="Category (Breakfast/Lunch/Dinner)" className="input focus:outline-none focus:border focus:border-blue-500" />


        <textarea {...register("description", { required: true })} placeholder="Meal Description" className="input focus:outline-none focus:border focus:border-blue-500" />

        <input type="number" {...register("price", { required: true })} placeholder="Price (৳)" className="input focus:outline-none focus:border focus:border-blue-500" />

        <input type="datetime-local" {...register("postTime", { required: true })} className="input focus:outline-none focus:border focus:border-blue-500" />
        
        {/* Image Upload */}
        <input type="file" {...register("image", { required: true })} accept="image/*" className="input mr-2 focus:outline-none focus:border focus:border-blue-500" />

        {/* Distributor Info */}
        <input value={user?.displayName} readOnly className="input focus:outline-none focus:border focus:border-blue-500" />

        <input value={user?.email} readOnly className=" input focus:outline-none focus:border focus:border-blue-500" />

        <button type="submit" className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg cursor-pointer transition">
          Add Meal
        </button>
      </form>
    </div>
  );
};

export default AddMeal;
