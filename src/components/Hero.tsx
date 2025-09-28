import React from "react";
import { hero } from "../assets";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center gradient-hero relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-hero-pattern"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT: Text */}
        <div className="text-center md:text-left animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
            Stay <span className="text-secondary">Healthy</span>,  
            Stay <span className="text-primary">Fit</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">
            Confident Women 40+ – Wellness & Pre-Menopause Support
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            This isn’t just a blog — it’s a space for you: strong, vibrant, and
            evolving, navigating pre-menopause with courage and curiosity.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#newsletter"
              className="gradient-primary text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-md"
            >
              Subscribe for Wellness Tips
            </a>
            <a
              href="#articles"
              className="border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:border-pink-600 hover:text-pink-600 hover:-translate-y-0.5 transition-all duration-300"
            >
              Read Articles <span>📚</span>
            </a>
          </div>
        </div>

        {/* RIGHT: Image + Floating Cards */}
        <div className="relative flex justify-center animate-fade-in">
          <img
            src={hero}
            alt="Confident Women 40+ Hero"
            className="w-72 h-72 md:w-[28rem] md:h-[30rem] object-contain rounded-2xl shadow-xl bg-white/80"
            loading="eager"
          />

          {/* Floating Cards */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-6 -top-4 sm:-left-12 sm:-top-8 animate-fade-in delay-100">
              <div className="bg-white/90 border border-primary/20 rounded-xl shadow-lg p-3 sm:p-4 max-w-[80vw] sm:max-w-xs text-secondary text-sm sm:text-base font-medium">
                Midlife is not a crisis — it’s a powerful turning point.
              </div>
            </div>
            <div className="absolute right-0 sm:-right-16 top-1/2 -translate-y-1/2 animate-fade-in delay-200">
              <div className="bg-white/90 border border-primary/20 rounded-xl shadow-lg p-3 sm:p-4 max-w-[80vw] sm:max-w-xs text-secondary text-sm sm:text-base font-medium">
                Seeking knowledge, wellness tips, or reassurance?
              </div>
            </div>
            <div className="absolute -left-4 -bottom-4 sm:-left-16 sm:-bottom-12 animate-fade-in delay-300">
              <div className="bg-white/90 border border-primary/20 rounded-xl shadow-lg p-3 sm:p-4 max-w-[80vw] sm:max-w-xs text-secondary text-sm sm:text-base font-medium">
                This platform uplifts, informs, and empowers you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
