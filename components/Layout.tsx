import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CookieConsent } from './CookieConsent';
import { WhatsAppWidget } from './WhatsAppWidget';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Team', path: '/team' },
  { label: 'Products', path: '/products' },
  { label: 'Industries', path: '/industries' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we are on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Determine header style state
  const useSolidHeader = scrolled || isMenuOpen || !isHomePage;

  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-dark antialiased">
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'top-0' : 'top-0'
          }`}
      >
        {/* Top Bar - Company Details */}
        <div className={`w-full bg-brand-dark text-slate-400 text-[11px] font-medium tracking-wide uppercase transition-all duration-500 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-12 py-2.5 opacity-100 border-b border-white/5'}`}>
          <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a href="tel:+255123456789" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={12} className="text-brand-primary" /> +255 123 456 789
              </a>
              <a href="mailto:info@colourflex.co.tz" className="hidden sm:flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={12} className="text-brand-primary" /> info@colourflex.co.tz
              </a>
              <span className="hidden md:flex items-center gap-2">
                <MapPin size={12} className="text-brand-primary" /> Dar es Salaam, Tanzania
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:flex items-center gap-2 mr-4">
                <Clock size={12} className="text-brand-primary" /> Mon - Fri: 08:00 - 17:00
              </span>
              <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={14} /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram size={14} /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook size={14} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`w-full transition-all duration-300 ${useSolidHeader
          ? 'glass-container shadow-premium py-3'
          : 'bg-transparent py-4 md:py-6'
          }`}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-between items-center">
              {/* Text-based Logo */}
              <NavLink to="/" className="flex items-center gap-2 relative z-50">
                <img
                  src="/images/logo/Untitled-2.svg"
                  alt="Colourflex Logo"
                  className={`h-12 md:h-16 w-auto transition-all duration-300 ${!useSolidHeader ? '' : 'filter brightness-0'}`}
                />
              </NavLink>

              {/* Desktop Menu */}
              <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${isActive
                        ? 'bg-brand-primary text-white shadow-md'
                        : useSolidHeader
                          ? 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 rounded-lg transition-colors relative z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen
                  ? <X size={24} className="text-brand-dark" />
                  : <Menu size={24} className={useSolidHeader ? 'text-brand-dark' : 'text-white'} />
                }
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full Screen Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-white flex flex-col pt-28 pb-10 px-6 overflow-y-auto"
            >
              <div aria-label="Mobile Navigation" className="flex flex-col gap-4 flex-grow">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-6 py-4 rounded-2xl text-xl font-bold transition-all ${isActive
                          ? 'bg-brand-primary text-white shadow-lg shadow-cyan-500/20'
                          : 'text-slate-600 bg-slate-50 hover:bg-slate-100'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-slate-100 space-y-6"
              >
                <div className="flex items-center gap-4 text-slate-600">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-brand-primary">
                    <Phone size={18} />
                  </div>
                  <span className="font-medium text-lg">+255 123 456 789</span>
                </div>
                <div className="flex items-center gap-4 text-slate-600">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-brand-primary">
                    <Mail size={18} />
                  </div>
                  <span className="font-medium text-lg">info@colourflex.co.tz</span>
                </div>
                <div className="flex items-center gap-4 text-slate-600">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-brand-primary">
                    <MapPin size={18} />
                  </div>
                  <span className="font-medium text-lg">Dar es Salaam, Tanzania</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Widgets */}
      <WhatsAppWidget />
      <CookieConsent />

      {/* Premium Footer */}
      <footer className="bg-brand-dark text-white pt-24 pb-10 relative overflow-hidden">
        {/* Abstract Background Shapes (CMYK inspired) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary rounded-full blur-[120px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-magenta rounded-full blur-[120px] opacity-20 -ml-20 -mb-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-slate-900 to-black backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-white/10 mb-20 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-3 tracking-tight">Stay ahead in print technology</h3>
              <p className="text-slate-400">Join our newsletter for expert insights, product updates, and industry trends.</p>
            </div>
            <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:w-80 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-primary focus:bg-white/10 transition-all font-medium"
              />
              <button type="button" className="px-8 py-4 bg-brand-primary hover:bg-cyan-600 text-white font-bold rounded-full shadow-lg shadow-cyan-500/30 transition-all hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 border-b border-white/5 pb-16">

            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-8">
              <div className="flex flex-col">
                <img
                  src="/images/logo/Untitled-2.svg"
                  alt="Colourflex Logo"
                  className="h-16 md:h-20 w-auto object-contain -ml-4"
                />
              </div>
              <p className="text-slate-400 leading-relaxed pr-6">
                Pioneering the future of printing in Tanzania with world-class formulations, sustainable practices, and unmatched technical expertise.
              </p>
              <div className="flex gap-4">
                {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 group">
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-8 border-l-2 border-brand-primary pl-3">Company</h3>
              <ul className="space-y-4 text-slate-400">
                <li><NavLink to="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Us</NavLink></li>
                <li><NavLink to="/team" className="hover:text-white hover:translate-x-1 transition-all inline-block">Our Team</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Careers</NavLink></li>
                <li><NavLink to="/sustainability" className="hover:text-white hover:translate-x-1 transition-all inline-block">Sustainability</NavLink></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-8 border-l-2 border-brand-primary pl-3">Products</h3>
              <ul className="space-y-4 text-slate-400">
                <li><NavLink to="/products" className="hover:text-white hover:translate-x-1 transition-all inline-block">Flexographic</NavLink></li>
                <li><NavLink to="/products" className="hover:text-white hover:translate-x-1 transition-all inline-block">Gravure</NavLink></li>
                <li><NavLink to="/products" className="hover:text-white hover:translate-x-1 transition-all inline-block">Screen Printing</NavLink></li>
                <li><NavLink to="/products" className="hover:text-white hover:translate-x-1 transition-all inline-block">Coatings</NavLink></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-4">
              <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-8 border-l-2 border-brand-primary pl-3">Contact Us</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 bg-white/5 p-2 rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-white font-medium mb-1">Headquarters</span>
                    <span className="text-slate-400 text-sm leading-relaxed">Plot 123, Industrial Area,<br />Dar es Salaam, Tanzania</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 bg-white/5 p-2 rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-white font-medium mb-1">Phone</span>
                    <span className="text-slate-400 text-sm">+255 123 456 789</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 bg-white/5 p-2 rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-white font-medium mb-1">Email</span>
                    <span className="text-slate-400 text-sm">info@colourflex.co.tz</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 pt-4">
            <p>&copy; {new Date().getFullYear()} Colourflex Inks & Coatings Ltd. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0 font-medium">
              <NavLink to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</NavLink>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <NavLink to="/sitemap" className="hover:text-white transition-colors">Sitemap</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};