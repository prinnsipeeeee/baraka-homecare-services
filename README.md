# 💜 Baraka Homecare Services — Landing Page

> **"أيدينا إلى قلوبكم — Our Hands to Your Hearts"**  
> A modern, responsive, high-converting home healthcare web application designed specifically for **Baraka Homecare Services** in **Riyadh, Kingdom of Saudi Arabia (KSA)**.

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Developed by](https://img.shields.io/badge/Developed%20by-Yaramay-9333EA?style=flat&logo=codefactor)](https://github.com/)

---

## 📖 Overview

**Baraka Homecare Services** specializes in professional newborn infant care, postpartum maternal recovery, and licensed night-duty caregivers across Riyadh. 

This landing page was built to bridge Saudi families with certified nurse aides through streamlined, friction-free WhatsApp communication, rich interactive visual demonstrations, and transparent care packages.

---

## ✨ Key Features

### 1. 🧭 Dynamic Sticky Navigation (`Navbar.jsx`)
- **Top Emergency & 24/7 Status Bar**: Displays real-time availability, accreditation badges, and Arabic branding.
- **Dynamic Glassmorphism**: Smooth frosted-glass blur transition upon page scroll.
- **Mobile Responsive Drawer**: Animated mobile navigation menu with direct WhatsApp & Call triggers.

### 2. 🌟 High-Impact Hero Section (`Hero.jsx`)
- **Culturally Rooted Branding**: Integrates the official Arabic slogan *"أيدينا إلى قلوبكم"* alongside English copy tailored to the Saudi healthcare market.
- **Floating Trust Badges**: Live indicators for certified nurse availability and 500+ satisfied families.
- **Dual Conversion Actions**: Instant WhatsApp booking and direct phone consultation.

### 3. 🤝 Credibility & Storytelling (`About.jsx`)
- **Company Mission & Core Values**: Compassionate Dignity, Licensed Clinical Excellence, and 24/7 Family Peace of Mind.
- **Live Metric Counter**: Showcases 100% certified staff, 99% satisfaction rate, and on-call response metrics.
- **Flexible Image Placeholders**: Designed for easy integration of local Riyadh clinical team photos.

### 4. 🍼 Interactive Services Showcase (`Services.jsx`)
- **Flyer-Aligned Packages**: Directly integrates the official marketing flyers (`w1.jpeg` through `w4.jpeg`):
  - *Your Peace, Your Plan* (Maternal sleep & recovery protection)
  - *You Rest, We Hold The Baby* (Holistic newborn feeding, bathing & umbilical hygiene)
  - *Book Your Newborn Care Early* (3-week pre-delivery reservation in Riyadh)
  - *Night Duty Caregivers* (12 AM – 12 PM dedicated night shifts)
- **Interactive Floating State Modal**: Clicking any service opens an animated detail modal detailing duties, contract discounts (Monthly/Bi-Monthly/Quarterly), and direct 1-click WhatsApp package booking.

### 5. 💎 High-Contrast "Why Choose Us" Section (`WhyUs.jsx`)
- **Luxury Royal Purple Gradient**: Provides visual rhythm between light sections.
- **The Baraka Difference Comparison**: Direct head-to-head comparison between *Standard Babysitters* and *Baraka Clinical Newborn Specialists*.
- **Punctuality Guarantee**: Highlights company-provided private transport across Riyadh districts with zero commute delays.

### 6. ⭐ Verified Client Testimonials (`Testimonials.jsx`)
- **Riyadh District Context**: Reviews from verified clients across Al Malqa, Hittin, Al Nakheel, and Al Olaya.
- **Verified WhatsApp Badges**: Enhances social proof for prospective parents seeking night-shift nurses.

### 7. 📲 WhatsApp Lead Generator & Video Hub (`Contact.jsx`)
- **Smart Inquiry Builder**: One-click preset template chips (*Newborn Night Duty*, *Pre-Delivery Booking*, *Stay-In*, *Quarterly Contract*).
- **Auto-Formatted WhatsApp Dispatcher**: Prepares structured, professional inquiry texts sent directly to `+966 56 390 0946`.
- **9:16 Portrait Video Player**: Vertical video showcase for mobile-first caregiver introductions and nursery routines.
- **Interactive Riyadh Service Map**: Embedded Google map highlighting city-wide coverage.

### 8. 🌌 Deluxe Footer with Developer Signature (`Footer.jsx`)
- **Visual Aesthetic**: Rich deep-purple background styled with a modern dot-matrix grid pattern (`radial-gradient`) and ambient light orbs.
- **Spacious 5-Column Hierarchy**: Comprehensive links covering site navigation, care programs, Riyadh districts, and official contacts.
- **Developer Credit**: Proudly stamped with *"Developed with passion by **Yaramay**"*.

### 9. 🟢 Universal Floating WhatsApp Widget
- Global floating action button with live pulsating indicator, ensuring visitors can connect at any point in their browsing experience.

---

## 🎨 Design System & Palette

| Color Role | Hex Code | Tailwind Equivalent | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | `#581C87` – `#3B0764` | `purple-900` / `purple-950` | Primary branding, contrast banners, luxury footer |
| **Accent Glow** | `#DB2777` – `#E11D48` | `pink-600` / `rose-600` | Slogan badges, callouts, heart accents |
| **Call to Action** | `#059669` – `#10B981` | `emerald-600` / `emerald-500` | Official WhatsApp buttons & active status rings |
| **Surface / Base**| `#FAFAF9` – `#FFFFFF` | `white` / `purple-50/30` | Clean background for maximum readability |

---

## 📁 Project Structure

```text
baraka-landing-page/
├── public/
│   ├── logo.png             # Official Baraka Homecare Logo
│   ├── w1.jpeg              # Your Peace, Your Plan Flyer
│   ├── w2.jpeg              # You Rest, We Hold The Baby Flyer
│   ├── w3.jpeg              # Book Early in Riyadh Flyer
│   ├── w4.jpeg              # Night Duty Caregivers Flyer
│   └── intro.mp4            # (Optional) 9:16 Portrait Intro Video
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation header with WhatsApp CTA
│   │   ├── Hero.jsx         # Hero banner with trust metrics
│   │   ├── About.jsx        # Company background, stats, & core values
│   │   ├── Services.jsx     # 4 Core packages with interactive detail modal
│   │   ├── WhyUs.jsx        # Purple gradient comparison section
│   │   ├── Testimonials.jsx # Verified family reviews from Riyadh
│   │   ├── Contact.jsx      # WhatsApp template builder, portrait video & map
│   │   └── Footer.jsx       # 5-Column footer with Yaramay credit
│   ├── App.css
│   ├── App.jsx              # Main orchestrator component
│   ├── index.css            # Tailwind directives & global font setup
│   └── main.jsx             # React DOM entrypoint
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js