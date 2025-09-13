import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ConversionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    revenueTarget: "",
    forecastAccuracy: "",
    biggestVariable: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="py-24 bg-gradient-intense">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-success bg-clip-text text-transparent">
                Build Predictable
              </span>
              <br />
              <span className="text-foreground">Revenue Growth</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Get personalized insights for your revenue challenges in 60 seconds
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-pressure">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-muted/20 border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Work Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-muted/20 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground font-medium">
                  Company Name *
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="bg-muted/20 border-border focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-medium">
                  What's your annual revenue target? *
                </Label>
                <Select onValueChange={(value) => setFormData({...formData, revenueTarget: value})}>
                  <SelectTrigger className="bg-muted/20 border-border">
                    <SelectValue placeholder="Select revenue range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                    <SelectItem value="5m-25m">$5M - $25M</SelectItem>
                    <SelectItem value="25m-100m">$25M - $100M</SelectItem>
                    <SelectItem value="100m-500m">$100M - $500M</SelectItem>
                    <SelectItem value="500m+">$500M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground font-medium">
                  How often do you hit your revenue predictions? *
                </Label>
                <Select onValueChange={(value) => setFormData({...formData, forecastAccuracy: value})}>
                  <SelectTrigger className="bg-muted/20 border-border">
                    <SelectValue placeholder="Select accuracy rate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rarely">Rarely (0-30%)</SelectItem>
                    <SelectItem value="sometimes">Sometimes (30-60%)</SelectItem>
                    <SelectItem value="often">Often (60-80%)</SelectItem>
                    <SelectItem value="usually">Usually (80%+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="biggest-variable" className="text-foreground font-medium">
                  What revenue factor keeps you up at night? *
                </Label>
                <Textarea
                  id="biggest-variable"
                  value={formData.biggestVariable}
                  onChange={(e) => setFormData({...formData, biggestVariable: e.target.value})}
                  className="bg-muted/20 border-border focus:border-primary min-h-[100px] resize-none"
                  placeholder="e.g., Unpredictable sales cycle lengths, customer churn, pipeline quality..."
                  required
                />
              </div>

              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-success hover:shadow-glow transition-all duration-300 text-lg py-6"
                  size="lg"
                >
                  Stabilize My Revenue Engine
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Get your personalized revenue optimization plan in 2 business days
                </p>
              </div>
            </form>
          </div>

          <div className="text-center mt-8">
            <div className="bg-card/50 backdrop-blur-sm border border-accent/30 rounded-xl p-6">
              <p className="text-accent font-semibold text-lg mb-2">
                🔒 Zero Spam Guarantee
              </p>
              <p className="text-muted-foreground text-sm">
                We understand revenue pressure. We won't add to it with pointless follow-ups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionForm;