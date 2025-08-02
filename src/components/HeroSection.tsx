import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 floating-dots">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Code. Connect.{" "}
            <span className="text-gradient block">Create.</span>
            <span className="block">With GDG.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-md">
            Join the global developer movement at your campus
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-gradient text-lg px-8 py-4">
              Register Now
            </Button>
            <div className="flex items-center gap-3 text-primary">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">28th August, 2023</span>
            </div>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center">
          <div className="relative w-80 h-80 rounded-3xl card-gradient flex items-center justify-center overflow-hidden animate-scale-in">
            <div className="text-center space-y-4 p-8">
              <div className="text-6xl font-bold text-gradient">Google</div>
              <div className="text-2xl font-semibold text-primary">Developer</div>
              <div className="text-2xl font-semibold text-secondary">Groups</div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;