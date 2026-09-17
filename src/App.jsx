import React from "react";

// Component Imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Icons
import { MessageCircle } from "lucide-react";

// Global Baraka Brand Configuration (Riyadh, KSA)
const BRAND_CONFIG = {
  whatsappNumber: "966563900946", // Baraka Homecare Riyadh: 0563900946
  whatsappDefaultMsg: "Hello Baraka Homecare Services! I would like to inquire about newborn care packages in Riyadh.",
};

export default function App() {
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BRAND_CONFIG.whatsappDefaultMsg
  )}`;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-200 selection:text-purple-900">
      
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Main Page Flow */}
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Global Floating WhatsApp Action Button */}
      <aside className="fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-105 transition-all duration-300"
          aria-label="Contact Baraka Homecare on WhatsApp"
        >
          {/* Animated Online Status Dot */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white"></span>
          </span>

          <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
          <span className="hidden sm:inline font-bold text-sm tracking-wide">
            WhatsApp Us
          </span>
        </a>
      </aside>

    </div>
  );
}