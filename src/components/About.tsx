import { ShieldCheck, HeartHandshake, Sparkles, Shirt } from 'lucide-react';
import { STORE_INFO } from '../types';

export default function About() {
  const highlights = [
    {
      icon: Shirt,
      title: 'Everyday Comfort & Quality',
      description:
        'We specialize in all-day breathable cotton wear, soft hojri essentials, innerwear, and relaxed daily wear that stands up to regular washing.',
    },
    {
      icon: HeartHandshake,
      title: 'Family Clothing for Everyone',
      description:
        'From daily essentials for men and women to comfortable kidswear and seasonal outfits, find the right fit for the whole family.',
    },
    {
      icon: ShieldCheck,
      title: 'Honest & Genuine Pricing',
      description:
        'As a trusted neighborhood shop at SP Ashram Tiraha, Bahodapur, we believe in honest prices, authentic branded goods, and warm customer care.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            About Our Store
          </span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
          >
            Serving Gwalior with Everyday Comfort
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            Welcome to <strong className="text-slate-800">{STORE_INFO.name}</strong>, your local destination for premium hojri, innerwear, casuals, and daily essentials in Vinay Nagar & Bahodapur, Gwalior.
          </p>
        </div>

        {/* Narrative & Photo Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-14">
          <div className="space-y-4 text-slate-600 leading-relaxed text-base">
            <h3 className="text-2xl font-bold text-slate-900">
              Quality Fabrics, Honest Prices, Friendly Service
            </h3>
            <p>
              Located conveniently at <strong>SP Ashram Tiraha, Sector 1, Bahodapur</strong>, our store was founded with one simple vision: making high-quality, comfortable everyday garments and genuine branded hojri accessible to every household in Gwalior.
            </p>
            <p>
              Whether you are picking up daily cotton essentials, branded innerwear, comfortable loungewear, or seasonal family wear, we ensure you get genuine products with long-lasting fabric quality and an effortless shopping experience.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-sky-700 font-semibold bg-sky-50 px-4 py-2 rounded-xl border border-sky-100">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Open 7 Days a Week: 10:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              id="about-store-image"
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
              alt="Shri Balaji Garments store fabric and apparel"
              className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-sm border border-sky-100"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                id={`about-highlight-${index}`}
                className="bg-sky-50/50 hover:bg-sky-50 rounded-2xl p-6 border border-sky-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-sky-600 border border-sky-100 shadow-xs flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
