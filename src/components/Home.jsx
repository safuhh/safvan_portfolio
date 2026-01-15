import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import About from './About';
import Skils from './Skils';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="bg-[#080808] text-white min-h-screen selection:bg-indigo-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Modern Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-48 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT: Content */}
          <div className="lg:col-span-7 space-y-12">
            
            <div className={`transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-medium text-slate-400">Available for hire</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-10">
                Crafting <br />
                <span className="bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent">
                  Digital Flow.
                </span>
              </h1>

              <p className="max-w-lg text-lg text-slate-400 font-light leading-relaxed">
                I am a Full Stack Developer specializing in architectural integrity and 
                <span className="text-white"> polished user interfaces</span>. Building the future with the MERN stack.
              </p>
            </div>

            <div className={`flex items-center gap-8 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link
                to="/projects"
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                View Work
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold border-b-2 border-indigo-500 pb-1 hover:text-indigo-400 transition-colors"
              >
                Let's Talk →
              </Link>
            </div>
          </div>

          {/* RIGHT: Image with "Glass Frame" Effect */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative group">
              {/* Animated Border Gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl bg-[#111] border border-white/10">
                <img
                  src="/my.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  onError={(e) => {
                    e.target.src = '/my.jpeg';
                  }}
                />
                
                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-xs text-slate-300 font-medium italic">"Logic is the beginning of wisdom, not the end."</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <About/>
      <Skils/>
      <Projects/>
      <Contact/>
    </div>
  );
}
