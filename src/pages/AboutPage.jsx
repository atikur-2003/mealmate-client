import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
      <section id="about" className="py-12 px-4 md:px-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl text-blue-500 font-bold mb-4">About Us</h1>
          <div className="max-w-4xl mx-auto">
            <p className="mb-4">
              Welcome to{" "}
              <span className="text-blue-500 font-semibold text-lg">
                MealMate
              </span>{" "}
              a Meal Management System! We are dedicated to making daily meal
              planning simple, efficient, and enjoyable. Our platform helps
              users organize meals, track preferences, and stay connected with
              the best dining experiences.
            </p>
            <p className="mb-6">
              Whether you’re a student, professional, or food enthusiast, our
              service is designed to save you time and provide you with
              convenience. We also value your feedback and continuously improve
              based on your suggestions.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 1: Who We Are */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <motion.img
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
          alt="Our Team"
          className="w-full h-70 object-cover rounded-lg shadow-md"
        />
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl text-blue-500 font-semibold mb-4">
            Who We Are
          </h2>
          <p className="leading-relaxed">
            We are a passionate team dedicated to creating solutions that make
            daily meal planning easier and more enjoyable. Our mission is to
            simplify meal management for students, professionals, and families
            alike.
          </p>
        </motion.div>
      </div>

      {/* Section 2: What We Do */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl text-blue-500 font-semibold mb-4">
            What We Do
          </h2>
          <p className="leading-relaxed">
            Our platform allows users to explore meals, read and write reviews,
            and manage their daily food preferences. We continuously innovate to
            provide a seamless experience and make food management smarter.
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
          alt="Meal Service"
          className="w-full h-70 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Section 3: Our Vision */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <motion.img
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
          alt="Vision"
          className="w-full h-70 object-cover rounded-lg shadow-md"
        />
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl text-blue-500 font-semibold mb-4">
            Our Vision
          </h2>
          <p className="leading-relaxed">
            We envision a future where meal management is effortless, healthy,
            and personalized for everyone. By blending technology with
            convenience, we strive to create a platform that truly makes a
            difference in people’s lives.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
