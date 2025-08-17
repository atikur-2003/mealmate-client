import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "./Loading";
import { Link } from "react-router";

const MealReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axiosSecure.get("/reviews");
        setReviews(res.data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [axiosSecure]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl text-blue-500 font-bold mb-6 text-center">Meal Reviews By User</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="bg-base-200 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-4">
                <img
              src={review.mealImage}
              alt={review.mealTitle}
              className="w-full h-48 object-cover rounded-lg"
            />
            </div>

            <div className="px-5 py-3 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl text-blue-500 font-semibold mb-2">
                  {review.mealTitle}
                </h3>
                <p className="mb-4 text-sm">
                  <span className="font-semibold text-base">
                    Review :{" "}
                  </span>
                  {review.review}
                </p>
                <p className="text-sm -mt-3">
                  <span className="text-base font-semibold">By</span> :{" "}
                  {review.reviewer} ({review.reviewerEmail})
                </p>
                <p>
                  <span className="text-base font-semibold mt-5">
                    Total Likes
                  </span>{" "}
                  : {review.likes}
                </p>
                <Link
                to={`/meal/${review.mealId}`}
                className="mt-3 inline-block px-4 py-2 border  border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                View Details
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MealReviews;
