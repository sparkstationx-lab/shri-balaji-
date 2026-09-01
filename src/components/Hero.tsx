import { useState } from 'react';
import { MessageCircle, Menu, X, ArrowRight, MapPin } from 'lucide-react';
import { STORE_INFO } from '../types';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Brands', href: '#brands' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Shri%20Balaji%20Garments,%20I%20would%20like%20to%20inquire%20about%20your%20clothing%20collection.`;

  return (
    <header
      id="home"
      className="relative h-screen min-h-[100dvh] flex flex-col justify-between pt-3 pb-6 sm:pb-8 bg-slate-900 overflow-hidden"
    >
      {/* Hero Background Image with Subtle Dark Gradient Overlay for Maximum Legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1800&auto=format&fit=crop"
          alt="Shri Balaji Garments collection"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/65 to-slate-950/85" />
      </div>

      {/* Embedded Navbar Inside Hero */}
      <nav id="hero-navbar" className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0">
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-md border border-white/10 px-4 sm:px-6 py-3.5 flex items-center justify-between transition-all">
          {/* Logo / Store Name */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-sky-600 transition-colors">
              SB
            </div>
            <div>
              <span className="text-xl font-extrabold text-white tracking-tight block leading-tight">
                {STORE_INFO.shortName}
              </span>
              <span className="text-xs font-medium text-sky-300 block tracking-wide">
                Garments & Hojri
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* WhatsApp CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="hero-nav-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-sm transition-all hover:shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="hero-mobile-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 rounded-lg hover:bg-emerald-900/60"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-dropdown"
            className="md:hidden mt-2 bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/10 space-y-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-100 hover:bg-white/10 hover:text-sky-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <a
                id="mobile-menu-whatsapp-link"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Center Content: Vertically Centered Title & Two Buttons */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-6 text-center flex flex-col items-center justify-center">
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md"
        >
          Shri Balaji Garments
        </h1>

        {/* Two Buttons: "Visit Store" and "WhatsApp Inquiry" */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            id="hero-visit-store-btn"
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-xl shadow-lg hover:shadow-sky-500/25 transition-all"
          >
            <span>Visit Store</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            id="hero-whatsapp-inquiry-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Inquiry</span>
          </a>
        </div>
      </div>

      {/* Subtle bottom info bar */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center shrink-0">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/60 backdrop-blur-xs px-4 py-1.5 rounded-full border border-white/10">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>SP Ashram Tiraha, Bahodapur, Gwalior • 10 AM – 9 PM Daily</span>
        </div>
      </div>
    </header>
  );
}
