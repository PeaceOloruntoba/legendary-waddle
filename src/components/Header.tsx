import React, { useState, useEffect } from "react";
import {logo} from "../assets";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Wellness", href: "/#wellness" },
  { label: "Articles", href: "/articles" },
  { label: "Blog", href: "/blog" },
  { label: "Community", href: "/#community" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <img src={logo} alt="" />

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
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-primary font-medium px-2 py-1 rounded hover:bg-primary/20 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#newsletter"
            className="gradient-primary text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md text-sm"
          >
            Join Community
          </a>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-90 bg-black/40 backdrop-blur-sm flex">
          <div className="bg-secondary shadow-lg p-6 flex flex-col gap-6 w-4/5 max-w-xs h-full animate-fade-in">
            <div className="font-playfair text-lg font-bold gradient-primary bg-clip-text text-transparent mb-4 select-none">
              Confident Women 40+
            </div>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-primary font-medium px-2 py-2 rounded hover:bg-primary/20 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#newsletter"
              className="gradient-primary text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 shadow-md text-sm mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Join Community
            </a>
            <button
              className="mt-auto text-secondary text-xs underline hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMobileOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
