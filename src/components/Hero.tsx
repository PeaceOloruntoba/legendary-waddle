import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center gradient-hero relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-pattern"></div>
  <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        <div className="text-center md:text-left animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-6 text-primary drop-shadow-sm">
            Embrace Your{" "}
            <span className="gradient-primary bg-clip-text text-white drop-shadow-sm">
              Power
            </span>
            <br />
            Navigate{" "}
            <span className="gradient-primary bg-clip-text text-white drop-shadow-sm">
              Pre-Menopause
            </span>
            <br />
            with Confidence
          </h1>
          <p className="text-lg text-secondary mb-8 leading-relaxed">
            More than a blog – a transformative space for strong, vibrant women
            navigating midlife changes with courage, wisdom, and community
            support.
          </p>
          <div className="flex justify-center md:justify-start gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary drop-shadow-sm">10K+</div>
              <div className="text-sm text-secondary/80 uppercase tracking-wide">
                Women Empowered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary drop-shadow-sm">500+</div>
              <div className="text-sm text-secondary/80 uppercase tracking-wide">
                Wellness Tips
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary drop-shadow-sm">24/7</div>
              <div className="text-sm text-secondary/80 uppercase tracking-wide">
                Community Support
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#about"
              className="gradient-primary text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 shadow-md"
            >
              Start Your Journey <span>→</span>
            </a>
            <a
              href="#articles"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:border-primary/60 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              Read Articles <span>📚</span>
            </a>
          </div>
        </div>
        <div className="relative animate-fade-in">
          <div className="gradient-primary text-white flex items-center justify-center flex-col gap-2 rounded-2xl shadow-2xl h-[600px]">
            <div className="text-5xl opacity-90 drop-shadow">🌸</div>
            <div className="text-center font-semibold drop-shadow-sm">
              Confident Woman
              <br />
              Embracing Her Power
            </div>
          </div>
          <div className="absolute top-[10%] -right-[10%] w-48 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl hidden md:block">
            <h4 className="text-primary text-sm uppercase tracking-wide mb-2">
              Wellness Focus
            </h4>
            <p className="text-secondary/90 text-sm">
              Natural hormone balance and holistic health approaches
            </p>
          </div>
          <div className="absolute bottom-[20%] -left-[10%] w-44 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl hidden md:block">
            <h4 className="text-primary text-sm uppercase tracking-wide mb-2">
              Supportive Community
            </h4>
            <p className="text-secondary/90 text-sm">
              Connect with like-minded women on similar journeys
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
