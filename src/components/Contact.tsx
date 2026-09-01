import { useState, FormEvent } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Send, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../types';

export default function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickInquiry = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const queryText = encodeURIComponent(
      `Hello Shri Balaji Garments,\n\nName: ${name || 'Customer'}\nMessage: ${message}`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${queryText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-sky-50/50 border-b border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 bg-white px-3 py-1 rounded-full border border-sky-200">
            Get in Touch & Visit
          </span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
          >
            Contact Shri Balaji Garments
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Visit our store in Bahodapur, Gwalior or connect directly with us for inquiries and orders.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Location Card */}
          <div
            id="contact-address-card"
            className="bg-white rounded-2xl p-6 border border-sky-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Store Address</h3>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {STORE_INFO.name}
              </p>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                {STORE_INFO.address}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                id="contact-directions-btn"
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>
          </div>

          {/* Phone & WhatsApp Card */}
          <div
            id="contact-phone-card"
            className="bg-white rounded-2xl p-6 border border-sky-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Phone & WhatsApp</h3>
              <p className="text-sm text-slate-600 mb-1">
                Call or message us anytime for product availability:
              </p>
              <a
                id="contact-phone-link"
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="text-xl font-extrabold text-slate-900 hover:text-sky-600 transition-colors block"
              >
                {STORE_INFO.phone}
              </a>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <a
                id="contact-call-btn"
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                id="contact-whatsapp-btn"
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Shri%20Balaji%20Garments,%20I%20have%20an%20inquiry`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Store Timings Card */}
          <div
            id="contact-hours-card"
            className="bg-white rounded-2xl p-6 border border-sky-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Opening Hours</h3>
              <div className="space-y-2 mt-3">
                <div className="flex items-center justify-between text-sm py-1 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">Monday – Sunday</span>
                  <span className="font-bold text-slate-900">10:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-sm py-1">
                  <span className="text-slate-600 font-medium">Open All 7 Days</span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-xs">
                    Open Daily
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500 block">
                Comfortable air-cooled shopping environment with dedicated trial facility.
              </span>
            </div>
          </div>
        </div>

        {/* Quick Message & Map Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Send a Quick Inquiry
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Need a particular size, style, or winter thermal set? Send us a quick note:
            </p>

            <form onSubmit={handleQuickInquiry} className="space-y-4">
              <div>
                <label htmlFor="inquiry-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  id="inquiry-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-sm text-slate-800"
                />
              </div>

              <div>
                <label htmlFor="inquiry-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message / Clothing Inquiry <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="inquiry-message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Do you have Lux thermal sets in XL size in stock?"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-sm text-slate-800 resize-none"
                />
              </div>

              <button
                type="submit"
                id="send-inquiry-whatsapp-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-xs transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send to Store WhatsApp</span>
              </button>

              {submitted && (
                <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Opening WhatsApp with your inquiry...</span>
                </div>
              )}
            </form>
          </div>

          {/* Location Details Card */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Visit Us in Bahodapur, Gwalior
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Conveniently located near SP Ashram Tiraha on Sector 1 main road. Easily accessible from Vinay Nagar, Kampoo, Fort road, and nearby localities in Gwalior.
              </p>

              {/* Clean Map Placeholder / Direction Link Box */}
              <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-6 text-center space-y-3">
                <MapPin className="w-8 h-8 text-sky-600 mx-auto" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Shri Balaji Garments & Hojri</h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                    SP Ashram Tiraha, Sector 1, Bahodapur, Vinay Nagar, Gwalior, MP
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    id="open-google-maps-btn"
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Landmark: SP Ashram Tiraha</span>
              <span>Parking available outside</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
