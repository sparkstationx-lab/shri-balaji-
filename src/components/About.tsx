import { ShieldCheck, HeartHandshake, Sparkles, Shirt, MapPin, Clock } from 'lucide-react';
import { STORE_INFO } from '../types';

export default function About() {
  const highlights = [
    {
      icon: Shirt,
      title: 'Everyday Comfort & Quality',
      description:
        'All-day breathable cotton wear, soft hojri essentials, innerwear, and relaxed daily wear that stands up to regular washing.',
    },
    {
      icon: HeartHandshake,
      title: 'Family Clothing for Everyone',
      description:
        'From daily essentials for men and women to comfortable kidswear and seasonal outfits for the whole family.',
    },
    {
      icon: ShieldCheck,
      title: 'Honest & Genuine Pricing',
      description:
        'Trusted neighborhood store in Bahodapur, Gwalior offering 100% authentic branded goods with friendly customer care.',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Card Container */}
        <div
          id="about-main-card"
          className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-md transition-shadow"
        >
          {/* Card Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              About Our Store
            </span>
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              Serving Gwalior with Everyday Comfort
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              Welcome to <strong className="text-slate-800">{STORE_INFO.name}</strong>, your neighborhood destination for genuine branded hojri, innerwear, and family everyday wear in Bahodapur, Gwalior.
            </p>
          </div>

          {/* Narrative & Image Grid Inside Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 pb-10 border-b border-slate-100">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Quality Fabrics, Honest Prices, Friendly Service
              </h3>
              <p>
                Located conveniently at <strong>SP Ashram Tiraha, Sector 1, Bahodapur</strong>, our store was founded with one simple vision: making high-quality, comfortable everyday garments and genuine branded hojri accessible to every household in Gwalior.
              </p>
              <p>
                Whether you are picking up daily cotton essentials, branded innerwear, comfortable loungewear, or seasonal family wear, we ensure you get genuine products with long-lasting fabric quality.
              </p>

              <div className="pt-2 flex flex-wrap gap-2.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span>SP Ashram Tiraha, Bahodapur</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Open Daily: 10:00 AM – 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Store Photo Preview */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <img
                  id="about-store-image"
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
                  alt="Shri Balaji Garments store fabric and apparel"
                  className="w-full h-56 sm:h-64 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs px-3 py-2 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="font-semibold">100% Genuine Branded Stock</span>
                  <span className="text-sky-300 font-bold">Gwalior, MP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Row Inside Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  id={`about-highlight-${index}`}
                  className="bg-slate-50 hover:bg-sky-50/60 rounded-2xl p-5 border border-slate-100 hover:border-sky-100 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white text-sky-600 border border-slate-200/60 shadow-2xs flex items-center justify-center mb-3.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

