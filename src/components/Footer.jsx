import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Globe, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  ArrowUp,
  ChevronRight,
  Code2
} from "lucide-react";

export default function Footer() {
  const whatsappNumber = "966563900946";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Baraka Homecare Services! I would like to inquire about care services in Riyadh."
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Client Reviews", href: "#testimonials" },
    { name: "Contact & Booking", href: "#contact" }
  ];

  const careServices = [
    { name: "Newborn Infant Care (رعاية الرضع)", href: "#services" },
    { name: "Night Duty Caregivers (12 AM - 12 PM)", href: "#services" },
    { name: "Mother Postpartum Healing", href: "#services" },
    { name: "Pre-Booking (3 Weeks Prior)", href: "#services" },
    { name: "Stay-In / Live-In Nurse Aides", href: "#services" },
    { name: "Gentle Sleep Routine Training", href: "#services" }
  ];

  const riyadhDistricts = [
    "Al Malqa (الملقا)",
    "Hittin (حطين)",
    "Al Nakheel (النخيل)",
    "Al Olaya (العليا)",
    "Al Yasmin (الياسمين)",
    "Al Sulaimaniyah (السليمانية)"
  ];

  return (
    <footer className="relative bg-linear-to-b from-purple-950 via-purple-900 to-indigo-950 text-white overflow-hidden pt-20 pb-10 border-t border-purple-800/50">
      
      {/* 1. Dot-Matrix Pattern Overlay Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(#d8b4fe 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* 2. Ambient Colorful Glow Spheres */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Action Strip */}
        <div className="pb-16 mb-16 border-b border-purple-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-pink-300 shadow-inner">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-pink-300 font-bold">24/7 Availability in Riyadh</p>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Need immediate homecare assistance?</h3>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-full shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp +966 56 390 0946</span>
            </a>

            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-purple-200 hover:text-white transition-all shadow-sm cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main 5-Column Spacious Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-purple-800/40">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-linear-to-tr from-pink-500 to-purple-400 overflow-hidden shadow-md">
                <img
                  src="/logo.png"
                  alt="Baraka Homecare"
                  className="w-full h-full object-contain rounded-full bg-white"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div>
                <h4 className="font-extrabold text-lg tracking-tight text-white leading-tight">
                  BARAKA HOMECARE
                </h4>
                <p className="text-xs text-purple-300 font-semibold tracking-wider uppercase">
                  Services • Riyadh
                </p>
              </div>
            </div>

            <p className="font-arabic text-pink-300 font-semibold text-base">
              أيدينا إلى قلوبكم — بركة لخدمات الرعاية المنزلية
            </p>

            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-light">
              Specialized newborn infant specialists, certified maternity nurse aides, and dedicated night-duty caregivers serving families throughout Riyadh, Saudi Arabia.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs text-purple-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Certified Staff • Company Transport Provided</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-pink-300">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-xs text-purple-200/90">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-pink-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-purple-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Care Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-pink-300">
              Care Programs
            </h5>
            <ul className="space-y-2.5 text-xs text-purple-200/90">
              {careServices.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    className="hover:text-pink-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-purple-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Riyadh Coverage & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-pink-300">
              Riyadh Coverage
            </h5>
            <div className="grid grid-cols-2 gap-1.5 text-xs text-purple-200/80 mb-5">
              {riyadhDistricts.map((d, i) => (
                <span key={i} className="flex items-center gap-1 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400/60" />
                  {d}
                </span>
              ))}
            </div>

            <div className="space-y-2 pt-2 border-t border-purple-800/40 text-xs text-purple-200/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Riyadh, Kingdom of Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <span>+966 56 390 0946</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-pink-400 shrink-0" />
                <span>www.barakahomecareservices.net</span>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="flex items-center gap-2.5 pt-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-black text-white flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <svg className="w-3 h-3 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & YARAMAY Developer Signature */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-purple-300/80">
          
          <div className="flex items-center gap-2 text-center md:text-left">
            <span>© {new Date().getFullYear()} Baraka Homecare Services.</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved (Riyadh, KSA).</span>
          </div>

          {/* Developer Credit for YARAMAY */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-sm text-white">
            <Code2 className="w-3.5 h-3.5 text-pink-400" />
            <span>Developed with passion by</span>
            <span className="font-extrabold tracking-wide bg-linear-to-r from-pink-300 via-purple-200 to-white bg-clip-text text-transparent">
              Yaramay
            </span>
            <Sparkles className="w-3 h-3 text-pink-400" />
          </div>

        </div>

      </div>
    </footer>
  );
}