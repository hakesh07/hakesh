import { useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import InteractiveHero from "@/components/InteractiveHero";
import SkillsSection from "@/components/SkillsSection";
import InteractiveEducation from "@/components/InteractiveEducation";
import InteractiveContact from "@/components/InteractiveContact";
import InteractiveBackground from "@/components/InteractiveBackground";
import FloatingElements from "@/components/FloatingElements";

export default function Portfolio() {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Initialize AOS if it's available
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.refresh();
    }
  }, []);

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-300 ${
      theme === 'light' 
        ? 'bg-white text-gray-900' 
        : 'bg-black text-white'
    }`}>
      <InteractiveBackground />
      <FloatingElements />
      <Navigation />
      <InteractiveHero />
      <SkillsSection />
      <InteractiveEducation />
      <InteractiveContact />
      
      {/* Footer */}
      <footer className={`py-8 text-center border-t transition-colors duration-300 ${
        theme === 'light' ? 'border-gray-200' : 'border-gray-800'
      }`}>
        <div className="container mx-auto px-6">
          <p className={`transition-colors duration-300 ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`} data-aos="fade-up">
            © 2025 Hakesh. All rights reserved. | Built with <i className="fas fa-heart text-red-600"></i> and passion for cybersecurity
          </p>
        </div>
      </footer>
    </div>
  );
}
