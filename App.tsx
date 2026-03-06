import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Products } from './pages/Products';
import { Industries } from './pages/Industries';
import { Sustainability } from './pages/Sustainability';
import { Contact } from './pages/Contact';
import { Blog, BlogPost } from './pages/Blog';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Sitemap } from './pages/Sitemap';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Contact />} /> 
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;