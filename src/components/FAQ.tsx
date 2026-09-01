import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { STORE_INFO, FAQItem } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Where is your shop located in Gwalior?',
      answer:
        'We are located at SP Ashram Tiraha, Sector 1, Bahodapur, Vinay Nagar, Gwalior, Madhya Pradesh. Our shop is conveniently situated on the main tiraha road for easy access.',
    },
    {
      id: 'faq-2',
      question: 'What are the store opening hours?',
      answer:
        'We are open daily from 10:00 AM to 9:00 PM (Monday through Sunday), so you can comfortably visit anytime throughout the week.',
    },
    {
      id: 'faq-3',
      question: 'What types of garments and hojri items do you stock?',
      answer:
        'We stock a wide variety of everyday clothing for the whole family: cotton vests, briefs, trunks, brassieres, leggings, nightwear, loungewear, hojri t-shirts, track pants, socks, kids daily wear, and winter thermal wear from trusted brands.',
    },
    {
      id: 'faq-4',
      question: 'Can I check stock or price via WhatsApp before visiting?',
      answer:
        'Yes! Feel free to message us on WhatsApp at +91 91791 90813 to inquire about specific brands, sizes, colors, or new arrivals.',
    },
    {
      id: 'faq-5',
      question: 'Which payment methods do you accept?',
      answer:
        'We accept all standard payment modes including Cash and all major UPI apps (Google Pay, PhonePe, Paytm, BHIM).',
    },
    {
      id: 'faq-6',
      question: 'Is size exchange available if the fit isn’t right?',
      answer:
        'Yes, for outer garments and standard apparel, size exchanges are accommodated if the items are unused, unwashed, and retained with original packaging.',
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Frequently Asked Questions
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
          >
            Have Questions? We Have Answers
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Quick information about our store location, timings, and clothing range.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-sky-300 bg-sky-50/40 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-sky-200'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle
                      className={`w-5 h-5 shrink-0 transition-colors ${
                        isOpen ? 'text-sky-600' : 'text-slate-400'
                      }`}
                    />
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-sky-100/60"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <p className="text-sm text-slate-700 font-medium">
            Still have a question? We’re happy to help!
          </p>
          <a
            id="faq-whatsapp-cta"
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Shri%20Balaji%20Garments,%20I%20have%20a%20question.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 px-4 py-2 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp: +91 91791 90813</span>
          </a>
        </div>
      </div>
    </section>
  );
}
