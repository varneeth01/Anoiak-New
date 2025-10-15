import { Brain, MessageSquare, Eye, Mic, Globe, Cloud, BarChart } from 'lucide-react';

const capabilities = [
  { icon: Brain, label: 'LLMs' },
  { icon: MessageSquare, label: 'RAG' },
  { icon: Eye, label: 'Vision' },
  { icon: Mic, label: 'Speech' },
  { icon: Globe, label: 'Web' },
  { icon: Cloud, label: 'Cloud' },
  { icon: BarChart, label: 'Analytics' }
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-muted/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div 
                key={capability.label}
                className="flex flex-col items-center gap-2 group cursor-pointer hover-elevate rounded-lg p-4"
                style={{
                  animation: `shimmer 3s ease-in-out infinite ${index * 0.2}s`
                }}
                data-testid={`capability-${capability.label.toLowerCase()}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-chart-2/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {capability.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}