import React from 'react';

export default function OpenSourceQuotes() {
  const quotes = [
    {
      text: '"Given enough eyeballs, all bugs are shallow."',
      author: '— Eric S. Raymond (The Cathedral and the Bazaar)',
      position: 'top-[48%] left-[8%]'
    },
    {
      text: '"In real open source, you have the right to control your own destiny."',
      author: '— Richard Stallman',
      position: 'top-[25%] left-[28%]'
    },
    {
      text: '"The power of open source is the power of the people."',
      author: '— Philippe Kahn',
      position: 'top-[52%] left-[43%]'
    },
    {
      text: '"Open source is about collaborating, not competing."',
      author: '— Christine Peterson',
      position: 'top-[25%] right-[23%]'
    },
    {
      text: '"Free software is a matter of liberty, not price."',
      author: '— Linus Torvalds',
      position: 'top-[48%] right-[10%]'
    }
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 overflow-hidden">

      {/* Title */}
      <div className="relative z-10 pt-16 text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 drop-shadow-lg">
          Echoes of Open Source
        </h1>
      </div>

      {/* Quote Cards with Glass Effect */}
      <div className="relative z-10 w-full h-full">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className={`absolute ${quote.position} w-80 p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-300`}
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              background: 'rgba(255, 255, 255, 0.05)'
            }}
          >
            <p className="text-white text-lg font-medium mb-4 leading-relaxed">
              {quote.text}
            </p>
            <p className="text-purple-200 text-sm font-light">
              {quote.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
