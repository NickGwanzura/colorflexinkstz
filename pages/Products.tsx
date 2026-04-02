import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ProductItem, WATER_BASED_FLEX, SOLVENT_BASED_FLEX, ROTOGRAVURE_INKS, ACCESSORIES } from './products.data';

/* ─── PRODUCT CARD ──────────────────────────────────────────────── */

const ProductCard: React.FC<{ product: ProductItem }> = ({ product }) => (
  <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 group hover:-translate-y-2 border border-slate-100 flex flex-col h-full">
    <div className="h-72 overflow-hidden relative bg-slate-50 flex items-center justify-center">
      <img
        src={product.image}
        alt={product.name}
        decoding="async"
        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
        {product.type === 'Water-based' && (
          <span className="bg-green-500/90 backdrop-blur-md text-white px-3 py-2 rounded-full shadow-sm ml-auto">
            <Check size={14} strokeWidth={3} />
          </span>
        )}
      </div>
    </div>
    <div className="p-8 md:p-10 flex flex-col flex-grow">
      <div className="mb-4">
        <span className={`text-[10px] font-bold uppercase tracking-widest ${product.type === 'Water-based' ? 'text-green-600' : product.type === 'Accessories' ? 'text-brand-primary' : 'text-orange-600'}`}>
          {product.type === 'Water-based' ? 'Water System' : product.type === 'Accessories' ? 'Accessory' : 'Solvent System'}
        </span>
        <h3 className="text-2xl font-bold text-brand-dark tracking-tight mt-1 mb-2">{product.name}</h3>
      </div>
      <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium flex-grow">{product.description}</p>
      <div className="mb-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
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
    </div>
  </div>
);

/* ─── ACCORDION DROPDOWN ─────────────────────────────────────────── */

const Accordion: React.FC<{
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  products: ProductItem[];
  defaultOpen?: boolean;
}> = ({ title, subtitle, badge, badgeColor, products, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-[2rem] overflow-hidden mb-6 bg-white shadow-soft">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-10 py-8 text-left hover:bg-slate-50 transition-colors duration-200"
      >
        <div className="flex items-center gap-6">
          <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${badgeColor}`}>
            {badge}
          </span>
          <div>
            <h3 className="text-xl font-extrabold text-brand-dark tracking-tight">{title}</h3>
            <p className="text-slate-500 text-sm font-medium mt-1">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0 ml-4">
          <span className="text-slate-400 text-sm font-bold">{products.length} products</span>
          {open ? (
            <ChevronUp size={22} className="text-brand-primary" />
          ) : (
            <ChevronDown size={22} className="text-slate-400" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-10 pb-10 border-t border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── SECTION HEADER ────────────────────────────────────────────── */

const SectionHeader: React.FC<{ number: string; title: string }> = ({ number, title }) => (
  <div className="flex items-center gap-6 mb-10">
    <span className="w-14 h-14 rounded-2xl bg-brand-dark text-white flex items-center justify-center text-xl font-extrabold shrink-0">
      {number}
    </span>
    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">{title}</h2>
    <div className="flex-1 h-px bg-slate-200 ml-4"></div>
  </div>
);

/* ─── PAGE ──────────────────────────────────────────────────────── */

export const Products: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      <SEO
        title="Products"
        description="Explore our comprehensive range of flexographic, rotogravure, and screen inks, plus printing consumables. Water-based and solvent-based solutions for all packaging needs."
      />

      {/* Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-brand-dark text-white">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-brand-primary font-bold tracking-widest uppercase text-xs mb-6 backdrop-blur-sm">
              Our Portfolio
            </span>
            <h1 className="text-hero mb-8">Product Catalogue</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Explore our comprehensive range of high-quality inks designed for precision, durability, and sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-32 -mt-20 relative z-20 space-y-24">

        {/* ── 1. FLEXOGRAPHIC INKS ────────────────────────────────── */}
        <section>
          <SectionHeader number="1" title="Flexographic Inks" />
          <Accordion
            title="Water-based Flexographic Inks"
            subtitle="Environmentally responsible inks for absorbent and coated substrates"
            badge="Water-based"
            badgeColor="bg-green-100 text-green-700"
            products={WATER_BASED_FLEX}
            defaultOpen={true}
          />
          <Accordion
            title="Solvent-based Flexographic Inks"
            subtitle="High-performance inks for flexible packaging and film applications"
            badge="Solvent-based"
            badgeColor="bg-orange-100 text-orange-700"
            products={SOLVENT_BASED_FLEX}
          />
        </section>

        {/* ── 2. ROTOGRAVURE INKS ─────────────────────────────────── */}
        <section>
          <SectionHeader number="2" title="Rotogravure Inks" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {ROTOGRAVURE_INKS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* ── 3. SCREEN INKS ──────────────────────────────────────── */}
        <section>
          <SectionHeader number="3" title="Screen Inks" />
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-soft p-16 flex flex-col items-center justify-center text-center min-h-[200px]">
            <span className="text-4xl mb-6">🖨️</span>
            <h3 className="text-xl font-extrabold text-brand-dark mb-3">Coming Soon</h3>
            <p className="text-slate-500 font-medium max-w-md">
              Our screen ink range is currently being finalised. Contact us for availability and technical specifications.
            </p>
          </div>
        </section>

        {/* ── 4. ACCESSORIES ──────────────────────────────────────── */}
        <section>
          <SectionHeader number="4" title="Accessories" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {ACCESSORIES.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
