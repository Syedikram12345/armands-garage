import React, { useState } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Disc, 
  Cpu, 
  Droplets, 
  Compass, 
  ArrowRight, 
  Info, 
  Phone,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { serviceCategories, businessInfo } from '../data/garageData';
import ServiceDetailModal from './ServiceDetailModal';

const iconMap = {
  Wrench,
  ShieldCheck,
  Disc,
  Cpu,
  Droplets,
  Compass,
};

export default function ServicesSection({ onSelectServiceForInquiry }) {
  const [selectedService, setSelectedService] = useState(null);

  const handleInquire = (serviceTitle) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-garage-dark border-b border-garage-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-garage-amber text-xs font-bold tracking-widest uppercase mb-2">
              <Wrench className="w-4 h-4" />
              <span>Dependable Vehicle Care</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              Automotive Repair <br className="hidden sm:block" />
              <span className="text-zinc-400 font-normal">&amp; Routine Maintenance</span>
            </h2>
            <p className="mt-4 text-base text-zinc-300 leading-relaxed">
              From everyday oil services and brake inspections to computer diagnostics and complex mechanical troubleshooting, Armand’s Garage is dedicated to keeping your vehicle dependable on Yuma roads.
            </p>
          </div>

          {/* Quick Call Box */}
          <div className="bg-garage-surface border border-garage-border p-4 rounded-xl shrink-0 flex items-center gap-4 self-start md:self-auto">
            <div className="w-10 h-10 rounded-lg bg-garage-amber/15 text-garage-amber flex items-center justify-center shrink-0 border border-garage-amber/30">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-zinc-400">Need immediate help?</div>
              <a
                href={`tel:${businessInfo.contact.phoneNumeric}`}
                className="text-base font-bold text-white hover:text-garage-amber transition-colors"
              >
                {businessInfo.contact.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Editorial Disclosure Banner for Unverified Services */}
        <div className="mb-10 p-4 rounded-xl bg-garage-surfaceElevated/60 border border-garage-border flex items-start sm:items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-start sm:items-center gap-2.5">
            <Info className="w-4 h-4 text-garage-amber shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong className="text-zinc-200">Concept Portfolio Note:</strong> The service categories below represent common repair needs for independent garages. These details have not been independently confirmed with Armand’s Garage and are configured in one central file (<code className="text-zinc-300 font-mono">garageData.js</code>) for simple customization.
            </span>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((service) => {
            const Icon = iconMap[service.iconName] || Wrench;
            return (
              <div
                key={service.id}
                className="group relative bg-garage-surface rounded-2xl border border-garage-border hover:border-garage-amber/50 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top row with icon & category badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-garage-surfaceElevated border border-garage-border flex items-center justify-center text-garage-amber group-hover:bg-garage-amber group-hover:text-zinc-950 transition-colors shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 bg-garage-dark px-2.5 py-1 rounded-full border border-garage-border/50">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-garage-amber transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Service highlights list */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-garage-border/60">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400">
                      Key Inspection Areas:
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {service.details.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-garage-amber font-bold">&bull;</span>
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-garage-border/60 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1 group/btn py-1"
                  >
                    <span>View details &amp; symptoms</span>
                    <ArrowRight className="w-3.5 h-3.5 text-garage-amber group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleInquire(service.title)}
                    className="text-xs font-bold text-garage-amber hover:text-garage-amber-light py-1 px-2.5 rounded bg-garage-surfaceElevated hover:bg-garage-border border border-garage-border transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner on custom diagnostics */}
        <div className="mt-12 bg-garage-surface rounded-2xl border border-garage-border p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-xl uppercase tracking-tight text-white">
              Not sure what’s wrong with your vehicle?
            </h4>
            <p className="text-sm text-zinc-300 max-w-xl">
              Unusual rattles, spongy brakes, high coolant temperature, or dashboard warning lights? Call the garage to describe what you’re experiencing.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${businessInfo.contact.phoneNumeric}`}
              className="inline-flex items-center gap-2 bg-garage-amber hover:bg-garage-amber-light text-zinc-950 px-6 py-3 rounded-xl font-bold text-sm tracking-wide uppercase transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call (928) 782-1211</span>
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectServiceForInquiry={(title) => {
            handleInquire(title);
          }}
        />
      )}
    </section>
  );
}
