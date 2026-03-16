import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const PRODUCTS = [
  {
    id: '1',
    name: 'Aquaprint',
    category: 'Flexographic',
    type: 'Water-based',
    description: 'Water-based flexographic ink for corrugated board, paper sacks, and absorbent substrates.',
    specs: ['Fast drying', 'Low VOC', 'Excellent rub resistance'],
    image: '/images/products2/Aquaprint.PNG'
  },
  {
    id: '2',
    name: 'Flexoprint Inks',
    category: 'Flexographic',
    type: 'Solvent-based',
    description: 'General-purpose solvent-based flexographic inks for a wide range of flexible packaging films.',
    specs: ['High colour strength', 'Good adhesion', 'Consistent tone'],
    image: '/images/products2/Flexoprint-Inks.PNG'
  },
  {
    id: '3',
    name: 'Flexogloss Inks',
    category: 'Flexographic',
    type: 'Solvent-based',
    description: 'High-gloss solvent-based flexographic inks delivering vibrant, premium surface finish.',
    specs: ['Superior gloss', 'Strong rub resistance', 'Film & foil compatible'],
    image: '/images/products2/Flexogloss-Inks.PNG'
  },
  {
    id: '4',
    name: 'Flexoglass D/F Inks',
    category: 'Flexographic',
    type: 'Solvent-based',
    description: 'Specialised flexographic inks formulated for glass and film substrates with outstanding clarity.',
    specs: ['High clarity', 'Excellent adhesion on glass', 'Chemical resistant'],
    image: '/images/products2/Flexoglass-DF-Inks.PNG'
  },
  {
    id: '5',
    name: 'Labelflex Ink',
    category: 'Flexographic',
    type: 'Solvent-based',
    description: 'Narrow-web flexographic inks engineered for self-adhesive and wet-glue label printing.',
    specs: ['Sharp definition', 'Fast drying', 'Wide substrate compatibility'],
    image: '/images/products2/Labelflex-Ink.PNG'
  },
  {
    id: '6',
    name: 'Polysack Inks',
    category: 'Flexographic',
    type: 'Solvent-based',
    description: 'Robust flexographic inks for woven polypropylene sacks and BOPP packaging.',
    specs: ['High opacity', 'Heat seal resistant', 'UV stable'],
    image: '/images/products2/Polysack-Inks.PNG'
  },
  {
    id: '7',
    name: 'Polytech Inks',
    category: 'Flexographic',
    type: 'Solvent-based',
    description: 'Technical flexographic inks for polyethylene and multi-layer film applications.',
    specs: ['Excellent lay-flat', 'Consistent viscosity', 'Deep freeze rated'],
    image: '/images/products2/Polytech-Inks.PNG'
  },
  {
    id: '8',
    name: 'Polyfreeze Inks',
    category: 'Flexographic',
    type: 'Solvent-based',
    description: 'Flexographic inks designed specifically for deep-freeze and cold-chain packaging applications.',
    specs: ['Deep freeze resistant', 'Strong adhesion at low temp', 'Crack resistant'],
    image: '/images/products2/Polyfreeze-Inks.PNG'
  },
  {
    id: '9',
    name: 'Extruflex Inks',
    category: 'Flexographic',
    type: 'Solvent-based',
    description: 'Solvent-based flexographic inks for extrusion-coated and co-extruded packaging films.',
    specs: ['Extrusion bond compatible', 'Flexible film adhesion', 'High pigment loading'],
    image: '/images/products2/Extruflex-Inks.PNG'
  },
  {
    id: '10',
    name: 'Extrulam Inks',
    category: 'Flexographic',
    type: 'Solvent-based',
    description: 'Flexographic inks optimised for extrusion lamination, providing excellent bond strength after lamination.',
    specs: ['Post-lamination clarity', 'Bond strength retention', 'Migration compliant'],
    image: '/images/products2/Extrulam-Inks.PNG'
  },
  {
    id: '11',
    name: 'Rotoprint Inks',
    category: 'Gravure',
    type: 'Solvent-based',
    description: 'Premium rotogravure inks for high-speed flexible packaging printing with exceptional tonal reproduction.',
    specs: ['Fine tonal gradation', 'High speed compatible', 'Resoluble'],
    image: '/images/products2/Rotoprint-Inks.PNG'
  },
  {
    id: '12',
    name: 'Rotofreeze Inks',
    category: 'Gravure',
    type: 'Solvent-based',
    description: 'Rotogravure inks engineered for deep-freeze packaging, maintaining integrity at sub-zero temperatures.',
    specs: ['Sub-zero performance', 'High rub resistance', 'Moisture barrier compatible'],
    image: '/images/products2/Rotofreeze-Inks.PNG'
  },
  {
    id: '13',
    name: 'Rotolam Inks',
    category: 'Gravure',
    type: 'Solvent-based',
    description: 'Rotogravure laminating inks formulated for post-print lamination on flexible packaging structures.',
    specs: ['Lamination bond compatible', 'High clarity', 'Retort suitable'],
    image: '/images/products2/Rotolam-Inks.PNG'
  },
  {
    id: '14',
    name: 'Petlam Inks',
    category: 'Gravure',
    type: 'Solvent-based',
    description: 'Rotogravure inks for PET-based laminate structures, delivering outstanding print quality and adhesion.',
    specs: ['PET adhesion', 'High pigment strength', 'Boil & retort resistant'],
    image: '/images/products2/Petlam-Inks.PNG'
  },
  {
    id: '15',
    name: 'GR Laser PVC Inks',
    category: 'Gravure',
    type: 'Solvent-based',
    description: 'Specialist rotogravure inks for laser-printable PVC shrink sleeves and rigid PVC packaging.',
    specs: ['Laser compatible', 'Shrink sleeve rated', 'High gloss'],
    image: '/images/products2/GR-Laser-PVC-Inks.PNG'
  },
  {
    id: '16',
    name: 'Pantone Formula Guides',
    category: 'Accessories',
    type: 'Accessories',
    description: 'Official Pantone Formula Guides for accurate colour specification and matching across all print processes.',
    specs: ['Industry standard', 'Consistent colour reference', 'Flexo & gravure compatible'],
    image: '/images/products/pantone-formula-guides.PNG'
  },
  {
    id: '17',
    name: 'Doctor Blades',
    category: 'Accessories',
    type: 'Accessories',
    description: 'Precision doctor blades for gravure and flexographic presses, ensuring clean ink metering and reduced waste.',
    specs: ['High durability', 'Multiple material grades', 'OEM compatible'],
    image: '/images/products/doctor-blades.PNG'
  },
  {
    id: '18',
    name: 'Treatment Test Pens',
    category: 'Accessories',
    type: 'Accessories',
    description: 'Dyne test pens for rapid surface energy measurement on films and substrates before printing.',
    specs: ['Fast & accurate', 'Wide dyne range', 'Essential QC tool'],
    image: '/images/products/treatment-test-pens.JPG'
  },
  {
    id: '19',
    name: 'End Seals',
    category: 'Accessories',
    type: 'Accessories',
    description: 'High-quality end seals for anilox rolls, preventing ink leakage and maintaining print consistency.',
    specs: ['Precise fit', 'Chemical resistant', 'Extended press life'],
    image: '/images/products/end-seals.JPG'
  },
  {
    id: '20',
    name: 'Anilox & Plate Cleaning',
    category: 'Accessories',
    type: 'Accessories',
    description: 'Specialised chemical cleaners and accessories for anilox rolls and printing plates, maintaining optimal cell volume.',
    specs: ['Safe on all substrates', 'Fast acting', 'Restores cell volume'],
    image: '/images/products/anilox-cleaning.JPG'
  },
  {
    id: '21',
    name: 'Double-Sided Mounting Tapes',
    category: 'Accessories',
    type: 'Accessories',
    description: 'Premium double-sided foam mounting tapes for secure plate mounting on flexographic presses.',
    specs: ['Consistent cushioning', 'Solvent resistant', 'Multiple hardness options'],
    image: '/images/products/double-sided-mounting-tapes.PNG'
  },
];

export const Products: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Water-based' | 'Solvent-based' | 'Solventless' | 'Accessories'>('All');

  const filteredProducts = filter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.type === filter);

  const filters = ['All', 'Water-based', 'Solvent-based', 'Solventless', 'Accessories'];

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      <SEO 
        title="Products" 
        description="Explore our comprehensive range of flexographic, gravure inks, laminating adhesives, top coat varnishes, and printing consumables. Water-based, solvent-based, and solventless solutions for all packaging needs."
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
              Our Portfolio
            </span>
            <h1 className="text-hero mb-8">
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
              <div className="h-72 overflow-hidden relative bg-slate-50 flex items-center justify-center">
                <img src={product.image} alt={product.name} decoding="async" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
                
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[11px] font-bold text-brand-dark uppercase tracking-widest shadow-sm">
                    {product.category}
                  </span>
                  {(product.type === 'Water-based' || product.type === 'Solventless') && (
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
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${product.type === 'Water-based' ? 'text-green-600' : product.type === 'Solventless' ? 'text-emerald-600' : product.type === 'Accessories' ? 'text-brand-primary' : 'text-orange-600'}`}>
                    {product.type === 'Water-based' ? 'Water System' : product.type === 'Solventless' ? 'Solventless' : product.type === 'Accessories' ? 'Accessory' : 'Solvent System'}
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

              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};