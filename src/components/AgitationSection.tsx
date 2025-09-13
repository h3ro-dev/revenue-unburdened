const AgitationSection = () => {
  const pressurePoints = [
    {
      title: "Sales team gives optimistic forecasts. Marketing gives unrealistic pipeline projections.",
      subtitle: "You give your word to the board.",
      impact: "Every quarter is a knife's edge between hero and scapegoat"
    },
    {
      title: "You're managing the entire revenue engine",
      subtitle: "but half the variables are outside your control",
      impact: "One bad quarter and suddenly everyone questions your competence"
    },
    {
      title: "Revenue success has a thousand fathers.",
      subtitle: "Revenue failure has one parent: you.",
      impact: "The weight of everyone's livelihood rests on numbers you can't fully predict"
    }
  ];

  return (
    <section className="py-24 bg-gradient-intense">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="text-destructive">The CRO of One Pressure</span>
            <br />
            <span className="text-foreground">That's Breaking You</span>
          </h2>
          
          <div className="bg-gradient-danger bg-clip-text text-transparent text-xl lg:text-2xl font-semibold mb-8">
            Revenue accountability without control
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {pressurePoints.map((point, index) => (
            <div 
              key={index}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-pressure hover:shadow-glow transition-all duration-500 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-danger rounded-full flex items-center justify-center text-xl font-bold text-white shadow-intense">
                    {index + 1}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-lg text-accent font-semibold">
                      {point.subtitle}
                    </p>
                  </div>
                  
                  <div className="bg-muted/20 border-l-4 border-destructive rounded-r-lg p-4">
                    <p className="text-muted-foreground italic">
                      "{point.impact}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-sm border border-destructive rounded-2xl p-8 max-w-3xl mx-auto shadow-pressure">
            <h3 className="text-2xl lg:text-3xl font-bold text-destructive mb-4">
              Revenue Isolation
            </h3>
            <p className="text-xl text-muted-foreground">
              "Revenue success has a thousand fathers. Revenue failure has one parent: <span className="text-accent font-semibold">you.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;