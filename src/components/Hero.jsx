import React from 'react';
import { Phone, ArrowDown, MapPin, Wrench, Shield, CheckCircle, Clock } from 'lucide-react';
import { businessInfo } from '../data/garageData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-garage-darkest border-b border-garage-border">
      {/* Background Image with Dark Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={businessInfo.images.hero}
          alt="Automotive repair workshop with vehicle on lift and mechanics tools"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.08]"
          loading="eager"
        />
        {/* Subtle radial and linear dark gradients for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-garage-darkest via-garage-darkest/70 to-garage-darkest/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-garage-darkest/90 via-garage-darkest/60 to-transparent" />
        {/* Subtle mechanical grid texture */}
        <div className="absolute inset-0 garage-dark-grid opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Location & Status Badge */}
          <div className="inline-flex items-center gap-2 bg-garage-surface/90 border border-garage-border px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-garage-amber opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-garage-amber"></span>
            </span>
            <MapPin className="w-3.5 h-3.5 text-garage-amber" />
            <span className="font-semibold text-white tracking-wide uppercase text-[11px]">
              {businessInfo.locationBadge}
            </span>
            <span className="text-zinc-600">&bull;</span>
            <span className="text-zinc-400">310 W 17th Pl</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white leading-[1.08] mb-6">
            Honest Auto Care. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-garage-amber via-garage-amber-light to-amber-200">
              Dependable Service.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed mb-10 max-w-2xl">
            Helping Yuma drivers keep their vehicles running reliably through harsh desert heat, daily commutes, and long highway miles. Straightforward advice, skilled repair, and honest care for your car or truck.
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={`tel:${businessInfo.contact.phoneNumeric}`}
              className="inline-flex items-center justify-center gap-3 bg-garage-amber hover:bg-garage-amber-light text-zinc-950 px-8 py-4 rounded-xl font-bold text-base tracking-wide uppercase transition-all duration-200 shadow-xl shadow-garage-amber/20 hover:shadow-garage-amber/35 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-garage-amber"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call (928) 782-1211</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-garage-surface/80 hover:bg-garage-surfaceElevated text-zinc-200 hover:text-white px-7 py-4 rounded-xl font-semibold text-base border border-garage-border transition-all duration-200 hover:border-zinc-500"
            >
              <span>Explore Services</span>
              <ArrowDown className="w-4 h-4 text-garage-amber" />
            </a>
          </div>

          {/* Trust Highlights Grid */}
          <div className="pt-8 border-t border-garage-border/70 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-zinc-400">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-garage-surface flex items-center justify-center border border-garage-border shrink-0">
                <Wrench className="w-3.5 h-3.5 text-garage-amber" />
              </div>
              <span className="text-zinc-300 font-medium">Independent Local Shop</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-garage-surface flex items-center justify-center border border-garage-border shrink-0">
                <Shield className="w-3.5 h-3.5 text-garage-amber" />
              </div>
              <span className="text-zinc-300 font-medium">Clear Communication</span>
            </div>

            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <div className="w-7 h-7 rounded-md bg-garage-surface flex items-center justify-center border border-garage-border shrink-0">
                <Clock className="w-3.5 h-3.5 text-garage-amber" />
              </div>
              <span className="text-zinc-300 font-medium">Convenient Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
