import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  oneLineDescription: string;
  problem: string;
  solution: string;
  architecture?: string;
  keyFeatures: string[];
  outcome: string;
  githubUrl: string;
  tech: string[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'GEO TRIP PLANNER',
    category: 'WEB PLATFORM',
    oneLineDescription: 'A geospatial pilgrimage and travel planning platform designed to simplify multi-stop Tirupati trips.',
    problem: 'Pilgrims often face difficulties planning multiple destinations, selecting suitable travel packages, navigating routes, and keeping track of temple visits.',
    solution: 'Developed a digital travel planning platform that enables users to select destinations, choose budget-based travel packages, visualize routes on an interactive map, and check in at temples using QR codes.',
    keyFeatures: [
      'Budget-based travel packages',
      'Interactive route visualization',
      'Temple information and destination discovery',
      'Temple QR-code check-in',
      'GPS-based guidance',
      'Voice-based travel assistance',
      'Admin visitor and check-in dashboard',
      'Duplicate check-in prevention'
    ],
    outcome: 'Helps users plan pilgrimage trips more efficiently while providing interactive navigation, digital check-ins, and centralized visitor information for administrators.',
    githubUrl: 'https://github.com/deviprasad101',
    tech: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'React.js', 'PostgreSQL', 'SQLite', 'Leaflet', 'OpenStreetMap', 'OSRM'],
  },
  {
    number: '02',
    title: 'GEO INTEL META HUB',
    category: 'GEOSPATIAL PLATFORM',
    oneLineDescription: 'A centralized geospatial data management and visualization platform for discovering, publishing, and analyzing spatial datasets.',
    problem: 'Geospatial datasets such as vector, raster, LAS, and 3D data can be difficult to organize, publish, search, and visualize across separate systems.',
    solution: 'Developed a centralized platform that allows users to upload, manage, search, preview, and publish geospatial datasets through an integrated web interface.',
    architecture: 'Flask → PostgreSQL/PostGIS → GeoServer → Web Interface',
    keyFeatures: [
      'Geospatial dataset upload and management',
      'Spatial database integration using PostGIS',
      'WMS/WFS service publishing through GeoServer',
      'Raster and vector data processing',
      '3D visualization',
      'Geospatial search and discovery',
      'Interactive map-based data preview'
    ],
    outcome: 'Provides a centralized platform for discovering, previewing, managing, and serving geospatial datasets through standardized geospatial services.',
    githubUrl: 'https://github.com/deviprasad101',
    tech: ['Python', 'Flask', 'PostgreSQL', 'PostGIS', 'GeoServer', 'GDAL', 'PDAL', 'ogr2ogr', 'JavaScript', 'Cesium'],
  },
  {
    number: '03',
    title: '3D GLOBAL MONITOR',
    category: 'GEOSPATIAL DASHBOARD',
    oneLineDescription: 'A high-performance 3D geospatial dashboard for visualizing large-scale city models and multi-dimensional climate datasets.',
    problem: 'Handling and rendering large-scale 3D city models, real-time data feeds, and massive multi-dimensional climate datasets in a web browser is computationally heavy and often slow.',
    solution: 'Developed a high-performance 3D geospatial dashboard that leverages modern web mapping technologies to efficiently stream and visualize massive datasets and live feeds.',
    keyFeatures: [
      'Large-scale 3D city model visualization',
      'Live earthquake GeoJSON data integration',
      'Multi-dimensional climate dataset rendering',
      'Dynamic lighting and environmental effects',
      'Efficient data streaming using PMTiles and Zarr'
    ],
    outcome: 'Enables real-time, interactive exploration of massive geospatial and climate datasets directly in the browser without performance bottlenecks.',
    githubUrl: 'https://github.com/deviprasad101',
    tech: ['React 18', 'MapLibre GL', 'PMTiles', 'Zarr', 'Python', 'Flask'],
  },
];

const SubCard: React.FC<{ title: string; children: React.ReactNode; className?: string; icon?: React.ReactNode }> = ({ title, children, className = '', icon }) => (
  <div className={`relative p-4 sm:p-5 rounded-sm border border-[#3B82F6]/20 bg-[#070B14]/40 hover:bg-[#0B1120]/80 hover:border-[#06B6D4]/40 transition-all duration-300 group ${className}`}>
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
    <div className="flex items-center space-x-2 mb-2">
      {icon && <span className="text-[#3B82F6] group-hover:text-[#06B6D4] transition-colors">{icon}</span>}
      <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#3B82F6] group-hover:text-[#06B6D4] transition-colors">
        {title}
      </h4>
    </div>
    <div className="text-[#94A3B8] font-light leading-relaxed group-hover:text-[#F8FAFC] transition-colors duration-300" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {children}
    </div>
  </div>
);

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-[#070B14] text-[#F8FAFC] font-sans selection:bg-[#3B82F6]/30 selection:text-[#06B6D4] pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#3B82F6]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8B5CF6]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
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
            04 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#3B82F6]/80 via-[#8B5CF6]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#94A3B8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              PROJECTS.
            </span>
          </h2>
        </motion.div>

        {/* React Bits Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#3B82F6]/40 bg-[#0B1120] p-5 sm:p-7 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group/main overflow-hidden transition-colors duration-500 hover:border-[#06B6D4]">
                
                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#94A3B8]/5 select-none pointer-events-none leading-none z-0"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-[#3B82F6]/25 pb-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xs font-mono font-bold text-[#06B6D4]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#94A3B8]">
                          {project.category}
                        </span>
                      </div>
                      <h3
                        className="text-4xl sm:text-5xl tracking-wide text-white uppercase leading-none"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 md:mt-0 inline-flex items-center justify-center space-x-2 px-5 py-2.5 border border-[#3B82F6]/50 bg-[#070B14] hover:border-[#06B6D4] hover:bg-[#3B82F6]/10 text-[#94A3B8] hover:text-white text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>GITHUB</span>
                      <span>↗</span>
                    </a>
                  </div>

                  <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {project.oneLineDescription}
                  </p>

                  {/* Sub-cards Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    
                    {/* Problem & Solution */}
                    <SubCard title="PROBLEM" className="lg:col-span-6">
                      <p className="text-[13px]">{project.problem}</p>
                    </SubCard>
                    <SubCard title="SOLUTION" className="lg:col-span-6">
                      <p className="text-[13px]">{project.solution}</p>
                    </SubCard>

                    {/* Architecture (if present) */}
                    {project.architecture && (
                      <SubCard title="ARCHITECTURE" className="lg:col-span-12">
                        <code className="text-[#06B6D4] font-mono text-xs">{project.architecture}</code>
                      </SubCard>
                    )}

                    {/* Key Features */}
                    <SubCard title="KEY FEATURES" className="lg:col-span-6">
                      <ul className="space-y-2.5">
                        {project.keyFeatures.map((feature, i) => (
                          <li key={i} className="flex items-start group/li">
                            <div className="mt-1 mr-3 shrink-0">
                              <div className="w-1.5 h-1.5 bg-[#3B82F6] rotate-45 group-hover/li:bg-[#06B6D4] transition-colors" />
                            </div>
                            <span className="text-[12.5px] group-hover/li:text-white transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </SubCard>

                    {/* Outcome & Tech */}
                    <div className="lg:col-span-6 flex flex-col gap-5">
                      <SubCard title="OUTCOME" className="flex-1">
                        <p className="text-[13px]">{project.outcome}</p>
                      </SubCard>
                      
                      <SubCard title="TECH STACK" className="!bg-transparent border-none !p-0">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 text-[9.5px] font-medium tracking-[0.15em] uppercase rounded-sm border border-[#3B82F6]/30 bg-[#0B1120] text-[#94A3B8] hover:border-[#06B6D4]/60 hover:text-white transition-all"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </SubCard>
                    </div>

                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ProjectsSection;