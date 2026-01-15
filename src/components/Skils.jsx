import React, { useEffect, useState } from 'react';
import Navbar from './navbar';

const Skills = () => {
  const [loaded, setLoaded] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleMouseMove = (e) => {
    const x = (window.innerHeight / 2 - e.clientY) / 50;
    const y = (e.clientX - window.innerWidth / 2) / 50;
    setRotate({ x, y });
  };

  const skills = [
    { name: 'MongoDB', level: 'Database', color: 'group-hover:text-emerald-500' },
    { name: 'Express', level: 'Backend', color: 'group-hover:text-slate-400' },
    { name: 'React', level: 'Frontend', color: 'group-hover:text-cyan-400' },
    { name: 'Node.js', level: 'Runtime', color: 'group-hover:text-green-500' },
    { name: 'Python', level: 'Language', color: 'group-hover:text-blue-500' },
    { name: 'Tailwind', level: 'Styling', color: 'group-hover:text-sky-400' },
    { name: 'BootStrap', level: 'Styling', color: 'group-hover:text-purple-500' },
    { name: 'HTML5', level: 'markup language', color: 'group-hover:text-white' },
    { name: 'Git', level: 'Version', color: 'group-hover:text-orange-500' }
  ];

  return (
    <section 
      className="relative bg-[#080808] min-h-screen py-32 px-6 overflow-hidden flex flex-col items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <Navbar/>
      {/* BACKGROUND AMBIENCE */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-6xl w-full">
        {/* HEADER */}
        <div className={`text-center mb-24 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-[10px] uppercase tracking-[0.8em] text-indigo-500 font-black mb-4">Technical Infrastructure</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Innovation.</span>
          </h1>
        </div>

        {/* 3D PERSPECTIVE CONTAINER */}
        <div 
          className="relative transition-transform duration-200 ease-out"
          style={{ 
            perspective: '1200px',
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div 
                key={skill.name}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className={`group relative transition-all duration-1000 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              >
                {/* CARD DESIGN */}
                <div className="relative h-48 p-8 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-3xl overflow-hidden transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-indigo-500/50 group-hover:-translate-z-12 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  
                  {/* Skill Info */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">{skill.level}</p>
                      <h3 className={`text-2xl font-bold text-white transition-colors duration-300 ${skill.color}`}>
                        {skill.name}
                      </h3>
                    </div>
                    
                    {/* Visual 3D Bar */}
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-0 group-hover:w-[70%] transition-all duration-1000 ease-in-out" />
                    </div>
                  </div>

                  {/* 3D Glow Effect behind card */}
                  <div className="absolute -inset-2 bg-indigo-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;