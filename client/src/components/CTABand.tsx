import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Handshake, MessageSquare } from 'lucide-react';

export default function CTABand() {
  const ctaOptions = [
    {
      id: 'collaborations',
      title: 'Collaborations',
      description: 'Work with our team on innovative AI projects',
      icon: Users
    },
    {
      id: 'partnerships',
      title: 'Partnerships',
      description: 'Strategic partnerships for long-term growth',
      icon: Handshake
    },
    {
      id: 'inquiries',
      title: 'Service Inquiries',
      description: 'Get started with our AI solutions today',
      icon: MessageSquare
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Base Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-chart-2/20 to-chart-3/30" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/40 to-chart-2/30 rounded-full blur-3xl opacity-60 animate-pulse" 
             style={{animationDuration: '6s'}} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-chart-3/40 to-chart-4/30 rounded-full blur-3xl opacity-50 animate-bounce"
             style={{animationDuration: '8s'}} />
        
        {/* Diagonal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/60 to-background/80" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.3) 1px, transparent 1px),
                             linear-gradient(to bottom, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Animated Noise Pattern */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            animation: 'gradientShift 10s ease-in-out infinite'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            Build with Anoiak
          </span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to transform your business with AI? Let's create something extraordinary together.
        </p>

        {/* CTA Buttons Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {ctaOptions.map((cta) => {
            const Icon = cta.icon;
            return (
              <div 
                key={cta.id}
                className="group p-6 rounded-2xl bg-card/40 backdrop-blur border border-card-border hover:border-primary/30 transition-all duration-500 hover-elevate"
                data-testid={`cta-option-${cta.id}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-chart-2/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {cta.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {cta.description}
                </p>
                
                {/* Button */}
                <Button
                  className="w-full"
                  onClick={() => {
                    console.log(`${cta.title} clicked`);
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      const offset = 80;
                      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  data-testid={`button-cta-${cta.id}`}
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Alternative Single CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            onClick={() => {
              console.log('Primary CTA clicked');
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                const offset = 80;
                const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            data-testid="button-primary-cta"
          >
            Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="px-8 backdrop-blur"
            onClick={() => {
              console.log('Schedule consultation clicked');
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                const offset = 80;
                const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            data-testid="button-consultation"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-2px) translateY(2px); }
          50% { transform: translateX(2px) translateY(-1px); }
          75% { transform: translateX(-1px) translateY(-2px); }
        }
      `}</style>
    </section>
  );
}