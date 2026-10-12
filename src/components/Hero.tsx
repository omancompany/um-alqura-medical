import React from 'react';
import { MessageCircle, ArrowLeft, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { CLINIC_INFO, translations } from '../data/translations';
import { Language } from '../types';
const brandedImage = (name: string) => `${import.meta.env.BASE_URL}branded/${name}.webp`;

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

            <nav aria-label={isRtl ? 'روابط سريعة' : 'Quick links'} className="flex flex-wrap gap-3 text-sm font-semibold">
              <a href="#hours" className="px-4 py-3 rounded-xl border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900">{isRtl ? 'مواعيد العمل' : 'Working hours'}</a>
              <a href={CLINIC_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-3 rounded-xl border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900">{isRtl ? 'موقعنا على الخريطة' : 'Get directions'}</a>
              <a href={`tel:+${CLINIC_INFO.phoneRaw}`} className="px-4 py-3 rounded-xl border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900">{isRtl ? 'اتصل بنا' : 'Call us'}</a>
            </nav>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3 items-start">
            <figure className="col-span-2 rounded-3xl bg-white dark:bg-slate-900 border border-teal-100 dark:border-slate-800 p-3 shadow-xl shadow-teal-900/10">
              <img id="hero-clinic-photo" src={brandedImage('clinic-exterior')} alt={isRtl ? 'واجهة مجمع أم القرى الطبي في بركاء' : 'Um Alqura Polyclinic exterior in Barka'} className="w-full max-h-[380px] object-contain rounded-2xl bg-white" loading="eager" width="880" height="1100" />
              <figcaption className="flex items-center justify-between gap-3 px-2 pt-3 pb-1">
                <span className="font-bold text-slate-900 dark:text-white">{isRtl ? 'أهلًا بكم في أم القرى' : 'Welcome to Um Alqura'}</span>
                <a href={CLINIC_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-teal-700 dark:text-teal-300"><MapPin className="w-4 h-4" />{isRtl ? 'موقعنا' : 'Directions'}</a>
              </figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-teal-100 dark:border-slate-800 shadow-sm">
              <img src={brandedImage('reception')} alt={isRtl ? 'استقبال مجمع أم القرى الطبي' : 'Um Alqura Polyclinic reception'} className="w-full aspect-square object-contain bg-white" loading="lazy" width="880" height="1100" />
              <figcaption className="px-3 py-2 text-sm font-semibold">{isRtl ? 'استقبال يرحب بك' : 'A welcoming reception'}</figcaption>
            </figure>
            <a href="#gallery" className="flex flex-col items-center justify-center gap-3 self-stretch rounded-2xl border border-teal-200 dark:border-teal-800 bg-teal-100/70 dark:bg-teal-950 text-teal-900 dark:text-teal-200 px-4 py-6 text-center hover:bg-teal-200/70 dark:hover:bg-teal-900 transition-colors">
              <Sparkles className="w-7 h-7" />
              <span className="font-bold">{isRtl ? 'شاهد المجمع وتجهيزاته' : 'Explore our clinic & equipment'}</span>
              <ArrowIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
