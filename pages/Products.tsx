import React, { useState } from 'react';
import { Check, FileDown, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const PRODUCTS = [
  {
    id: '1',
    name: 'Aquaflex Premium',
    category: 'Flexographic',
    type: 'Water-based',
    description: 'High-performance water-based ink for corrugated board and paper sacks.',
    specs: ['Fast drying', 'Excellent rub resistance', 'Low VOC'],
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'SolvPack Pro',
    category: 'Flexographic',
    type: 'Solvent-based',
    description: 'Versatile solvent-based ink for flexible packaging films (PE, PP, PET).',
    specs: ['High gloss', 'Strong adhesion', 'Deep freeze resistant'],
    image: 'https://images.unsplash.com/photo-1572916194766-0708cb7b0e98?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'GravureUltra',
    category: 'Gravure',
    type: 'Solvent-based',
    description: 'Premium gravure ink for high-speed printing and fine tonal gradation.',
    specs: ['High pigment strength', 'Resolubility', 'Heat resistant'],
    image: 'https://images.unsplash.com/photo-1615114704739-652309f4b732?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'ScreenMaster',
    category: 'Screen',
    type: 'Solvent-based',
    description: 'Durable screen printing ink for industrial labels and containers.',
    specs: ['Weather resistant', 'High opacity', 'Chemical resistant'],
    image: 'https://images.unsplash.com/photo-1550684847-75bdda21cc95?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'EcoLabel W',
    category: 'Flexographic',
    type: 'Water-based',
    description: 'Environmentally friendly ink specifically designed for narrow web label printing.',
    specs: ['Eco-friendly', 'Good flow', 'Sharp print definition'],
    image: 'https://images.unsplash.com/photo-1585644198335-502a588b5846?q=80&w=600&auto=format&fit=crop'
  },
];

export const Products: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Water-based' | 'Solvent-based'>('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.type === filter);

  const filters = ['All', 'Water-based', 'Solvent-based'];

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
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
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
              Product Catalogue
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Explore our comprehensive range of high-quality inks designed for precision, durability, and sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-32 -mt-20 relative z-20">
        
        {/* Premium Filter Component */}
        <div className="flex justify-center mb-24">
          <div className="bg-white p-2 rounded-full shadow-premium inline-flex relative border border-slate-100/50 backdrop-blur-sm">
            {filters.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`relative px-10 py-4 rounded-full font-bold text-sm transition-all duration-300 z-10 ${
                  filter === type ? 'text-white' : 'text-slate-500 hover:text-brand-dark'
                }`}
              >
                {filter === type && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-brand-dark rounded-full shadow-lg"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{type}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 group hover:-translate-y-2 border border-slate-100 flex flex-col h-full">
              
              {/* Image Area */}
              <div className="h-72 overflow-hidden relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[11px] font-bold text-brand-dark uppercase tracking-widest shadow-sm">
                    {product.category}
                  </span>
                  {product.type === 'Water-based' && (
                    <span className="bg-green-500/90 backdrop-blur-md text-white px-3 py-2 rounded-full shadow-sm">
                       <Check size={14} strokeWidth={3} />
                    </span>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${product.type === 'Water-based' ? 'text-green-600' : 'text-orange-600'}`}>
                      {product.type === 'Water-based' ? 'Water System' : 'Solvent System'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark tracking-tight mb-2">{product.name}</h3>
                </div>
                
                <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium flex-grow">{product.description}</p>
                
                <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Specifications</h4>
                  <ul className="space-y-3">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="text-sm text-slate-700 flex items-center gap-3 font-semibold">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                   <button className="w-full py-4 px-6 rounded-xl border border-slate-200 text-brand-dark font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 group/btn shadow-sm hover:shadow-lg">
                     <FileDown size={18} className="text-brand-primary group-hover/btn:text-white transition-colors" />
                     Download Brochure
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Brochure Download CTA - Contest Style */}
        <div className="mt-32">
          <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary rounded-full blur-[150px] opacity-20 -mr-32 -mt-32 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-magenta rounded-full blur-[150px] opacity-20 -ml-32 -mb-32 pointer-events-none"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-brand-yellow font-bold text-xs uppercase tracking-widest mb-8 border border-white/10">
                <Trophy size={14} className="text-brand-yellow" />
                Monthly Client Contest
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">Win a Free Color Matching Session</h3>
              <p className="mb-10 text-slate-300 text-lg leading-relaxed font-light">
                Download our product catalogue this month and be automatically entered into a draw to win a complimentary, on-site color matching and troubleshooting session with our technical experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-brand-primary text-white font-bold px-12 py-5 rounded-full hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-500/30 hover:scale-105 transform duration-300">
                  Download & Enter
                </button>
                <button className="bg-transparent border border-white/20 text-white font-bold px-12 py-5 rounded-full hover:bg-white hover:text-brand-dark transition-all">
                  View Contest Rules
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};