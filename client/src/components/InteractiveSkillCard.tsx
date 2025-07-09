import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Skill {
  icon: string;
  name: string;
  percentage: number;
  description: string;
  projects: string[];
}

interface InteractiveSkillCardProps {
  skill: Skill;
  index: number;
}

export default function InteractiveSkillCard({ skill, index }: InteractiveSkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progress, setProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setProgress(skill.percentage);
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [skill.percentage, index]);

  return (
    <motion.div
      ref={cardRef}
      className="relative h-80 perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <motion.div
            className="glass-effect rounded-xl p-6 h-full flex flex-col justify-between hover:border-red-600 transition-all duration-300"
            animate={{
              scale: isHovered ? 1.05 : 1,
              boxShadow: isHovered 
                ? "0 20px 40px rgba(220, 38, 38, 0.3)" 
                : "0 10px 20px rgba(0, 0, 0, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <motion.i
                className={`${skill.icon} text-5xl text-red-600 mb-4 block`}
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.8 }}
              />
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
            </div>

            {/* Animated Progress Ring */}
            <div className="relative flex items-center justify-center mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="text-gray-700"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  className="text-red-600"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress / 100 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  style={{
                    strokeDasharray: "251.2",
                    strokeDashoffset: `${251.2 - (251.2 * progress) / 100}`
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="text-2xl font-bold text-red-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
            </div>

            <div className="text-center">
              <motion.button
                className="text-red-600 hover:text-red-400 text-sm flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-info-circle mr-2"></i>
                Click for details
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="glass-effect rounded-xl p-6 h-full border-red-600">
            <div className="text-center mb-4">
              <i className={`${skill.icon} text-3xl text-red-600 mb-2 block`} />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>

            <div className="mb-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-red-600 font-semibold mb-2 text-sm">Related Projects:</h4>
              <ul className="space-y-1">
                {skill.projects.map((project, idx) => (
                  <motion.li
                    key={idx}
                    className="text-gray-400 text-xs flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <i className="fas fa-chevron-right text-red-600 mr-2 text-xs"></i>
                    {project}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <motion.button
                className="text-red-600 hover:text-red-400 text-sm flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-undo mr-2"></i>
                Click to flip back
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}