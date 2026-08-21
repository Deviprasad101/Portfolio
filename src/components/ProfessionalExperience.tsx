import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const bullets = [
  "Developed and maintained full-stack web applications using Python, Flask, FastAPI, React.js, HTML, CSS, and JavaScript.",
  "Designed and integrated REST APIs for frontend and backend communication.",
  "Worked with PostgreSQL and SQL queries for database-driven applications.",
  "Built responsive and user-friendly interfaces with cross-device compatibility.",
  "Integrated APIs, maps, geospatial services, authentication, and database functionality into web applications.",
  "Used Git and GitHub for version control, collaborative development, and source-code management.",
  "Participated in the complete software development lifecycle, including requirement analysis, development, testing, debugging, optimization, deployment, and maintenance.",
  "Used AI-assisted development tools such as Cursor, Antigravity, ChatGPT, and Claude AI to improve development, debugging, research, and problem-solving workflows."
];

export const ProfessionalExperience: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section
      id="professional-experience"
      ref={containerRef}
      className="relative w-full bg-[#070B14] text-[#F8FAFC] font-sans selection:bg-[#3B82F6]/30 selection:text-[#06B6D4] pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Glow */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#06B6D4]/[0.03] rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#3B82F6]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / PROFESSIONAL
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#3B82F6]/80 via-[#8B5CF6]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#94A3B8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              INDUSTRY
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F8FAFC] via-[#3B82F6] to-[#1E3A8A] drop-shadow-[0_8px_25px_rgba(59,130,246,0.35)]">
              EXPERIENCE.
            </span>
          </h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative w-full rounded-sm border border-[#3B82F6]/30 bg-[#0B1120]/80 backdrop-blur-xl overflow-hidden group hover:border-[#06B6D4]/60 transition-colors duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        >
          {/* Top highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent opacity-60 group-hover:via-[#06B6D4] group-hover:opacity-100 transition-all duration-500" />
          
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Side: Role Info */}
            <div className="lg:w-1/3 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-[#3B82F6]/20 relative overflow-hidden bg-gradient-to-b from-transparent to-[#3B82F6]/[0.02]">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase text-[#F8FAFC] bg-[#3B82F6]/20 border border-[#3B82F6]/40 rounded-sm">
                  CURRENT ROLE
                </span>
                
                <h3 
                  className="text-4xl sm:text-5xl tracking-wide text-white mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  FULL STACK DEVELOPER
                </h3>
                
                <h4 
                  className="text-sm sm:text-[15px] font-medium text-[#06B6D4] mb-6 leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  IIT Tirupati Navavishkar I-Hub Foundation (IITTNiF)
                </h4>
                
                <div className="flex items-center space-x-3 text-[#94A3B8]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6] animate-pulse" />
                  <span 
                    className="text-[11px] tracking-[0.2em] font-medium uppercase"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    NOV 2025 – PRESENT
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Bullets */}
            <div className="lg:w-2/3 p-8 sm:p-12 bg-[#070B14]/40">
              <ul className="space-y-5 relative z-10">
                {bullets.map((bullet, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start group/bullet"
                  >
                    <div className="mt-1.5 mr-4 shrink-0 flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#3B82F6] rotate-45 group-hover/bullet:bg-[#06B6D4] group-hover/bullet:scale-150 transition-all duration-300" />
                    </div>
                    <p 
                      className="text-[13px] sm:text-[14px] leading-relaxed text-[#94A3B8] font-light group-hover/bullet:text-[#F8FAFC] transition-colors duration-300"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {bullet}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProfessionalExperience;
