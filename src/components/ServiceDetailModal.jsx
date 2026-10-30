import React, { useEffect } from 'react';
import { X, Phone, AlertTriangle, CheckCircle, Calendar, Wrench, ShieldCheck, Disc, Cpu, Droplets, Compass } from 'lucide-react';
import { businessInfo } from '../data/garageData';

const iconMap = {
  Wrench,
  ShieldCheck,
  Disc,
  Cpu,
  Droplets,
  Compass,
};

export default function ServiceDetailModal({ service, onClose, onSelectServiceForInquiry }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  const IconComponent = iconMap[service.iconName] || Wrench;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="bg-garage-surface border border-garage-border rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-garage-textLight shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-400 hover:text-white p-2 rounded-xl bg-garage-surfaceElevated hover:bg-garage-border transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-garage-amber/15 border border-garage-amber/30 flex items-center justify-center text-garage-amber shrink-0">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-garage-amber uppercase tracking-wider">
              {service.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white mt-0.5">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Service Description */}
        <p className="text-base text-zinc-300 mb-6 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* What This Service Covers */}
        <div className="bg-garage-dark rounded-xl p-5 border border-garage-border mb-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-garage-amber" />
            Typical Inspection & Work Points
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-zinc-300">
            {service.details.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-garage-amber font-bold text-xs mt-1">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Signs Your Vehicle Needs This */}
        <div className="bg-garage-amber/10 rounded-xl p-4 border border-garage-amber/25 mb-6">
          <div className="flex items-center gap-2 text-garage-amber font-semibold text-sm mb-1.5">
            <AlertTriangle className="w-4 h-4" />
            <span>Common Signs Your Vehicle May Need Attention:</span>
          </div>
          <p className="text-sm text-zinc-300">
            {service.bestFor}
          </p>
        </div>

        {/* Unverified Service Notice */}
        <div className="text-[11px] text-zinc-400 bg-garage-surfaceElevated p-3 rounded-lg border border-garage-border/50 mb-6">
          <strong>Note:</strong> Service details are presented as representative examples for this portfolio concept. Armand’s Garage can tailor specific diagnostic steps and equipment specializations to match their exact shop standards.
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2 border-t border-garage-border">
          <button
            onClick={() => {
              onSelectServiceForInquiry(service.title);
              onClose();
            }}
            className="px-5 py-3 rounded-xl bg-garage-surfaceElevated hover:bg-garage-border text-zinc-200 hover:text-white font-medium text-sm transition-colors text-center"
          >
            Inquire in Form
          </button>

          <a
            href={`tel:${businessInfo.contact.phoneNumeric}`}
            className="px-6 py-3 rounded-xl bg-garage-amber hover:bg-garage-amber-light text-zinc-950 font-bold text-sm uppercase tracking-wide transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call (928) 782-1211</span>
          </a>
        </div>
      </div>
    </div>
  );
}
