import { useParams } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import dayjs from "dayjs";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const MealDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [reviewText, setReviewText] = useState("");

  // Get meal data
  const { data: meal = {}, isLoading } = useQuery({
    queryKey: ["meal", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meals/${id}`);
      return res.data;
    },
  });

  // Get reviews
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${id}`);
      return res.data;
    },
  });

  // Like button handler
  const likeMutation = useMutation({
    mutationFn: async () => {
      return axiosSecure.post(`/meals/like/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["meal", id]);
      Swal.fire("Liked!");
    },
  });

  // Meal request handler
  const requestMutation = useMutation({
    mutationFn: async () => {
      return axiosSecure.post(`/meal-requests`, {
        mealId: id,
        mealTitle: meal.title,
        requestedBy: user?.email,
        likes: meal.likes,
        reviews_count: meal.reviews_count,
        status: "pending",
        requestTime: new Date(),
      });
    },
    onSuccess: () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Meal request has been sent!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  // Post review
  const reviewMutation = useMutation({
    mutationFn: async () => {
      return axiosSecure.post("/reviews", {
        mealId: id,
        mealTitle: meal.title,
        reviewer: user?.displayName,
        reviewerEmail: user?.email,
        review: reviewText,
        likes:meal.likes,
        time: new Date(),
      });
    },
    onSuccess: () => {
      setReviewText("");
      queryClient.invalidateQueries(["reviews", id]);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Review has been posted!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  const handleLike = () => {
    if (!user) return Swal.fire("Login required");
    likeMutation.mutate();
  };

  const handleRequest = () => {
    if (!user) return Swal.fire("Login required");
    // You may add check here: if (user not subscribed) return;
    requestMutation.mutate();
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!user) return Swal.fire("Login required");
    if (!reviewText.trim()) return Swal.fire("Review cannot be empty");
    reviewMutation.mutate();
  };

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-26">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full rounded-lg shadow-md"
        />

        <div>
          <h2 className="text-3xl text-blue-500 font-bold mb-2">
            {meal.title}
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            Posted: {dayjs(meal.postTime).format("MMMM D, YYYY h:mm A")}
          </p>
          <p className="mb-2">
            <strong>Distributor:</strong> {meal.distributorName}
          </p>
          <p className="mb-4">
            <strong>Email:</strong> {meal.distributorEmail}
          </p>
          <p className="mb-4">
            <strong>Description:</strong> {meal.description}
          </p>
          <p className="mb-4">
            <strong>Ingredients:</strong> {meal.ingredients}
          </p>
          <p className="mb-4">
            <strong>Rating:</strong> {meal.rating ?? 0}
          </p>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleLike}
              className="px-5 py-2 cursor-pointer bg-green-600 text-white rounded hover:bg-green-700"
            >
              👍 Like ({meal.likes || 0})
            </button>

            <button
              onClick={handleRequest}
              className="px-5 py-2 cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Request Meal
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Reviews ({reviews.length})</h3>

        <form onSubmit={handleReviewSubmit} className="mb-6">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full p-3 border rounded-md"
            rows="3"
            placeholder="Write your review..."
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-blue-600"
          >
            Submit Review
          </button>
        </form>

        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="border p-4 rounded-md bg-white dark:bg-slate-800"
            >
              <p className="font-semibold">{review.reviewer}</p>
              <p className="text-sm text-gray-600">
                {dayjs(review.time).format("MMM D, h:mm A")}
              </p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
