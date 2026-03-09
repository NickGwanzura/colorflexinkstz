import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';
import { SEO } from '../components/SEO';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-white">
      <SEO 
        title="Privacy Policy" 
        description="Colourflex privacy policy - learn how we collect, use, and protect your personal information when you visit our website."
      />
      <div className="container mx-auto px-4 md:px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Legal</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">Privacy Policy</h1>
            <p className="text-lg text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              At Colourflex Inks & Coatings Ltd. ("we", "us", or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 not-prose">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <Shield className="text-brand-primary mb-4" size={32} />
                    <h3 className="font-bold text-brand-dark mb-2">Data Protection</h3>
                    <p className="text-sm text-slate-600">We employ industry-standard security measures to protect your personal information.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <Lock className="text-brand-primary mb-4" size={32} />
                    <h3 className="font-bold text-brand-dark mb-2">Secure Storage</h3>
                    <p className="text-sm text-slate-600">Your data is stored on secure servers with restricted access.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <Eye className="text-brand-primary mb-4" size={32} />
                    <h3 className="font-bold text-brand-dark mb-2">Transparency</h3>
                    <p className="text-sm text-slate-600">We never sell your personal data to third parties for marketing purposes.</p>
                </div>
            </div>

            <h3>1. Information We Collect</h3>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul>
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>

            <h3>2. Use of Your Information</h3>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul>
                <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
                <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
            </ul>

            <h3>3. Cookie Policy</h3>
            <p>We use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology.</p>

            <h3>4. Contact Us</h3>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>
                <strong>Colourflex Inks & Coatings Ltd.</strong><br/>
                Plot 123, Industrial Area<br/>
                Dar es Salaam, Tanzania<br/>
                Email: info@colourflex.co.tz<br/>
                Phone: +255 123 456 789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};