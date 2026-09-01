import { MessageCircle, Phone, MapPin, Clock, Heart } from 'lucide-react';
import { STORE_INFO } from '../types';

interface FooterProps {
  onViewAllBrands?: () => void;
}

export default function Footer({ onViewAllBrands }: FooterProps) {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Featured Brands', href: '#brands' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Store Intro */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                SB
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight block">
                  {STORE_INFO.shortName}
                </span>
                <span className="text-xs text-sky-400 font-medium tracking-wide block">
                  Garments & Hojri • Gwalior
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted family clothing and hojri store in Bahodapur, Gwalior. Quality fabrics, everyday comfort, and genuine branded apparel at honest prices.
            </p>
            <div className="pt-2">
              <a
                id="footer-whatsapp-btn"
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Shri%20Balaji%20Garments`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {onViewAllBrands && (
                <li>
                  <button
                    type="button"
                    id="footer-view-all-brands-btn"
                    onClick={onViewAllBrands}
                    className="text-sm text-sky-400 hover:text-sky-300 font-medium transition-colors text-left"
                  >
                    View All Brands (Full Catalog) →
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Store Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Store Details
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span className="leading-snug">
                  {STORE_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="hover:text-sky-400 transition-colors font-medium text-slate-200"
                >
                  {STORE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>10:00 AM – 9:00 PM, Daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Serving Gwalior with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>everyday comfort</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
