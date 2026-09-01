import Hero from './components/Hero';
import About from './components/About';
import Brands from './components/Brands';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { STORE_INFO } from './types';

export default function App() {
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Shri%20Balaji%20Garments,%20I%20would%20like%20to%20inquire%20about%20your%20collection.`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* 1. Hero Section (with internal Navbar, Logo, Links, WhatsApp button, Heading, Description, CTA, Fashion Image) */}
      <Hero />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. About Section */}
        <About />

        {/* 3. Brands We Sell Section */}
        <Brands />

        {/* 4. FAQ Section */}
        <FAQ />

        {/* 5. Contact Section */}
        <Contact />
      </main>

      {/* 6. Footer Section */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button for Mobile & Desktop */}
      <a
        id="floating-whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shri Balaji Garments on WhatsApp"
        className="fixed bottom-6 right-6 z-50 p-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-semibold pl-0 group-hover:pl-2">
          Chat with us
        </span>
      </a>
    </div>
  );
}
