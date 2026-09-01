import { CheckCircle2, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../types';

export default function Brands() {
  const brandsList = [
    {
      name: 'Lux',
      tag: 'Innerwear & Thermal',
      description: 'Lux Cozi vests, briefs, thermal wear, and everyday cotton basics.',
    },
    {
      name: 'Rupa',
      tag: 'Men & Women Hojri',
      description: 'Rupa Frontline, Jon, Softline leggings, and premium knitwear.',
    },
    {
      name: 'Amul Macho',
      tag: 'Comfort Cotton',
      description: 'Bade Aaram Se — breathable cotton vests, briefs, and trunks.',
    },
    {
      name: 'Dollar',
      tag: 'Hojri & Casuals',
      description: 'Dollar Bigboss innerwear, Missy casuals, and winter thermal wear.',
    },
    {
      name: 'Dixcy Scott',
      tag: 'Daily Athleisure',
      description: 'Modern fit vests, track pants, shorts, and active casuals.',
    },
    {
      name: 'VIP',
      tag: 'Classic Essentials',
      description: 'Trusted classic comfort innerwear, trunks, and cotton basics.',
    },
    {
      name: 'Jockey',
      tag: 'Premium Basics',
      description: 'Super combed cotton vests, boxers, track pants, and socks.',
    },
    {
      name: 'Family Cotton Mills',
      tag: 'Daily & Nightwear',
      description: 'High-quality cotton nighties, kids hojri sets, and seasonal wear.',
    },
  ];

  return (
    <section id="brands" className="py-16 md:py-24 bg-sky-50/40 border-b border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 bg-white px-3 py-1 rounded-full border border-sky-200">
            Trusted Quality
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

        {/* Brands Grid - Clean and simple */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {brandsList.map((brand, idx) => (
            <div
              key={idx}
              id={`brand-card-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white rounded-2xl p-5 border border-sky-100 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {brand.name}
                  </h3>
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                </div>
                <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-100 mb-3">
                  {brand.tag}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Check Size/Availability Callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
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
