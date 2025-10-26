import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "This website is amazing! The meal management system is super easy to use and has helped me stay organized every day.",
  },
  {
    id: 2,
    name: "Michael Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The service is excellent. The team is always responsive and supportive. I love how smooth the whole process is!",
  },
  {
    id: 3,
    name: "Sophia Williams",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "I had a wonderful experience. The meals are well organized and the staff is really friendly. Highly recommended!",
  },
  {
    id: 4,
    name: "David Brown",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    review:
      "Great platform! It’s user-friendly, reliable, and very efficient for managing daily meals. I’m really impressed.",
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="my-24 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl text-blue-500 font-bold mb-8 text-center">
        What Our Users Say
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {testimonials.map((t) => (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            viewport={{ once: true }}
            key={t.id}
            className="flex items-start bg-base-200 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            {/* User image */}
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />

            {/* Content */}
            <div>
              <h3 className="text-lg text-blue-500 font-semibold">{t.name}</h3>
              <p className="mt-2">{t.review}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
