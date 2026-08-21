// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "525e4bb0-483b-4155-99d5-70fa04812e84",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Message from Portfolio Terminal",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
      } else {
        alert("Transmission failed. Please check the network.");
      }
    } catch (error) {
      alert("Transmission failed. Please check the network.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#070B14] text-[#F8FAFC] font-sans selection:bg-[#3B82F6]/30 selection:text-[#06B6D4] pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#3B82F6]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  05 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#3B82F6]/80 via-[#8B5CF6]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#94A3B8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    LET'S BUILD
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F8FAFC] via-[#3B82F6] to-[#1E3A8A] drop-shadow-[0_8px_25px_rgba(59,130,246,0.35)]">
                    SOMETHING TOGETHER.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#94A3B8] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                I'm currently open to Full Stack Developer opportunities where I can contribute to real-world projects, solve technical problems, and continue growing as a software developer.
              </p>

              {/* Contact Information */}
              <div className="space-y-5">
                <div className="flex flex-col space-y-1">
                  <span className="text-[#3B82F6] font-medium text-[10px] font-mono uppercase tracking-widest">EMAIL</span>
                  <a href="mailto:cdpreddyap@gmail.com" className="text-[#F8FAFC] text-xs sm:text-sm hover:text-[#06B6D4] transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    cdpreddyap@gmail.com
                  </a>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-[#3B82F6] font-medium text-[10px] font-mono uppercase tracking-widest">PHONE</span>
                  <span className="text-[#F8FAFC] text-xs sm:text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    +91 6281604440
                  </span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-[#3B82F6] font-medium text-[10px] font-mono uppercase tracking-widest">LOCATION</span>
                  <span className="text-[#F8FAFC] text-xs sm:text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Tirupati, Andhra Pradesh, India
                  </span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-[#3B82F6] font-medium text-[10px] font-mono uppercase tracking-widest">AVAILABLE FOR</span>
                  <span className="text-[#F8FAFC] text-xs sm:text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Full-Time Opportunities
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-6">
                  <a href="https://github.com/deviprasad101" target="_blank" rel="noreferrer" className="text-[10px] font-mono tracking-widest uppercase border border-[#3B82F6]/40 px-4 py-2 hover:border-[#06B6D4] hover:bg-[#3B82F6]/10 hover:text-[#F8FAFC] text-[#94A3B8] transition-all">
                    GITHUB
                  </a>
                  <a href="https://linkedin.com/in/deviprasad-reddy-chinthamreddy" target="_blank" rel="noreferrer" className="text-[10px] font-mono tracking-widest uppercase border border-[#3B82F6]/40 px-4 py-2 hover:border-[#06B6D4] hover:bg-[#3B82F6]/10 hover:text-[#F8FAFC] text-[#94A3B8] transition-all">
                    LINKEDIN
                  </a>
                  <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-[10px] font-mono tracking-widest uppercase border border-[#06B6D4]/60 bg-[#06B6D4]/5 px-4 py-2 hover:border-[#06B6D4] hover:bg-[#06B6D4]/15 hover:text-[#F8FAFC] text-[#06B6D4] transition-all flex items-center space-x-1.5">
                    <span>DOWNLOAD RESUME</span>
                    <span className="text-[9px]">↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#3B82F6]/40 bg-[#0B1120] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#3B82F6]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#3B82F6]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#3B82F6]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#3B82F6]/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#06B6D4] text-[#06B6D4] text-sm">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  PACKET DELIVERED
                </h3>
                <p className="text-xs text-[#94A3B8] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Transmission registered successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#3B82F6] mb-2">
                      // SENDER
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter name"
                      className="w-full bg-[#070B14] border border-[#3B82F6]/30 focus:border-[#06B6D4] text-xs text-white placeholder-[#3B82F6]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#3B82F6] mb-2">
                      // EMAIL
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email"
                      className="w-full bg-[#070B14] border border-[#3B82F6]/30 focus:border-[#06B6D4] text-xs text-white placeholder-[#3B82F6]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#3B82F6] mb-2">
                    // PAYLOAD
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter transmission payload..."
                    className="w-full bg-[#070B14] border border-[#3B82F6]/30 focus:border-[#06B6D4] text-xs text-white placeholder-[#3B82F6]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 border border-[#3B82F6]/50 bg-[#0B1120] hover:border-[#06B6D4] hover:bg-[#3B82F6] text-[#F8FAFC] hover:text-[#F8FAFC] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {isSubmitting ? "TRANSMITTING..." : "EXECUTE DISPATCH ↗"}
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-12 mt-20 border-t border-[#3B82F6]/20 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div className="flex flex-col space-y-1.5">
            <span className="text-xl sm:text-2xl text-white uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              DEVI PRASAD CHINTHAMREDDY
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.15em] text-[#06B6D4] uppercase">
              Full Stack Developer | Python | Flask | FastAPI | React.js
            </span>
          </div>
          <div className="text-[9px] sm:text-[10px] font-mono text-[#94A3B8] tracking-widest uppercase md:text-right">
            © {new Date().getFullYear()} Devi Prasad Chinthamreddy.<br className="hidden md:block" /> All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;