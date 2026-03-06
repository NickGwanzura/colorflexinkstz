import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Leaf, Palette, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_IMAGES = [
  "/images/hero/_DSC9467.avif",
  "/images/hero/_DSC9448.avif",
  "/images/hero/_DSC9582.avif",
  "/images/hero/buckets.avif",
  "/images/hero/warehouse_team.avif"
];

export const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full font-sans">
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
      <section className="relative h-screen min-h-[700px] flex items-center bg-brand-dark overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              src={HERO_IMAGES[currentImageIndex]}
              alt="Industrial background"
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
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white mb-8 leading-[0.95] tracking-tight">
              Quality Inks. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-magenta">Trusted Solutions.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-light">
              Empowering your brand with vibrant, high-performance flexographic and gravure printing technologies. Inspiring packaging, one drop at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <NavLink
                to="/products"
                className="px-10 py-5 bg-brand-primary hover:bg-cyan-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
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
        <div className="absolute bottom-12 right-12 z-20 flex gap-4">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentImageIndex
                ? 'bg-brand-primary w-12'
                : 'bg-white/20 w-8 hover:bg-white/40'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
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
      </section>

      {/* Core Values / Mission */}
      <section className="py-32 bg-white relative z-20 -mt-20 rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-xs mb-4 block">Our Ethos</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight">Excellence in Every Drop</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ y: -10 }}
              className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-cyan-100 hover:shadow-premium transition-all duration-300 bg-gradient-to-b from-slate-50 to-white"
            >
              <div className="w-20 h-20 mb-8 bg-cyan-50 text-brand-primary rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <Palette size={40} />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-brand-dark">Innovation</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Utilizing state-of-the-art colour matching technology to deliver vibrant, consistent results for every print job, ensuring your brand stands out.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-green-100 hover:shadow-premium transition-all duration-300 bg-gradient-to-b from-slate-50 to-white"
            >
              <div className="w-20 h-20 mb-8 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <Leaf size={40} />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-brand-dark">Sustainability</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Committed to eco-friendly water-based solutions and low-VOC products that protect our environment without compromising on quality.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-pink-100 hover:shadow-premium transition-all duration-300 bg-gradient-to-b from-slate-50 to-white"
            >
              <div className="w-20 h-20 mb-8 bg-pink-50 text-brand-magenta rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 text-brand-dark">Integrity</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
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
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight">Versatile Ink Solutions</h2>
            </div>
            <NavLink to="/products" className="group text-brand-primary font-bold flex items-center gap-2 hover:opacity-80 transition-opacity text-lg">
              View All Products <span className="bg-brand-primary text-white rounded-full p-1.5 group-hover:translate-x-1 transition-transform"><ArrowRight size={16} /></span>
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Flexographic Inks', img: 'https://images.unsplash.com/photo-1632515904536-474c6f2722b5?q=80&w=600&auto=format&fit=crop', desc: 'High-performance water and solvent-based inks for flexible packaging.' },
              { title: 'Gravure Inks', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop', desc: 'Exceptional print quality and depth for long-run packaging applications.' },
              { title: 'Screen Printing Inks', img: 'https://images.unsplash.com/photo-1599583236053-1f3eb17596a2?q=80&w=600&auto=format&fit=crop', desc: 'Vibrant, durable inks suitable for various substrates and industrial uses.' }
            ].map((item, idx) => (
              <div key={idx} className="group glass-container rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border border-white/10 flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  {idx === 0 && <div className="absolute top-6 right-6 z-20 bg-brand-primary text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-lg uppercase tracking-wider">Top Seller</div>}
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-extrabold mb-4 text-brand-dark group-hover:text-brand-primary transition-colors tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 mb-8 text-base leading-relaxed flex-grow font-medium">{item.desc}</p>
                  <span className="text-brand-primary font-bold text-sm border-b-2 border-transparent group-hover:border-brand-primary transition-all w-max">Learn more</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-brand-dark text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-brand-primary rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-magenta rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-20 tracking-tight">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex justify-center mb-8 text-brand-yellow gap-1.5">
                {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={24} fill="currentColor" className="text-brand-yellow bg-brand-dark rounded-full" />)}
              </div>
              <p className="text-slate-300 text-xl italic mb-10 leading-relaxed font-light">"Colourflex has revolutionized our packaging quality. Their technical support is unmatched in Tanzania. A true partner in our growth."</p>
              <div>
                <div className="font-bold text-white text-xl mb-1">Omar Packaging Industries Ltd.</div>
                <div className="text-brand-primary text-sm font-bold uppercase tracking-widest">Key Partner</div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-12 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex justify-center mb-8 text-brand-yellow gap-1.5">
                {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={24} fill="currentColor" className="text-brand-yellow bg-brand-dark rounded-full" />)}
              </div>
              <p className="text-slate-300 text-xl italic mb-10 leading-relaxed font-light">"Reliable, eco-friendly, and always on time. They understand the urgency of our industry and deliver consistently."</p>
              <div>
                <div className="font-bold text-white text-xl mb-1">East Africa Polybag</div>
                <div className="text-brand-primary text-sm font-bold uppercase tracking-widest">Long-term Client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Ready to elevate your packaging?</h2>
          <p className="text-blue-100 mb-12 max-w-2xl mx-auto text-xl leading-relaxed">Get in touch with our technical team for a custom colour match, product trial, or a facility tour.</p>
          <NavLink to="/contact" className="inline-block bg-white text-brand-primary font-bold px-14 py-6 rounded-full hover:bg-slate-50 hover:scale-105 hover:shadow-xl transition-all shadow-2xl text-lg">
            Contact Us Today
          </NavLink>
        </div>
      </section>
    </div>
  );
};