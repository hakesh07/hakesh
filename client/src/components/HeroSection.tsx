import { useTypingEffect } from "@/hooks/use-typing-effect";

export default function HeroSection() {
  const phrases = [
    "Cybersecurity Student",
    "Ethical Hacker",
    "Security Researcher",
    "Linux Enthusiast",
    "Full Stack Developer"
  ];
  
  const typedText = useTypingEffect(phrases, 150, 100, 2000);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20" id="home">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="text-center md:text-right" data-aos="zoom-in" data-aos-duration="1000">
            <div className="relative inline-block">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-red-600 to-red-800 rounded-full p-1 animate-pulse-slow">
               <div className="w-full h-full overflow-hidden bg-gray-900 rounded-full">
               <img
                src={profileImage}
                    alt="hakesh.jpg"
                    className="w-full h-full object-cover rounded-full animate-float"
               />
        </div>

                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-600 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="text-center md:text-left" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, It's <span className="text-cyber-gradient animate-gradient">Hakesh</span>
            </h1>
            
            <h3 className="text-2xl md:text-3xl mb-6 text-gray-300">
              I'm a <span className="text-red-600 font-semibold typing-cursor">{typedText}</span>
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
              As a third-year student pursuing a BSc CS with Cyber Security at Rathinam College of Arts and Science, I 
              am passionate about protecting digital assets and building secure systems. My studies have provided me with 
              a strong foundation in Linux, networking, and security principles. I have actively participated in 
              cybersecurity competitions, hackathons, and intercollegiate events to apply my knowledge practically. 
              My enthusiasm for cybersecurity drives me to continuously learn emerging threats and defense mechanisms.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6 mb-8" data-aos="fade-up" data-aos-delay="200">
              <a href="https://www.linkedin.com/in/hakesh-v-9a0b83309" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-gray-900 border border-red-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300 animate-glow">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com/hakesh07" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-gray-900 border border-red-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://x.com/hakesh_v31" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-gray-900 border border-red-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300">
                <i className="fab fa-x-twitter text-xl"></i>
              </a>
              <a href="https://www.instagram.com/hakesh07" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-gray-900 border border-red-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
              className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-red-600/50 transform hover:scale-105 transition-all duration-300" 
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              <i className="fas fa-envelope mr-2"></i>Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
