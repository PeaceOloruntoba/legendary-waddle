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
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a
                href="https://www.instagram.com/confident_women_40plus?igsh=MTM1YnpxYjJscHBnMA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-[#C98882] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
              </a>
              <a
                href="https://www.tiktok.com/@wumimenopausematter?_t=ZN-8xQ9oMFKryg&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-[#C98882] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M16.5 3v2.25A4.25 4.25 0 0020.75 9.5h2.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="15" r="5" stroke="currentColor" strokeWidth="2"/><path d="M16.5 3v12a7.5 7.5 0 01-7.5 7.5" stroke="currentColor" strokeWidth="2"/></svg>
              </a>
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
