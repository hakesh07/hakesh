import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingIcon {
  id: number;
  icon: string;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export default function FloatingElements() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const cyberIcons = [
      "fas fa-shield-alt",
      "fas fa-lock",
      "fas fa-bug",
      "fas fa-code",
      "fas fa-terminal",
      "fas fa-network-wired",
      "fas fa-eye",
      "fas fa-fingerprint",
      "fas fa-user-secret",
      "fas fa-server"
    ];

    const generateIcons = () => {
      const newIcons: FloatingIcon[] = [];
      for (let i = 0; i < 8; i++) {
        newIcons.push({
          id: i,
          icon: cyberIcons[Math.floor(Math.random() * cyberIcons.length)],
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 20 + 15,
          delay: Math.random() * 5
        });
      }
      setIcons(newIcons);
    };

    generateIcons();
    const interval = setInterval(generateIcons, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-red-600 opacity-20"
          style={{
            fontSize: `${icon.size}px`,
            left: icon.x,
            top: icon.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
            y: [0, -100, -200],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 12,
            delay: icon.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <i className={icon.icon} />
        </motion.div>
      ))}
    </div>
  );
}