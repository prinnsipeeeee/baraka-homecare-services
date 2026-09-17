
import React from "react";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  PhoneCall, 
  ShieldCheck, 
  Star, 
  UserCheck, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function Hero() {
  const whatsappNumber = "966500000000"; 
  const whatsappMessage = encodeURIComponent(
    "Hello Baraka Homecare Services! I would like to book a free home care consultation in Saudi Arabia."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const keyFeatures = [
    "Elderly & Senior Assisted Living",
    "24/7 Licensed Registered Nurses",
    "Post-Operative Rehabilitation",
    "Specialized Memory & Chronic Care"
  ];

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-linear-to-b from-purple-50/70 via-purple-50/20 to-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-162.5 h-90 bg-linear-to-tr from-purple-300/30 to-pink-300/30 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-200/40 blur-2xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Arabic Motto Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-900 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
              <span className="font-arabic text-sm text-purple-800">أيدينا إلى قلوبكم</span>
              <span className="text-purple-300">•</span>
              <span>Our Hands to Your Hearts</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
              Compassionate, Professional{" "}
              <span className="bg-linear-to-r from-purple-700 via-purple-800 to-pink-600 bg-clip-text text-transparent">
                Home Healthcare
              </span>{" "}
              in Saudi Arabia.
            </h1>

            {/* Subtitle in English */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              At <strong>Baraka Homecare Services</strong>, we bring hospital-grade nursing and dedicated compassionate care to the comfort of your home. Trusted by families across the Kingdom with 24/7 on-call availability.
            </p>

            {/* Key Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 mb-8 text-left">
              {keyFeatures.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-emerald-600/25 transition-all text-base"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                </div>
                <span>Inquire on WhatsApp</span>
              </motion.a>

              <a
                href="tel:+966500000000"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-purple-50 text-purple-950 font-semibold px-6 py-3.5 rounded-full border border-purple-200 shadow-sm transition-all text-base"
              >
                <PhoneCall className="w-4 h-4 text-purple-600" />
                <span>Call Care Coordinator</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="mt-10 pt-6 border-t border-purple-100/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Client" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Client" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" alt="Client" />
                </div>
                <div className="text-left">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">500+ Families Assisted in KSA</p>
                </div>
              </div>

              <div className="h-7 w-px bg-purple-200 hidden sm:block" />

              <div className="flex items-center gap-2 text-left">
                <ShieldCheck className="w-5 h-5 text-purple-700" />
                <div>
                  <p className="text-xs font-bold text-gray-900">Certified Healthcare</p>
                  <p className="text-[11px] text-gray-500">Highest Quality Standards</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/15 border-4 border-white bg-purple-100">
                <img
                  src="/hero-1.png"
                  alt="Compassionate Caregiver providing assistance"
                  className="w-full h-10.5 sm:h-120 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-purple-950/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20">
                  <p className="text-xs font-semibold text-purple-200 uppercase tracking-wider">Compassion in Every Touch</p>
                  <p className="text-sm font-medium">Personalized Medical & Daily Assistance at Home</p>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Licensed Staff</p>
                  <p className="text-sm font-bold text-gray-900">24/7 Care in KSA</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3 hover:border-emerald-300 transition-colors cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/30">
                  <MessageCircle className="w-5 h-5 fill-white" />
                </div>
                <div className="text-left">
                  <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Quick Response
                  </span>
                  <p className="text-xs font-extrabold text-gray-900">WhatsApp Inquiry</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}