import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Users, History, Factory, Handshake, ArrowRight, Target, Compass, Award, Lightbulb, ShieldCheck, Heart } from 'lucide-react';
import { SEO } from '../components/SEO';

const ABOUT_IMAGES = [
  '/images/about/_DSC9250.JPG',
  '/images/about/_DSC9255.JPG',
  '/images/about/_DSC9263.JPG',
  '/images/about/_DSC9269.JPG',
  '/images/about/_DSC9525.JPG',
];

export const About: React.FC = () => {
  const [aboutImg, setAboutImg] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setAboutImg(i => (i + 1) % ABOUT_IMAGES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      <SEO 
        title="About Us" 
        description="Learn about Colourflex Inks & Coatings Ltd. Established in 2017, we're the leading ink manufacturer in Tanzania with global technical partnerships."
      />
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-dark text-white">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-brand-primary font-bold tracking-widest uppercase text-xs mb-6 backdrop-blur-sm">
              Who We Are
            </span>
            <h1 className="text-hero mb-8">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              A journey of color, quality, and an unwavering commitment to excellence in the Tanzanian manufacturing landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-32 -mt-20 relative z-20">

        {/* History & Establishment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-brand-primary/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative rounded-[2.5rem] shadow-premium overflow-hidden w-full z-10 aspect-[4/3]">
              {ABOUT_IMAGES.map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  alt="Colourflex Team and Facility"
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i === aboutImg ? 1 : 0 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-100 p-4 rounded-2xl text-brand-primary shadow-sm"><History size={28} /></div>
                <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight">Established in 2017</h2>
              </div>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                Colourflex Inks & Coatings Ltd. began its journey in October 2017 with a singular vision: to produce high-quality printing inks locally in Tanzania. From humble beginnings, we have grown into a cornerstone of the regional packaging industry, setting new standards for quality and reliability.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-100 p-4 rounded-2xl text-brand-primary shadow-sm"><Handshake size={28} /></div>
                <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight">Global Synergies</h2>
              </div>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                Our growth is fueled by strategic technical collaboration with Hi-Tech Inks Pty of India — the fourth-largest ink manufacturer in the region. This synergy allows us to bring world-class formulations and technical expertise to the East African market, ensuring our clients receive products that meet international standards.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-cyan-100 p-4 rounded-2xl text-brand-primary shadow-sm"><Handshake size={28} /></div>
                <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight">Printing Consumables Partnership</h2>
              </div>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                To further support our customers, we have expanded into quality press consumables through a partnership with Barkev Coatings of South Africa, enabling us to serve as a one-stop shop for all printing requirements.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2.5rem] shadow-premium border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-50 text-brand-primary rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Target size={32} strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-extrabold text-brand-dark mb-6 tracking-tight">Our Vision</h2>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                To be the undisputed leader in ink manufacturing in East Africa, recognized for innovation, quality, and sustainable practices that empower local industries to compete globally.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-premium border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-magenta/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-pink-50 text-brand-magenta rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Compass size={32} strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-extrabold text-brand-dark mb-6 tracking-tight">Our Mission</h2>
              <p className="text-slate-500 leading-relaxed text-lg font-medium">
                To deliver world-class printing solutions through superior formulations, technical excellence, and customer-centric service, while fostering a culture of continuous improvement and environmental responsibility.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-brand-primary font-bold tracking-wider uppercase text-xs mb-4 block">Our Ethos</span>
            <h2 className="text-section text-brand-dark">Core Values</h2>
            <p className="text-slate-500 text-xl mt-6 leading-relaxed font-light">The principles that guide our decisions and define our culture.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Quality", icon: Award, color: "text-brand-primary", bg: "bg-cyan-50", desc: "We adhere to strict quality control protocols to ensure consistency in every batch we produce." },
              { title: "Innovation", icon: Lightbulb, color: "text-brand-yellow", bg: "bg-yellow-50", desc: "We continuously invest in R&D to bring the latest ink technologies to the East African market." },
              { title: "Integrity", icon: ShieldCheck, color: "text-brand-magenta", bg: "bg-pink-50", desc: "We build trust through transparency, honesty, and ethical practices in all our dealings." },
              { title: "Customer Focus", icon: Heart, color: "text-indigo-500", bg: "bg-indigo-50", desc: "We view our clients as partners, working closely to provide tailored solutions that drive their success." }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-premium border border-slate-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-16 h-16 ${value.bg} ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-extrabold text-brand-dark mb-4">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Facility & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-dark rounded-[3rem] text-white p-12 md:p-20 mb-32 shadow-premium relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-primary opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-400 to-transparent"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center relative z-10">
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm mb-6">
                <Factory size={40} className="text-cyan-300" />
              </div>
              <h3 className="text-5xl md:text-6xl font-extrabold">Modern</h3>
              <p className="text-slate-400 font-bold tracking-wide uppercase text-sm">Production Facility</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm mb-6">
                <Users size={40} className="text-cyan-300" />
              </div>
              <h3 className="text-5xl md:text-6xl font-extrabold">30+</h3>
              <p className="text-slate-400 font-bold tracking-wide uppercase text-sm">Expert Staff Members</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm mb-6">
                <Handshake size={40} className="text-cyan-300" />
              </div>
              <h3 className="text-5xl md:text-6xl font-extrabold">100+</h3>
              <p className="text-slate-400 font-bold tracking-wide uppercase text-sm">Satisfied Corporate Clients</p>
            </div>
          </div>
        </motion.div>

        {/* Key Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-xs mb-4 block">Who We Serve</span>
            <h2 className="text-section text-brand-dark">Trusted by Industry Leaders</h2>
            <p className="text-slate-500 text-xl mt-6 leading-relaxed font-light">Colourflex commands a significant market share in Tanzania, supplying most of the country's quality-conscious flexible packaging converters.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Omar Packaging Industries Ltd',
              'A-Z Textile Mills',
              'The Box Factory',
              'Jiemel Industries',
              'Modern Flexible Packaging',
              'Jumbo Packaging',
              'East Africa Polybag',
              'Hanspaul Industries',
            ].map((client) => (
              <div key={client} className="bg-white rounded-2xl px-6 py-5 text-center shadow-soft border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <p className="text-brand-dark font-bold text-sm leading-snug">{client}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Meet the Team CTA */}
        <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-slate-100 shadow-premium overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="relative h-80 lg:h-[450px] rounded-[2.5rem] overflow-hidden shadow-soft">
            <img src="/images/hero/_DSC9448.avif" alt="Colourflex Management Team" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="text-center lg:text-left">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-xs mb-4 block">Our People</span>
            <h2 className="text-section text-brand-dark mb-8">The Minds Behind the Magic</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mb-12 text-xl leading-relaxed font-light">
              Our success is driven by a diverse team of experts, from chemical engineers to logistics specialists.
            </p>
            <NavLink to="/team" className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold px-12 py-5 rounded-full hover:bg-brand-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Meet the Full Team <ArrowRight size={20} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};