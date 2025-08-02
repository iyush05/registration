import { Code, Wrench, Users, Award } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Code,
      title: "Latest Technologies",
      description: "Learn about Flutter, Firebase, Web Technologies, Cloud, and more from experts.",
      color: "from-primary to-cyan-400",
      borderColor: "border-primary/30"
    },
    {
      icon: Wrench,
      title: "Hands-on Workshops", 
      description: "Participate in interactive workshops and live coding sessions with mentors.",
      color: "from-green-400 to-emerald-500",
      borderColor: "border-green-400/30"
    },
    {
      icon: Users,
      title: "Community Networking",
      description: "Connect with like-minded developers and build your professional network.",
      color: "from-secondary to-purple-500",
      borderColor: "border-secondary/30"
    },
    {
      icon: Award,
      title: "Swag & Certificates",
      description: "Get certified participation and exclusive Google swag items.",
      color: "from-pink-400 to-rose-500",
      borderColor: "border-pink-400/30"
    }
  ];

  return (
    <section id="benefits" className="py-20 relative floating-dots">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="text-gradient">Join?</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className={`card-gradient rounded-2xl p-6 hover:scale-105 transition-all duration-300 border-t-4 ${benefit.borderColor} group hover:shadow-glow`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;