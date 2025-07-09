import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function InteractiveEducation() {
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);
  const { theme } = useTheme();

  const achievements = [
    { title: "Network Security", description: "Advanced concepts in network protection and monitoring" },
    { title: "Ethical Hacking", description: "Penetration testing and vulnerability assessment" },
    { title: "Cryptography", description: "Encryption algorithms and secure communication" },
    { title: "Digital Forensics", description: "Investigation techniques and evidence analysis" }
  ];

  const stats = [
    { label: "Current Year", value: "3nd", icon: "fas fa-calendar-alt" },
    { label: "CGPA", value: "6.6", icon: "fas fa-chart-line" },
    { label: "Projects", value: "4+", icon: "fas fa-code" },
    { label: "Certifications", value: "6", icon: "fas fa-certificate" }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="education">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Academic <span className="text-cyber-gradient">Journey</span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Education Card */}
          <motion.div
            className="glass-effect rounded-2xl p-8 md:p-12 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Institution Logo/Icon */}
              <motion.div 
                className="text-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-4xl mb-4 relative">
                  <i className="fas fa-graduation-cap"></i>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-red-600"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <motion.div
                  className="text-red-600 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Est. 1999
                </motion.div>
              </motion.div>
              
              {/* Education Details */}
              <div className="md:col-span-2">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  BSc Computer Science with Cyber Security
                </motion.h3>
                
                <motion.p 
                  className="text-red-600 text-xl font-semibold mb-2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Rathinam College of Arts and Science, Coimbatore
                </motion.p>
                
                <motion.p 
                  className={`text-lg mb-6 transition-colors duration-300 ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Currently in 3nd Year (2023-2026)
                </motion.p>
                
                <motion.p 
                  className={`leading-relaxed transition-colors duration-300 ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Pursuing comprehensive education in cybersecurity fundamentals, ethical hacking, and 
                  network security with 3 years of dedicated study. Gained practical experience through hands-on lab simulations, 
                  hackathons, and cybersecurity training programs.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-effect rounded-xl p-6 text-center hover:border-red-600 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
              >
                <motion.i 
                  className={`${stat.icon} text-3xl text-red-600 mb-3 block`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className="text-2xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Key Subjects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="glass-effect rounded-xl p-6"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-red-600 font-semibold mb-4 flex items-center">
                <i className="fas fa-book mr-2"></i>
                Core Subjects
              </h4>
              <div className="space-y-3">
                {achievements.map((subject, index) => (
                  <motion.div
                    key={subject.title}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      theme === 'light' 
                        ? 'bg-white border border-gray-200 hover:bg-gray-50 hover:border-red-300' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    onHoverStart={() => setHoveredAchievement(index)}
                    onHoverEnd={() => setHoveredAchievement(null)}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-medium transition-colors duration-300 ${
                        theme === 'light' ? 'text-gray-900' : 'text-white'
                      }`}>{subject.title}</span>
                      <motion.i 
                        className="fas fa-chevron-right text-red-600"
                        animate={{ 
                          x: hoveredAchievement === index ? 5 : 0,
                          opacity: hoveredAchievement === index ? 1 : 0.5
                        }}
                      />
                    </div>
                    <motion.p 
                      className={`text-sm mt-1 transition-colors duration-300 ${
                        theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                      }`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: hoveredAchievement === index ? 1 : 0,
                        height: hoveredAchievement === index ? "auto" : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {subject.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="glass-effect rounded-xl p-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-red-600 font-semibold mb-4 flex items-center">
                <i className="fas fa-trophy mr-2"></i>
                Achievements & Activities
              </h4>
              <div className="space-y-3">
                {[
                  "Participated in Idea Arangam 24-Hour Hackathon",
                  "Presented Paper in INAMDAA 2024 Conference",
                  "Completed R-SMART-CYBER Training Program",
                  "Attended be10x AI Tools Workshop",
                  "Cyber Ninjas Ethical Hacking - IIT Madras",
                  "6 Professional Certifications Completed"
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    className="flex items-center space-x-3 p-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className={`text-sm transition-colors duration-300 ${
                      theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                    }`}>{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
