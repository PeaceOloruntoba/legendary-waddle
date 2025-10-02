import React from "react";
import aboutImg from "../assets/images/about.jpg";

const About: React.FC = () => {
  return (
  <section id="about" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-primary">
            Meet Wumi Adegbenro
          </h2>
          <p className="text-lg text-secondary max-w-xl mx-auto">
            Your guide through the transformative journey of pre-menopause and
            midlife wellness
          </p>
        </div>
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-center">
          <div className="animate-fade-in flex flex-col items-center justify-center">
            <img
              src={aboutImg}
              alt="Wumi Adegbenro"
              className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl shadow-xl bg-white/80 mb-4"
              loading="lazy"
            />
            <div className="text-center font-semibold text-primary text-lg md:text-xl">
              Wumi Adegbenro<br />
              <span className="text-secondary text-base font-normal">Your Wellness Guide</span>
            </div>
          </div>
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Empowering Women Through Knowledge & Community
            </h3>
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              At Confident Women 40+, we believe that midlife is not a crisis –
              it's a powerful turning point. This platform is designed to
              uplift, inform, and empower you through every step of your
              pre-menopause journey.
            </p>
            <div className="gradient-hero p-8 rounded-2xl border-l-4 border-primary mb-6">
              <p className="italic text-lg text-primary">
                "Real self-care is not always about doing more. Sometimes it's
                just resting without guilt."
              </p>
            </div>
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              Whether you're seeking knowledge about hormonal changes, looking
              for natural wellness solutions, or simply need a supportive
              community that understands your journey, you've found your home
              here.
            </p>
            <a
              href="#wellness"
              className="gradient-primary text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-md"
            >
              Explore Wellness Tips
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
