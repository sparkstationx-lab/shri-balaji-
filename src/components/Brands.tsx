import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '../types';
import { FEATURED_BRANDS } from '../data/brandsData';

interface BrandsProps {
  onViewAllBrands?: () => void;
}

export default function Brands({ onViewAllBrands }: BrandsProps) {
  const brandsList = FEATURED_BRANDS;

  return (
    <section id="brands" className="py-16 md:py-24 bg-sky-50/40 border-b border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 bg-white px-3 py-1 rounded-full border border-sky-200">
            Featured Brands
          </span>
          <h2
            id="brands-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
          >
            Brands We Sell
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            We stock 100% genuine and original branded hojri, innerwear, and clothing known for durability, softness, and perfect fits.
          </p>
        </div>

        {/* Featured Brands Grid - Only Three Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandsList.map((brand, idx) => (
            <div
              key={idx}
              id={`brand-card-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-sky-100 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {brand.name}
                  </h3>
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                </div>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-50 text-sky-700 border border-sky-100 mb-3.5">
                  {brand.tag}
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {brand.description}
                </p>
                {brand.popularItems && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {brand.popularItems.slice(0, 3).map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Brands Button */}
        <div className="mt-10 text-center">
          <button
            type="button"
            id="view-all-brands-btn"
            onClick={onViewAllBrands}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <span>View All Brands</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-slate-500 mt-2.5">
            Discover our complete range of 10+ authorized brands, innerwear & hojri collections
          </p>
        </div>

        {/* Check Size/Availability Callout */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              Looking for a specific brand, size, or article?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Send us a quick message on WhatsApp or call our store in Bahodapur, Gwalior.
            </p>
          </div>
          <a
            id="brands-whatsapp-inquire-btn"
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Shri%20Balaji%20Garments,%20do%20you%20have%20stock%20for%20`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Check Availability on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
