import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you soon.",
        duration: 5000,
      });
      
      // Reset form
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

  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-aos="fade-up">
          Get In <span className="text-cyber-gradient">Touch</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8" data-aos="fade-up" data-aos-duration="1000">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name" className="block text-gray-400 mb-2">Your Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-gray-400 mb-2">Your Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="subject" className="block text-gray-400 mb-2">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                placeholder="Enter subject"
              />
            </div>
            
            <div className="mb-8">
              <Label htmlFor="message" className="block text-gray-400 mb-2">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                required
                className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Enter your message"
              />
            </div>
            
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-red-600/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
