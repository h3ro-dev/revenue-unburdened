import { Button } from "@/components/ui/button";
import croPressureImage from "@/assets/cro-pressure.jpg";
import pressureGaugeImage from "@/assets/pressure-gauge.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-pressure overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/20"></div>
      
      {/* Pressure gauge background element */}
      <div className="absolute top-20 right-10 opacity-10">
        <img 
          src={pressureGaugeImage} 
          alt="" 
          className="w-96 h-96 object-cover"
        />
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                <span className="bg-gradient-success bg-clip-text text-transparent">
                  Revenue Forecast
                </span>
                <br />
                <span className="text-foreground">Due Tomorrow.</span>
                <br />
                <span className="text-muted-foreground text-4xl lg:text-5xl">
                  Pipeline Says $2M.
                </span>
                <br />
                <span className="text-accent text-4xl lg:text-5xl">
                  Your Gut Says $1.2M.
                </span>
                <br />
                <span className="text-destructive text-3xl lg:text-4xl">
                  Board Won't Accept Uncertainty.
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                You're accountable for the number that determines everyone's livelihood. 
                But you can't control every variable that creates it.
              </p>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-pressure">
                <p className="text-lg text-accent font-semibold italic">
                  "When did revenue leadership become revenue fortunetelling?"
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-success hover:shadow-glow transition-all duration-300 text-lg px-8 py-6">
                Stop Playing Revenue Roulette
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-pressure">
              <img 
                src={croPressureImage} 
                alt="CRO under pressure analyzing revenue data" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-intense">
              <div className="text-sm text-muted-foreground">Forecast Accuracy</div>
              <div className="text-2xl font-bold text-destructive">47%</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-intense">
              <div className="text-sm text-muted-foreground">Pressure Level</div>
              <div className="text-2xl font-bold text-accent">Maximum</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;