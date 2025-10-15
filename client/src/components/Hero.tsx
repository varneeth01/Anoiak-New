import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 via-chart-2/15 to-chart-3/10 animate-pulse" />
        <div className="absolute inset-0">
          {/* Gradient Mesh Animation */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-chart-2/30 rounded-full blur-3xl animate-bounce opacity-70" 
               style={{animationDelay: '0s', animationDuration: '8s'}} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-chart-3/25 to-chart-4/20 rounded-full blur-3xl animate-pulse opacity-60"
               style={{animationDelay: '2s', animationDuration: '6s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-chart-2/15 to-primary/20 rounded-full blur-3xl animate-bounce opacity-50"
               style={{animationDelay: '1s', animationDuration: '7s'}} />
        </div>
        
        {/* Particle Lines */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-chart-2/40 to-transparent"
              style={{
                left: `${10 + (i * 7)}%`,
                height: '100%',
                animationDelay: `${i * 0.5}s`,
                animation: 'fadeInOut 4s ease-in-out infinite'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur border border-border/50 mb-8">
          <Sparkles className="w-4 h-4 text-chart-2" />
          <span className="text-sm text-muted-foreground">AI-Powered Innovation</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Shaping the future with{" "}
          </span>
          <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
            AI-powered innovation
          </span>
        </h1>

        {/* Subcopy */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Anoiak builds AI products and delivers services across AI engineering, 
          web development, and growth marketing. We transform ideas into intelligent solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            onClick={() => console.log('Collaborate clicked')}
            data-testid="button-hero-collaborate"
          >
            Collaborate <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8"
            onClick={() => console.log('Request a Proposal clicked')}
            data-testid="button-hero-proposal"
          >
            Request a Proposal
          </Button>
          <Button 
            size="lg" 
            variant="ghost" 
            className="px-8 text-muted-foreground hover:text-foreground"
            onClick={() => console.log('View Projects clicked')}
            data-testid="button-hero-projects"
          >
            View Projects
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

    </section>
  );
}