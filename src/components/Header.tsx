import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="font-playfair text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
          Confident Women 40+
        </div>
        <ul className="hidden md:flex list-none gap-8 items-center">
          {["Home", "About", "Wellness", "Articles", "Community"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 font-medium hover:text-pink-600 relative group transition-colors duration-300"
                >
                  {item}
                  <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            )
          )}
        </ul>
        <a
          href="#newsletter"
          className="hidden md:inline-block bg-gradient-to-r from-pink-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md"
        >
          Join Community
        </a>
        <div className="md:hidden flex flex-col gap-1 cursor-pointer">
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
