import React from 'react';
import { Phone, MapPin, Clock, Wrench, ExternalLink, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/garageData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-garage-darkest border-t border-garage-border text-garage-textMuted text-xs">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-garage-surfaceElevated border border-garage-border flex items-center justify-center text-garage-amber">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-2xl uppercase tracking-tight text-white">
                Armand’s Garage
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Honest auto care and dependable service for drivers in Yuma, Arizona. Straightforward advice, skilled mechanical repairs, and routine maintenance.
            </p>

            <div className="pt-2 text-xs text-zinc-500">
              <p>Physical Location: 310 W 17th Pl, Yuma, AZ 85364</p>
              <p className="mt-1">Directory-sourced establishment record: 1956* (pending owner confirmation)</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Website Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-zinc-400 hover:text-garage-amber transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-zinc-400 hover:text-garage-amber transition-colors">
                  Services &amp; Diagnostics
                </a>
              </li>
              <li>
                <a href="#about" className="text-zinc-400 hover:text-garage-amber transition-colors">
                  About the Garage
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-zinc-400 hover:text-garage-amber transition-colors">
                  Why Choose Armand’s
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-garage-amber transition-colors">
                  Contact &amp; Location
                </a>
              </li>
            </ul>
          </div>

          {/* Shop Contact Summary */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Contact &amp; Shop Hours
            </div>
            
            <div className="space-y-2 text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-garage-amber shrink-0" />
                <a
                  href={`tel:${businessInfo.contact.phoneNumeric}`}
                  className="hover:text-garage-amber font-semibold text-white transition-colors"
                >
                  {businessInfo.contact.phone}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-garage-amber shrink-0 mt-0.5" />
                <span>310 W 17th Pl, Yuma, AZ 85364</span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-garage-amber shrink-0 mt-0.5" />
                <div>
                  <div>Monday – Friday: 9:00 AM – 5:00 PM</div>
                  <div className="text-zinc-500 text-xs">Saturday – Sunday: Closed</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={businessInfo.contact.address.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-garage-amber hover:underline font-medium"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Concept Portfolio Disclosure Strip */}
      <div className="border-t border-garage-border/60 bg-garage-dark py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400">
          <div>
            &copy; {currentYear} Armand’s Garage concept. All automotive trademarks belong to their respective owners.
          </div>
          <div className="text-center md:text-right">
            Designed as an unsolicited freelance portfolio concept for Armand’s Garage in Yuma, AZ. Details subject to owner review.
          </div>
        </div>
      </div>
    </footer>
  );
}
