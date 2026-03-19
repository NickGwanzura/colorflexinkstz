import React, { useState } from 'react';
import { Mail, Phone, MapPin, Wrench, GraduationCap, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting Colourflex. We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Colourflex for sales inquiries, technical support, colour matching services, and product training in Tanzania."
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
              Here to Help
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
              Technical Support
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Beyond manufacturing, we are your expert partners in production. Get in touch for sales or technical assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-32 -mt-20 relative z-20">
        
        {/* Support Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white p-12 rounded-[2.5rem] shadow-premium hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group border border-slate-100 h-full"
             >
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 text-brand-primary group-hover:scale-110 transition-transform">
                  <Microscope size={40} />
                </div>
                <h3 className="font-extrabold text-2xl mb-4 text-brand-dark tracking-tight">Colour Matching</h3>
                <p className="text-slate-500 leading-relaxed font-medium">Precision laboratory matching to ensure your brand colors are consistent across every batch.</p>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-white p-12 rounded-[2.5rem] shadow-premium hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group border border-slate-100 h-full"
             >
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 text-brand-primary group-hover:scale-110 transition-transform">
                  <Wrench size={40} />
                </div>
                <h3 className="font-extrabold text-2xl mb-4 text-brand-dark tracking-tight">Troubleshooting</h3>
                <p className="text-slate-500 leading-relaxed font-medium">On-site technical assistance to rapidly resolve printing defects and production issues.</p>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white p-12 rounded-[2.5rem] shadow-premium hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group border border-slate-100 h-full"
             >
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 text-brand-primary group-hover:scale-110 transition-transform">
                  <GraduationCap size={40} />
                </div>
                <h3 className="font-extrabold text-2xl mb-4 text-brand-dark tracking-tight">Product Training</h3>
                <p className="text-slate-500 leading-relaxed font-medium">Comprehensive workshops for your staff on optimal ink handling, storage, and usage.</p>
             </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-[3rem] overflow-hidden shadow-premium">
          {/* Contact Info & Map */}
          <div className="bg-brand-dark text-white p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 opacity-10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            
            <h2 className="text-4xl font-extrabold mb-12 tracking-tight">Get In Touch</h2>
            <div className="space-y-12 relative z-10">
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <MapPin className="text-blue-300" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">Plot 12B, Industrial Area,<br />Vingunguti, Dar es Salaam, Tanzania</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <Mail className="text-blue-300" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Email Us</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">info@colourflexinks.co.tz</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                  <Phone className="text-blue-300" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Call Us</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">+255755186916<br />+255715292916<br /><span className="text-slate-400 text-sm">Mon – Friday: 8:00 AM – 5:00 PM<br />Saturday: 8:00 AM – 1:00 PM</span></p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mt-16 w-full h-64 bg-white/5 rounded-3xl flex flex-col items-center justify-center border border-white/10 gap-4">
              <MapPin size={32} className="text-brand-primary" />
              <div className="text-center">
                <p className="font-bold text-white mb-1">Colourflex Inks and Coatings Limited</p>
                <p className="text-slate-400 text-sm mb-5">Plot 12B, Industrial Area, Vingunguti,<br />Dar es Salaam, Tanzania</p>
                <a
                  href="https://maps.google.com/?q=Colourflex+Inks+and+Coatings+Limited,+Vingunguti,+Dar+es+Salaam,+Tanzania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md text-white font-bold px-8 py-3 rounded-full border border-white/30 hover:bg-white hover:text-brand-dark transition-colors text-sm"
                >
                  VIEW US ON GOOGLE MAPS
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-12 md:p-20 bg-white">
            <h2 className="text-3xl font-extrabold text-brand-dark mb-10 tracking-tight">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-bold text-slate-700"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-bold text-slate-700"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Subject</label>
                <div className="relative">
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all appearance-none font-bold text-slate-700 cursor-pointer"
                  >
                    <option value="">Select a topic</option>
                    <option value="Sales">Product Inquiry / Sales</option>
                    <option value="Support">Technical Support</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400 font-medium text-slate-700"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-primary text-white font-bold py-5 rounded-2xl hover:bg-cyan-600 transition-colors duration-200 shadow-lg mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};