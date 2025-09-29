import React, { useState, useEffect } from "react";
import { logo } from "../assets";

interface HeaderProps {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ mobileOpen, setMobileOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // handle scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-primary transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Confident Women Logo" />

        {/* Hamburger - visible on mobile */}
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`w-6 h-0.5 bg-primary transition-all duration-200 ${
              mobileOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-primary transition-all duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-primary transition-all duration-200 ${
              mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex list-none gap-6 items-center">
            <li>
              <a
                href="/"
                className="text-primary font-medium px-2 py-1 rounded hover:bg-primary/20 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-primary font-medium px-2 py-1 rounded hover:bg-primary/20 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/#wellness"
                className="text-primary font-medium px-2 py-1 rounded hover:bg-primary/20 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
              >
                Wellness
              </a>
            </li>
            <li>
              <a
                href="/articles"
                className="text-primary font-medium px-2 py-1 rounded hover:bg-primary/20 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="/#community"
                className="text-primary font-medium px-2 py-1 rounded hover:bg-primary/20 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
              >
                Community
              </a>
            </li>
          </ul>
          <a
            href="#newsletter"
            className="gradient-primary text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md text-sm"
          >
            Join Community
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
