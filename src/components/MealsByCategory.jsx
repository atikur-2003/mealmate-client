import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const allMeals = [
  {
    _id: "1",
    title: "Paratha with Dal",
    category: "Breakfast",
    image: "https://i.postimg.cc/FKsy94wn/breakfast1.jpg",
    price: 40,
    rating: 4.6,
  },
  {
    _id: "2",
    title: "Chirer Polao",
    category: "Breakfast",
    image: "https://i.postimg.cc/Dfbqf5YF/breakfast2.jpg",
    price: 40,
    rating: 4.2,
  },
  {
    _id: "3",
    title: "Luchi with Cholar Dal",
    category: "Breakfast",
    image: "https://i.postimg.cc/ryWr2sKw/breakfast3.jpg",
    price: 40,
    rating: 4.4,
  },

  {
    _id: "4",
    title: "Plain Rice with Rui Machher Jhol",
    category: "Lunch",
    image: "https://i.postimg.cc/505QvkcF/lunch1.jpg",
    price: 70,
    rating: 4.7,
  },
  {
    _id: "5",
    title: "Beef Tehari",
    category: "Lunch",
    image: "https://i.postimg.cc/g2ww40Fp/lunch2.jpg",
    price: 120,
    rating: 4.8,
  },
  {
    _id: "6",
    title: "Chicken Curry with Rice",
    category: "Lunch",
    image: "https://i.postimg.cc/DzLSkYwY/lunch3.jpg",
    price: 80,
    rating: 4.5,
  },
  {
    _id: "7",
    title: "Khichuri with Dim Bhuna",
    category: "Dinner",
    image: "https://i.postimg.cc/6qksXz3Y/dinner1.jpg",
    price: 60,
    rating: 4.6,
  },
  {
    _id: "8",
    title: "Polao with Chicken Roast",
    category: "Dinner",
    image: "https://i.postimg.cc/3RqVX9gY/dinner2.jpg",
    price: 100,
    rating: 4.9,
  },
  {
    _id: "9",
    title: "Shemai and Roti",
    category: "Dinner",
    image: "https://i.postimg.cc/90qSJTpT/dinner3.jpg",
    price: 45,
    rating: 4.3,
  },
];



const categories = ["All Meals", "Breakfast", "Lunch", "Dinner"];

const MealsByCategory = () => {
  const [activeCategory, setActiveCategory] = useState("All Meals");
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    if (activeCategory === "All Meals") {
      setFilteredMeals(allMeals);
    } else {
      setFilteredMeals(
        allMeals.filter((meal) => meal.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <div className="py-16 px-4 md:px-12 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Meals by Category
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border font-medium transition 
                ${
                  activeCategory === cat
                    ? "bg-blue-500 text-white cursor-pointer"
                    : "bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer"
                }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Meal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredMeals.slice(0, 3).map((meal) => (
            <div
              key={meal._id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={meal.image}
                alt={meal.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {meal.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Category: {meal.category}
                </p>
                <p className="text-gray-800 dark:text-white font-medium">
                  ৳ {meal.price}
                </p>
                <p className="text-yellow-500 font-semibold">
                  ⭐ {meal.rating}
                </p>
                <Link
                  to={`/meal/${meal._id}`}
                  className="inline-block mt-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealsByCategory;
