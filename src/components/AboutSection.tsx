

export default function GDSCComponent() {
  return (
    <div id="about" className="relative z-10 floating-dots">
    <h1 className="text-4xl lg:text-5xl font-bold text-white flex justify-center z-10">
          What is &nbsp;<span className="text-gradient">GDG?</span>
    </h1> 
    <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl mx-auto">
      
      {/* Text Content */}
      <div className="flex-1 space-y-6 z-10">
        
        <p className="text-lg leading-relaxed">
          Google Developer Group (GDG) are community groups for students interested in Google developer technologies.
        </p>
        
        <p className="text-lg text-white leading-relaxed">
          We host events, workshops, and projects where students can learn about a wide range of technical topics and build solutions for local problems.
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
            <span className="text-lg font-medium">100+ Universities</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-lg font-medium">Student-Led</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            <span className="text-lg font-medium">Open to All</span>
          </div>
        </div>
      </div>
      
      {/* Image */}
      <div className="flex-1">
        <div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden">
          <img
            src="/Group.jpg"
            alt="GDSC students group photo"
            className="object-cover"
          />
        </div>
      </div>
    </div>
    </div>
  );
}