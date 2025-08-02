import { Button } from "@/components/ui/button";

const CalendarSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="card-gradient rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Mark Your Calendar</h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Don't miss this opportunity to connect with fellow developers
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="card-gradient rounded-2xl p-6 text-center border-primary/30">
              <div className="text-4xl font-bold text-foreground">28</div>
              <div className="text-primary font-semibold text-sm tracking-wider">AUGUST</div>
            </div>
            
            <Button className="bg-secondary hover:bg-secondary/90 text-background px-8 py-4 text-lg font-semibold rounded-xl">
              Save Your Spot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;