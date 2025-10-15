import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Wrench, Rocket, Shield, Lock } from 'lucide-react';

const workflowSteps = [
  {
    step: 1,
    title: 'Discover',
    icon: Search,
    description: 'Deep dive into your business needs, technical requirements, and growth objectives to create a tailored strategy.'
  },
  {
    step: 2, 
    title: 'Build',
    icon: Wrench,
    description: 'Develop cutting-edge solutions using the latest AI technologies and best practices in software engineering.'
  },
  {
    step: 3,
    title: 'Scale',
    icon: Rocket,
    description: 'Deploy, optimize, and scale your solutions with comprehensive monitoring and continuous improvement.'
  }
];

// const techStack = [
//   'Python', 'TypeScript', 'React', 'Next.js', 'Node.js', 'FastAPI',
//   'OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'PostgreSQL', 'Redis',
//   'AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform'
// ];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              About Anoiak
            </span>
          </h2>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            We are a forward-thinking AI innovation company dedicated to transforming businesses 
            through intelligent solutions. Our mission is to bridge the gap between cutting-edge 
            AI research and real-world applications that drive measurable results.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded by experienced technologists and strategists, Anoiak combines deep technical 
            expertise with business acumen to deliver AI solutions that don't just impress—they perform.
          </p>
        </div>

        {/* How We Work */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            How We Work
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={step.step}
                  className="group relative overflow-hidden bg-card/30 backdrop-blur border-card-border hover:border-primary/20 transition-all duration-500 hover-elevate"
                  data-testid={`workflow-step-${step.step}`}
                >
                  {/* Step Number Background */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-muted/10 leading-none">
                    {step.step}
                  </div>
                  
                  <CardContent className="relative p-8">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-chart-2/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold mb-4 text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

         {/* Tech Stack */}
        {/* <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Technology Stack
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {techStack.map((tech, index) => (
              <Badge 
                key={tech}
                variant="secondary"
                className="px-4 py-2 text-sm bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover-elevate"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
                data-testid={`tech-${tech.toLowerCase()}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>  */}

        {/* Privacy & Compliance */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card/30 backdrop-blur border-card-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-chart-5/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-chart-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Privacy & Compliance</h4>
                  <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>SOC 2 Type II Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>End-to-end Encryption</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </section>
  );
}
