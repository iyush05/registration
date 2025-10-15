import React, { useState } from 'react';

const EventHero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 flex items-center justify-center px-12">
      <div className="relative w-full max-w-6xl">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 blur-xl opacity-75 animate-pulse"></div>
        
        {/* Main card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-500">
          {/* Background image overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop)',
              filter: 'brightness(0.5)'
            }}
          ></div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/40 to-blue-900/50"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] px-8 py-12 text-center">
            {/* Top tagline */}
            <div className="mb-4 space-y-1">
              <p className="text-gray-200 text-base tracking-[0.3em] font-light">
                Source. Share. Synthesize.
              </p>
            </div>
            
            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              Commit To Change
            </h1>
            
            {/* Subtitle */}
            <p className="text-gray-200 text-lg md:text-xl tracking-[0.2em] font-light mb-8">
              Ignite Your Open Source
            </p>
            
            {/* CTA Button */}
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`
                relative px-10 py-4 rounded-lg text-white font-semibold text-lg
                transition-all duration-300 transform
                ${isHovered ? 'scale-105 shadow-2xl' : 'scale-100 shadow-lg'}
                bg-gradient-to-r from-blue-500 to-blue-600
                hover:from-blue-600 hover:to-blue-700
                overflow-hidden
              `}
            >
              <span className="relative z-10">Know More</span>
              {isHovered && (
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHero;