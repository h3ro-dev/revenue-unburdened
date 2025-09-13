import { CheckCircle } from "lucide-react";

const SolutionSection = () => {
  const aiCapabilities = [
    {
      name: "Pipeline Intelligence AI",
      description: "Predict deal closure with 95% accuracy",
      benefits: ["Real-time deal scoring", "Identify at-risk opportunities", "Optimize sales team focus"]
    },
    {
      name: "Performance Optimization AI", 
      description: "Identify bottlenecks before they kill deals",
      benefits: ["Process optimization", "Team performance insights", "Revenue leak detection"]
    },
    {
      name: "Forecasting AI",
      description: "Board-ready predictions based on data, not hope",
      benefits: ["Confidence intervals", "Scenario modeling", "Accuracy tracking"]
    },
    {
      name: "Customer Success AI",
      description: "Prevent churn before it impacts numbers",
      benefits: ["Early warning system", "Expansion opportunities", "Retention automation"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="text-foreground">Build</span>
            <span className="bg-gradient-success bg-clip-text text-transparent"> Revenue Machines</span>
            <br />
            <span className="text-muted-foreground">Not Revenue Roulette</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transform uncertainty into predictability with AI that actually understands revenue pressure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {aiCapabilities.map((capability, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 shadow-pressure hover:shadow-glow transition-all duration-500 group hover:border-primary/50"
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center shadow-intense">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                      {capability.name}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-primary font-semibold">
                    {capability.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {capability.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="bg-gradient-success/10 rounded-lg p-3">
                    <span className="text-sm text-primary font-medium">
                      Impact: Reduce forecast uncertainty by 80%+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-pressure rounded-2xl p-12 max-w-4xl mx-auto shadow-pressure">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Stop Being Accountable for Unpredictable Revenue
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Build systems that give you control over the variables that matter most
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white/80 italic text-lg">
                "Finally, revenue forecasting I can bet my career on."
              </p>
              <p className="text-white/60 text-sm mt-2">
                — Sarah Chen, CRO at TechScale
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;