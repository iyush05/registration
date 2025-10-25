import React from 'react';

const BenefitsSection = () => {
  const stats = [
    { number: '4', label: 'Speakers' },
    { number: '200+', label: ' Attendees' },
    { number: '1', label: 'Day of Speaker Session' },
    { number: '4', label: 'Dedicated Tracks' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 px-8 py-16 overflow-hidden">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
        {/* Left Content */}
        <div className="z-10">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 tracking-wide">
            Why The Commit Con?
          </h1>
          <p className="text-white text-lg lg:text-xl leading-relaxed mb-8 opacity-90">
            The proprietary world is binary. Open source is a spectrum. The Third Space is dedicated to exploring the intersection of technology, governance, and decentralized contribution. We are a neutral forum for tackling challenges in project sustainability, ethical AI, and the next generation of cloud-native infrastructure —all built on open standards.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
            More Details
          </button>
        </div>

        {/* Right - 3D Abstract Shape */}
        <div className="relative flex justify-center items-center">
          <img src="/what-is-oss.png" alt="image" />
        </div>
      </div>

      

      {/* Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto "
          style={{
          backgroundImage: 'url(/line1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="flex flex-wrap justify-center items-end gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                marginBottom: `${index * 20}px`
              }}
            >
              <div className="relative bg-gradient-to-b from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-blue-400/30 rounded-full px-12 py-16 w-56 text-center shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <h3 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                    {stat.number}
                  </h3>
                  <p className="text-white text-sm lg:text-base opacity-90">
                    {stat.label}
                  </p>
                </div>
              </div>
              
              {/* Connecting line (except for last item) */}
              {index < stats.length - 1 && (
                <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-400/50 to-transparent hidden lg:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;