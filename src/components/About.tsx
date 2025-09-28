import React from "react";

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
          <div className="animate-fade-in">
            <div className="gradient-primary text-white flex items-center justify-center flex-col gap-2 rounded-2xl shadow-xl h-[500px]">
              <div className="text-5xl opacity-80">👩‍💼</div>
              <div className="text-center font-semibold">
                Wumi Adegbenro
                <br />
                Your Wellness Guide
              </div>
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
