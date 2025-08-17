import React from 'react';
import Banner from '../components/Banner';
import FAQ from '../components/FAQ';
import PricingSection from '../components/PricingSection';
import MealsByCategory from '../components/MealsByCategory';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import MealReviews from '../components/MealReviews';
import Testimonials from '../components/Testimonials';

const Home = () => {
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