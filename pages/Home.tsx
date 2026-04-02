import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Leaf, Palette, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SEO } from '../components/SEO';

const HERO_IMAGES = [
  "/images/hero/_DSC9467.webp",
  "/images/hero/_DSC9250.webp",
  "/images/hero/_DSC9448.webp",
  "/images/hero/_DSC9255.webp",
  "/images/hero/_DSC9582.webp",
  "/images/hero/_DSC9263.webp",
  "/images/hero/_DSC9269.webp",
  "/images/hero/buckets.webp",
  "/images/hero/warehouse_team.webp"
];

export const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Pause slider when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.dispatchEvent(new CustomEvent('hero-pause'));
      } else {
        document.dispatchEvent(new CustomEvent('hero-resume'));
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const startTimer = () => {
      timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
      }, 6000);
    };
    
    const pauseTimer = () => clearInterval(timer);
    
    if (!prefersReducedMotion) {
      startTimer();
    }
    
    document.addEventListener('hero-pause', pauseTimer);
    document.addEventListener('hero-resume', startTimer);
    
    return () => {
      clearInterval(timer);
      document.removeEventListener('hero-pause', pauseTimer);
      document.removeEventListener('hero-resume', startTimer);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="w-full font-sans">
      <SEO
        title="Home"
        description="Leading manufacturer of flexographic, gravure, and screen printing inks in Tanzania. Quality solutions for packaging and industrial applications."
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Colourflex Inks & Coatings Ltd.",
          "url": "https://colourflex.co.tz",
          "logo": "https://colourflex.co.tz/images/logo/logo.svg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+255756746467",
            "contactType": "Customer Service"
          }
        })}
      </script>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center bg-brand-dark overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.5, ease: "easeInOut" }}
              src={HERO_IMAGES[currentImageIndex]}
              alt="Industrial background"
              decoding="async"
              fetchpriority={currentImageIndex === 0 ? "high" : "auto"}
              loading={currentImageIndex === 0 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </AnimatePresence>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-primary/10 z-10" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Leading Manufacturer in Tanzania
            </div>
            <h1 className="text-hero text-white mb-8">
              Quality Inks. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-magenta">Trusted Solutions.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-light">
              Tanzania&apos;s main dedicated manufacturer of flexographic and gravure printing inks. With world-class technology, guaranteed quality, and unmatched technical support, we empower brands with reliable, innovative, and sustainable packaging solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <NavLink
                to="/products"
                className="px-10 py-5 bg-brand-primary hover:bg-cyan-600 text-white font-bold rounded-full transition-[colors,transform] duration-200 shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
              >
                Explore Products <ArrowRight size={20} />
              </NavLink>
              <NavLink
                to="/contact"
                className="px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-brand-dark transition-all hover:-translate-y-1 flex items-center justify-center text-lg"
              >
                Get Free Technical Audit
              </NavLink>
            </div>
          </motion.div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-3 rounded-full transition-all duration-500 min-w-[32px] touch-manipulation ${idx === currentImageIndex
                ? 'bg-brand-primary w-10 md:w-12'
                : 'bg-white/30 w-6 md:w-8 hover:bg-white/50'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === currentImageIndex ? 'true' : undefined}
            />
          ))}
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        {!prefersReducedMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-brand-primary rounded-full"
              />
            </div>
          </motion.div>
        )}
      </section>

      {/* Core Values / Mission */}
      <section className="py-20 md:py-32 bg-white relative z-20 -mt-20 rounded-t-[2rem] md:rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-xs mb-4 block">Our Ethos</span>
            <h2 className="text-section text-brand-dark">Excellence in Every Drop</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <motion.div
              whileHover={prefersReducedMotion ? {} : { y: -10 }}
              className="group md:col-span-2 lg:col-span-1 p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-cyan-100 hover:shadow-premium transition-[transform,box-shadow] duration-300 bg-gradient-to-b from-slate-50 to-white"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 bg-cyan-50 text-brand-primary rounded-2xl md:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <Palette size={32} className="md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold mb-3 md:mb-4 text-brand-dark">Innovation</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base">
                Utilizing state-of-the-art colour matching technology to deliver vibrant, consistent results for every print job, ensuring your brand stands out.
              </p>
            </motion.div>
            <motion.div
              whileHover={prefersReducedMotion ? {} : { y: -10 }}
              className="group p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-green-100 hover:shadow-premium transition-[transform,box-shadow] duration-300 bg-gradient-to-b from-slate-50 to-white"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 bg-green-50 text-green-600 rounded-2xl md:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <Leaf size={32} className="md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold mb-3 md:mb-4 text-brand-dark">Sustainability</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base">
                Committed to eco-friendly water-based solutions and low-VOC products that protect our environment without compromising on quality.
              </p>
            </motion.div>
            <motion.div
              whileHover={prefersReducedMotion ? {} : { y: -10 }}
              className="group p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-pink-100 hover:shadow-premium transition-[transform,box-shadow] duration-300 bg-gradient-to-b from-slate-50 to-white"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 bg-pink-50 text-brand-magenta rounded-2xl md:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <ShieldCheck size={32} className="md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold mb-3 md:mb-4 text-brand-dark">Integrity</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base">
                Building lasting partnerships through transparent business practices, reliable delivery schedules, and expert technical support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-brand-primary font-bold tracking-wider uppercase text-xs mb-2 block">Our Expertise</span>
              <h2 className="text-section text-brand-dark">Versatile Ink Solutions</h2>
            </div>
            <NavLink to="/products" className="group text-brand-primary font-bold flex items-center gap-2 hover:opacity-80 transition-opacity text-lg">
              View All Products <span className="bg-brand-primary text-white rounded-full p-1.5 group-hover:translate-x-1 transition-transform"><ArrowRight size={16} /></span>
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Flexographic Inks', img: '/images/products2/Flexoprint-Inks.webp', desc: 'High-performance water and solvent-based inks for flexible packaging.', glowColor: '#2cabe2', bar: 'from-[#2cabe2] to-cyan-300' },
              { title: 'Rotogravure Inks', img: '/images/products2/Rotoprint-Inks.webp', desc: 'Exceptional print quality and depth for long-run packaging applications.', glowColor: '#e8078a', bar: 'from-[#e8078a] to-pink-400' },
              { title: 'Accessories', img: '/images/products/doctor-blades.webp', desc: 'Premium consumables including doctor blades, mounting tapes, and colour guides.', glowColor: '#faed1f', bar: 'from-[#faed1f] to-amber-300' }
            ].map((item, idx) => (
              <NavLink
                to="/products"
                key={idx}
                className="group relative bg-white rounded-[2rem] overflow-hidden flex flex-col h-full cursor-pointer transition-all duration-500 hover:-translate-y-3 shadow-[0_2px_20px_rgba(0,0,0,0.07),0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_28px_64px_rgba(0,0,0,0.14),0_4px_16px_rgba(0,0,0,0.07)]"
              >
                {/* White image stage — matches white-bg PNGs for a clean look */}
                <div className="relative h-72 bg-white flex items-center justify-center overflow-hidden">
                  {/* Soft coloured radial tint */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 70% 70% at 50% 60%, ${item.glowColor}18, transparent)` }}
                  />
                  <img
                    src={item.img}
                    alt={item.title}
                    decoding="async"
                    className="relative z-10 h-48 w-auto object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Index badge */}
                  <span className="absolute top-5 left-5 z-20 text-[10px] font-extrabold tracking-widest uppercase text-slate-400 bg-slate-100 rounded-full px-3 py-1.5">
                    0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="px-7 pt-6 pb-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold text-brand-dark mb-2 tracking-tight leading-tight group-hover:text-brand-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-6 font-medium">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2 text-brand-primary font-extrabold text-sm">
                    Explore Range
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Slide-in accent bar on hover */}
                <div className={`h-[3px] bg-gradient-to-r ${item.bar} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-brand-dark text-white overflow-hidden relative">

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-section mb-12 md:mb-20">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex justify-center mb-8 text-brand-yellow gap-1.5">
                {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={24} fill="currentColor" className="text-brand-yellow bg-brand-dark rounded-full" />)}
              </div>
              <p className="text-slate-300 text-base md:text-xl italic mb-6 md:mb-10 leading-relaxed font-light">&quot;Colourflex has revolutionized our packaging quality. Their technical support is unmatched in Tanzania. A true partner in our growth.&quot;</p>
              <div>
                <div className="font-bold text-white text-lg md:text-xl mb-1">Omar Packaging Industries Ltd.</div>
                <div className="text-brand-primary text-sm font-bold uppercase tracking-widest">Key Partner</div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex justify-center mb-8 text-brand-yellow gap-1.5">
                {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={24} fill="currentColor" className="text-brand-yellow bg-brand-dark rounded-full" />)}
              </div>
              <p className="text-slate-300 text-base md:text-xl italic mb-6 md:mb-10 leading-relaxed font-light">&quot;Reliable, eco-friendly, and always on time. They understand the urgency of our industry and deliver consistently.&quot;</p>
              <div>
                <div className="font-bold text-white text-lg md:text-xl mb-1">East Africa Polybag</div>
                <div className="text-brand-primary text-sm font-bold uppercase tracking-widest">Long-term Client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-brand-primary relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-section text-white mb-6 md:mb-8">Ready to elevate your packaging?</h2>
          <p className="text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed px-4">Get in touch with our technical team for a custom colour match, product trial, or a facility tour.</p>
          <NavLink to="/contact" className="inline-block bg-white text-brand-primary font-bold px-8 md:px-14 py-4 md:py-6 rounded-full hover:bg-slate-50 transition-colors shadow-lg text-base md:text-lg">
            Contact Us Today
          </NavLink>
        </div>
      </section>
    </div>
  );
};
