import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  AlertCircle, 
  Navigation,
  Car,
  Calendar,
  MessageSquare,
  ShieldAlert
} from 'lucide-react';
import { businessInfo, serviceCategories } from '../data/garageData';

export default function ContactSection({ prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: prefilledService || '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Update prefilled service if prop changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(businessInfo.contact.address.formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate inquiry submission in demo mode
    setSubmitted(true);
    setShowDemoModal(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-garage-darkest border-b border-garage-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-garage-amber text-xs font-bold tracking-widest uppercase mb-2">
            <Phone className="w-4 h-4" />
            <span>Get in Touch &bull; Location &bull; Hours</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            Contact Armand’s Garage
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed">
            Have a question about your car, need routine maintenance, or want to drop off your vehicle? Reach out directly by phone or stop by the shop in Yuma.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Details, Hours & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Business Contact Card */}
            <div className="bg-garage-surface rounded-2xl border border-garage-border p-6 sm:p-7">
              <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-6">
                Shop Information
              </h3>

              <div className="space-y-6">
                {/* Phone Call Box */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-garage-amber/15 text-garage-amber border border-garage-amber/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-semibold text-zinc-400">Direct Telephone</div>
                    <a
                      href={`tel:${businessInfo.contact.phoneNumeric}`}
                      className="text-xl sm:text-2xl font-bold text-white hover:text-garage-amber transition-colors block mt-0.5"
                    >
                      {businessInfo.contact.phone}
                    </a>
                    <span className="text-xs text-zinc-400 mt-1 block">
                      Primary contact method for service inquiries &amp; scheduling
                    </span>
                    <a
                      href={`tel:${businessInfo.contact.phoneNumeric}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-garage-amber hover:text-garage-amber-light mt-2"
                    >
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span>Click to Call Directly</span>
                    </a>
                  </div>
                </div>

                {/* Physical Address */}
                <div className="flex items-start gap-4 pt-4 border-t border-garage-border/60">
                  <div className="w-11 h-11 rounded-xl bg-garage-surfaceElevated text-zinc-300 border border-garage-border flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-garage-amber" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase font-semibold text-zinc-400">Shop Address</div>
                    <div className="text-base font-semibold text-white mt-0.5">
                      {businessInfo.contact.address.street}
                    </div>
                    <div className="text-sm text-zinc-300">
                      {businessInfo.contact.address.city}, {businessInfo.contact.address.state} {businessInfo.contact.address.zip}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <a
                        href={businessInfo.contact.address.mapsQueryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-garage-surfaceElevated hover:bg-garage-border text-xs font-semibold text-zinc-200 border border-garage-border transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5 text-garage-amber" />
                        <span>Get Directions</span>
                        <ExternalLink className="w-3 h-3 text-zinc-400" />
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-garage-surfaceElevated hover:bg-garage-border text-xs font-medium text-zinc-300 border border-garage-border transition-colors"
                        title="Copy full address to clipboard"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-green-400" />
                            <span className="text-green-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-zinc-400" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4 pt-4 border-t border-garage-border/60">
                  <div className="w-11 h-11 rounded-xl bg-garage-surfaceElevated text-zinc-300 border border-garage-border flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-garage-amber" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-semibold text-zinc-400">Operating Hours</span>
                      <span className="text-[10px] text-zinc-400 bg-garage-dark px-2 py-0.5 rounded border border-garage-border">
                        Directory Sourced
                      </span>
                    </div>

                    <div className="mt-2 space-y-1.5">
                      {businessInfo.schedule.hoursList.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-zinc-300 font-medium">{item.days}</span>
                          <span className={item.isOpenDays ? 'text-white font-semibold' : 'text-zinc-500'}>
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-[11px] text-zinc-400 mt-2.5 leading-relaxed italic">
                      Hours sourced from public directories and subject to owner confirmation. Call ahead to verify same-day drop-off availability.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Map Preview Card */}
            <div className="bg-garage-surface rounded-2xl border border-garage-border p-5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-zinc-300 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-garage-amber" />
                  <span>Yuma Location Map</span>
                </span>
                <span className="text-xs text-zinc-400">Yuma, AZ 85364</span>
              </div>

              {/* Styled map preview representation */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-garage-dark border border-garage-border flex items-center justify-center text-center p-4">
                <div className="absolute inset-0 garage-dark-grid opacity-50" />
                
                {/* Visual highway & street lines representation */}
                <div className="absolute inset-x-0 top-1/2 h-1 bg-zinc-700/60 -translate-y-1/2" />
                <div className="absolute inset-y-0 left-1/3 w-1 bg-zinc-700/60" />
                <div className="absolute inset-y-0 right-1/4 w-1 bg-zinc-700/60" />

                <div className="relative z-10 bg-garage-darkest/90 border border-garage-border px-4 py-3 rounded-xl shadow-xl flex flex-col items-center max-w-xs">
                  <div className="w-8 h-8 rounded-full bg-garage-amber text-zinc-950 flex items-center justify-center font-bold mb-1 shadow-md">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                  <div className="font-bold text-white text-sm">Armand’s Garage</div>
                  <div className="text-xs text-zinc-400">310 W 17th Pl, Yuma, AZ</div>
                  <a
                    href={businessInfo.contact.address.mapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-xs font-semibold text-garage-amber hover:underline flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Estimate Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-garage-surface rounded-2xl border border-garage-border p-6 sm:p-8 relative">
              
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white">
                  Send a Service Inquiry
                </h3>
                <span className="text-[11px] font-semibold text-garage-amber bg-garage-amber/15 px-2.5 py-1 rounded border border-garage-amber/30 uppercase tracking-wider">
                  Demo Concept Form
                </span>
              </div>

              <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                Describe the symptoms your vehicle is experiencing or request a routine service inspection.
              </p>

              {/* Clear Demo Notice (Requirement Compliance) */}
              <div className="mb-6 p-4 rounded-xl bg-garage-surfaceElevated border border-garage-border/80 flex items-start gap-3 text-xs text-zinc-300">
                <ShieldAlert className="w-4 h-4 text-garage-amber shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Portfolio Demonstration Notice:</strong>
                  This form demonstrates the customer inquiry workflow. Because this is an unsolicited proposal without an active shop backend, submissions will simulate receipt and prompt you to call the garage directly at <a href={`tel:${businessInfo.contact.phoneNumeric}`} className="text-garage-amber font-semibold hover:underline">(928) 782-1211</a>.
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Your Full Name <span className="text-garage-amber">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Martinez"
                      className="w-full px-4 py-3 rounded-xl bg-garage-dark border border-garage-border text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-garage-amber focus:ring-1 focus:ring-garage-amber transition-colors"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Phone Number <span className="text-garage-amber">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. (928) 555-0149"
                      className="w-full px-4 py-3 rounded-xl bg-garage-dark border border-garage-border text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-garage-amber focus:ring-1 focus:ring-garage-amber transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Vehicle Year / Make / Model */}
                  <div>
                    <label htmlFor="vehicle" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Vehicle Year, Make &amp; Model
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        placeholder="e.g. 2017 Ford F-150 or Honda Civic"
                        className="w-full px-4 py-3 rounded-xl bg-garage-dark border border-garage-border text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-garage-amber focus:ring-1 focus:ring-garage-amber transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Needed Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                      Service Category Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-garage-dark border border-garage-border text-white text-sm focus:outline-none focus:border-garage-amber focus:ring-1 focus:ring-garage-amber transition-colors"
                    >
                      <option value="">Select a category...</option>
                      {serviceCategories.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other / Not Sure">Other / Need Diagnosis</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Symptoms or Repair Details <span className="text-garage-amber">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe any warning lights, noises, vibration, fluid leaks, or specific service you would like done..."
                    className="w-full px-4 py-3 rounded-xl bg-garage-dark border border-garage-border text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-garage-amber focus:ring-1 focus:ring-garage-amber transition-colors resize-none"
                  />
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-garage-amber shrink-0" />
                    <span>For immediate assistance, please call directly.</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-garage-amber hover:bg-garage-amber-light text-zinc-950 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-garage-amber/15 hover:shadow-garage-amber/25"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Submission Feedback Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="bg-garage-surface border border-garage-border rounded-2xl max-w-lg w-full p-6 sm:p-8 text-garage-textLight shadow-2xl relative">
            <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400 mb-4">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white mb-2">
              Inquiry Simulated (Portfolio Demo)
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              Thank you for exploring this concept! In a production deployment, this inquiry for <strong className="text-white">{formData.vehicle || 'your vehicle'}</strong> ({formData.service || 'General Service'}) would be routed directly to Armand’s Garage shop management system or email.
            </p>

            <div className="bg-garage-dark p-4 rounded-xl border border-garage-border text-xs text-zinc-300 space-y-2 mb-6">
              <div className="font-semibold text-white">To reach the actual garage in Yuma:</div>
              <div>&bull; Call Armand’s Garage at <strong className="text-garage-amber">(928) 782-1211</strong></div>
              <div>&bull; Visit the shop at <strong className="text-white">310 W 17th Pl, Yuma, AZ 85364</strong></div>
              <div>&bull; Hours: Monday – Friday: 9 AM – 5 PM</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${businessInfo.contact.phoneNumeric}`}
                className="flex-1 py-3 px-4 rounded-xl bg-garage-amber hover:bg-garage-amber-light text-zinc-950 font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call (928) 782-1211</span>
              </a>
              <button
                type="button"
                onClick={() => setShowDemoModal(false)}
                className="py-3 px-5 rounded-xl bg-garage-surfaceElevated hover:bg-garage-border text-zinc-200 text-sm font-semibold transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
