import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Code, TrendingUp, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Services',
    headline: 'Operationalize LLMs with measurable ROI',
    benefits: [
      'Custom LLM applications and intelligent agents',
      'RAG systems, fine-tuning, and comprehensive evaluations',
      'Advanced MLOps pipelines with real-time monitoring'
    ]
  },
  {
    icon: Code,
    title: 'Web Development', 
    headline: 'Ship high-performance web apps, fast',
    benefits: [
      'Next.js/React full-stack development solutions',
      'Scalable Node.js and GraphQL API architecture',
      'Cloud infrastructure on AWS, GCP, and Azure platforms'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Marketing Solutions',
    headline: 'Marketing that compounds',
    benefits: [
      'Comprehensive brand strategy and positioning',
      'Advanced SEO/ASO optimization and content systems',
      'Data-driven growth experiments and conversion optimization'
    ]
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three pillars of innovation driving your business forward
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group relative overflow-hidden hover-elevate transition-all duration-500 bg-card/50 backdrop-blur border-card-border hover:border-primary/30"
                data-testid={`service-card-${service.title.toLowerCase().replace(' ', '-')}`}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative p-8">
                  {/* Icon with Parallax Float */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-chart-2/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:translate-y-[-4px] transition-all duration-500">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg font-medium mb-6 text-foreground leading-relaxed">
                    {service.headline}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefitIndex}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="group/btn text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium"
                    onClick={() => console.log(`Talk to us about ${service.title}`)}
                    data-testid={`button-talk-${service.title.toLowerCase().replace(' ', '-')}`}
                  >
                    Talk to us
                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}