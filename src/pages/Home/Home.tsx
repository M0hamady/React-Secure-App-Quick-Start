// src/pages/Home/Home.tsx
import React from 'react';
import Header from '../../components/Header';
import Features from '../../components/Features';
import HeroSection from './Components/HeroSection';
import Introduction from './Components/Introduction';
import FruitsAndVeggies from './Components/FruitsAndVeggies';
import TestimonialsSlider from './Components/TestimonialsSlider';
import WhyDeltaMisr from './Components/WhyDeltaMisr';

const Home: React.FC = () => {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <Introduction />
      <FruitsAndVeggies />
      {/* <TestimonialsSlider /> */}
      <WhyDeltaMisr />
      {/* <Features /> */}
    </div>
  );
};

export default Home;
