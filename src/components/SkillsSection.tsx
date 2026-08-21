import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaDocker, FaTerminal, FaRobot } from 'react-icons/fa';
import { SiJavascript, SiFlask, SiFastapi, SiPostgresql, SiSqlite } from 'react-icons/si';
import { VscVscode, VscOpenai } from 'react-icons/vsc';

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
    items: ['Cursor', 'Antigravity', 'ChatGPT', 'Claude AI'],
    description: 'Using AI-assisted development tools for coding, debugging, research, documentation, and problem-solving.',
    stat: 'ACCELERATED',
    colSpan: 'md:col-span-6 lg:col-span-4',
  },
];

const floatingIcons = [
  { Icon: FaPython, name: 'Python', top: '12%', left: '8%', color: '#3776AB', sizeClasses: 'text-4xl md:text-5xl lg:text-6xl', delay: 0, duration: 8, displayClasses: 'block' },
  { Icon: SiJavascript, name: 'JavaScript', top: '22%', left: '85%', color: '#F7DF1E', sizeClasses: 'text-3xl md:text-4xl lg:text-5xl', delay: 1.5, duration: 9, displayClasses: 'block' },
  { Icon: FaHtml5, name: 'HTML5', top: '40%', left: '5%', color: '#E34F26', sizeClasses: 'text-2xl md:text-3xl lg:text-4xl', delay: 2.2, duration: 7, displayClasses: 'hidden md:block' },
  { Icon: FaCss3Alt, name: 'CSS3', top: '55%', left: '10%', color: '#1572B6', sizeClasses: 'text-2xl md:text-3xl lg:text-4xl', delay: 0.8, duration: 8.5, displayClasses: 'hidden md:block' },
  { Icon: FaReact, name: 'React.js', top: '75%', left: '7%', color: '#61DAFB', sizeClasses: 'text-4xl md:text-5xl lg:text-6xl', delay: 3.1, duration: 10, displayClasses: 'block' },
  { Icon: SiFlask, name: 'Flask', top: '15%', left: '50%', color: '#FFFFFF', sizeClasses: 'text-3xl md:text-4xl lg:text-5xl', delay: 1.2, duration: 7.5, displayClasses: 'hidden lg:block' },
  { Icon: SiFastapi, name: 'FastAPI', top: '12%', left: '70%', color: '#009688', sizeClasses: 'text-2xl md:text-3xl lg:text-4xl', delay: 2.5, duration: 9.5, displayClasses: 'hidden md:block' },
  { Icon: SiPostgresql, name: 'PostgreSQL', top: '88%', left: '38%', color: '#4169E1', sizeClasses: 'text-3xl md:text-4xl lg:text-5xl', delay: 0.5, duration: 8.2, displayClasses: 'hidden md:block' },
  { Icon: SiSqlite, name: 'SQLite', top: '88%', left: '62%', color: '#003B57', sizeClasses: 'text-2xl md:text-3xl lg:text-4xl', delay: 1.8, duration: 7.8, displayClasses: 'hidden md:block' },
  { Icon: FaGitAlt, name: 'Git', top: '45%', left: '90%', color: '#F05032', sizeClasses: 'text-2xl md:text-3xl lg:text-4xl', delay: 3.5, duration: 8.8, displayClasses: 'hidden md:block' },
  { Icon: FaGithub, name: 'GitHub', top: '60%', left: '88%', color: '#FFFFFF', sizeClasses: 'text-3xl md:text-4xl lg:text-5xl', delay: 1.1, duration: 9.2, displayClasses: 'block' },
  { Icon: FaDocker, name: 'Docker', top: '78%', left: '82%', color: '#2496ED', sizeClasses: 'text-4xl md:text-5xl lg:text-6xl', delay: 2.8, duration: 10.5, displayClasses: 'block' },
  { Icon: VscVscode, name: 'VS Code', top: '35%', left: '22%', color: '#007ACC', sizeClasses: 'text-2xl md:text-3xl lg:text-4xl', delay: 0.3, duration: 7.2, displayClasses: 'hidden lg:block' },
  { Icon: FaTerminal, name: 'Cursor', top: '62%', left: '22%', color: '#FFFFFF', sizeClasses: 'text-xl md:text-2xl lg:text-3xl', delay: 2.1, duration: 8.6, displayClasses: 'hidden md:block' },
  { Icon: VscOpenai, name: 'ChatGPT', top: '72%', left: '55%', color: '#10A37F', sizeClasses: 'text-2xl md:text-3xl lg:text-4xl', delay: 0.9, duration: 7.9, displayClasses: 'hidden sm:block' },
  { Icon: FaRobot, name: 'Claude AI', top: '38%', left: '72%', color: '#D97757', sizeClasses: 'text-2xl md:text-3xl lg:text-4xl', delay: 3.3, duration: 9.1, displayClasses: 'hidden md:block' },
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
      className="relative w-screen min-h-screen bg-[#070B14] text-[#F8FAFC] font-sans selection:bg-[#3B82F6]/30 selection:text-[#06B6D4] pt-20 pb-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#3B82F6]/5 rounded-full blur-[170px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#8B5CF6]/5 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Floating Decorative Icons Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${item.displayClasses} pointer-events-auto cursor-default`}
            style={{ top: item.top, left: item.left }}
            initial={{ y: 0, x: 0, rotate: 0, opacity: 0 }}
            whileInView={{
              opacity: [0.4, 0.8, 0.4],
              y: [-12, 12, -12],
              x: [-4, 4, -4],
              rotate: [-4, 4, -4],
              transition: {
                opacity: { duration: item.duration * 1.5, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                y: { duration: item.duration, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                x: { duration: item.duration * 1.2, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                rotate: { duration: item.duration * 1.1, repeat: Infinity, ease: "easeInOut", delay: item.delay }
              }
            }}
            viewport={{ once: true, margin: "100px" }}
          >
            <motion.div
              className="relative group"
              whileHover={{ 
                scale: 1.15,
                opacity: 1, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
            >
              {/* Icon */}
              <div 
                className={`${item.sizeClasses} transition-all duration-300 drop-shadow-[0_0_15px_currentColor] group-hover:drop-shadow-[0_0_30px_currentColor]`}
                style={{ color: item.color, filter: 'brightness(1.25)' }}
              >
                <item.Icon />
              </div>
              
              {/* Minimalist Tooltip */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                <div className="bg-[#0B1120]/95 border border-[#3B82F6]/30 text-[#94A3B8] text-[9px] font-mono tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm shadow-[0_5px_15px_rgba(0,0,0,0.5)] backdrop-blur-md">
                  {item.name}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 pointer-events-none">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7 pointer-events-auto"
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
          className="mb-14 pointer-events-auto"
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
          className="grid grid-cols-1 md:grid-cols-12 gap-6 pointer-events-auto"
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