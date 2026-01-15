import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skils' },
    { name: 'Contact', path: '/contact' }
  ];

  const getLinkStyles = ({ isActive }) =>
    `relative px-3 py-1 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500
     ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] py-3 px-4">
      <div
        className={`
          mx-auto max-w-2xl flex items-center justify-between px-3 py-2 rounded-xl
          transition-all duration-500 border
          ${scrolled
            ? 'bg-black/60 backdrop-blur-xl border-white/10 shadow-xl scale-[0.98]'
            : 'bg-transparent border-transparent'}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 rounded-lg" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center bg-white/[0.03] border border-white/5 rounded-full px-2 py-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={getLinkStyles}
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-white/5 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/contact"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold uppercase rounded-full hover:bg-indigo-500 hover:text-white transition"
          >
            Hire Me <ArrowUpRight size={14} />
          </NavLink>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 bg-black/95 backdrop-blur-2xl
          flex flex-col items-center justify-center gap-8
          transition-all duration-500
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {navItems.map((item, idx) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-bold hover:text-indigo-500 transition"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
