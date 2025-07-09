import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 glass-effect transition-all duration-300 ${isScrolled ? 'bg-opacity-95' : ''} ${
      theme === 'light' ? 'bg-white/90 backdrop-blur-md border-gray-200' : ''
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('#home')}
            className="text-2xl font-bold text-red-600 hover:text-red-500 transition-colors duration-300"
          >
            HK
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('#home')}
              className={`hover:text-red-600 transition-colors duration-300 relative ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('#skills')}
              className={`hover:text-red-600 transition-colors duration-300 relative ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Skills
            </button>
            <button 
              onClick={() => handleNavClick('#education')}
              className={`hover:text-red-600 transition-colors duration-300 relative ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Education
            </button>
            <button 
              onClick={() => handleNavClick('#contact')}
              className={`hover:text-red-600 transition-colors duration-300 relative ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Contact
            </button>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-red-600 transition-colors duration-300 relative ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Resume
            </a>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>
          
          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button 
              className={`hover:text-red-600 transition-colors duration-300 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`md:hidden mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => handleNavClick('#home')}
              className={`hover:text-red-600 transition-colors duration-300 text-left ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('#skills')}
              className={`hover:text-red-600 transition-colors duration-300 text-left ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Skills
            </button>
            <button 
              onClick={() => handleNavClick('#education')}
              className={`hover:text-red-600 transition-colors duration-300 text-left ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Education
            </button>
            <button 
              onClick={() => handleNavClick('#contact')}
              className={`hover:text-red-600 transition-colors duration-300 text-left ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Contact
            </button>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-red-600 transition-colors duration-300 text-left ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}
            >
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
