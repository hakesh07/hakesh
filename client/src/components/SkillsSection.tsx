import InteractiveSkillCard from "./InteractiveSkillCard";
import { useTheme } from "./ThemeProvider";

interface Skill {
  icon: string;
  name: string;
  percentage: number;
  description: string;
  projects: string[];
}

const skills: Skill[] = [
  { 
    icon: "fas fa-network-wired", 
    name: "Networking", 
    percentage: 85,
    description: "Proficient in TCP/IP, DNS, DHCP, LAN/WAN, VPN, OSI Model, and Cisco Packet Tracer configurations.",
    projects: ["Network Simulation using Cisco Packet Tracer", "Secure LAN with VLANs", "DHCP Configuration", "Packet Traffic Analysis"]
  },
  { 
    icon: "fas fa-shield-alt", 
    name: "Cybersecurity Tools", 
    percentage: 82,
    description: "Experienced with Wireshark, Nmap, Metasploit, BEEF, Nessus for penetration testing and network analysis.",
    projects: ["Cyber Attack Simulation using Kali Linux", "BEEF Framework Practice", "Wireshark Packet Analysis", "Vulnerability Assessment"]
  },
  { 
    icon: "fab fa-linux", 
    name: "Operating Systems", 
    percentage: 88,
    description: "Expert in Linux (Kali, Ubuntu), Windows, and Mac systems with focus on security hardening.",
    projects: ["System Hardening", "Dual-boot Setup", "BIOS Configuration", "Hardware Assembly"]
  },
  { 
    icon: "fab fa-python", 
    name: "Languages & Scripting", 
    percentage: 75,
    description: "Skilled in Python, Bash, and PowerShell for automation and cybersecurity scripting.",
    projects: ["Network Scanner", "Automation Scripts", "Penetration Testing Tools", "System Administration"]
  },
  { 
    icon: "fas fa-bug", 
    name: "Security Concepts", 
    percentage: 80,
    description: "Knowledge in Vulnerability Assessment, Penetration Testing, Encryption, IDS/IPS, and Firewalls.",
    projects: ["Brute Force Simulation", "Port Scanning", "Payload Delivery", "Traffic Analysis"]
  },
  { 
    icon: "fab fa-linux", 
    name: "Linux Tools", 
    percentage: 85,
    description: "Proficient in Linux command line, shell scripting, system administration, and security tools.",
    projects: ["System Hardening Scripts", "Log Analysis Tools", "Network Monitoring", "Security Automation"]
  }
];

export default function SkillsSection() {
  const { theme } = useTheme();
  
  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'
    }`} id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-aos="fade-up">
          Technical <span className="text-cyber-gradient">Arsenal</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <InteractiveSkillCard 
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
