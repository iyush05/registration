import React from 'react';

export default function MindsBehindhMovement() {
  const profiles = [
    {
      name: "Atul Chitnis",
      image: "right",
      description: "Atul Chitnis was a visionary technologist and one of India's earliest and most passionate advocates of Free and Open Source Software (FOSS).",
      additionalInfo: "As the driving force behind Linux Bangalore and FOSS.IN, Atul inspired thousands of developers to explore, share, and contribute to open technologies.",
      quote: "Atul Chitnis didn't just promote open source — he built a community around openness, collaboration, and innovation in India.",
      namePosition: "left"
    },
    {
      name: "Samir K. Brahmachari",
      image: "left",
      description: "Dr. Samir K. Brahmachari is a visionary scientist who championed the concept of Open Source Drug Discovery (OSDD) — applying open-source principles to healthcare and biotechnology.",
      additionalInfo: "As the former Director-General of CSIR (Council of Scientific and Industrial Research), India, he pioneered collaborative science driven by transparency and shared innovation.",
      quote: "When code can save lives — that's the power of open science.",
      namePosition: "right"
    }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden py-8 md:py-16 px-4 md:px-8 bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950">
      <div className="relative z-10 text-center mb-12 md:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 drop-shadow-lg px-4">
          The Minds Behind the Movement
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 md:space-y-32">
        {profiles.map((profile, index) => (
          <div key={index} className={`flex flex-col ${profile.image === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-start gap-8 md:gap-20`}>
            <div className={`flex-1 w-full ${profile.namePosition === 'right' ? 'md:text-right' : 'md:text-left'} text-left`}>
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-serif font-light text-white mb-6 md:mb-10">
                {profile.name}
              </h2>
              <div className={`${profile.namePosition === 'right' ? 'md:ml-auto' : 'md:mr-auto'} max-w-xl`}>
                <p className="text-white text-sm sm:text-base leading-relaxed mb-4 md:mb-6">
                  {profile.description}
                </p>
                <p className="text-white text-sm sm:text-base leading-relaxed mb-6 md:mb-10">
                  {profile.additionalInfo}
                </p>
                <blockquote className="text-gray-400 text-xs sm:text-sm italic leading-relaxed">
                  {profile.quote}
                </blockquote>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-80">
              <div className="w-full md:w-80 h-80 sm:h-96 md:h-[500px] bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-2xl flex items-center justify-center mx-auto">
                <span className="text-gray-400 text-sm">Image Placeholder</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}