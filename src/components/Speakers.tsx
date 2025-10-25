import React from 'react';
import { User } from 'lucide-react';

export default function Speakers() {
  const speakers = [
    {
      name: 'Yash Khare',
      role: 'Software Engineer @Keploy, GSoC 2025 Mentor, LFX 2023 Intern',
      company: 'At Keploy',
      image: '/yash.jpeg'
    },
    {
      name: 'Sankalp Jha',
      role: `GSoC 2025 Contributor and GDG on Campus Co-organizer`,
      company: 'At Google',
      image: '/sankalp.jpeg'
    },
    {
      name: 'Abhishek Kumar',
      role: 'LFX Mentee at CNCF - kubeEdge and Reliance Foundation Undergraduate Scholar',
      company: 'At Google',
      image: 'abhishek.jpeg'
    },
    {
      name: 'Akarsh Sahlot',
      role: 'C4GT Mentee and LFX Mentee 2025',
      company: 'At Google',
      image: '/akarsh.jpeg'
    }
  ];

  return (
    <div id='speakers' 
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
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group flex flex-col items-center w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]"

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
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}