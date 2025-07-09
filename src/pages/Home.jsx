import React from 'react';
import Banner from '../components/Banner';
import FAQ from '../components/FAQ';
import PricingSection from '../components/PricingSection';
import MealsByCategory from '../components/MealsByCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MealsByCategory></MealsByCategory>
            <PricingSection></PricingSection>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;