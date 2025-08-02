import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const RegistrationSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-96 card-gradient rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/40 rounded-2xl flex items-center justify-center mx-auto">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl"></div>
                  </div>
                  <div className="text-2xl font-bold text-primary">Join the Community</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Register Now</h2>
              <p className="text-muted-foreground text-lg">
                Secure your spot for the GDG event on August 28th and join a community of passionate developers.
              </p>
            </div>
            
            <form className="space-y-6">
              <Input 
                placeholder="Full Name" 
                className="bg-muted/50 border-border/50 h-12 text-lg"
              />
              
              <Input 
                type="email"
                placeholder="Email Address" 
                className="bg-muted/50 border-border/50 h-12 text-lg"
              />
              
              <Select>
                <SelectTrigger className="bg-muted/50 border-border/50 h-12 text-lg">
                  <SelectValue placeholder="Your Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
              
              <Textarea 
                placeholder="What are you most excited to learn?"
                className="bg-muted/50 border-border/50 min-h-24 text-lg resize-none"
              />
              
              <div className="flex items-center space-x-2">
                <Checkbox id="updates" />
                <label htmlFor="updates" className="text-sm text-muted-foreground">
                  I agree to receive updates about GDG events
                </label>
              </div>
              
              <Button className="btn-gradient w-full h-12 text-lg font-semibold">
                Secure My Spot
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;