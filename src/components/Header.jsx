import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, Clock, ArrowRight, Wrench } from 'lucide-react';
import { businessInfo } from '../data/garageData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar for Quick Phone & Address access */}
      <div className="bg-garage-darkest border-b border-garage-border/60 text-xs text-garage-textMuted py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-garage-amber" />
              <span>{businessInfo.contact.address.formatted}</span>
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>Mon – Fri: 9:00 AM – 5:00 PM</span>
              <span className="text-[10px] text-zinc-500 bg-garage-surface px-1.5 py-0.2 rounded border border-garage-border/40">
                Directory Sourced
              </span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">
              Yuma, Arizona
            </span>
            <a
              href={`tel:${businessInfo.contact.phoneNumeric}`}
              className="text-garage-amber hover:text-garage-amber-light font-semibold flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{businessInfo.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-garage-dark/95 backdrop-blur-md shadow-xl border-b border-garage-border py-3'
            : 'bg-garage-dark/90 backdrop-blur-sm border-b border-garage-border/50 py-4'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-garage-amber rounded-lg pr-2"
          >
            <div className="w-10 h-10 rounded-lg bg-garage-surfaceElevated border border-garage-border flex items-center justify-center text-garage-amber group-hover:border-garage-amber transition-colors shadow-md">
              <Wrench className="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-2xl tracking-tight text-white uppercase group-hover:text-garage-amber transition-colors">
                  Armand’s Garage
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-zinc-400 font-medium -mt-1">
                Auto Repair &bull; Yuma, AZ
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-garage-amber transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-garage-amber after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${businessInfo.contact.phoneNumeric}`}
              className="inline-flex items-center gap-2 bg-garage-amber hover:bg-garage-amber-light text-zinc-950 px-4 py-2.5 rounded-lg font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-lg shadow-garage-amber/15 hover:shadow-garage-amber/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-garage-dark focus:ring-garage-amber"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call the Garage</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${businessInfo.contact.phoneNumeric}`}
              className="sm:hidden p-2.5 rounded-lg bg-garage-amber text-zinc-950 font-bold focus:outline-none focus:ring-2 focus:ring-garage-amber"
              aria-label="Call Armand's Garage"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-lg bg-garage-surface border border-garage-border text-zinc-300 hover:text-white hover:bg-garage-surfaceElevated focus:outline-none focus:ring-2 focus:ring-garage-amber transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 z-50 bg-garage-darkest/98 backdrop-blur-2xl border-t border-garage-border min-h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] flex flex-col justify-between animate-fade-in overflow-y-auto pb-24 shadow-2xl">
          <div className="px-6 py-6 space-y-4">
            <div className="pb-3 border-b border-garage-border">
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                Menu Navigation
              </span>
            </div>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-lg font-medium text-zinc-200 hover:text-garage-amber hover:bg-garage-surface transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-500" />
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-garage-border space-y-3">
              <div className="bg-garage-surface rounded-xl p-4 border border-garage-border text-sm">
                <div className="flex items-start gap-2.5 mb-2 text-zinc-300">
                  <MapPin className="w-4 h-4 text-garage-amber shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Armand’s Garage</div>
                    <div className="text-zinc-400 text-xs">310 W 17th Pl, Yuma, AZ 85364</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400 pt-2 border-t border-garage-border/50">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Mon – Fri: 9:00 AM – 5:00 PM</span>
                </div>
              </div>

              <a
                href={`tel:${businessInfo.contact.phoneNumeric}`}
                className="w-full py-3.5 px-4 rounded-xl bg-garage-amber hover:bg-garage-amber-light text-zinc-950 font-bold flex items-center justify-center gap-2 text-base shadow-lg transition-colors"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call (928) 782-1211</span>
              </a>

              <a
                href={businessInfo.contact.address.mapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-garage-surfaceElevated hover:bg-garage-border text-zinc-200 font-semibold flex items-center justify-center gap-2 text-sm border border-garage-border transition-colors"
              >
                <MapPin className="w-4 h-4 text-garage-amber" />
                <span>Get Directions (Maps)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
