import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const INDUSTRIES = [
  {
    title: "Food & Beverages",
    desc: "Safe, non-toxic inks for direct and indirect food contact packaging.",
    items: ["Snack Packs", "Frozen Foods", "Beverage Labels", "Confectionery Wrappers"],
    image: "https://images.unsplash.com/photo-1606850780554-b55ea9ce8d2d?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Pharmaceuticals",
    desc: "High-precision inks ensuring legibility and safety for medical packaging.",
    items: ["Blister Packs", "Medical Cartons", "Instruction Leaflets", "Vial Labels"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Flexible Packaging",
    desc: "Versatile solutions for various substrates including LDPE, BOPP, and PET.",
    items: ["Shopping Bags", "Industrial Films", "Laminates", "Pouches"],
    image: "https://images.unsplash.com/photo-1595304958376-78c6e2553186?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Cosmetics & Personal Care",
    desc: "Vibrant, high-gloss finishes that enhance brand appeal on shelf.",
    items: ["Shampoo Bottles", "Soap Wrappers", "Cosmetic Tubes", "Labeling"],
    image: "https://images.unsplash.com/photo-1616682522436-b5ce981504c6?q=80&w=600&auto=format&fit=crop"
  }
];

export const Industries: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      <SEO 
        title="Industries Served" 
        description="Specialized ink solutions for food & beverage, pharmaceutical, flexible packaging, and cosmetics industries in East Africa."
      />
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
              Sectors
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
              Industries Served
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
               Delivering specialized ink solutions tailored to the unique demands and regulatory standards of diverse sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <div className="container mx-auto px-4 md:px-8 py-32 -mt-20 relative z-20">
        <div className="space-y-32">
          {INDUSTRIES.map((ind, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={ind.title} 
              className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-[3rem] overflow-hidden shadow-premium group">
                  <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                  <img src={ind.image} alt={ind.title} loading="lazy" decoding="async" className="w-full h-80 lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">{ind.title}</h2>
                <p className="text-slate-500 text-xl mb-10 leading-relaxed font-light">
                  {ind.desc}
                </p>
                <div className="bg-white p-10 rounded-[2.5rem] shadow-soft border border-slate-100">
                  <h4 className="font-bold text-brand-primary text-sm uppercase tracking-wider mb-6">Common Applications</h4>
                  <div className="grid grid-cols-2 gap-5">
                    {ind.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-primary shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};