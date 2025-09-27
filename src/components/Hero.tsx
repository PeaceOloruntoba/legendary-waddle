import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight text-gray-800">
            Embrace Your <span className="highlight">Power</span><br />
            Navigate <span className="highlight">Pre-Menopause</span><br />
            with Confidence
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            More than a blog – a transformative space for strong, vibrant women
            navigating midlife changes with courage, wisdom, and community support.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#about" className="btn-primary">Start Your Journey →</a>
            <a href="#articles" className="btn-secondary">Read Articles 📚</a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-brand">10K+</p>
              <p className="text-sm text-gray-500">Women Empowered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand">500+</p>
              <p className="text-sm text-gray-500">Wellness Tips</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand">24/7</p>
              <p className="text-sm text-gray-500">Community Support</p>
            </div>
          </div>
        </div>

        {/* Right image placeholder */}
        <div className="relative">
          <div className="bg-purple-100 rounded-2xl h-[500px] flex flex-col justify-center items-center shadow-xl">
            <span className="text-6xl">🌸</span>
            <p className="text-gray-700 mt-4">Confident Woman<br />Embracing Her Power</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
