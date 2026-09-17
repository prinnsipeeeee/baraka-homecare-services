import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Clock, 
  Car, 
  Heart, 
  Baby, 
  Award, 
  CreditCard, 
  Check, 
  X, 
  MessageCircle, 
  Sparkles,
  CheckCircle2,
  Users2
} from "lucide-react";

export default function WhyUs() {
  const whatsappNumber = "966563900946";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Baraka Homecare Services! I would like to know more about why families in Riyadh choose Baraka for newborn care."
  )}`;

  const pillars = [
    {
      icon: Baby,
      title: "Newborn Specialists, Not Just Babysitters",
      arabic: "أخصائيات رعاية حديثي الولادة",
      description: "Our caregivers possess medical training in infant ergonomics, sterile umbilical hygiene, colic soothing, and safe sleep habits.",
      badge: "Clinical Standard"
    },
    {
      icon: Heart,
      title: "Maternal Healing & Sleep Recovery",
      arabic: "استعادة نوم وصحة الأم",
      description: "We protect mother's critical 8 hours of uninterrupted night sleep to prevent postpartum exhaustion and accelerate bodily recovery.",
      badge: "Maternal Health"
    },
    {
      icon: Car,
      title: "Company Transport Across Riyadh",
      arabic: "مواصلات خاصة منتظمة بالرياض",
      description: "Zero commute delays. Baraka provides dedicated private drivers ensuring our nurses arrive precisely on time for every scheduled shift.",
      badge: "100% Punctual"
    },
    {
      icon: ShieldCheck,
      title: "Rigorous Background & CPR Verification",
      arabic: "فحص أمني معتمد وشهادات CPR",
      description: "Every nurse aide is thoroughly background-cleared, medically screened, and certified in pediatric first aid & life support.",
      badge: "Safety First"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment & Long-Term Savings",
      arabic: "خطط دفع مرنة وتوفير طويل الأمد",
      description: "Choose terms that suit your family budget: Monthly, Bi-Monthly, or Quarterly contracts with reduced rates for longer bookings.",
      badge: "Cost-Effective"
    },
    {
      icon: Users2,
      title: "Stay-In & Stay-Out Flexibility",
      arabic: "خيارات الإقامة الكاملة أو الجزئية",
      description: "Whether you need full 24-hour live-in support or dedicated 12-hour night duty coverage, our plans adapt to your household.",
      badge: "Custom Shifts"
    }
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-linear-to-br from-purple-950 via-purple-900 to-indigo-950 text-white relative overflow-hidden">
      
      {/* Background Decorative Ambient Circles */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-pink-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-purple-600/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-pink-300 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="font-arabic text-sm">لماذا بركة للرعاية المنزلية؟</span>
            <span className="text-purple-300">•</span>
            <span>The Baraka Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Why Riyadh Families Trust{" "}
            <span className="bg-linear-to-r from-pink-300 via-purple-200 to-white bg-clip-text text-transparent">
              Baraka Homecare
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-purple-200/90 leading-relaxed font-light">
            Bringing peace of mind to new parents across the Kingdom with medically-supported infant care, dedicated shifts, and maternal recovery support.
          </p>
        </div>

        {/* 1. Comparison Feature: Babysitter vs Baraka Specialist */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-400">Clear Distinction</span>
              <h3 className="text-2xl font-bold mt-1">Understanding The Difference</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Ordinary Babysitter Card */}
              <div className="bg-purple-900/40 rounded-2xl p-6 border border-purple-800/40 opacity-75">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base font-bold text-gray-300">Standard Babysitter</h4>
                  <span className="text-[11px] font-semibold text-gray-400 bg-black/20 px-2.5 py-1 rounded-full">General Help</span>
                </div>
                <ul className="space-y-3 text-xs text-gray-300">
                  <li className="flex items-center gap-2.5">
                    <X className="w-4 h-4 text-rose-400 -shrink-0" />
                    <span>Basic supervision without infant medical protocol</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <X className="w-4 h-4 text-rose-400 -shrink-0" />
                    <span>No sleep training or circadian rhythm guidance</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <X className="w-4 h-4 text-rose-400 -shrink-0" />
                    <span>Mother still handles overnight waking and feeding</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <X className="w-4 h-4 text-rose-400 -shrink-0" />
                    <span>Inconsistent punctuality and transport arrangements</span>
                  </li>
                </ul>
              </div>

              {/* Baraka Newborn Specialist Card */}
              <div className="bg-linear-to-br from-purple-800/70 to-pink-900/60 rounded-2xl p-6 border border-pink-400/30 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-pink-500 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                  Baraka Standard
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base font-bold text-white">Baraka Newborn Specialist</h4>
                  <span className="text-[11px] font-semibold text-pink-200 bg-pink-500/20 px-2.5 py-1 rounded-full mr-20 sm:mr-0">Clinical Aide</span>
                </div>
                <ul className="space-y-3 text-xs text-purple-100">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-3" />
                    <span className="font-medium">CPR certified, umbilical & colic care specialists</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-3" />
                    <span className="font-medium">Gentle sleep training implemented from Night One</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-3" />
                    <span className="font-medium">Guaranteed 8-hour continuous night rest for mom</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-3" />
                    <span className="font-medium">Company-provided private transport in Riyadh</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* 2. Six Spacious Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-pink-400/40 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-linear-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/25 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/10 text-purple-200 border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-pink-300 font-arabic font-medium mb-4">
                    {item.arabic}
                  </p>

                  <p className="text-sm text-purple-200/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-pink-200 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Guaranteed in every contract</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3. Call to Action Banner Inside Why Us */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-linear-to-r from-purple-800/80 to-pink-800/80 backdrop-blur-md border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pink-300 mb-2">
              <Clock className="w-4 h-4" />
              <span>Recommended Booking Timeline</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
              Reserve 3 Weeks Before Due Date
            </h4>
            <p className="text-sm text-purple-200 mt-2 max-w-lg leading-relaxed">
              Ensure your preferred certified newborn caregiver is reserved and scheduled for your hospital discharge day in Riyadh.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 text-base group"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}