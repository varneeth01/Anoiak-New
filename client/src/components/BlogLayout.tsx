import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B132B] via-[#0F172A] to-[#1C2541] text-slate-100">
      {/* Sticky nav */}
      <div className="sticky top-0 z-50 bg-[#0B132B]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0B132B]/60 border-b border-white/10">
        <Navigation />
      </div>

      {/* 👇 Give space equal to nav height so content doesn't sit under it */}
      <main className="pt-24 md:pt-28 pb-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}
