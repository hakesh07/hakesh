import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "./ThemeProvider";

export default function InteractiveContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();
  const { theme } = useTheme();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you soon.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { 
      icon: "fas fa-envelope", 
      label: "Email", 
      value: "hakeshv4@gmail.com", 
      color: "#dc2626",
      description: "Drop me a line"
    },
    { 
      icon: "fas fa-phone", 
      label: "Phone", 
      value: "+91 9600264605", 
      color: "#059669",
      description: "Let's talk"
    },
    { 
      icon: "fas fa-map-marker-alt", 
      label: "Location", 
      value: "Coonoor, The Nilgiris, Tamil Nadu", 
      color: "#2563eb",
      description: "Find me here"
    },
    { 
      icon: "fas fa-clock", 
      label: "Response Time", 
      value: "Within 24 hours", 
      color: "#7c3aed",
      description: "Quick replies"
    }
  ];

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'
    }`} id="contact" onMouseMove={handleMouseMove}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-red-600"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                delay: (i * 0.1) % 2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-colors duration-300 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's <span className="text-cyber-gradient">Connect</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <p className={`text-lg mb-8 transition-colors duration-300 ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-400'
            }`}>
              Ready to collaborate on cybersecurity projects or discuss opportunities? 
              I'm always excited to connect with fellow security enthusiasts and potential employers.
            </p>

            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                className="glass-effect rounded-xl p-6 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: method.color
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: method.color }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <i className={`${method.icon} text-lg`} />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className={`font-semibold group-hover:text-red-400 transition-colors ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      {method.label}
                    </h4>
                    <p className={`text-sm transition-colors duration-300 ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}>{method.description}</p>
                    <motion.p 
                      className="text-red-400 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      {method.value}
                    </motion.p>
                  </div>
                  <motion.i 
                    className="fas fa-arrow-right text-red-600 opacity-0 group-hover:opacity-100"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>Hire Me</h4>
              <motion.div
                className="glass-effect rounded-xl p-6 text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className={`text-sm mb-4 transition-colors duration-300 ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-400'
                }`}>
                  Ready to bring cybersecurity expertise to your team? Let's discuss opportunities and collaborate on securing your digital assets.
                </p>
                <motion.button
                  onClick={() => {
                    const element = document.querySelector('#contact form');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-briefcase mr-2"></i>
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="glass-effect rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(220, 38, 38, 0.1) 0%, transparent 70%)`
              }}
            >
              {/* Floating particles in form */}
              <AnimatePresence>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-red-600 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: Math.random() * 400,
                      y: Math.random() * 500,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </AnimatePresence>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setFocusedField('name')}
                  onHoverEnd={() => setFocusedField(null)}
                >
                  <Label htmlFor="name" className={`block mb-2 transition-colors duration-300 ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-400'
                }`}>Your Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-black border rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 ${
                      focusedField === 'name' ? 'border-red-600 shadow-lg shadow-red-600/20' : 'border-gray-600 focus:border-red-600'
                    }`}
                    placeholder="Enter your name"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setFocusedField('email')}
                  onHoverEnd={() => setFocusedField(null)}
                >
                  <Label htmlFor="email" className={`block mb-2 transition-colors duration-300 ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-400'
                  }`}>Your Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-black border rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 ${
                      focusedField === 'email' ? 'border-red-600 shadow-lg shadow-red-600/20' : 'border-gray-600 focus:border-red-600'
                    }`}
                    placeholder="Enter your email"
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setFocusedField('subject')}
                onHoverEnd={() => setFocusedField(null)}
              >
                <Label htmlFor="subject" className={`block mb-2 transition-colors duration-300 ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-400'
              }`}>Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full bg-black border rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 ${
                    focusedField === 'subject' ? 'border-red-600 shadow-lg shadow-red-600/20' : 'border-gray-600 focus:border-red-600'
                  }`}
                  placeholder="Enter subject"
                />
              </motion.div>
              
              <motion.div 
                className="mb-8"
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setFocusedField('message')}
                onHoverEnd={() => setFocusedField(null)}
              >
                <Label htmlFor="message" className={`block mb-2 transition-colors duration-300 ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-400'
                }`}>Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className={`w-full bg-black border rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 resize-none ${
                    focusedField === 'message' ? 'border-red-600 shadow-lg shadow-red-600/20' : 'border-gray-600 focus:border-red-600'
                  }`}
                  placeholder="Enter your message"
                />
              </motion.div>
              
              <div className="text-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center">
                      {isSubmitting ? (
                        <>
                          <motion.i 
                            className="fas fa-spinner mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane mr-2"></i>
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}