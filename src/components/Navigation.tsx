import React, { useState } from 'react';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = ['Home', 'About', 'Speakers'];

  return (
    <nav className="px-8 py-6 bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-3xl font-light tracking-wide">
          Commit To Change
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`text-lg transition-colors duration-200 ${
                activeLink === link
                  ? 'text-cyan-400'
                  : 'text-white hover:text-cyan-300'
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