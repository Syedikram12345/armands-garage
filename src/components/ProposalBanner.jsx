import React, { useState } from 'react';
import { Info, X, ExternalLink, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/garageData';

export default function ProposalBanner() {
  const [isOpen, setIsOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="bg-garage-dark border-b border-garage-border px-4 py-2.5 text-xs text-garage-textMuted transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 bg-garage-amber/15 text-garage-amber px-2 py-0.5 rounded font-medium border border-garage-amber/30 text-[11px] tracking-wide uppercase">
              <Sparkles className="w-3 h-3" />
              Website Concept
            </span>
            <span className="text-zinc-300">
              Unsolicited portfolio concept built for <strong className="text-white">{businessInfo.name}</strong> in Yuma, AZ.
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowModal(true)}
              className="text-garage-amber hover:text-garage-amber-light underline underline-offset-2 transition-colors flex items-center gap-1 font-medium"
            >
              <span>View concept details</span>
              <Info className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-white p-1 rounded hover:bg-garage-surface transition-colors"
              aria-label="Dismiss banner"
              title="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-garage-surface border border-garage-border rounded-xl max-w-lg w-full p-6 text-garage-textLight shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg bg-garage-surfaceElevated transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3 text-garage-amber">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs uppercase tracking-wider font-semibold">Freelance Web Design Proposal</span>
            </div>

            <h3 className="text-xl font-bold font-display text-white mb-2">
              Modern Web Concept for Armand’s Garage
            </h3>

            <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
              This demo was created by an independent freelance developer as a modern digital showcase for Armand’s Garage in Yuma, Arizona. It demonstrates how a fast, mobile-first website can establish trust with local drivers.
            </p>

            <div className="bg-garage-dark rounded-lg p-3.5 border border-garage-border/60 mb-5 text-xs text-zinc-400 space-y-2">
              <div className="font-semibold text-zinc-200">Editorial & Verification Disclosures:</div>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong className="text-zinc-300">Services:</strong> Generic automotive repair categories for presentation purposes; can be customized to match exact in-shop capabilities.</li>
                <li><strong className="text-zinc-300">Founded Year (1956):</strong> Sourced from public directory records and marked as pending owner confirmation.</li>
                <li><strong className="text-zinc-300">Hours:</strong> Directory-listed; customers are advised to call (928) 782-1211 to confirm current availability.</li>
                <li><strong className="text-zinc-300">Contact Form:</strong> Interactive demo mode; triggers phone CTA guidance.</li>
              </ul>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm bg-garage-surfaceElevated hover:bg-garage-border text-zinc-200 rounded-lg transition-colors font-medium"
              >
                Close Preview Info
              </button>
              <a
                href={`tel:${businessInfo.contact.phoneNumeric}`}
                className="px-4 py-2 text-sm bg-garage-amber hover:bg-garage-amber-light text-zinc-950 rounded-lg font-semibold transition-colors flex items-center gap-1.5"
              >
                Call Garage
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
