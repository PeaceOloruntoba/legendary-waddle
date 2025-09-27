import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
    </>
  );
};

export default Home;