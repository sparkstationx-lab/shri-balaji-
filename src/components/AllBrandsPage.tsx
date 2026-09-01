import { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Search,
  CheckCircle2,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ShoppingBag,
} from 'lucide-react';
import { STORE_INFO } from '../types';
import { ALL_BRANDS } from '../data/brandsData';

interface AllBrandsPageProps {
  onBackToHome: () => void;
}

export default function AllBrandsPage({ onBackToHome }: AllBrandsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', "Men's Hojri", "Women & Kids", 'Family Wear', 'Winter Thermal', 'Activewear'];

  const filteredBrands = useMemo(() => {
    return ALL_BRANDS.filter((brand) => {
      const matchesSearch =
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (brand.popularItems &&
          brand.popularItems.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase())));

      if (!matchesSearch) return false;

      if (selectedCategory === 'All') return true;
      if (selectedCategory === "Men's Hojri") {
        return brand.category.includes("Men") || brand.name.includes("Macho") || brand.name.includes("VIP");
      }
      if (selectedCategory === 'Women & Kids') {
        return brand.category.includes('Women') || brand.category.includes('Kids') || brand.name.includes('Missy');
      }
      if (selectedCategory === 'Family Wear') {
        return brand.category.includes('Family') || brand.category.includes('Nightwear');
      }
      if (selectedCategory === 'Winter Thermal') {
        return brand.tag.toLowerCase().includes('thermal') || brand.description.toLowerCase().includes('thermal');
      }
      if (selectedCategory === 'Activewear') {
        return brand.category.includes('Athleisure') || brand.category.includes('Loungewear') || brand.category.includes('Active');
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            type="button"
            id="brands-page-back-btn"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-sky-700 hover:bg-sky-50 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-sky-600" />
            <span>Back to Home</span>
          </button>

          {/* Store Brand in Navbar */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
              SB
            </div>
            <span className="text-base font-extrabold text-slate-900 tracking-tight hidden sm:inline">
              {STORE_INFO.shortName}
            </span>
          </div>

          <a
            id="brands-page-whatsapp-top-btn"
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Shri%20Balaji%20Garments,%20I%20have%20an%20inquiry%20about%20your%20brands.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-sky-100 via-sky-50 to-white py-12 md:py-16 border-b border-sky-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-sky-700 text-xs sm:text-sm font-bold border border-sky-200 shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>100% Original & Authorized Quality</span>
          </div>

          <h1
            id="all-brands-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            All Available Brands
          </h1>

          <p className="text-slate-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Browse our complete range of trusted hojri, innerwear, thermal wear, and daily apparel brands available at <strong>{STORE_INFO.name}</strong>, Gwalior.
          </p>

          {/* Search & Filter Controls */}
          <div className="mt-8 max-w-2xl mx-auto space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="brands-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search brand, category, or garment type (e.g. Lux, Leggings, Thermals)..."
                className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl border border-sky-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 text-sm text-slate-800"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  id={`category-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-sky-50 border border-slate-200 hover:border-sky-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Catalog Grid */}
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Brand Catalog ({filteredBrands.length} {filteredBrands.length === 1 ? 'brand' : 'brands'})
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              All sizes (S to 4XL) and seasonal varieties in stock
            </p>
          </div>

          <button
            type="button"
            onClick={onBackToHome}
            className="text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1"
          >
            <span>Back to Home</span>
          </button>
        </div>

        {filteredBrands.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto my-8">
            <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No brands found</h3>
            <p className="text-sm text-slate-500 mt-1">
              We couldn’t find any brands matching "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold text-sky-700 bg-sky-50 rounded-xl hover:bg-sky-100"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map((brand, idx) => {
              const brandWhatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Shri%20Balaji%20Garments,%20I%20am%20inquiring%20about%20${encodeURIComponent(brand.name)}%20products%20and%20available%20sizes.`;

              return (
                <div
                  key={idx}
                  id={`brand-full-card-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-2xl p-6 border border-sky-100 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 font-bold flex items-center justify-center text-sm border border-sky-100">
                          {brand.name.slice(0, 2).toUpperCase()}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                          {brand.name}
                        </h3>
                      </div>
                      {brand.featured && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Tag badge */}
                    <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-50 text-sky-700 border border-sky-100 mb-3">
                      {brand.tag}
                    </span>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {brand.description}
                    </p>

                    {/* Popular items chips */}
                    {brand.popularItems && (
                      <div className="mb-6">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                          Popular Items
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {brand.popularItems.map((item, itemIdx) => (
                            <span
                              key={itemIdx}
                              className="text-xs bg-slate-50 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <a
                      id={`brand-inquire-btn-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                      href={brandWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Inquire Sizes on WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Store Visit Card on Brands Page */}
        <div className="mt-16 bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-200">
              Visit Our Shop
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Want to see the entire collection in person?
            </h3>
            <p className="text-sky-100 text-sm max-w-xl">
              Visit <strong>{STORE_INFO.name}</strong> at SP Ashram Tiraha, Bahodapur, Gwalior. Open daily from 10:00 AM to 9:00 PM.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              id="all-brands-page-call-btn"
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-sky-900 bg-white hover:bg-sky-50 rounded-xl shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call Store</span>
            </a>
            <button
              type="button"
              id="all-brands-page-return-home-btn"
              onClick={onBackToHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-sky-800/80 hover:bg-sky-800 rounded-xl border border-sky-400/30 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Home</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer on All Brands Page */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold text-xs">
              SB
            </div>
            <span className="text-white font-bold text-base">{STORE_INFO.name}</span>
          </div>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            {STORE_INFO.address} • Phone: {STORE_INFO.phone}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onBackToHome}
              className="text-xs text-sky-400 hover:text-sky-300 font-semibold underline"
            >
              ← Back to Main Homepage
            </button>
          </div>
          <p className="text-[11px] text-slate-600 pt-2">
            © {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
