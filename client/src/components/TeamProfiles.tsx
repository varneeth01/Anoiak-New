import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Linkedin, Mail } from 'lucide-react';

const founders = [
  {
    name: 'Varneeth Varma Nandimandalam',
    role: 'Founder & CEO',
    shortName: 'Varneeth Varma',
    bio: [
      'Visionary leader with deep expertise in AI strategy and product development.',
      'Previously led AI initiatives at scale, transforming complex challenges into market-ready solutions.',
      'Passionate about democratizing AI technology and driving meaningful business outcomes through innovation.'
    ],
    badges: ['AI Strategy', 'Product Leadership', 'Business Development'],
    avatar: 'VV',
    linkedin: '#',
    email: 'varneeth@anoiak.com'
  },
  {
    name: 'Lohith',
    role: 'Co-founder & CTO',
    shortName: 'Lohith',
    bio: [
      'Technical architect specializing in scalable systems and engineering leadership.',
      'Expert in building robust AI infrastructure and high-performance applications at enterprise scale.',
      'Committed to engineering excellence and mentoring the next generation of technical talent.'
    ],
    badges: ['Systems Architecture', 'Engineering Leadership', 'Technical Strategy'],
    avatar: 'LK',
    linkedin: '#',
    email: 'lohith@anoiak.com'
  }
];

export default function TeamProfiles() {
  return (
    <section id="team" className="py-24 bg-muted/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Meet Our Founders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experienced leaders driving innovation and excellence in AI technology
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <Card 
              key={founder.name}
              className="group relative overflow-hidden bg-card/30 backdrop-blur border-card-border hover:border-primary/20 transition-all duration-500 hover-elevate"
              data-testid={`founder-card-${founder.shortName.toLowerCase().replace(' ', '-')}`}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardContent className="relative p-8">
                {/* Profile Section */}
                <div className="flex items-center gap-6 mb-6">
                  {/* Avatar */}
                  <div className="relative">
                    <Avatar className="w-20 h-20 border-2 border-primary/20">
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${founder.avatar}&backgroundColor=1e3a8a&textColor=ffffff`} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-chart-2 text-primary-foreground text-lg font-bold">
                        {founder.avatar}
                      </AvatarFallback>
                    </Avatar>
                    {/* Online Status Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-chart-5 border-2 border-background rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-background rounded-full" />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      {founder.shortName}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {founder.role}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-8 h-8 hover:bg-primary/10 hover:text-primary"
                        onClick={() => console.log(`LinkedIn - ${founder.name}`)}
                        data-testid={`button-linkedin-${founder.shortName.toLowerCase().replace(' ', '-')}`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-8 h-8 hover:bg-primary/10 hover:text-primary"
                        onClick={() => console.log(`Email - ${founder.email}`)}
                        data-testid={`button-email-${founder.shortName.toLowerCase().replace(' ', '-')}`}
                      >
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6 space-y-3">
                  {founder.bio.map((paragraph, paragraphIndex) => (
                    <p 
                      key={paragraphIndex}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Expertise Badges */}
                <div className="flex flex-wrap gap-2">
                  {founder.badges.map((badge, badgeIndex) => (
                    <Badge 
                      key={badge}
                      variant="secondary"
                      className="bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      data-testid={`badge-${badge.toLowerCase().replace(/ /g, '-')}-${founder.shortName.toLowerCase().replace(' ', '-')}`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-16">
          {[
            { metric: '2+', label: 'Years Experience' },
            { metric: '10+', label: 'Projects Delivered' },
            { metric: '20+', label: 'Clients Served' },
            { metric: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-4 rounded-xl bg-card/30 backdrop-blur border border-card-border hover-elevate transition-all duration-300"
              data-testid={`stat-${stat.label.toLowerCase().replace(/ /g, '-')}`}
            >
              <div className="text-2xl font-bold text-primary mb-1">{stat.metric}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
