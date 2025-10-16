import React from 'react';

export default function OpenSourceQuotes() {
  const quotes = [
    {
      text: '"Given enough eyeballs, all bugs are shallow."',
      author: '— Eric S. Raymond (The Cathedral and the Bazaar)'
    },
    {
      text: '"In real open source, you have the right to control your own destiny."',
      author: '— Richard Stallman'
    },
    {
      text: '"The power of open source is the power of the people."',
      author: '— Philippe Kahn'
    },
    {
      text: '"Open source is about collaborating, not competing."',
      author: '— Christine Peterson'
    },
    {
      text: '"Free software is a matter of liberty, not price."',
      author: '— Linus Torvalds'
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 overflow-hidden py-12 px-4 sm:px-6 lg:px-8">

      {/* Title */}
      <div className="relative z-10 mb-12 sm:mb-16 lg:mb-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 drop-shadow-lg px-4">
          Echoes of Open Source
        </h1>
      </div>

      {/* Quote Cards - Responsive Grid/Stack Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Mobile: Stack vertically */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="w-full p-6 sm:p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-300"
              style={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <p className="text-white text-base sm:text-lg font-medium mb-4 leading-relaxed">
                {quote.text}
              </p>
              <p className="text-purple-200 text-xs sm:text-sm font-light">
                {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}