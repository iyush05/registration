import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "About", "Speakers"];

  // Scroll to section when clicking nav link
  const handleScroll = (link: string) => {
    const section = document.getElementById(link.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(link);
    }
  };

  // Detect which section is active on scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <nav className="px-8 py-6 bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-3xl font-light tracking-wide">
          Commit Con
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleScroll(link)}
              className={`text-lg transition-colors duration-200 ${
                activeLink === link
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-300"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Register Button */}
        <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
