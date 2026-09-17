import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  Globe, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Video
} from "lucide-react";

export default function Contact() {
  const whatsappNumber = "966563900946"; // Official Baraka KSA WhatsApp

  // State para sa form
  const [formData, setFormData] = useState({
    parentName: "",
    district: "",
    serviceType: "Night Duty Caregiver (12 AM - 12 PM)",
    contractType: "Monthly Contract",
    dueDate: "",
    notes: ""
  });

  // Quick Template Chips para sa instant pre-filled inquiry
  const quickTemplates = [
    {
      label: "🍼 Newborn Night Duty (12 AM - 12 PM)",
      service: "Night Duty Caregiver (12 AM - 12 PM)",
      notes: "Inquiring about 12-hour overnight caregiver assistance."
    },
    {
      label: "📅 Pre-Booking (3 Weeks Before Due Date)",
      service: "Book Your Newborn Care Early",
      notes: "Securing nurse reservation 3 weeks prior to hospital delivery."
    },
    {
      label: "🏡 Stay-In 24/7 Caregiver",
      service: "You Rest, We Hold The Baby",
      notes: "Requesting details for full stay-in newborn & mother care."
    },
    {
      label: "💰 Quarterly Long-Term Contract",
      service: "Your Peace, Your Plan",
      notes: "Inquiring about multi-month discounted packages."
    }
  ];

  const applyTemplate = (t) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: t.service,
      notes: t.notes
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // I-format ang ready-to-send template message para sa WhatsApp
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const formattedMessage = `*BARAKA HOMECARE INQUIRY (RIYADH)*
-----------------------------------
👤 *Parent / Family Name:* ${formData.parentName || "Not provided"}
📍 *Riyadh District:* ${formData.district || "Riyadh"}
🩺 *Service Requested:* ${formData.serviceType}
📋 *Contract Duration:* ${formData.contractType}
🗓️ *Expected Due Date / Start:* ${formData.dueDate || "As soon as possible"}
💬 *Specific Requests:* ${formData.notes || "None"}
-----------------------------------
_Sent via barakahomecareservices.net inquiry portal_`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-linear-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-purple-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="font-arabic text-sm text-purple-800">تواصل معنا على مدار الساعة</span>
            <span className="text-purple-300">•</span>
            <span>24/7 WhatsApp Response</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Connect with Our{" "}
            <span className="bg-linear-to-r from-purple-700 via-purple-800 to-pink-600 bg-clip-text text-transparent">
              Riyadh Care Team
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
            WhatsApp is our direct and fastest communication line. Select a template or fill out the inquiry details below to connect with a care specialist instantly.
          </p>
        </div>

        {/* Top Grid: Form & Portrait Video Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column (7 cols): WhatsApp Inquiry Builder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-purple-950/5 border border-purple-100"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-50">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Direct WhatsApp Inquiry</h3>
                <p className="text-xs text-gray-500">Auto-generates a structured booking message on WhatsApp</p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/25">
                <MessageCircle className="w-5 h-5 fill-white" />
              </div>
            </div>

            {/* Quick Template Chips */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-2.5">
                Quick One-Click Templates:
              </label>
              <div className="flex flex-wrap gap-2">
                {quickTemplates.map((t, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => applyTemplate(t)}
                    className="text-xs font-medium py-1.5 px-3 rounded-full bg-purple-50 hover:bg-purple-700 hover:text-white text-purple-800 border border-purple-200/60 transition-all duration-200 text-left cursor-pointer"
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inquiry Form */}
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Parent / Family Name</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="e.g. Noura Al-Ghamdi"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Riyadh District / Area</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    placeholder="e.g. Al Malqa / Al Nakheel"
                    className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Requested Care Package</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white"
                  >
                    <option>Night Duty Caregiver (12 AM - 12 PM)</option>
                    <option>Book Your Newborn Care Early</option>
                    <option>You Rest, We Hold The Baby (Newborn Routine)</option>
                    <option>Your Peace, Your Plan (Mother Recovery)</option>
                    <option>Stay-In 24-Hour Newborn Nurse</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Contract / Schedule Type</label>
                  <select
                    name="contractType"
                    value={formData.contractType}
                    onChange={handleInputChange}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white"
                  >
                    <option>Monthly Contract</option>
                    <option>Bi-Monthly Contract</option>
                    <option>Quarterly Contract (Best Value)</option>
                    <option>Per-Shift / Weekly Trial</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Estimated Due Date or Desired Start Date</label>
                <input
                  type="text"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleInputChange}
                  placeholder="e.g. Due next month / Immediate start"
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Special Requirements / Caregiver Notes</label>
                <textarea
                  rows="3"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Mention if twins, C-section recovery assistance, special nursery equipment, etc."
                  className="w-full text-sm px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit to WhatsApp Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-emerald-600/25 transition-all hover:scale-[1.01] text-base group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Send Booking Inquiry to WhatsApp</span>
                <Send className="w-4 h-4 ml-1 opacity-75 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right Column (5 cols): Portrait Video Placeholder (9:16) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="w-full max-w-xs sm:max-w-sm">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-purple-700" />
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-900">
                    Caregiver Video Intro
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-md border border-pink-100">
                  9:16 Portrait
                </span>
              </div>

              {/* Portrait Video Container */}
              <div className="relative aspect-9/16 w-full rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/20 border-4 border-white bg-linear-to-b from-purple-900 via-indigo-950 to-purple-950 flex flex-col justify-between p-6 text-white group">
                
                {/* VIDEO ELEMENT (Replace "/intro.mp4" with your real file) */}
                <video
                  src="/video1.mp4"
                  controls
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Video Info Badge */}
                <div className="relative z-10 flex justify-between items-start pointer-events-none">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                    Behind the Care
                  </span>
                  <div className="w-8 h-8 rounded-full bg-emerald-500/90 flex items-center justify-center text-white">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Video Text Overlay */}
                <div className="relative z-10 pointer-events-none bg-linear-to-t from-black/80 via-black/40 to-transparent -mx-6 -mb-6 p-6 pt-12 rounded-b-3xl">
                  <p className="text-xs font-arabic text-purple-200">أيدينا إلى قلوبكم</p>
                  <p className="text-sm font-bold text-white">Meet Our Riyadh Newborn Aides</p>
                  <p className="text-[11px] text-purple-200/80 mt-1">
                    Watch how our certified caregivers support mothers with gentleness and clinical precision.
                  </p>
                </div>
              </div>

              <p className="text-center text-xs text-gray-400 mt-3">
                Tap to play caregiver demonstration and client walkthrough
              </p>
            </div>
          </motion.div>

        </div>

        {/* Middle Section: Interactive Riyadh Map & Fast Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Riyadh Interactive Google Map (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-lg border border-purple-100 h-80 sm:h-96 relative">
            <iframe
              title="Baraka Homecare Riyadh Service Coverage Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231876.84078696147!2d46.54178553655167!3d24.77426500472491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d48939b%3A0x6b4efb4d24177727!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-purple-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Riyadh Wide Coverage</p>
                <p className="text-[11px] text-gray-500">Dedicated Company Transport to All Districts</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Cards & Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/60 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6 fill-white" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Official WhatsApp</span>
                <p className="text-base font-extrabold text-gray-900">+966 56 390 0946</p>
                <p className="text-xs text-gray-500 font-arabic">0563900946 (الرياض)</p>
              </div>
            </a>

            {/* Direct Phone Call Card */}
            <a
              href={`tel:+${whatsappNumber}`}
              className="p-5 rounded-2xl bg-purple-50 hover:bg-purple-100/80 border border-purple-200/60 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700">24/7 Phone Support</span>
                <p className="text-base font-extrabold text-gray-900">+966 56 390 0946</p>
                <p className="text-xs text-gray-500">Emergency & Scheduling Coordinator</p>
              </div>
            </a>

            {/* Official Website & Working Hours */}
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/70 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-purple-700" />
                <div>
                  <p className="text-xs font-bold text-gray-900">Website</p>
                  <p className="text-xs text-gray-600">www.barakahomecareservices.net</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
                <Clock className="w-5 h-5 text-purple-700" />
                <div>
                  <p className="text-xs font-bold text-gray-900">Shifts</p>
                  <p className="text-xs text-gray-600">24/7 Caregiver Shifts</p>
                </div>
              </div>
            </div>

            {/* Social Media Channels (Custom Safe Inline SVGs) */}
            <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700">Follow Our Channels:</span>
              <div className="flex items-center gap-3">
                
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-purple-50 hover:bg-pink-600 hover:text-white text-purple-700 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
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
                  className="w-9 h-9 rounded-xl bg-purple-50 hover:bg-blue-600 hover:text-white text-purple-700 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* X (formerly Twitter) */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-purple-50 hover:bg-gray-900 hover:text-white text-purple-700 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Twitter / X"
                >
                  <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-600 flex items-center justify-center transition-all shadow-sm"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600 hover:fill-white" />
                </a>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}