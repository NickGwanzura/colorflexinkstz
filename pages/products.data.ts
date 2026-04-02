export type ProductItem = {
  id: string;
  name: string;
  description: string;
  specs: string[];
  image: string;
  type: string;
};

export const WATER_BASED_FLEX: ProductItem[] = [
  {
    id: 'wb1',
    name: 'Labelflex Inks',
    description: 'Narrow-web flexographic inks engineered for self-adhesive and wet-glue label printing.',
    specs: ['Sharp definition', 'Fast drying', 'Wide substrate compatibility'],
    image: '/images/products2/Labelflex-Ink.webp',
    type: 'Water-based',
  },
  {
    id: 'wb2',
    name: 'Aquaprint Inks',
    description: 'Water-based flexographic ink for corrugated board, paper sacks, and absorbent substrates.',
    specs: ['Fast drying', 'Low VOC', 'Excellent rub resistance'],
    image: '/images/products2/Aquaprint.webp',
    type: 'Water-based',
  },
  {
    id: 'wb3',
    name: 'Polytech Inks',
    description: 'Technical flexographic inks for polyethylene and multi-layer film applications.',
    specs: ['Excellent lay-flat', 'Consistent viscosity', 'Deep freeze rated'],
    image: '/images/products2/Polytech-Inks.webp',
    type: 'Water-based',
  },
];

export const SOLVENT_BASED_FLEX: ProductItem[] = [
  {
    id: 'sb1',
    name: 'Flexoprint Inks',
    description: 'General-purpose solvent-based flexographic inks for a wide range of flexible packaging films.',
    specs: ['High colour strength', 'Good adhesion', 'Consistent tone'],
    image: '/images/products2/Flexoprint-Inks.webp',
    type: 'Solvent-based',
  },
  {
    id: 'sb2',
    name: 'Extruflex Inks',
    description: 'Solvent-based flexographic inks for extrusion-coated and co-extruded packaging films.',
    specs: ['Extrusion bond compatible', 'Flexible film adhesion', 'High pigment loading'],
    image: '/images/products2/Extruflex-Inks.webp',
    type: 'Solvent-based',
  },
  {
    id: 'sb3',
    name: 'Flexogloss Inks',
    description: 'High-gloss solvent-based flexographic inks delivering vibrant, premium surface finish.',
    specs: ['Superior gloss', 'Strong rub resistance', 'Film & foil compatible'],
    image: '/images/products2/Flexogloss-Inks.webp',
    type: 'Solvent-based',
  },
  {
    id: 'sb4',
    name: 'Polyfreeze Inks',
    description: 'Flexographic inks designed specifically for deep-freeze and cold-chain packaging applications.',
    specs: ['Deep freeze resistant', 'Strong adhesion at low temp', 'Crack resistant'],
    image: '/images/products2/Polyfreeze-Inks.webp',
    type: 'Solvent-based',
  },
  {
    id: 'sb5',
    name: 'Flexogloss D/F Inks',
    description: 'Specialised flexographic inks formulated for diverse film substrates with outstanding clarity and gloss.',
    specs: ['High clarity', 'Excellent film adhesion', 'Chemical resistant'],
    image: '/images/products2/Flexoglass-DF-Inks.webp',
    type: 'Solvent-based',
  },
  {
    id: 'sb6',
    name: 'Flexo Alcolam Inks',
    description: 'Alcohol-based flexographic inks optimised for lamination applications with excellent bond strength.',
    specs: ['Lamination compatible', 'Strong solvent resistance', 'High colour strength'],
    image: '/images/products2/Flexoprint-Inks.webp',
    type: 'Solvent-based',
  },
  {
    id: 'sb7',
    name: 'Mirror Flex Inks',
    description: 'High-performance flexographic inks delivering a mirror-like metallic finish on flexible packaging.',
    specs: ['Mirror effect finish', 'Metallic appearance', 'Excellent adhesion'],
    image: '/images/products2/Flexogloss-Inks.webp',
    type: 'Solvent-based',
  },
  {
    id: 'sb8',
    name: 'Polysack Inks',
    description: 'Robust flexographic inks for woven polypropylene sacks and BOPP packaging.',
    specs: ['High opacity', 'Heat seal resistant', 'UV stable'],
    image: '/images/products2/Polysack-Inks.webp',
    type: 'Solvent-based',
  },
];

export const ROTOGRAVURE_INKS: ProductItem[] = [
  {
    id: 'rg1',
    name: 'Rotoprint Inks',
    description: 'Premium rotogravure inks for high-speed flexible packaging printing with exceptional tonal reproduction.',
    specs: ['Fine tonal gradation', 'High speed compatible', 'Resoluble'],
    image: '/images/products2/Rotoprint-Inks.webp',
    type: 'Solvent-based',
  },
  {
    id: 'rg2',
    name: 'Rotofreeze Inks',
    description: 'Rotogravure inks engineered for deep-freeze packaging, maintaining integrity at sub-zero temperatures.',
    specs: ['Sub-zero performance', 'High rub resistance', 'Moisture barrier compatible'],
    image: '/images/products2/Rotofreeze-Inks.webp',
    type: 'Solvent-based',
  },
  {
    id: 'rg3',
    name: 'Rotolam Inks',
    description: 'Rotogravure laminating inks formulated for post-print lamination on flexible packaging structures.',
    specs: ['Lamination bond compatible', 'High clarity', 'Retort suitable'],
    image: '/images/products2/Rotolam-Inks.webp',
    type: 'Solvent-based',
  },
  {
    id: 'rg4',
    name: 'Petlam Inks',
    description: 'Rotogravure inks for PET-based laminate structures, delivering outstanding print quality and adhesion.',
    specs: ['PET adhesion', 'High pigment strength', 'Boil & retort resistant'],
    image: '/images/products2/Petlam-Inks.webp',
    type: 'Solvent-based',
  },
  {
    id: 'rg5',
    name: 'GR Laser PVC Inks',
    description: 'Specialist rotogravure inks for laser-printable PVC shrink sleeves and rigid PVC packaging.',
    specs: ['Laser compatible', 'Shrink sleeve rated', 'High gloss'],
    image: '/images/products2/GR-Laser-PVC-Inks.webp',
    type: 'Solvent-based',
  },
];

export const ACCESSORIES: ProductItem[] = [
  {
    id: 'acc1',
    name: 'Pantone Formula Guides',
    description: 'Official Pantone Formula Guides for accurate colour specification and matching across all print processes.',
    specs: ['Industry standard', 'Consistent colour reference', 'Flexo & gravure compatible'],
    image: '/images/products/pantone-formula-guides.webp',
    type: 'Accessories',
  },
  {
    id: 'acc2',
    name: 'Doctor Blades',
    description: 'Precision doctor blades for gravure and flexographic presses, ensuring clean ink metering and reduced waste.',
    specs: ['High durability', 'Multiple material grades', 'OEM compatible'],
    image: '/images/products/doctor-blades.webp',
    type: 'Accessories',
  },
  {
    id: 'acc3',
    name: 'Treatment Test Pens',
    description: 'Dyne test pens for rapid surface energy measurement on films and substrates before printing.',
    specs: ['Fast & accurate', 'Wide dyne range', 'Essential QC tool'],
    image: '/images/products/treatment-test-pens.webp',
    type: 'Accessories',
  },
  {
    id: 'acc4',
    name: 'End Seals',
    description: 'High-quality end seals for anilox rolls, preventing ink leakage and maintaining print consistency.',
    specs: ['Precise fit', 'Chemical resistant', 'Extended press life'],
    image: '/images/products/end-seals.webp',
    type: 'Accessories',
  },
  {
    id: 'acc5',
    name: 'Anilox & Plate Cleaning',
    description: 'Specialised chemical cleaners and accessories for anilox rolls and printing plates, maintaining optimal cell volume.',
    specs: ['Safe on all substrates', 'Fast acting', 'Restores cell volume'],
    image: '/images/products/anilox-cleaning.webp',
    type: 'Accessories',
  },
  {
    id: 'acc6',
    name: 'Double-Sided Mounting Tapes',
    description: 'Premium double-sided foam mounting tapes for secure plate mounting on flexographic presses.',
    specs: ['Consistent cushioning', 'Solvent resistant', 'Multiple hardness options'],
    image: '/images/products/double-sided-mounting-tapes.webp',
    type: 'Accessories',
  },
];
