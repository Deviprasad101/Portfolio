import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: 'PROGRAMMING',
    badge: 'LANGUAGES',
    items: ['Python', 'JavaScript'],
    description: 'Core languages used for building full-stack applications, algorithms, and backend services.',
    stat: 'CORE',
    colSpan: 'md:col-span-6 lg:col-span-4',
  },
  {
    title: 'FRONTEND',
    badge: 'UI/UX',
    items: ['HTML5', 'CSS3', 'React.js'],
    description: 'Building modern, responsive, and user-friendly web interfaces ensuring cross-device compatibility.',
    stat: 'RESPONSIVE',
    colSpan: 'md:col-span-6 lg:col-span-4',
  },
  {
    title: 'BACKEND',
    badge: 'API & LOGIC',
    items: ['Flask', 'FastAPI', 'REST APIs'],
    description: 'Building scalable backends, robust REST APIs, and seamless frontend-backend integrations.',
    stat: 'SCALABLE',
    colSpan: 'md:col-span-6 lg:col-span-4',
  },
  {
    title: 'DATABASES',
    badge: 'DATA',
    items: ['PostgreSQL', 'SQLite', 'SQL'],
    description: 'Experience with relational databases, writing efficient queries, and data modeling.',
    stat: 'PERSISTENT',
    colSpan: 'md:col-span-6 lg:col-span-4',
  },
  {
    title: 'DEV TOOLS',
    badge: 'WORKFLOW',
    items: ['Git', 'GitHub', 'Docker', 'VS Code'],
    description: 'Proficient in version control, containerization, and modern collaborative development workflows.',
    stat: 'EFFICIENT',
    colSpan: 'md:col-span-6 lg:col-span-4',
  },
  {
    title: 'AI DEVELOPMENT',
    badge: 'AI-ASSISTED',
    items: ['Cursor', 'Antigravity', 'ChatGPT', 'Claude AI', 'Stitch AI'],
    description: 'Using AI-assisted development tools for coding, debugging, research, documentation, and problem-solving.',
    stat: 'ACCELERATED',
    colSpan: 'md:col-span-6 lg:col-span-4',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
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

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-screen bg-[#070B14] text-[#F8FAFC] font-sans selection:bg-[#3B82F6]/30 selection:text-[#06B6D4] pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#3B82F6]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#8B5CF6]/5 rounded-full blur-[160px] pointer-events-none" />

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
            02 / TECH MATRIX
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#3B82F6]/80 via-[#8B5CF6]/40 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#94A3B8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              ARCHITECTURAL MASTERY.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F8FAFC] via-[#3B82F6] to-[#1E3A8A] drop-shadow-[0_8px_25px_rgba(59,130,246,0.35)]">
              PRECISION APPLIED.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {bentoCategories.map((block, idx) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${block.colSpan} relative p-8 sm:p-9 rounded-sm border-t border-t-[#3B82F6]/60 border-l border-l-[#3B82F6]/40 border-r border-r-[#3B82F6]/40 border-b border-b-[#3B82F6]/20 bg-[#0B1120]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgba(59,130,246,0.08)] hover:border-t-[#06B6D4]/90 hover:border-x-[#06B6D4]/70 hover:border-b-[#06B6D4]/40 hover:shadow-[0_16px_45px_rgba(6,182,212,0.25)] cursor-pointer group`}
            >
              {/* Permanent Ambient Glow Behind Card Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-[#3B82F6]/50 blur-[6px] group-hover:bg-[#06B6D4] group-hover:blur-[8px] transition-all duration-500" />
              
              {/* Sharp Top Edge Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent opacity-70 group-hover:opacity-100 group-hover:via-[#06B6D4] transition-all duration-500" />

              {/* Corner Minimal Pins */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#3B82F6]/60 group-hover:border-[#06B6D4] group-hover:shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#3B82F6]/60 group-hover:border-[#06B6D4] group-hover:shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all duration-300" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#06B6D4] group-hover:text-[#F8FAFC] transition-colors">
                  {block.badge}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-[#3B82F6]/40 text-[#94A3B8] bg-[#070B14] group-hover:border-[#06B6D4]/50 group-hover:text-white transition-all">
                  {block.stat}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-white mb-3 group-hover:text-[#F8FAFC] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed mb-7 max-w-xl group-hover:text-[#F8FAFC] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#3B82F6]/20">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#3B82F6]/35 bg-[#070B14] text-[#94A3B8] group-hover:border-[#06B6D4]/50 group-hover:bg-[#3B82F6]/20 group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;