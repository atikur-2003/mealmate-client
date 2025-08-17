import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import PricingSection from "../components/PricingSection";
import MealsByCategory from "../components/MealsByCategory";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import MealReviews from "../components/MealReviews";
import Testimonials from "../components/Testimonials";
import Loading from "../components/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Banner></Banner>
      <MealsByCategory></MealsByCategory>
      <MealReviews></MealReviews>
      <PricingSection></PricingSection>
      <HowItWorks></HowItWorks>
      <About></About>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
