import { motion } from "framer-motion";
import { useState } from "react";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { useTheme } from "./ThemeProvider";

export default function InteractiveHero() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  const phrases = [
    "Cybersecurity Student",
    "Ethical Hacker",
    "Security Researcher",
    "Linux Enthusiast",
    "Full Stack Developer"
  ];

  const typedText = useTypingEffect(phrases, 150, 100, 2000);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 600);
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden" 
      id="home"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Background with Cyber Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-red-900/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="cyber-grid"></div>
        </div>
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-red-600/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 border border-red-600/30 animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-red-600/20 rotate-45 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Enhanced Profile Section */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative inline-block group">
              <motion.div
                className="w-80 h-80 mx-auto relative cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={triggerGlitch}
                animate={{
                  rotateY: mousePosition.x * 10,
                  rotateX: mousePosition.y * -10,
                }}
                style={{
                  transformStyle: "preserve3d",
                }}
              >
                {/* Multiple rotating borders for cyber effect */}
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute inset-0 rounded-full border-2 border-red-600/60 animate-spin-slow"></div>
                  <div className="absolute inset-2 rounded-full border border-red-500/40 animate-spin-reverse"></div>
                  <div className="absolute inset-4 rounded-full border border-red-400/20 animate-pulse"></div>
                </div>

                {/* Holographic outer ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 p-1 animate-gradient opacity-70">
                  <div className={`w-full h-full rounded-full transition-colors duration-300 ${
                    theme === 'light' ? 'bg-white' : 'bg-black'
                  }`}></div>
                </div>

                {/* Main profile image container */}
                <motion.div
                  className={`absolute inset-2 rounded-full overflow-hidden transition-all duration-300 ${
                    isGlitching ? 'animate-pulse' : ''
                  } ${
                    theme === 'light' 
                      ? 'bg-gradient-to-br from-gray-100 to-white shadow-2xl' 
                      : 'bg-gradient-to-br from-gray-900 to-black shadow-2xl'
                  }`}
                  animate={{
                    boxShadow: isGlitching 
                      ? [
                          "0 0 20px #dc2626",
                          "0 0 40px #dc2626", 
                          "0 0 60px #dc2626",
                          "0 0 20px #dc2626"
                        ]
                      : "0 0 30px rgba(220, 38, 38, 0.5)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="/hakesh-profile.jpg"
                    alt="Hakesh - Cybersecurity Student"
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      isGlitching ? 'filter brightness-110 contrast-110 hue-rotate-15' : ''
                    }`}
                  />

                  {/* Cyber scan line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/20 to-transparent h-2"
                    animate={{
                      y: ["-100%", "100%", "-100%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>

                {/* Floating data particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-red-600 rounded-full"
                    animate={{
                      x: [0, Math.cos(i * 45 * Math.PI / 180) * 80],
                      y: [0, Math.sin(i * 45 * Math.PI / 180) * 80],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                  />
                ))}
              </motion.div>

              {/* Enhanced status indicators */}
              <motion.div
                className="absolute -top-6 -right-6 flex flex-col space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-mono">ONLINE</span>
                </div>
                <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
                  <span className="text-xs text-red-400 font-mono">SECURE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced content section */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h1 
              className={`text-4xl md:text-6xl font-bold mb-4 ${
                isGlitching ? 'glitch-text' : ''
              }`}
              animate={{
                filter: isGlitching ? "blur(1px)" : "blur(0px)",
                textShadow: isGlitching 
                  ? "2px 2px 0 #ff0000, -2px -2px 0 #00ffff"
                  : "none"
              }}
            >
              Hi, It's{" "}
              <span className="text-cyber-gradient animate-gradient bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
                Hakesh
              </span>
            </motion.h1>

            <motion.h3 
              className={`text-2xl md:text-3xl mb-6 min-h-[3rem] transition-colors duration-300 ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              I'm a{" "}
              <span className="text-red-600 font-semibold relative">
                {typedText}
                <motion.span
                  className="absolute -right-1 top-0 w-0.5 h-full bg-red-600"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.h3>

            <motion.p 
              className={`text-lg leading-relaxed mb-8 max-w-2xl transition-colors duration-300 ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              Third-year B.Sc. Computer Science student specializing in Cybersecurity 
              with hands-on experience in ethical hacking, penetration testing, and network security. 
              Proficient in Linux systems, vulnerability assessment, and cybersecurity tools. 
              Passionate about protecting digital assets and building secure systems.
            </motion.p>

            {/* Enhanced social icons with better animations */}
            <motion.div 
              className="flex justify-center md:justify-start space-x-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              {[
                { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/hakesh-v-9a0b83309", color: "#0077b5", name: "LinkedIn" },
                { icon: "fab fa-github", url: "https://github.com/hakesh07", color: "#333", name: "GitHub" },
                { icon: "fab fa-instagram", url: "https://www.instagram.com/hakesh07", color: "#e4405f", name: "Instagram" },
                { icon: "fab fa-x-twitter", url: "https://x.com/hakesh_v31", color: "#1da1f2", name: "Twitter" }
              ].map((social, index) => (
                <motion.a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 border-2 border-red-600/50 rounded-full flex items-center justify-center group relative overflow-hidden transition-all duration-300 ${
                    theme === 'light' ? 'bg-white/10 backdrop-blur-sm hover:shadow-lg' : 'bg-black/20 backdrop-blur-sm hover:shadow-lg'
                  }`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    borderColor: social.color,
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20, rotate: -180 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ delay: 2 + index * 0.1, type: "spring" }}
                >
                  <i className={`${social.icon} text-xl z-10 transition-colors duration-300 group-hover:text-white`} />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: social.color }}
                    initial={{ scale: 0, rotate: 180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  />
                  <motion.div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {social.name}
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            {/* Enhanced CTA button with more sophisticated design */}
            <motion.button 
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
              className="relative inline-block bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white px-10 py-4 rounded-full font-semibold overflow-hidden group border border-red-500/50"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220, 38, 38, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-600 to-red-800"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{ 
                  x: ["-100%", "100%"],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
              <span className="relative z-10 flex items-center">
                <motion.i 
                  className="fas fa-envelope mr-3"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                />
                Hire Me
                <motion.i 
                  className="fas fa-arrow-right ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .cyber-grid {
          background-image: 
            linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin 6s linear infinite reverse;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .glitch-text {
          animation: glitch 0.6s ease-in-out;
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
      `}</style>
    </section>
  );
}