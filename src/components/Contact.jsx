import React, { useState } from 'react';
import axios from 'axios';
import { Send, Mail, MapPin, Globe, ArrowUpRight, Loader2 } from 'lucide-react';
import Navbar from './navbar';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus('TRANSMITTING_DATA...');

  const formData = new FormData();
  formData.append('entry.1393770924', form.name);
  formData.append('entry.1462458625', form.email);
  formData.append('entry.1851270423', form.message);

  try {
    await fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLSeD_Y0sCBZDeKns1rCCrx8H8RlG-qXuR9HJiDEkpaXZTG_g9A/formResponse',
      {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      }
    );

    setStatus('MESSAGE_DELIVERED_SUCCESSFULLY');
    setForm({ name: '', email: '', message: '' });
  } catch (error) {
    setStatus('COMMUNICATION_ERROR_0x44');
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="relative min-h-screen bg-[#080808] text-white flex items-center justify-center py-20 px-6 overflow-hidden">
      <Navbar/>
      {/* BACKGROUND AMBIENCE */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        
        {/* LEFT SIDE: THE INFO HUD */}
        <div className="flex flex-col justify-between py-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400">Available for hire</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              LET’S <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">CONNECT.</span>
            </h2>
            
            <p className="text-slate-400 max-w-sm text-lg font-light leading-relaxed">
              Have a project in mind or just want to say hi? My inbox is always open for technical challenges.
            </p>
          </div>

          <div className="space-y-10 mt-16 lg:mt-0">
            {/* SOCIAL / INFO LINKS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ContactInfo icon={<Mail size={18} />} label="Email" value="safvan000@gmail.com" />

              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <Globe size={18} /> Social
                </span>
                <a
                  href="https://www.linkedin.com/in/safvan-p-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white hover:text-indigo-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>

              <ContactInfo icon={<MapPin size={18} />} label="Location" value="Kerala, India" />

              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Resume</span>
                <a href="/safvan.pdf" className="flex items-center gap-2 text-sm font-bold group">
                  Download PDF <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: THE PREMIUM FORM */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
          
          <form 
            onSubmit={handleSubmit}
            className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-3xl space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all text-sm font-medium"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all text-sm font-medium"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all text-sm font-medium resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button 
              disabled={loading}
              className="w-full relative group overflow-hidden bg-white text-black py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all hover:bg-indigo-500 hover:text-white disabled:opacity-50"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                {loading ? <Loader2 className="animate-spin" size={18} /> : <>SEND_MESSAGE <Send size={14} /></>}
              </div>
            </button>

            {status && (
              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] font-mono tracking-widest text-indigo-400 animate-pulse">
                  &gt; {status}
                </p>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex flex-col gap-2">
    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
      {icon} {label}
    </span>
    <span className="text-sm font-bold text-white">{value}</span>
  </div>
);

export default Contact;
