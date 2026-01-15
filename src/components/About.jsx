import React, { useEffect, useState } from "react";
import { ArrowRight, Code2, Cpu, Globe } from "lucide-react";
import Navbar from "./navbar";

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const stats = [
    { label: "Experience", value: "3+ Years", icon: <Cpu size={16} /> },
    { label: "Projects", value: "40+", icon: <Globe size={16} /> },
    { label: "Stack", value: "MERN", icon: <Code2 size={16} /> },
  ];

  return (
    
    <section className="relative bg-[#050505] text-white min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
      <Navbar/>
      {/* Cinematic Grain Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto w-full relative">
        {/* LARGE BACKGROUND TEXT - "Watermark" style */}
        <h2
          className={`absolute -top-20 -left-10 text-[15vw] font-black text-white/[0.02] leading-none select-none transition-all duration-[2000ms] ${
            loaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}
        >
          CREATIVE
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-4 items-end">
          {/* IMAGE SECTION: Modern "Cut-out" look */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div
              className={`relative transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1) ${
                loaded
                  ? "clip-path-open opacity-100"
                  : "clip-path-closed opacity-0"
              }`}
            >
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-white/10 group">
                <img
                  src="/pro.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 grayscale sepia-[0.2] hover:grayscale-0"
                  onError={(e) => {
                    e.target.src = "/pro.jpeg";
                  }}
                />
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-white text-black text-[10px] font-bold tracking-[0.2em] uppercase mix-blend-screen">
                  Digital Developer
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT SECTION: High-end Typography */}
          <div className="lg:col-span-7 lg:pl-12 pb-8 order-1 lg:order-2">
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-indigo-500" />
                <span className="text-xs tracking-[0.4em] uppercase font-semibold text-indigo-400">
                  The Story So Far
                </span>
              </div>

              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                The Mind{" "}
                <span className="text-slate-500 italic font-light">&</span>{" "}
                <br />
                <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  Behind
                </span>
              </h3>

              <div className="space-y-6 max-w-xl text-slate-400 font-light text-lg leading-relaxed">
                <p>
                  I’m Safvan, a{" "}
                  <span className="text-white">Full Stack MERN Developer</span>{" "}
                  building modern, scalable web applications. I focus on writing
                  clean, maintainable code and creating digital experiences that
                  are both efficient and visually engaging
                </p>
                <p className="text-slate-400 font-light text-lg leading-relaxed">
                  I work with modern technologies including{" "}
                  <span className="text-white">MongoDB</span>,{" "}
                  <span className="text-white">Express</span>,{" "}
                  <span className="text-white">Node.js</span>, and{" "}
                  <span className="text-white">React</span> to build scalable
                  and efficient web applications.
                </p>
              </div>

              <a
                href="/safvan.pdf" // 🔁 path to your CV
                download
                className="group flex items-center gap-4 text-sm font-bold tracking-widest uppercase py-4"
              >
                <span className="relative">
                  Download CV
                  <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-full" />
                </span>

                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-path-closed {
          clip-path: inset(100% 0 0 0);
        }
        .clip-path-open {
          clip-path: inset(0 0 0 0);
        }
      `}</style>
    </section>
  );
};

export default About;
