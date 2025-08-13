import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#152238] backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 pt-4 pb-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-background font-bold text-lg">G</span>
          </div>
          <span className="text-xl font-bold">Google Developer Groups</span> */}
          <img src="/GDG_logo_dark.png"height={350} width={350} alt="" />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
            Benefits
          </a>
          <a href="#faqs" className="text-muted-foreground hover:text-foreground transition-colors">
            FAQs
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        
        <Button className="bg-[#0ea5e9] hover:bg-[#318cb7]">
          <a href="#register">Register Now</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;