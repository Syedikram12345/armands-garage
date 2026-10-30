import React, { useState } from 'react';
import { 
  MessageSquareCheck, 
  Hammer, 
  MapPin, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Phone,
  HelpCircle
} from 'lucide-react';
import { valueProps, faqItems, businessInfo } from '../data/garageData';

const iconMap = {
  MessageSquareCheck,
  Hammer,
  MapPin,
  CheckCircle2,
};

export default function WhyChooseUs() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-garage-dark border-b border-garage-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-garage-amber text-xs font-bold tracking-widest uppercase mb-3 bg-garage-amber/10 px-3 py-1 rounded-full border border-garage-amber/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Built on Trust &amp; Craft</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight mb-4">
            Why Yuma Drivers Choose Armand’s Garage
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Straightforward service values centered around practical repairs, clear communication, and dependable workmanship. No gimmicks, no fabricated awards—just honest automotive work.
          </p>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {valueProps.map((prop) => {
            const Icon = iconMap[prop.iconName] || CheckCircle2;
            return (
              <div
                key={prop.id}
                className="bg-garage-surface rounded-2xl border border-garage-border p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-500 transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-garage-surfaceElevated border border-garage-border flex items-center justify-center text-garage-amber shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-garage-dark px-2 py-0.5 rounded border border-garage-border/60">
                      {prop.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl uppercase tracking-tight text-white mb-2.5">
                    {prop.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-garage-border/50 text-xs text-garage-amber font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Practical approach</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local FAQ Accordion */}
        <div className="max-w-3xl mx-auto mt-8 bg-garage-surface rounded-2xl border border-garage-border p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6 text-zinc-200">
            <HelpCircle className="w-5 h-5 text-garage-amber" />
            <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-garage-border rounded-xl overflow-hidden bg-garage-dark/60 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-zinc-200 hover:text-garage-amber transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span>{item.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-garage-amber shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-garage-border/60 pt-3 animate-fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-garage-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
            <span>Have a specific question about your car or truck?</span>
            <a
              href={`tel:${businessInfo.contact.phoneNumeric}`}
              className="text-garage-amber hover:underline font-semibold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (928) 782-1211</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
