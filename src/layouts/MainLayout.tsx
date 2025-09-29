import React, { useState } from "react";
import LoadingOverlay from "../components/LoadingOverlay";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Wellness", href: "/#wellness" },
  { label: "Articles", href: "/articles" },
  { label: "Community", href: "/#community" },
];

const MainLayout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col gradient-hero">
      <LoadingOverlay />
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main className="flex-grow pt-16">
        <Outlet />
        <Newsletter />
      </main>
      <Footer />

      {/* Mobile Drawer + Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100000] bg-black/40 backdrop-blur-sm flex"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="bg-secondary shadow-lg p-6 flex flex-col gap-6 w-4/5 max-w-xs h-full animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
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
    </div>
  );
};

export default MainLayout;
