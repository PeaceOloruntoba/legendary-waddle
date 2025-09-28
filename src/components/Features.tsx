import React from "react";

const Features: React.FC = () => {
  const features = [
    {
      icon: "🌺",
      title: "Hormone Balance",
      description:
        "Natural strategies to support hormonal health during pre-menopause, including nutrition tips, herbal remedies, and lifestyle adjustments that make a real difference.",
    },
    {
      icon: "💪",
      title: "Fitness & Movement",
      description:
        "Age-appropriate exercise routines that boost energy, maintain bone health, and support your changing body through this transformative phase of life.",
    },
    {
      icon: "🧠",
      title: "Mental Wellness",
      description:
        "Stress management techniques, mindfulness practices, and emotional support strategies to navigate mood changes and maintain mental clarity.",
    },
    {
      icon: "👥",
      title: "Community Support",
      description:
        "Connect with a supportive network of women sharing similar experiences, challenges, and victories on their pre-menopause journey.",
    },
    {
      icon: "📚",
      title: "Expert Guidance",
      description:
        "Evidence-based information from healthcare professionals, nutritionists, and wellness experts specializing in women's midlife health.",
    },
    {
      icon: "🌟",
      title: "Personalized Resources",
      description:
        "Downloadable planners, trackers, and worksheets designed specifically for women navigating pre-menopause and midlife transitions.",
    },
  ];

  return (
  <section id="wellness" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-primary">
            Your Complete Wellness Toolkit
          </h2>
          <p className="text-lg text-secondary max-w-xl mx-auto">
            Everything you need to navigate pre-menopause with confidence and
            grace
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-bg p-8 rounded-2xl border border-primary/20 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-fade-in"
            >
              <div className="absolute top-0 left-0 right-0 h-1 gradient-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              <div className="w-20 h-20 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center text-3xl text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {feature.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
