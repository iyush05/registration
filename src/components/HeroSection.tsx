import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 floating-dots">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Code. Connect.{" "}
            <span className="font-extrabold google-gradient text-transparent bg-clip-text block">Create.</span>
            <span className="block">With GDG.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-md">
            Join the global developer movement at your campus
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-[#0ea5e9] hover:bg-[#318cb7] text-lg px-8 py-4">
              <a href="#register">Register Now</a>
            </Button>
            <div className="flex items-center gap-3 text-primary">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">22nd August, 2025</span>
            </div>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center">
          <img src="/gdg.svg" alt="GDG Logo" className="w-full h-full object-contain"/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;