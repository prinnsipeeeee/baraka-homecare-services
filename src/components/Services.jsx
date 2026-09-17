import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Baby, 
  Moon, 
  CalendarCheck, 
  HeartHandshake, 
  MessageCircle, 
  CheckCircle2, 
  X, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  CreditCard
} from "lucide-react";

export default function Services() {
  const whatsappNumber = "966563900946";

  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: "your-peace-your-plan",
      title: "Your Peace, Your Plan",
      subtitle: "8 Hours of Your Life Back Every Night",
      arabicTitle: "رعاية الأطفال حديثي الولادة",
      arabicSubtitle: "راحتكِ أولويتنا.. خطة رعاية متكاملة",
      image: "/w1.jpeg",
      icon: Baby,
      badge: "Flexible Contracts",
      tagline: "Baraka Caregivers aren't babysitters. They are newborn specialists protecting your postpartum recovery.",
      paymentPlans: "Monthly, Bi-Monthly, or Quarterly (Long-Term Contracts = Less Cost)",
      highlights: [
        "8 hours of uninterrupted sleep for recovering mothers",
        "Certified newborn specialists, not regular babysitters",
        "Flexible payment terms: Monthly, Bi-Monthly, or Quarterly",
        "Substantial discounts on long-term homecare contracts"
      ],
      fullDetails: {
        intro: "Give yourself the gift of physical healing and rest. Our specialized newborn caregivers take over the night duties, so you wake up refreshed, energized, and ready to bond with your baby.",
        duties: [
          "Complete overnight newborn monitoring",
          "Umbilical cord hygiene & postpartum guidance",
          "Colic soothing, gentle burping & feeding routines",
          "Personalized nursery care and support"
        ],
        location: "Available across Riyadh & surrounding areas"
      }
    },
    {
      id: "you-rest-we-hold-baby",
      title: "You Rest, We Hold The Baby",
      subtitle: "Complete Newborn Routine & Mother Care",
      arabicTitle: "رعاية الأطفال حديثي الولادة",
      arabicSubtitle: "أنتِ ترتاحين ونحن نعتني بطفلكِ",
      image: "/w2.jpeg",
      icon: HeartHandshake,
      badge: "Most Popular",
      tagline: "Comprehensive care for newborn infants and holistic recovery assistance for new mothers.",
      paymentPlans: "Tailored daily, weekly, or monthly care packages",
      highlights: [
        "Night feeds + burping support",
        "Professional bathing & umbilical cord care",
        "Structured sleep routine training",
        "Dedicated mother recovery & wellness support"
      ],
      fullDetails: {
        intro: "Designed specifically for first-time and recovering moms who need reliable hands. From delicate bathing to night feeding routines, our nurse aides provide gentle, hospital-grade care.",
        duties: [
          "Safe infant bottle-feeding & burping techniques",
          "Proper sponge & tub bathing, sterile umbilical cord cleaning",
          "Healthy circadian rhythm & sleep schedule induction",
          "Emotional reassurance and postpartum rest for mom"
        ],
        location: "Direct home service in Riyadh"
      }
    },
    {
      id: "early-booking-riyadh",
      title: "Book Your Newborn Care Early",
      subtitle: "Secure Live-In or Live-Out Care in Riyadh",
      arabicTitle: "رعاية الأطفال حديثي الولادة",
      arabicSubtitle: "الحجز المبكر لخدمات رعاية الرضع بالرياض",
      image: "/w3.jpeg",
      icon: CalendarCheck,
      badge: "Riyadh Exclusive",
      tagline: "Guarantee your preferred certified nurse by reserving as early as 3 weeks before your due date.",
      paymentPlans: "Secure booking with minimal downpayment prior to delivery",
      highlights: [
        "Book & secure with downpayment 3 weeks before due date",
        "Verified client testimonials guaranteeing staff quality",
        "Daily company transportation for live-out staff",
        "Stay-in or Stay-out options | CPR Certified + Background-checked"
      ],
      fullDetails: {
        intro: "High-demand newborn specialists fill their schedules quickly in Riyadh. Pre-booking ensures an accredited, background-screened nurse is ready the day you return from the maternity hospital.",
        duties: [
          "Pre-delivery consultation and nursery preparation checklist",
          "Selection between Stay-in (24h) or Stay-out scheduled shifts",
          "All staff fully verified, CPR certified, and medically cleared",
          "Company-managed daily transport ensures zero punctuality delays"
        ],
        location: "All districts across Riyadh, KSA"
      }
    },
    {
      id: "night-duty-caregivers",
      title: "Night Duty Caregivers",
      subtitle: "12 AM to 12 PM Dedicated Shifts",
      arabicTitle: "رعاية الأطفال حديثي الولادة",
      arabicSubtitle: "ممرضات ومساعدات الرعاية للمناوبة الليلية",
      image: "/w4.jpeg",
      icon: Moon,
      badge: "12-Hour Relief",
      tagline: "We take the 12:00 AM to 12:00 PM shift at your home so you can rest, heal, and wake up human again.",
      paymentPlans: "Shift-based or recurring night-shift contracts",
      highlights: [
        "Specialized 12 AM to 12 PM home shift",
        "Night feeds, diaper changes & gentle settling",
        "Detailed sleep routine tracking and daily report",
        "Gentle sleep training implemented from night one"
      ],
      fullDetails: {
        intro: "Nighttime can be overwhelming for new parents. Our 12-hour night duty caregivers ensure your infant is fed, clean, and sound asleep, while recording all logs for pediatric visits.",
        duties: [
          "Timely night bottle-feedings and reflux prevention",
          "Frequent diaper changes with sensitive skin protection",
          "Logging sleep cycles, wet diapers, and intake in daily report",
          "Early gentle soothing and self-settling sleep habits"
        ],
        location: "In-home night coverage in Riyadh"
      }
    }
  ];

  const getWhatsAppUrl = (serviceTitle) => {
    const msg = encodeURIComponent(
      `Hello Baraka Homecare Services! I would like to book / inquire about: "${serviceTitle}" in Riyadh.`
    );
    return `https://wa.me/${whatsappNumber}?text=${msg}`;
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-linear-to-b from-white via-purple-50/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="font-arabic text-sm text-purple-800">رعاية الأطفال حديثي الولادة</span>
            <span className="text-purple-300">•</span>
            <span>Riyadh, Saudi Arabia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Specialized{" "}
            <span className="bg-linear-to-r from-purple-700 via-purple-800 to-pink-600 bg-clip-text text-transparent">
              Newborn & Mother Care
            </span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Professional newborn care, post-delivery recovery, and night duty caregivers. Select any package below to inspect the full shift schedule and inclusions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedService(service)}
                className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-purple-950/5 border border-purple-100/90 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-900/15 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Poster Image Container */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-purple-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        // Fallback UI
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement.classList.add("flex", "items-center", "justify-center", "bg-purple-100");
                        e.currentTarget.parentElement.innerHTML = `
                          <div class="text-center p-4 text-purple-700">
                            <span class="text-xs font-bold uppercase tracking-wider block mb-1">Image: ${service.image}</span>
                            <span class="text-[11px] text-gray-500">Click to view details</span>
                          </div>
                        `;
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-purple-950/80 via-purple-900/20 to-transparent pointer-events-none" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-purple-900 shadow-sm border border-white/60">
                        {service.badge}
                      </span>
                    </div>

                    {/* Arabic Subtitle Overlay at Image Bottom */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-arabic text-purple-200 font-semibold drop-shadow-md">
                        {service.arabicSubtitle}
                      </p>
                      <h3 className="text-lg font-bold text-white drop-shadow-sm leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <p className="text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                      {service.tagline}
                    </p>

                    {/* Checklist Snapshot */}
                    <div className="space-y-2 pt-2 border-t border-purple-50">
                      {service.highlights.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Trigger */}
                <div className="p-5 pt-0">
                  <div className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-purple-50 text-purple-900 font-semibold text-xs group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
                    <span>View Full Package</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 border border-purple-100 my-8"
              >
                {/* Modal Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 text-gray-700 hover:text-purple-900 hover:bg-white flex items-center justify-center shadow-md transition-all"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header with Image */}
                <div className="relative h-64 sm:h-72 w-full bg-purple-100 overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-purple-950 via-purple-950/40 to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-12 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-purple-200 mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                      <span>{selectedService.badge}</span>
                    </div>

                    <p className="text-sm sm:text-base text-purple-200 font-arabic font-semibold">
                      {selectedService.arabicTitle} • {selectedService.arabicSubtitle}
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                  
                  {/* Overview Text */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-1">
                      Package Overview
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {selectedService.fullDetails.intro}
                    </p>
                  </div>

                  {/* Included Care Duties */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2.5">
                      Included Caregiver & Nurse Duties:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedService.fullDetails.duties.map((duty, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-purple-50/60 text-xs text-gray-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{duty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment & Contracts */}
                  <div className="p-4 rounded-2xl bg-linear-to-r from-purple-50 to-pink-50/40 border border-purple-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Payment Terms & Discounts</p>
                      <p className="text-xs text-gray-600">{selectedService.paymentPlans}</p>
                    </div>
                  </div>

                  {/* Service Location */}
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin className="w-4 h-4 text-purple-600" />
                    <span>{selectedService.fullDetails.location}</span>
                  </div>

                </div>

                {/* Modal Footer / WhatsApp Booking */}
                <div className="p-5 sm:px-8 sm:py-5 border-t border-purple-100 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-center sm:text-left">
                    <p className="text-xs text-gray-500">Direct WhatsApp Inquiry</p>
                    <p className="text-sm font-bold text-purple-900">+966 56 390 0946</p>
                  </div>

                  <a
                    href={getWhatsAppUrl(selectedService.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-emerald-600/25 transition-all text-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>Book on WhatsApp</span>
                  </a>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Riyadh Homecare Guarantee Banner */}
        <div className="mt-16 bg-linear-to-r from-purple-950 via-purple-900 to-indigo-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-purple-800/40">
          <div>
            <div className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Accredited Care in Riyadh, KSA</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold mb-1">
              Have Questions or Special Newborn Requirements?
            </h4>
            <p className="text-sm text-purple-200 max-w-xl">
              Connect directly with our care coordinator to customize hours, live-in arrangements, or multiple baby care.
            </p>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Baraka Homecare Services! I want to inquire about newborn care packages in Riyadh.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-full shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat +966 56 390 0946</span>
          </a>
        </div>

      </div>
    </section>
  );
}