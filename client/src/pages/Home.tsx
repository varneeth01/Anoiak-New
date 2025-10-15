import { useEffect } from 'react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ServicesGrid from '@/components/ServicesGrid';
import ProjectShowcase from '@/components/ProjectShowcase';
import About from '@/components/About';
import TeamProfiles from '@/components/TeamProfiles';
import CTABand from '@/components/CTABand';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    const id = window.location.hash?.slice(1);
    if (!id) return;
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO />
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <TrustBar />
        
        <div id="services">
          <ServicesGrid />
        </div>
        
        <div id="projects">
          <ProjectShowcase />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="team">
          <TeamProfiles />
        </div>
        
        <CTABand />
        
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      
      <Footer />
    </div>
    
  );
}