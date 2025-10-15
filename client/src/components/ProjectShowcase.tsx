import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, BookOpen, FileText, BarChart } from 'lucide-react';

const projects = [
  {
    id: 'suviksha',
    name: 'Suviksha AI',
    tagline: 'Educational Assistant',
    description: 'AI-powered personalized learning platform transforming education',
    features: [
      'Personalized learning paths adapted to individual pace',
      'Multilingual tutoring Q&A with context awareness',
      'Comprehensive exam preparation with mock assessments',
      'Curriculum-aligned content generation and delivery',
      'Advanced teacher and admin dashboard analytics',
      'Real-time progress tracking and performance insights',
      'Interactive classroom modes for collaborative learning',
      'Robust safety filters and age-appropriate content controls'
    ],
    outcomes: [
      { metric: '+30%', label: 'Faster learning progression' },
      { metric: '85%', label: 'Student engagement increase' },
      { metric: '92%', label: 'Teacher satisfaction rate' }
    ],
    icon: BookOpen,
    gradient: 'from-chart-1 to-chart-2'
  },
  {
    id: 'miruthan',
    name: 'Miruthan AI',
    tagline: 'Resume Analysis System',
    description: 'Advanced ATS-compliant resume optimization and career enhancement',
    features: [
      'Comprehensive ATS analysis with detailed scoring',
      'Role-specific job description matching algorithms',
      'Tailored improvement recommendations and suggestions',
      'Advanced skill gap detection and career guidance',
      'Strategic quantification prompts for impact metrics',
      'Professional recruiter-style feedback and insights',
      'Interactive analytics dashboard with trend analysis',
      'Multiple exportable ATS-ready format options'
    ],
    outcomes: [
      { metric: '2x', label: 'Higher interview callback rates' },
      { metric: '70%', label: 'ATS compatibility score increase' },
      { metric: '45%', label: 'Faster job placement time' }
    ],
    icon: FileText,
    gradient: 'from-chart-2 to-chart-3'
  }
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-24 bg-muted/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Flagship Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world AI solutions delivering measurable impact
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <Card 
                key={project.id}
                className="group relative overflow-hidden bg-card/30 backdrop-blur border-card-border hover:border-primary/20 transition-all duration-500"
                data-testid={`project-card-${project.id}`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <CardContent className="relative p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content Side */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${isReversed ? 'lg:col-start-2' : ''}`}>
                      {/* Project Badge */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient}/20 rounded-2xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
                          <Badge variant="secondary" className="mt-1">
                            {project.tagline}
                          </Badge>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features Checklist */}
                      <div className="mb-8">
                        <h4 className="font-semibold text-foreground mb-4">Key Features:</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex}
                              className="flex items-start gap-2"
                            >
                              <Check className="w-4 h-4 text-chart-5 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats Row */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        {project.outcomes.map((outcome, outcomeIndex) => (
                          <div 
                            key={outcomeIndex}
                            className="bg-muted/50 rounded-lg px-4 py-2 border border-border/50"
                          >
                            <div className="text-lg font-bold text-primary">{outcome.metric}</div>
                            <div className="text-xs text-muted-foreground">{outcome.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          onClick={() => console.log(`Book demo for ${project.name}`)}
                          data-testid={`button-demo-${project.id}`}
                        >
                          Book a Demo <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => console.log(`Feature tour for ${project.name}`)}
                          data-testid={`button-tour-${project.id}`}
                        >
                          See Feature Tour
                        </Button>
                      </div>
                    </div>

                    {/* Mockup Side */}
                    <div className={`bg-muted/20 p-8 lg:p-12 flex items-center justify-center ${isReversed ? 'lg:col-start-1' : ''}`}>
                      {/* Device Mockup */}
                      <div className="relative max-w-sm w-full">
                        <div className="bg-background/90 backdrop-blur rounded-2xl border-2 border-primary/20 shadow-2xl overflow-hidden">
                          {/* Device Header */}
                          <div className="bg-card border-b border-border/50 px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-2">
                              <div className="w-2 h-2 bg-destructive/60 rounded-full" />
                              <div className="w-2 h-2 bg-yellow-400/60 rounded-full" />
                              <div className="w-2 h-2 bg-chart-5/60 rounded-full" />
                            </div>
                            <div className="flex-1 text-center">
                              <div className="text-xs text-muted-foreground font-mono">
                                {project.name.toLowerCase().replace(' ', '')}.ai
                              </div>
                            </div>
                          </div>
                          
                          {/* Content Area */}
                          <div className="p-6 space-y-4">
                            <div className="h-3 bg-muted rounded-full w-3/4" />
                            <div className="h-3 bg-muted rounded-full w-full" />
                            <div className="h-3 bg-muted rounded-full w-2/3" />
                            
                            <div className="grid grid-cols-2 gap-3 mt-6">
                              <div className="h-16 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center">
                                <BarChart className="w-6 h-6 text-primary/60" />
                              </div>
                              <div className="h-16 bg-chart-2/10 rounded-lg border border-chart-2/20 flex items-center justify-center">
                                <Icon className="w-6 h-6 text-chart-2/60" />
                              </div>
                            </div>
                            
                            <div className="space-y-2 mt-4">
                              <div className="h-2 bg-primary/30 rounded-full w-full" />
                              <div className="h-2 bg-chart-2/30 rounded-full w-4/5" />
                              <div className="h-2 bg-chart-3/30 rounded-full w-3/5" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/20 rounded-2xl blur-xl -z-10 scale-110 opacity-50`} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}