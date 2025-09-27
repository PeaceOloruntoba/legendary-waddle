import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-serif text-brand">Confident Women 40+</div>
        <ul className="hidden md:flex gap-6 text-gray-600">
          <li><a href="#home" className="hover:text-brand">Home</a></li>
          <li><a href="#about" className="hover:text-brand">About</a></li>
          <li><a href="#wellness" className="hover:text-brand">Wellness</a></li>
          <li><a href="#articles" className="hover:text-brand">Articles</a></li>
          <li><a href="#community" className="hover:text-brand">Community</a></li>
        </ul>
        <a href="#newsletter" className="btn-primary">Join Community</a>
      </nav>
    </header>
  );
};

export default Header;
