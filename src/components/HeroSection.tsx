import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';
import aboutImg from '../assets/about.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-[#070B14] text-[#F8FAFC] font-sans selection:bg-[#3B82F6]/30 selection:text-[#06B6D4] cursor-none">
      {/* ================= 1. MINIMAL CUSTOM CURSOR ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#3B82F6]/40 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.1)' : 'rgba(248, 250, 252, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. FIXED VIDEO LAYER ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#070B14] flex items-center justify-center">
        <img
          src={aboutImg}
          alt="Hero Background"
          className="h-screen w-auto max-w-none object-contain object-center scale-95 md:scale-[0.98] lg:scale-100"
        />

        {/* Seamless Soft Left Edge Blend */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#070B14] via-[#070B14]/85 to-transparent pointer-events-none" />

        {/* ================= 3. ANIMATED WATERMARK EMBLEM ================= */}
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 pointer-events-none flex items-center justify-center z-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-[#070B14]/85 rounded-full blur-xl" />

            <motion.div
              animate={{
                y: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src={watermarkImg}
                alt="Insignia"
                className="w-28 h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#F8FAFC] hover:opacity-75 transition-opacity"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            DEVIPRASAD CHINTHAMREDDY.
          </a>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#94A3B8] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#06B6D4]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#06B6D4]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#3B82F6]/50 hover:border-[#06B6D4] text-[#F8FAFC] transition-all duration-300 backdrop-blur-sm ml-auto md:ml-0"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </a>
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          
          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: I BUILD */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#94A3B8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  I BUILD
                </span>

                {/* Line 2: DIGITAL */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F8FAFC] via-[#3B82F6] to-[#1E3A8A] drop-shadow-[0_8px_25px_rgba(59,130,246,0.35)]">
                  DIGITAL
                </span>

                {/* Line 3: EXPERIENCES */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#E2E8F0] via-[#8B5CF6] to-[#4C1D95] drop-shadow-[0_10px_30px_rgba(139,92,246,0.4)]">
                  EXPERIENCES
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#94A3B8]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                FULL STACK DEVELOPER <span className="text-[#3B82F6] mx-1">•</span> PYTHON <span className="text-[#3B82F6] mx-1">•</span> FLASK <span className="text-[#3B82F6] mx-1">•</span> FASTAPI <span className="text-[#3B82F6] mx-1">•</span> REACT.JS
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#94A3B8] leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                Full Stack Developer with hands-on experience building responsive web applications, REST APIs, database-driven systems, and geospatial solutions using Python, Flask, FastAPI, React.js, PostgreSQL, and modern development tools.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center gap-4 sm:gap-6 flex-wrap mt-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* View My Work CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-[#3B82F6] bg-[#070B14]/80 hover:border-[#06B6D4] text-[#F8FAFC] hover:text-[#06B6D4] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#06B6D4]/40 to-transparent pointer-events-none" />
                <span>VIEW MY WORK</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#3B82F6]/40 hover:border-[#3B82F6] text-[#94A3B8] hover:text-[#F8FAFC] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs">
                  ↓
                </span>
              </motion.a>

              {/* Contact Me Button */}
              <motion.a
                href="#contact"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#3B82F6]/40 hover:border-[#3B82F6] text-[#94A3B8] hover:text-[#F8FAFC] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              >
                <span>CONTACT ME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Signature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-24 xl:pr-36 mr-4 z-20 select-none"
          >
            {/* 1. Quote Mark */}
            <span className="text-xl text-[#3B82F6] leading-none font-serif mb-2">
              “
            </span>

            {/* 2. Compact Two-Line Statement */}
            <div 
              className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#94A3B8] space-y-1 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>CODE IS MY CRAFT.</p>
              <p>IMPACT IS MY GOAL.</p>
            </div>

            {/* 3. Gold Accent Line */}
            <div className="w-28 h-[1px] bg-gradient-to-r from-[#3B82F6] via-[#06B6D4]/70 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.4)] mb-2" />

            {/* 4. Fine Monoline Calligraphy Signature */}
            <div 
              className="text-[2.2rem] text-[#06B6D4] font-normal leading-none -ml-0.5 whitespace-nowrap"
              style={{ 
                fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Deviprasad Chinthamreddy
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;