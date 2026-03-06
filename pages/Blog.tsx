import React from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowRight, ArrowLeft, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost as BlogPostType } from '../types';

export const BLOG_POSTS: BlogPostType[] = [
  {
    id: 'sustainability-shift',
    title: 'The Shift to Water-Based Inks in Flexible Packaging',
    date: 'March 15, 2024',
    category: 'Sustainability',
    author: 'David Mushi',
    summary: 'How environmental regulations and consumer demand are driving the massive adoption of water-based flexo inks in East Africa.',
    image: 'https://images.unsplash.com/photo-1550948537-130a1ce83314?q=80&w=800&auto=format&fit=crop',
    content: (
      <>
        <p className="mb-6 font-medium text-lg leading-relaxed text-slate-700">The packaging industry is undergoing a significant transformation. As environmental concerns take center stage globally, Tanzania is no exception. Manufacturers and brands are increasingly moving away from solvent-based systems towards water-based alternatives, driven by both regulatory compliance and a genuine commitment to sustainability.</p>
        <h3 className="text-2xl font-bold mt-10 mb-4 text-brand-dark tracking-tight">Why Water-Based?</h3>
        <p className="mb-6 leading-relaxed text-slate-700">Water-based inks offer a substantial reduction in Volatile Organic Compounds (VOCs). Unlike their solvent counterparts, which release harmful chemicals into the atmosphere during drying, water-based inks primarily evaporate water. This not only makes the workplace safer for our print operators but also significantly reduces the carbon footprint of the final packaging.</p>
        <h3 className="text-2xl font-bold mt-10 mb-4 text-brand-dark tracking-tight">Performance without Compromise</h3>
        <p className="mb-6 leading-relaxed text-slate-700">Historically, there was a misconception that eco-friendly meant lower quality. That is no longer the case. At Colourflex, our 'Aquaflex Premium' range demonstrates that you can achieve high vibrancy, excellent rub resistance, and fast drying times on corrugated boards and paper sacks without the environmental cost.</p>
        <p className="leading-relaxed text-slate-700">As we look towards 2025, we anticipate this trend will only accelerate, with more investments in drying technologies allowing water-based inks to perform effectively even on non-porous films.</p>
      </>
    )
  },
  {
    id: 'packaging-trends-2025',
    title: 'Top Packaging Trends for 2025: Minimalist & Smart',
    date: 'February 28, 2024',
    category: 'Industry News',
    author: 'Sarah Juma',
    summary: 'What brands need to know about consumer preferences in the East African market. Less is more, and smart packaging is on the rise.',
    image: 'https://images.unsplash.com/photo-1598295627685-1d4cb800c6d5?q=80&w=800&auto=format&fit=crop',
    content: (
      <>
        <p className="mb-6 font-medium text-lg leading-relaxed text-slate-700">The shelves in Dar es Salaam's supermarkets are changing. Gone are the days of cluttered, chaotic designs. The modern consumer, overwhelmed by choice, is gravitating towards minimalist packaging that communicates value instantly and clearly.</p>
        <h3 className="text-2xl font-bold mt-10 mb-4 text-brand-dark tracking-tight">Clean Labeling</h3>
        <p className="mb-6 leading-relaxed text-slate-700">Transparency is key. Consumers want to know what they are buying. This trend towards 'clean labeling' extends to the design itself—using clear typography, ample whitespace, and bold, singular colors to create a sense of trust and premium quality. Our high-pigment gravure inks are perfect for achieving these solid, consistent brand colors.</p>
        <h3 className="text-2xl font-bold mt-10 mb-4 text-brand-dark tracking-tight">Smart Integration</h3>
        <p className="leading-relaxed text-slate-700">We are also seeing early adoption of QR codes integrated directly into packaging designs, linking consumers to supply chain stories or authenticity verifications. Printing these codes requires high-definition capabilities to ensure scannability, an area where Colourflex inks excel.</p>
      </>
    )
  },
  {
    id: 'colourflex-expansion',
    title: 'Colourflex Enhances Capacity with New Milling Technology',
    date: 'January 10, 2024',
    category: 'Company News',
    author: 'Admin',
    summary: 'We have upgraded our Dar es Salaam facility with state-of-the-art bead mills to improve pigment dispersion and gloss levels.',
    image: 'https://images.unsplash.com/photo-1565619624098-e6597849403e?q=80&w=800&auto=format&fit=crop',
    content: (
      <>
        <p className="mb-6 font-medium text-lg leading-relaxed text-slate-700">We are excited to announce the installation of two new high-speed bead mills at our production facility in the Industrial Area. This significant investment marks another milestone in our mission to provide world-class coatings to the Tanzanian market.</p>
        <h3 className="text-2xl font-bold mt-10 mb-4 text-brand-dark tracking-tight">What This Means for You</h3>
        <ul className="list-disc pl-5 mb-6 space-y-3 text-slate-700">
          <li><strong className="text-brand-dark">Finer Grinds:</strong> Better pigment dispersion means higher color strength. You can achieve the same vibrancy with a thinner ink film, saving money.</li>
          <li><strong className="text-brand-dark">Higher Gloss:</strong> The improved particle size distribution results in superior gloss levels for our solvent-based range.</li>
          <li><strong className="text-brand-dark">Faster Turnaround:</strong> Increased capacity means we can handle larger bulk orders with shorter lead times.</li>
        </ul>
        <p className="leading-relaxed text-slate-700">We invite our partners to visit the facility and see the new machinery in action. Contact our sales team to schedule a tour.</p>
      </>
    )
  }
];

export const Blog: React.FC = () => {
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
              Industry Insights
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Stay informed with the latest trends in packaging, sustainability, and company announcements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 md:px-8 py-32 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div 
              key={post.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-2 border border-slate-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-[11px] font-bold text-brand-primary uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                  <Tag size={12} /> {post.category}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center text-xs font-bold text-slate-400 mb-6 gap-6 uppercase tracking-wider">
                  <div className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</div>
                  <div className="flex items-center gap-1.5"><User size={14} /> {post.author}</div>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 leading-tight group-hover:text-brand-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm mb-10 flex-grow line-clamp-3 leading-relaxed font-medium">
                  {post.summary}
                </p>
                <NavLink 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  Read Article <ArrowRight size={16} />
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BlogPost: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-32 pb-20 container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <button onClick={() => navigate('/blog')} className="text-brand-primary hover:underline font-bold">
          Return to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-[50vh] relative">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-dark/60" />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="container px-4 text-center text-white">
              <span className="bg-brand-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block shadow-lg">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl mx-auto leading-tight tracking-tight">
                {post.title}
              </h1>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 -mt-20 relative z-10 pb-20">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 max-w-4xl mx-auto shadow-2xl min-h-[500px]">
          {/* Meta Header */}
          <div className="flex flex-wrap justify-between items-center border-b border-slate-100 pb-8 mb-10 gap-6">
             <button 
               onClick={() => navigate('/blog')} 
               className="flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors text-sm font-bold uppercase tracking-wider group"
             >
               <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
             </button>
             <div className="flex items-center gap-8 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-brand-primary">
                    <User size={18} />
                  </div>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{post.date}</span>
                </div>
             </div>
          </div>

          {/* Content */}
          <article className="prose prose-lg prose-slate max-w-none text-slate-700">
            {post.content}
          </article>

          {/* Footer Share / Tags */}
          <div className="mt-16 pt-10 border-t border-slate-100">
            <h4 className="font-bold text-brand-dark mb-6 tracking-tight">Share this article</h4>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300">
                <span className="sr-only">Share on Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all duration-300">
                <span className="sr-only">Share on Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300">
                <span className="sr-only">Share on LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};