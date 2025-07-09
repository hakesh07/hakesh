import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-background transition-colors duration-300"
      style={{
        backgroundColor: theme === "dark" ? "#1f2937" : "#f3f4f6",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
    >
      {/* Toggle Background */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: theme === "dark" 
            ? "linear-gradient(45deg, #dc2626, #991b1b)"
            : "linear-gradient(45deg, #fbbf24, #f59e0b)"
        }}
        initial={false}
        animate={{
          opacity: 0.2
        }}
      />

      {/* Sliding Circle */}
      <motion.div
        className="relative w-6 h-6 rounded-full shadow-lg flex items-center justify-center"
        style={{
          backgroundColor: theme === "dark" ? "#dc2626" : "#f59e0b",
        }}
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
        animate={{
          x: theme === "dark" ? 0 : 32,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.i
              key="shield"
              className="fas fa-shield-alt text-white text-xs"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            />
          ) : (
            <motion.i
              key="eye"
              className="fas fa-eye text-white text-xs"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: theme === "dark" 
            ? "0 0 20px rgba(220, 38, 38, 0.3)"
            : "0 0 20px rgba(245, 158, 11, 0.3)"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}