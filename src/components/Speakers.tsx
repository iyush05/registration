import React from 'react';
import { User } from 'lucide-react';

export default function Speakers() {
  const speakers = [
    {
      name: 'Vikash Singh',
      role: 'UI/UX Designer',
      company: 'At Google',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    },
    {
      name: 'Vikash Singh',
      role: 'UI/UX Designer',
      company: 'At Google',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    },
    {
      name: 'Vikash Singh',
      role: 'UI/UX Designer',
      company: 'At Google',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    }
  ];

  return (
    <div 
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950"
    //   style={{
    //     backgroundImage: 'url("YOUR_BACKGROUND_IMAGE_URL_HERE")',
    //     backgroundColor: '' // Fallback color
    //   }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-wide relative inline-block">
            <span className="relative z-10" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(200, 150, 255, 0.3)' }}>
              Speakers
            </span>
            <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 -z-10"></div>
          </h1>
        </div>

        {/* Speaker Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group flex flex-col items-center"
            >
              {/* Card Container with Border */}
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm rounded-3xl p-6 border-2 border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 w-full max-w-sm">
                
                {/* Image Container */}
                <div className="relative mb-6">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-slate-800/50">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Name with Icon */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <User className="w-5 h-5 text-white" />
                  <h3 className="text-xl font-semibold text-white">
                    {speaker.name}
                  </h3>
                </div>

                {/* Decorative Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl rounded-3xl"></div>
                </div>
              </div>

              {/* Role and Company - Outside Card */}
              <div className="text-center mt-6">
                <p className="text-xl font-semibold text-white mb-1">
                  {speaker.role}
                </p>
                <p className="text-lg text-gray-300 flex items-center justify-center gap-2">
                  {speaker.company}
                  <span className="inline-block w-5 h-5">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}