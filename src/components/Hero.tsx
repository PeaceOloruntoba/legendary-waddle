import React from "react";
import { hero } from "../assets";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col md:flex-row items-center bg-white/90 gradient-hero relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-pattern"></div>
      {/* Image first on mobile, right on desktop */}
      <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 py-8 md:py-0 animate-fade-in">
        <img
          src={hero}
          alt="Confident Women 40+ Hero"
          className="w-64 h-64 md:w-96 md:h-[28rem] object-contain rounded-2xl shadow-xl bg-white/80"
          loading="eager"
        />
      </div>
      <div className="w-full md:w-1/2 max-w-2xl mx-auto px-4 sm:px-8 py-8 md:py-16 flex flex-col items-center md:items-start justify-center relative z-10 text-center md:text-left animate-fade-in order-2 md:order-1">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4 text-primary drop-shadow-sm">
          Stay Healthy!<span className="text-secondary">Stay Fit!</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">Welcome to Confident Women 40+ – Wellness & Pre-Menopause Support</h2>
        <p className="text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
          This is more than a blog. It's a space built for you, the strong, vibrant, evolving woman navigating the changes of pre-menopause with courage and curiosity.<br className="hidden md:block" />
          At Confident Women 40+, we believe that midlife is not a crisis, it's a powerful turning point. Whether you're seeking knowledge, community, wellness tips, or emotional reassurance, this platform is here to uplift, inform, and empower you every step of the way.
        </p>
        <a
          href="#newsletter"
          className="gradient-primary text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 shadow-md text-lg"
        >
          Subscribe for Wellness Tips
        </a>
      </div>
    </section>
  );
};

export default Hero;
