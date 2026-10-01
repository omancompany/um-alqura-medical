import React from 'react';
import { MessageCircle, ArrowLeft, ArrowRight, ShieldCheck, MapPin, Clock, Sparkles } from 'lucide-react';
import { CLINIC_INFO, translations } from '../data/translations';
import { Language } from '../types';
import heroClinicImg from '../assets/images/gulf_clinic_reception_1789342603869.jpg';

interface HeroProps {
  currentLang: Language;
  onOpenBookingModal: (prefilledService?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenBookingModal }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-teal-50/70 via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300"
    >
      {/* Decorative ambient medical backdrop accents */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-teal-100/40 dark:bg-teal-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-emerald-100/40 dark:bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Location & Trust Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-teal-900 dark:text-teal-200 text-xs sm:text-sm font-semibold mb-6 shadow-xs"
            >
              <MapPin className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-[1.25] tracking-tight mb-6"
            >
              {t.hero.title}
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-description"
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8"
            >
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              {/* Primary CTA: WhatsApp Booking */}
              <a
                id="hero-primary-cta"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-base shadow-md shadow-emerald-700/20 transition-all cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>{t.hero.primaryCta}</span>
              </a>

              {/* Secondary CTA: Explore Services */}
              <a
                id="hero-secondary-cta"
                href="#services"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-teal-500 bg-white dark:bg-slate-800 hover:bg-teal-50/50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 hover:text-teal-900 dark:hover:text-white font-bold text-base transition-all cursor-pointer"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Trust & Schedule Info Strip */}
            <div className="w-full pt-6 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span>{t.hero.quickSchedule}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>{isRtl ? 'عيادة مرخصة وموثوقة' : 'Certified & Trusted Clinic'}</span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/10 border-4 border-white dark:border-slate-800 bg-white dark:bg-slate-900">
                <img
                  id="hero-clinic-photo"
                  src={heroClinicImg}
                  alt={isRtl ? 'صالة الاستقبال في مجمع أم القرى الطبي' : 'Um Alqura Polyclinic reception lounge'}
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />

                {/* Floating highlight card on the image */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-100 dark:border-slate-800 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      {isRtl ? 'مجمع أم القرى الطبي' : 'Um Alqura Polyclinic'}
                    </span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400">
                      {isRtl ? 'بركاء - رعاية متخصصة وعلاج طبيعي' : 'Barka - Specialized Care & Physiotherapy'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
