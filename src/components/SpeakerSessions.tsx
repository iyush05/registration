import React from 'react';

export default function SpeakerSessions() {
  const sessions = [
    {
      year: '2022',
      title: 'The Blueprint Assembly',
      date: 'March 8, New Delhi',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
    },
    {
      year: '2023',
      title: 'The Nexus Dialogue',
      date: 'June 16, Bangalore',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80'
    },
    {
      year: '2024',
      title: 'EchoSphere',
      date: 'October 22, Hyderabad',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Previous Speaker Sessions
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore some of our past open-source events and key moments
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={session.image}
                  alt={`Open source Summit ${session.year}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-6 sm:p-8 -mt-24">
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Open source Summit
                  </h2>
                  <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    {session.year}
                  </h3>
                  <p className="text-xl font-semibold text-white mb-3">
                    {session.title}
                  </p>
                  <p className="text-gray-400 mb-6">
                    {session.date}
                  </p>

                  {/* Button */}
                  <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                    View Details
                  </button>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}