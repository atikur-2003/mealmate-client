import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
      viewport={{ once: true }}
      className="bg-base-100 px-2 md:px-10 py-10"
    >
      <div className="text-center mb-10">
        <h1 className="text-xl md:text-3xl font-bold text-blue-500">
          Frequently Asked Question
        </h1>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">1. What is MealMate?</div>
        <div className="collapse-content text-sm">
          MealMate is a modern hostel management system designed to help
          students view meals, request food, and leave reviews, while admins
          manage everything efficiently from a dashboard.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          2. How can I request a meal?
        </div>
        <div className="collapse-content text-sm">
          First, you need to log in and purchase a premium package (Silver,
          Gold, or Platinum). Then, on any meal detail page, you can click the
          “Request Meal” button.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          3. How does the subscription system work?
        </div>
        <div className="collapse-content text-sm">
          You can choose from three premium plans—Silver, Gold, or Platinum—from
          the checkout page. After payment via Stripe, your account will be
          upgraded automatically.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          4. What happens after I request a meal?
        </div>
        <div className="collapse-content text-sm">
          Your meal request will be marked as Pending. Once the admin serves the
          meal, its status will change to Delivered, which you can view in your
          dashboard.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          5. How do upcoming meals work?
        </div>
        <div className="collapse-content text-sm">
          Upcoming meals are planned meals that haven’t been served yet. Admins
          can publish them to the main meal list once they gather 10 likes.
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
