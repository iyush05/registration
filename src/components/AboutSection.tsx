import React from 'react';

const GDSCComponent = () => {
  return (
    <div id='about' className="relative min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/10 to-gray-950 px-8 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Image Placeholder */}
        <div className="relative flex justify-center items-center">
          <div className="w-96 h-96 flex items-center justify-center">
              <img src="piece1.png" alt="" />
          </div>
        </div>

        {/* Right - Content */}
        <div className="relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 tracking-wide">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200" 
                  style={{ textShadow: '0 0 40px rgba(255, 255, 255, 0.5)' }}>
              What is Open Source?
            </span>
          </h1>
          
          <p className="text-white text-lg lg:text-xl leading-relaxed mb-10 opacity-90">
            Open Source is about collaboration, transparency, and community-driven innovation. It empowers developers and creators worldwide to share knowledge, build freely accessible software, and contribute to projects that shape the digital future.
          </p>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105">
            More Details
          </button>
        </div>
      </div>

      {/* Background ambient effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default GDSCComponent;