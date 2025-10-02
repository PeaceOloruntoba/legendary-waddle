import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Products from '../components/Products';
import Articles from '../components/Articles';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Products variant='home' />
      <Articles variant='home' />
    </>
  );
};

export default Home;