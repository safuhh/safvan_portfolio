import React, { useState, useRef } from 'react';
import { Github, ExternalLink, Zap, Terminal } from 'lucide-react';
import Navbar from './navbar';

const projects = [
  {
    name: 'E-commerce App',
    category: 'Full Stack MERN',
    image: '/cho.png', // must be in public folder
    tech: ['React', 'Node', 'Stripe'],
    accent: 'from-indigo-500/20',
    url: 'https://choco-eight.vercel.app/', // live project URL
    github: 'https://github.com/safuhh/choco'
  },
  {
    name: 'Netflix Clone',
    category: 'UI/UX Engineering',
    image: 'https://pimwp.s3-accelerate.amazonaws.com/2022/08/netflix.jpg',
    tech: ['Firebase', 'Redux', 'Tailwind'],
    accent: 'from-purple-500/20',
    url: 'https://your-netflix-clone.com',
    github: 'https://github.com/yourusername/netflix-clone'
  },
  {
    name: 'Face Mask Detection',
    category: 'Machine Learning',
    image: 'https://allai.nl/wp-content/uploads/2021/02/Screenshot-2021-02-11-at-16.52.15-495x400.png',
    tech: ['CNN', 'React', 'Python'],
    accent: 'from-emerald-500/20',
    url: 'https://github.com/safuhh/Face-mask-detection',
    github: 'https://github.com/safuhh/Face-mask-detection'
  }
];

const Projects = () => {
  return (
    <section className="bg-[#080808] text-white py-32 px-6 min-h-screen flex flex-col items-center">
      <Navbar/>
      {/* Header */}
      <div className="mb-24 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Terminal size={14} className="text-indigo-500" />
          <span className="text-[10px] uppercase tracking-[0.8em] text-slate-500 font-bold">Project_Manifest</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">GALLERY.</span>
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({ x: y * -15, y: x * 15 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
      }}
      className="relative h-[450px] w-full"
      style={{ perspective: '1500px' }}
    >
      <div
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'none' : 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
        className="relative w-full h-full rounded-3xl border border-white/10 bg-[#111] shadow-2xl overflow-hidden"
      >
        {/* Project Image */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105 brightness-90' : 'brightness-70'}`}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Project'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between items-start">
            <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-[9px] font-black uppercase tracking-widest text-indigo-400">
              {project.category}
            </div>
            <Zap className={`${isHovered ? 'text-indigo-500 animate-pulse' : 'text-white/20'} transition-colors`} size={20} />
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight pointer-events-auto">
              {project.name.split(' ').map((word, i) => (
                <span key={i} className="block">{word.toUpperCase()}</span>
              ))}
            </h3>

            <div className="flex flex-wrap gap-2 pointer-events-auto">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4 pointer-events-auto">
              {/* Live Project URL */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all"
              >
                <ExternalLink size={16} />
              </a>

              {/* GitHub Repo */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-black border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Border Glow */}
        <div
          className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${project.accent} to-transparent opacity-0 transition-opacity duration-500 pointer-events-none`}
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
    </div>
  );
};

export default Projects;
