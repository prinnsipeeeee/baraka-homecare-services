import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  ShieldCheck, 
  Users, 
  Clock, 
  Award, 
  Sparkles, 
  CheckCircle, 
  MessageCircle,
  ArrowRight
} from "lucide-react";

export default function About() {
  const whatsappNumber = "966500000000"; // Palitan ng client's WhatsApp number
  const whatsappMessage = encodeURIComponent(
    "Hello Baraka Homecare Services! I would like to learn more about your homecare team and company background."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const coreValues = [
    {
      title: "Compassionate Dignity",
      desc: "Treating every elder and patient with the deep familial respect and warmth rooted in our cultural values.",
      icon: Heart,
    },
    {
      title: "Licensed Excellence",
      desc: "Registered healthcare professionals rigorously screened and compliant with Saudi health standards.",
      icon: ShieldCheck,
    },
    {
      title: "24/7 Family Peace of Mind",
      desc: "Round-the-clock on-call nursing, emergency coordination, and transparent daily care reporting.",
      icon: Clock,
    },
  ];

  const stats = [
    { value: "500+", label: "Families Assisted" },
    { value: "100%", label: "Certified Nurses" },
    { value: "24/7", label: "On-Call Support" },
    { value: "99%", label: "Family Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase & Image Placeholders */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main About Image Placeholder */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/10 border-4 border-white bg-purple-100 h-100 sm:h-115">
                <img
                  src="/pic5.jpeg" 
                  alt="Baraka Homecare Nurse caring for a patient"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center bg-purple-50 text-purple-400 p-6">
                        <svg class="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span class="text-sm font-semibold">About Us Main Image Placeholder</span>
                      </div>
                    `;
                  }}
                />

                <div className="absolute inset-0 bg-linear-to-t from-purple-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Secondary Overlapping Thumbnail Image Placeholder */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-44 sm:w-52 h-44 sm:h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-purple-50 hidden sm:block">
                <img
                  src="/pic14.jpeg" 
                  alt="Medical checkup at home"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-md shadow-purple-600/30">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-purple-700 font-bold uppercase tracking-wider">Trusted Care</p>
                  <p className="text-sm font-extrabold text-gray-900">Hospital-Grade Standards</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Story, Values & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs sm:text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span>Who We Are</span>
              <span className="text-purple-300">•</span>
              <span className="font-arabic text-purple-800">بركة للرعاية المنزلية</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Bringing Healing Hands & Loving Hearts to Every Home.
            </h2>

            {/* Company Bio */}
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Founded on the belief that the best healing happens in the warmth of home, 
              <strong> Baraka Homecare Services</strong> provides specialized medical assistance, elderly companion care, and rehabilitation services across Saudi Arabia.
            </p>

            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Our Arabic motto, <strong className="text-purple-800 font-arabic font-bold text-base">"أيدينا إلى قلوبكم"</strong> (<em>Our hands to your hearts</em>), reflects our mission: blending advanced clinical precision with genuine compassion, ensuring your loved ones receive the dignity, comfort, and safety they deserve.
            </p>

            {/* Core Values List */}
            <div className="space-y-4 mb-8">
              {coreValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-purple-50/60 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-0.5">{val.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Link / WhatsApp Inquiry */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-purple-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-linear-to-r from-purple-800 to-indigo-900 hover:from-purple-900 hover:to-indigo-950 text-white font-semibold px-6 py-3.5 rounded-full shadow-md shadow-purple-950/20 transition-all text-sm"
              >
                <span>Learn About Our Care Plans</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold px-4 py-3 text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                <span>Chat with Care Director</span>
              </a>
            </div>

          </motion.div>

        </div>

        {/* Stats Grid Bar */}
        <div className="mt-16 pt-12 border-t border-purple-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((st, i) => (
            <div key={i} className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100/60">
              <p className="text-3xl sm:text-4xl font-extrabold bg-linear-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent mb-1">
                {st.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-gray-600">{st.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}