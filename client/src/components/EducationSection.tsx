export default function EducationSection() {
  return (
    <section className="py-20" id="education">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-aos="fade-up">
          My <span className="text-cyber-gradient">Education</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 md:p-12" data-aos="fade-up" data-aos-duration="1000">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-3xl animate-pulse-slow">
                  <i className="fas fa-graduation-cap"></i>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">BSc Computer Science with Cyber Security</h3>
                <p className="text-red-600 text-xl font-semibold mb-2">Rathinam College of Arts and Science</p>
                <p className="text-gray-400 text-lg mb-4">Currently in 3rd Year (2022-2025)</p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <h4 className="text-red-600 font-semibold mb-2">Key Subjects</h4>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Network Security</li>
                      <li>• Ethical Hacking</li>
                      <li>• Cryptography</li>
                      <li>• Digital Forensics</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-4">
                    <h4 className="text-red-600 font-semibold mb-2">Achievements</h4>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Dean's List Student</li>
                      <li>• Hackathon Participant</li>
                      <li>• Security Club Member</li>
                      <li>• Research Project Lead</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
