import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Clock, 
  HeartHandshake, 
  ShieldCheck,
  ChevronRight 
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Palitan ito ng actual WhatsApp number ng client (hal. 966... o 63...)
  const whatsappNumber = "966500000000"; 
  const whatsappMessage = encodeURIComponent(
    "Hello Baraka Homecare Services! I would like to inquire about your home care assistance."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Detect scroll para sa dynamic glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-linear-to-r from-purple-900 via-purple-800 to-indigo-900 text-purple-100 text-xs py-2 px-4 border-b border-purple-700/40 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-purple-200">
              <Clock className="w-3.5 h-3.5 text-pink-400" />
              24/7 Compassionate Care Support
            </span>
            <span className="flex items-center gap-1.5 text-purple-200">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              Certified & Trusted Caregivers
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-purple-300 font-arabic tracking-wide">
              أيدينا إلى قلوبكم
            </span>
            <span className="text-purple-400">•</span>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              WhatsApp Available Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-purple-950/5 py-3 border-b border-purple-100"
            : "bg-white/85 backdrop-blur-sm py-4 border-b border-purple-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden p-0.5 bg-linear-to-tr from-purple-600 via-pink-500 to-purple-800 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img
                src="/baraka_logo.jpg"
                alt="Baraka Homecare Logo"
                className="w-full h-full object-contain rounded-full bg-white"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-white text-purple-700">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>`;
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight bg-linear-to-r from-purple-950 via-purple-800 to-pink-700 bg-clip-text text-transparent leading-tight">
                BARAKA
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-purple-600 uppercase leading-none">
                Homecare Services
              </span>
              <span className="text-[9px] text-gray-500 font-arabic leading-none mt-0.5">
                بركة لخدمات الرعاية المنزلية
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-purple-600 after:to-pink-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons: WhatsApp & Direct Contact */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+966500000000"
              className="p-2.5 rounded-full text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors border border-purple-200/60"
              title="Direct Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-md shadow-emerald-600/20 transition-all duration-300 group"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
              </div>
              <span>WhatsApp Us</span>
            </motion.a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-500 text-white shadow-sm"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-purple-900 hover:bg-purple-50 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-xl px-5 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-gray-700 hover:text-purple-700 font-medium py-2 px-3 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-purple-100 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+966500000000"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-800 font-semibold py-3 px-4 rounded-xl border border-purple-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-600" />
                <span>Call Us Directly</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}