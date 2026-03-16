import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const INDUSTRIES = [
  {
    title: "Food & Beverages",
    desc: "Safe, non-toxic inks formulated for direct and indirect food contact packaging. Compliant with international food safety standards for the East African market.",
    items: ["Snack Packs", "Frozen Foods", "Beverage Labels", "Confectionery Wrappers", "Dairy Packaging", "Cooking Oil Pouches"],
    image: "/images/hero/buckets.jpg"
  },
  {
    title: "Flexible Packaging",
    desc: "Versatile solvent and water-based solutions for all major flexible packaging substrates including LDPE, BOPP, PET, and co-extruded films.",
    items: ["Shopping Bags", "Industrial Films", "Laminates", "Pouches", "Wrappers", "Multilayer Films"],
    image: "/images/hero/_DSC9255.JPG"
  },
  {
    title: "Woven Sacks & Agriculture",
    desc: "Durable, UV-stable inks for woven polypropylene sacks used in agricultural, cement, and industrial bulk packaging across East Africa.",
    items: ["PP Woven Sacks", "Cement Bags", "Fertiliser Bags", "Animal Feed Packaging", "BOPP Laminated Sacks", "Rice Bags"],
    image: "/images/hero/_DSC9263.JPG"
  },
  {
    title: "Industrial & Chemical",
    desc: "Chemically resistant, durable inks for industrial containers, hazardous goods labelling, and technical packaging applications.",
    items: ["Jerry Cans", "Drum Labels", "Chemical Containers", "Industrial Cartons", "Warning Labels", "Bulk Packaging"],
    image: "/images/hero/_DSC9269.JPG"
  }
];

export const Industries: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      <SEO
        title="Industries Served"
        description="Specialized ink solutions for food & beverage, pharmaceutical, flexible packaging, cosmetics, woven sacks, and industrial industries in East Africa."
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
              Sectors
            </span>
            <h1 className="text-hero mb-8">
              Industries Served
            </h1>
            <p className="text-subhead text-slate-300 max-w-2xl mx-auto">
              Delivering specialised ink solutions tailored to the unique demands and regulatory standards of diverse sectors across East Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <div className="container mx-auto px-4 md:px-8 py-32 -mt-20 relative z-20">
        <div className="space-y-24">
          {INDUSTRIES.map((ind, index) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 shrink-0">
                <div className="relative rounded-[3rem] overflow-hidden shadow-premium group">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    decoding="async"
                    className="w-full h-80 lg:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <span className="bg-brand-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                      {ind.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-section text-brand-dark mb-6">{ind.title}</h2>
                <p className="text-slate-500 text-lg mb-10 leading-relaxed font-light">{ind.desc}</p>
                <div className="bg-white p-10 rounded-[2.5rem] shadow-soft border border-slate-100">
                  <h4 className="font-bold text-brand-primary text-xs uppercase tracking-widest mb-6">Common Applications</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {ind.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                        <div className="w-2 h-2 rounded-full bg-brand-primary shrink-0" />
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
