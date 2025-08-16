import React from 'react';
import Banner from '../components/Banner';
import FAQ from '../components/FAQ';
import PricingSection from '../components/PricingSection';
import MealsByCategory from '../components/MealsByCategory';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MealsByCategory></MealsByCategory>
            <PricingSection></PricingSection>
            <HowItWorks></HowItWorks>
            <About></About>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;