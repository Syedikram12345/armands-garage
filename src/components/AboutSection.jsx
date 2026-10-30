import React from 'react';
import { MapPin, Calendar, CheckCircle2, Shield, Wrench, ThermometerSun, AlertCircle } from 'lucide-react';
import { businessInfo } from '../data/garageData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-garage-darkest border-b border-garage-border relative overflow-hidden">
      {/* Subtle background industrial grid pattern */}
      <div className="absolute inset-0 garage-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section Badge */}
        <div className="flex items-center gap-2 text-garage-amber text-xs font-bold tracking-widest uppercase mb-3">
          <MapPin className="w-4 h-4" />
          <span>About the Garage &bull; Yuma, Arizona</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight mb-6">
              Straightforward Care <br />
              <span className="text-zinc-400 font-normal">for Yuma Drivers</span>
            </h2>

            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal mb-8">
              <p>
                Located at <strong>310 W 17th Pl</strong>, Armand’s Garage is an independent auto repair shop serving the Yuma community. When you depend on your vehicle for daily work, school runs, and highway travel across the desert, having an honest neighborhood garage makes all the difference.
              </p>
              
              <p>
                Our philosophy is simple: diagnose accurately, communicate clearly, and perform repairs that stand up to everyday driving. We don’t believe in confusing jargon or pressure tactics. Before we turn a wrench, we want you to understand what your vehicle needs, why it needs it, and what options make the most sense for you.
              </p>
            </div>

            {/* Sourced History Notice (1956 Directory Disclosure) */}
            <div className="bg-garage-surface rounded-xl p-5 border border-garage-border mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-garage-amber/15 text-garage-amber flex items-center justify-center shrink-0 border border-garage-amber/30 mt-0.5">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold text-sm">
                      Reported Founded Year: 1956
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                      Directory Sourced
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Third-party business records indicate that Armand’s Garage was established in 1956. We treat this milestone as an unverified directory record until directly confirmed with the garage owner, but it represents the kind of enduring neighborhood presence that local drivers value.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Core Garage Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-garage-surface/80 rounded-xl p-4 border border-garage-border">
                <Wrench className="w-5 h-5 text-garage-amber mb-2" />
                <h3 className="font-semibold text-sm text-white mb-1">Practical Work</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Focusing on honest mechanical repairs that keep your car safe and dependable.
                </p>
              </div>

              <div className="bg-garage-surface/80 rounded-xl p-4 border border-garage-border">
                <ThermometerSun className="w-5 h-5 text-garage-amber mb-2" />
                <h3 className="font-semibold text-sm text-white mb-1">Desert Ready</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Careful inspection of cooling, belts, hoses, and batteries vulnerable to Yuma heat.
                </p>
              </div>

              <div className="bg-garage-surface/80 rounded-xl p-4 border border-garage-border">
                <Shield className="w-5 h-5 text-garage-amber mb-2" />
                <h3 className="font-semibold text-sm text-white mb-1">Upfront Talk</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Explaining repairs in plain terms so you always know where your money goes.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Workshop Presentation Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer border decoration */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-b from-garage-amber/20 to-transparent opacity-60 blur-sm pointer-events-none" />
              
              <div className="relative bg-garage-surface rounded-2xl border border-garage-border overflow-hidden shadow-2xl">
                {/* Main Workshop Photo */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-garage-dark">
                  <img
                    src={businessInfo.images.aboutWorkshop}
                    alt="Mechanic inspecting undercarriage and suspension of a vehicle"
                    className="w-full h-full object-cover filter contrast-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-garage-surface via-transparent to-black/20" />
                  
                  {/* Overlay location pill */}
                  <div className="absolute bottom-4 left-4 bg-garage-darkest/90 backdrop-blur-md border border-garage-border px-3 py-1.5 rounded-lg text-xs font-semibold text-white flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-garage-amber" />
                    <span>310 W 17th Pl &bull; Yuma, AZ</span>
                  </div>
                </div>

                {/* Card Content & Quick Verification Summary */}
                <div className="p-6">
                  <div className="flex items-center justify-between pb-4 border-b border-garage-border mb-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">Business Profile</div>
                      <div className="font-display font-bold text-xl uppercase text-white">Armand’s Garage</div>
                    </div>
                    <span className="text-xs font-bold text-garage-amber bg-garage-amber/15 px-3 py-1 rounded-full border border-garage-amber/30">
                      Independent Shop
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs text-zinc-300">
                    <li className="flex items-center justify-between">
                      <span className="text-zinc-400">Physical Address:</span>
                      <span className="font-medium text-white">310 W 17th Pl, Yuma, AZ</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-zinc-400">Telephone:</span>
                      <a href={`tel:${businessInfo.contact.phoneNumeric}`} className="font-semibold text-garage-amber hover:underline">
                        (928) 782-1211
                      </a>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-zinc-400">Operating Hours:</span>
                      <span className="font-medium text-white">Mon–Fri: 9 AM–5 PM*</span>
                    </li>
                  </ul>

                  <div className="mt-4 pt-4 border-t border-garage-border flex items-center justify-between text-[11px] text-zinc-400">
                    <span>*Hours sourced from public directory</span>
                    <a
                      href={`tel:${businessInfo.contact.phoneNumeric}`}
                      className="text-garage-amber font-semibold hover:underline"
                    >
                      Call to Confirm &rarr;
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
