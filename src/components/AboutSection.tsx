const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative floating-dots">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What is <span className="text-gradient">GDSC?</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Google Developer Student Clubs (GDSC) are community groups for students interested in Google developer technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We host events, workshops, and projects where students can learn about a wide range of technical topics and build solutions for local problems.
            </p>
          </div>
          
          <div className="relative">
            <div className="card-gradient rounded-3xl p-8 overflow-hidden">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-12 h-12 bg-primary rounded-full"></div>
                  </div>
                  <div className="text-lg font-semibold text-primary">Community of Developers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;