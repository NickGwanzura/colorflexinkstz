import React from 'react';
import { Leaf, Recycle, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

export const Sustainability: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
             <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-green-500 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-brand-primary rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-green-400 font-bold tracking-widest uppercase text-xs mb-6 backdrop-blur-sm">
              Our Commitment
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
              Sustainable Future
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              At Colourflex, we believe in innovation that respects the planet. Our eco-friendly initiatives strive to minimize environmental impact without compromising quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-32 -mt-20 relative z-20">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2.5rem] border border-green-100 shadow-premium hover:shadow-2xl transition-all h-full"
          >
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-green-600">
              <Leaf size={32} />
            </div>
            <h3 className="text-2xl font-extrabold text-brand-dark mb-4 tracking-tight">Eco-Friendly Inks</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              We prioritize the development of water-based inks that significantly reduce Volatile Organic Compounds (VOCs) emissions compared to traditional solvent-based alternatives.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-white p-12 rounded-[2.5rem] border border-cyan-100 shadow-premium hover:shadow-2xl transition-all h-full"
          >
            <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-8 text-brand-primary">
              <Droplets size={32} />
            </div>
            <h3 className="text-2xl font-extrabold text-brand-dark mb-4 tracking-tight">Responsible Manufacturing</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              Our Dar es Salaam facility employs closed-loop water systems and energy-efficient machinery to reduce resource consumption during the manufacturing process.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-white p-12 rounded-[2.5rem] border border-orange-100 shadow-premium hover:shadow-2xl transition-all h-full"
          >
             <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 text-orange-600">
               <Recycle size={32} />
             </div>
            <h3 className="text-2xl font-extrabold text-brand-dark mb-4 tracking-tight">Waste Reduction</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              We adhere to strict waste management protocols, ensuring that chemical waste is treated responsibly and packaging materials are recycled wherever possible.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-dark rounded-[3rem] overflow-hidden relative shadow-premium"
        >
           <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop" alt="Eco Friendly Nature" className="w-full h-[500px] object-cover opacity-40 absolute inset-0" />
           <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
           <div className="relative z-10 p-12 md:p-24 text-center md:text-left">
             <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight max-w-xl leading-tight">Partnering for a <br/>Greener Tomorrow</h2>
             <p className="text-slate-300 max-w-xl mb-12 text-xl leading-relaxed font-light">
               We actively work with our clients to transition towards more sustainable packaging solutions, offering technical guidance on switching to water-based systems.
             </p>
             <button className="bg-white text-brand-dark font-bold px-12 py-5 rounded-full hover:bg-slate-100 transition-colors shadow-lg">
               Read our Sustainability Report
             </button>
           </div>
        </motion.div>
      </div>
    </div>
  );
};