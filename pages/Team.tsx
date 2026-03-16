import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, X, ArrowRight } from 'lucide-react';
import { TeamMember } from '../types';
import { SEO } from '../components/SEO';

const MD = {
  name: 'Kennedy Chisora',
  role: 'Managing Director',
  image: '/images/team/kennedy.JPG',
  bio: 'Kennedy leads Colourflex Inks & Coatings Ltd. with a vision for manufacturing excellence and sustainable growth across the East African market. As Managing Director, he sets the strategic direction for 2026 and beyond — driving innovation, deepening client partnerships, and positioning Colourflex as the benchmark for ink manufacturing in East Africa.'
};

const TEAM: TeamMember[] = [
  {
    name: 'Carol N. Chisora',
    role: 'Administrative Manager',
    image: '/images/team/Carol.avif',
    bio: 'Carol brings academic depth and practical leadership rooted in sociology, development studies, and business administration. She ensures smooth operations, strategic alignment, and a culture of excellence across the organisation.'
  },
  {
    name: 'Zenobius Warwo',
    role: 'Technical Manager',
    image: '/images/team/Zenobius Warwo.JPG',
    bio: 'With over 15 years of experience, Zeno blends scientific precision and business acumen to oversee production, quality control, innovation, and operational planning.'
  },
  {
    name: 'Ally Mohammed',
    role: 'Inks Coordinator',
    image: '/images/team/Ally Mohammed.avif',
    bio: 'With 10+ years in the inks industry and a strong background in sales and marketing, Ally drives customer relationships, market growth, and delivery of tailored ink solutions.'
  },
  {
    name: 'Stanley Bobo',
    role: 'Ink Technician',
    image: '/images/team/Stanley Bobo.PNG',
    bio: 'A Chemical & Processing Systems Engineering professional ensuring accurate formulation, quality control, and safe technical production practices.'
  },
  {
    name: 'Lucy Mutahyabarwa',
    role: 'Accountant',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    bio: 'A seasoned corporate accountant with expertise in compliance, financial reporting, and modern accounting systems including Focus 9 and Xero.'
  },
  {
    name: 'Salum Kaelelezi',
    role: 'Store Controller',
    image: '/images/team/Salum Kaelelezi.avif',
    bio: 'An inventory and procurement specialist with 8+ years of experience ensuring efficient material flow and stock accuracy.'
  },
  {
    name: 'Fatma Bakari',
    role: 'Data Processing Clerk',
    image: '/images/team/fatima.JPG',
    bio: 'Focused on financial accuracy, invoice processing, and administrative efficiency through her business management background.'
  },
  {
    name: 'Eva Augustino Ngowi',
    role: 'Data Processing Clerk',
    image: '/images/team/eva.JPG',
    bio: 'A human-resource-trained professional supporting invoice preparation, record management, and transactional accuracy.'
  },
  {
    name: 'Saidi Athumani',
    role: 'Laboratory Assistant',
    image: '/images/team/Saidi Athumani.PNG',
    bio: 'A skilled technician with nearly a decade of experience ensuring quality control, safe chemical handling, and efficient daily production.'
  }
];

export const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      <SEO 
        title="Our Team" 
        description="Meet the dedicated professionals behind Colourflex. From chemical engineers to logistics specialists, our team drives innovation in ink manufacturing."
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
              Our People
            </span>
            <h1 className="text-hero mb-8">
              The Experts <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-200">Behind the Ink</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Meet the dedicated professionals driving innovation, quality, and reliability at Colourflex.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Managing Director Spotlight */}
      <section className="container mx-auto px-4 md:px-8 -mt-20 relative z-20 pb-0 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-brand-dark rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
        >
          {/* Photo */}
          <div className="lg:w-2/5 h-80 lg:h-auto relative shrink-0">
            <img
              src={MD.image}
              alt={`${MD.name} — ${MD.role}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-brand-dark/40" />
          </div>

          {/* Content */}
          <div className="lg:w-3/5 p-12 md:p-16 lg:p-20 flex flex-col justify-center">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-brand-primary font-bold tracking-widest uppercase text-xs mb-6 w-max">
              Leadership · 2026
            </span>
            <h2 className="text-section text-white mb-3">{MD.name}</h2>
            <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-8">{MD.role}</p>
            <p className="text-slate-300 text-lg leading-relaxed font-light mb-10 max-w-xl">{MD.bio}</p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white font-bold text-sm hover:bg-brand-primary hover:border-brand-primary transition-colors duration-200">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/10 text-white font-bold text-sm hover:bg-brand-primary hover:border-brand-primary transition-colors duration-200">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-32 container mx-auto px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              layoutId={`card-${member.name}`}
              onClick={() => setSelectedMember(member)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-premium hover:shadow-xl transition-[transform,box-shadow] duration-300 group hover:-translate-y-2 cursor-pointer flex flex-col h-full"
            >
              <div className="h-96 overflow-hidden relative bg-slate-100">
                <motion.img
                  layoutId={`image-${member.name}`}
                  src={member.image}
                  alt={`${member.name} - ${member.role} at Colourflex`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay Icons */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-brand-primary transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-brand-primary transition-colors">
                    <Mail size={20} />
                  </div>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="mb-6">
                  <motion.h3 layoutId={`name-${member.name}`} className="text-3xl font-bold text-brand-dark tracking-tight leading-tight mb-2">
                    {member.name}
                  </motion.h3>
                  <motion.p layoutId={`role-${member.name}`} className="text-brand-primary font-bold text-xs uppercase tracking-widest">
                    {member.role}
                  </motion.p>
                </div>

                <p className="text-slate-500 leading-relaxed text-base flex-grow mb-6 font-medium">
                  {member.bio}
                </p>

                <div className="pt-6 border-t border-slate-100 flex items-center text-brand-dark font-bold text-sm group-hover:text-brand-primary transition-colors">
                  View Profile <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedMember.name}`}
              className="w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 h-80 md:h-auto relative bg-slate-200 shrink-0">
                <motion.img
                  layoutId={`image-${selectedMember.name}`}
                  src={selectedMember.image}
                  alt={`${selectedMember.name} - ${selectedMember.role}`}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-top absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden"></div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-10 md:p-16 overflow-y-auto relative flex flex-col bg-white">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-8 right-8 z-20 p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-brand-dark transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="mb-10">
                  <motion.h3 layoutId={`name-${selectedMember.name}`} className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-3 tracking-tight leading-tight">
                    {selectedMember.name}
                  </motion.h3>
                  <motion.p layoutId={`role-${selectedMember.name}`} className="text-brand-primary font-bold tracking-widest uppercase text-sm">
                    {selectedMember.role}
                  </motion.p>
                </div>

                <div className="prose prose-lg prose-slate text-slate-500 leading-relaxed mb-12 font-medium">
                  <p>{selectedMember.bio}</p>
                  <p>
                    At Colourflex, {selectedMember.name.split(' ')[0]} plays a pivotal role in maintaining our high standards. Their dedication to the craft and deep industry knowledge contributes significantly to our client satisfaction and operational efficiency.
                  </p>
                </div>

                <div className="mt-auto pt-10 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Contact & Connect</h4>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="flex items-center gap-3 px-8 py-4 rounded-full bg-slate-50 text-brand-dark font-bold hover:bg-[#0077b5] hover:text-white transition-colors duration-200">
                      <Linkedin size={20} /> LinkedIn
                    </a>
                    <a href="#" className="flex items-center gap-3 px-8 py-4 rounded-full bg-slate-50 text-brand-dark font-bold hover:bg-brand-primary hover:text-white transition-colors duration-200">
                      <Mail size={20} /> Email
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Careers CTA */}
      <section className="pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-brand-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-lg">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Join Our Growing Team</h2>
              <p className="text-blue-100 mb-12 text-xl leading-relaxed">
                We are always looking for talented individuals passionate about manufacturing excellence, chemical engineering, and innovation.
              </p>
              <a href="mailto:careers@colourflex.co.tz" className="inline-block bg-white text-brand-primary font-bold px-12 py-5 rounded-full hover:bg-slate-50 transition-colors shadow-lg">
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};