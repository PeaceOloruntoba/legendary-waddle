import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="community" className="bg-[#181818] text-white py-16 border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-primary mb-6">
              Confident Women 40+
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Empowering women through their pre-menopause journey with
              knowledge, community, and compassionate support.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {["📧", "📱", "👥", "📺"].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-primary mb-6">
              Quick Links
            </h3>
            <ul className="list-none">
              {[
                "About Wumi",
                "Wellness Resources",
                "Latest Articles",
                "Newsletter",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-primary mb-6">
              Categories
            </h3>
            <ul className="list-none">
              {[
                "Hormone Health",
                "Fitness & Movement",
                "Mental Wellness",
                "Nutrition",
                "Self-Care",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-primary mb-6">
              Resources
            </h3>
            <ul className="list-none">
              {[
                "Downloadable Planners",
                "Wellness Trackers",
                "Community Forum",
                "Expert Interviews",
                "FAQ",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <a
                    href="#"
                    className="text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
  <div className="border-t border-primary/20 pt-8 text-center text-white/60">
          <p>
            &copy; 2025 Confident Women 40+. All rights reserved. Made with 💜
            for amazing women everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
