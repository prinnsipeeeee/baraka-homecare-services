import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  Heart, 
  Building2,
  Calendar
} from "lucide-react";

export default function Testimonials() {
  const whatsappNumber = "966563900946";

  // Example testimonials na pwedeng palitan ng may-ari anumang oras
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Al-Otaibi",
      arabicName: "د. سارة العتيبي",
      location: "Al Nakheel, Riyadh",
      serviceUsed: "Night Duty Caregiver (12 AM - 12 PM)",
      rating: 5,
      date: "2 weeks ago",
      highlight: "8 hours of uninterrupted sleep every single night.",
      feedback:
        "As a first-time mother who had a C-section, having Nurse Maria from Baraka was the best decision. She was so gentle with our newborn's colic and umbilical cord care. I finally recovered without sleepless exhaustion.",
      verified: true
    },
    {
      id: 2,
      name: "Fahad & Noura Al-Ghamdi",
      arabicName: "فهد ونورة الغامدي",
      location: "Al Malqa, Riyadh",
      serviceUsed: "Newborn Care & Sleep Training",
      rating: 5,
      date: "Last month",
      highlight: "Gentle sleep training really worked from week one.",
      feedback:
        "The punctuality is unmatched. Baraka's private driver drops the nurse right on the dot. By week 3, our baby had an established day/night feeding routine. Highly recommended for Riyadh families.",
      verified: true
    },
    {
      id: 3,
      name: "Maha Al-Husseini",
      arabicName: "مها الحسيني",
      location: "Al Olaya, Riyadh",
      serviceUsed: "Post-Delivery Recovery & Newborn Aide",
      rating: 5,
      date: "1 month ago",
      highlight: "Truly newborn specialists, not ordinary babysitters.",
      feedback:
        "You can feel the clinical standard immediately. Sterile bottle prep, proper infant swaddling, and daily health reports sent to my phone. They gave our entire home peace of mind.",
      verified: true
    },
    {
      id: 4,
      name: "Eng. Sultan Al-Qahtani",
      arabicName: "م. سلطان القحطاني",
      location: "Hittin, Riyadh",
      serviceUsed: "Quarterly Stay-In Contract",
      rating: 5,
      date: "2 months ago",
      highlight: "Flexible payment and compassionate care.",
      feedback:
        "We booked 3 weeks before my wife's due date. The quarterly contract was very cost-effective compared to other agencies. The caregiver became like family to us. May Allah bless their hands.",
      verified: true
    }
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-linear-to-b from-white via-purple-50/25 to-white relative overflow-hidden">
      
      {/* Soft Ambient Light Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="font-arabic text-sm text-purple-800">تجارب وآراء العائلات</span>
            <span className="text-purple-300">•</span>
            <span>Real Family Stories</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Loved & Trusted by{" "}
            <span className="bg-linear-to-r from-purple-700 via-purple-800 to-pink-600 bg-clip-text text-transparent">
              Mothers Across Riyadh
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
            Read how Baraka Homecare empowers parents with restful nights, expert infant soothing, and caring companionship.
          </p>

          {/* Social Proof Rating Snapshot */}
          <div className="mt-8 inline-flex items-center gap-4 py-2.5 px-6 rounded-full bg-white shadow-md shadow-purple-900/5 border border-purple-100">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-gray-800">4.9 / 5.0 Rating</span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-purple-700 font-semibold">Over 500+ Verified Nights Delivered</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-purple-950/5 border border-purple-100 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Subtle Top Quote Icon */}
              <div className="absolute top-6 right-6 text-purple-100 group-hover:text-purple-200 transition-colors pointer-events-none">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div>
                {/* Rating & Service Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/50">
                    {t.serviceUsed}
                  </span>
                </div>

                {/* Key Takeaway Headline */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-800 transition-colors">
                  "{t.highlight}"
                </h3>

                {/* Main Feedback Content */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                  {t.feedback}
                </p>
              </div>

              {/* Author Info Bar */}
              <div className="pt-6 border-t border-purple-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-linear-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-purple-500/20">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-bold text-gray-900 leading-tight">
                        {t.name}
                      </p>
                      {t.verified && (
                        <span title="Verified Client">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-purple-600 font-arabic font-medium">
                      {t.arabicName}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5 flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {t.location}
                    </p>
                  </div>
                </div>

                <div className="text-right text-[11px] text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{t.date}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* WhatsApp Experience Callout Banner */}
        <div className="rounded-3xl p-8 sm:p-10 bg-linear-to-r from-purple-50 via-pink-50/50 to-purple-50 border border-purple-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 shrink-0">
              <MessageCircle className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">
                Want to see more client experiences in your Riyadh district?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                Our care coordinators can share verified case references and caregiver profiles directly.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello Baraka Homecare Services! I would like to inquire about caregiver reviews and availability in Riyadh."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-full shadow-md shadow-emerald-600/20 transition-all text-sm hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}