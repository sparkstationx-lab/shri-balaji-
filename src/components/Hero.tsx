import { useState } from 'react';
import { MessageCircle, Menu, X, ArrowRight, Sparkles, MapPin } from 'lucide-react';
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
    <header id="home" className="relative bg-gradient-to-b from-sky-100 via-sky-50 to-white pt-3 pb-16 md:pb-24 border-b border-sky-100">
      {/* Embedded Navbar Inside Hero */}
      <nav id="hero-navbar" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/85 backdrop-blur-md rounded-2xl shadow-sm border border-sky-100 px-4 sm:px-6 py-3.5 flex items-center justify-between transition-all">
          {/* Logo / Store Name */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-sky-700 transition-colors">
              SB
            </div>
            <div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight block leading-tight">
                {STORE_INFO.shortName}
              </span>
              <span className="text-xs font-medium text-sky-700 block tracking-wide">
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
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-sky-700 hover:bg-sky-50 rounded-lg transition-colors"
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
              className="p-2 text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-sky-700 hover:bg-sky-50 rounded-lg focus:outline-none"
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
            className="md:hidden mt-2 bg-white rounded-2xl p-4 shadow-lg border border-sky-100 space-y-2 animate-fadeIn"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100">
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

      {/* Hero Content Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 text-sky-800 text-xs sm:text-sm font-semibold border border-sky-200 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Gwalior's Trusted Apparel & Hojri Destination</span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
            >
              Style for <span className="text-sky-600">Every Day.</span>
            </h1>

            <p
              id="hero-description"
              className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Discover comfortable everyday wear, premium quality hojri, innerwear essentials, and family clothing in Bahodapur, Gwalior at genuine, honest prices.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Single Main CTA Button as requested */}
              <a
                id="hero-cta-btn"
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <span>Visit Store</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                id="hero-whatsapp-cta-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-sky-50 border border-slate-200 rounded-xl shadow-xs transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Quick trust metrics / badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>SP Ashram Tiraha, Bahodapur</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Open 10 AM – 9 PM Daily</span>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Fashion Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              id="hero-fashion-image-container"
              className="relative w-full max-w-md bg-white p-3 rounded-2xl shadow-md border border-sky-100"
            >
              <img
                id="hero-fashion-image"
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1000&auto=format&fit=crop"
                alt="Shri Balaji Garments everyday clothing collection"
                className="w-full h-80 sm:h-96 object-cover rounded-xl"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl border border-sky-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-sky-700 uppercase tracking-wider">Premium Hojri & Casuals</p>
                  <p className="text-sm font-bold text-slate-900">Men • Women • Kids</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-100 text-sky-800">
                  Best Value
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
