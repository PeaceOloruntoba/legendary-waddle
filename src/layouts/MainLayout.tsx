import React from 'react';
import LoadingOverlay from '../components/LoadingOverlay';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LoadingOverlay />
      <Header />
      <main className="flex-grow md:pt-1 pt-16">
        <Outlet />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;