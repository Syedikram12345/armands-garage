import React, { useState } from 'react';
import ProposalBanner from './components/ProposalBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Phone, MapPin } from 'lucide-react';
import { businessInfo } from './data/garageData';

export default function App() {
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState('');

  return (
    <div className="min-h-screen bg-garage-darkest text-garage-textLight flex flex-col font-sans selection:bg-garage-amber selection:text-zinc-950">
      {/* Concept Portfolio Banner */}
      <ProposalBanner />

      {/* Main Header / Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <ServicesSection onSelectServiceForInquiry={(serviceTitle) => setSelectedServiceForInquiry(serviceTitle)} />
        <AboutSection />
        <WhyChooseUs />
        <ContactSection prefilledService={selectedServiceForInquiry} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Mobile Quick Action Bar (Bottom of screen on mobile) */}
      <aside 
        aria-label="Quick Actions"
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-garage-dark/95 backdrop-blur-md border-t border-garage-border p-3 flex items-center gap-3 shadow-2xl"
      >
        <a
          href={`tel:${businessInfo.contact.phoneNumeric}`}
          className="flex-1 py-3 px-4 rounded-xl bg-garage-amber hover:bg-garage-amber-light text-zinc-950 font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Call (928) 782-1211</span>
        </a>

        <a
          href={businessInfo.contact.address.mapsQueryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-3.5 rounded-xl bg-garage-surfaceElevated text-zinc-200 border border-garage-border flex items-center justify-center hover:bg-garage-border transition-colors active:scale-95"
          aria-label="Get directions to 310 W 17th Pl"
        >
          <MapPin className="w-4 h-4 text-garage-amber" />
        </a>
      </aside>
    </div>
  );
}
