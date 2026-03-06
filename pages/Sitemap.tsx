import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Layout, Users, Package, Factory, Leaf, MessageCircle } from 'lucide-react';

export const Sitemap: React.FC = () => {
  const sections = [
    {
      title: 'Company',
      icon: Users,
      links: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/team' },
        { label: 'Sustainability', path: '/sustainability' },
        { label: 'Careers', path: '/contact' },
      ]
    },
    {
      title: 'Products & Solutions',
      icon: Package,
      links: [
        { label: 'Product Catalogue', path: '/products' },
        { label: 'Flexographic Inks', path: '/products' },
        { label: 'Gravure Inks', path: '/products' },
        { label: 'Screen Printing', path: '/products' },
        { label: 'Industries Served', path: '/industries' },
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      links: [
        { label: 'Blog & Insights', path: '/blog' },
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Contact Support', path: '/contact' },
      ]
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
             <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-brand-primary rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-brand-magenta rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-brand-primary font-bold tracking-widest uppercase text-xs mb-6 backdrop-blur-sm">
              Overview
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
              Sitemap
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Navigate through all the sections of our digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Links Grid */}
      <section className="py-32 container mx-auto px-4 md:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <section.icon size={24} />
                </div>
                <h2 className="text-2xl font-bold text-brand-dark tracking-tight">{section.title}</h2>
              </div>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <NavLink 
                      to={link.path} 
                      className="flex items-center justify-between group p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                    >
                      <span className="font-bold text-slate-600 group-hover:text-brand-primary transition-colors">{link.label}</span>
                      <ArrowRight size={16} className="text-slate-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};