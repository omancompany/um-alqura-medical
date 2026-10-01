import React from 'react';
import { MessageCircle, ShieldCheck, PhoneCall } from 'lucide-react';
import { CLINIC_INFO, translations } from '../data/translations';
import { Language } from '../types';

interface AppointmentCtaSectionProps {
  currentLang: Language;
}

export const AppointmentCtaSection: React.FC<AppointmentCtaSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  return (
    <section
      id="appointment-cta"
      aria-label="Appointment Call To Action"
      className="py-16 md:py-20 bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900 dark:from-teal-950 dark:via-slate-950 dark:to-emerald-950 text-white relative overflow-hidden transition-colors duration-300"
    >
      {/* Subtle geometric medical circles */}
      <div className="absolute top-0 end-0 -z-0 w-80 h-80 bg-teal-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 start-0 -z-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-200 text-xs sm:text-sm font-semibold mb-6">
          <ShieldCheck className="w-4 h-4 text-emerald-300" />
          <span>{isRtl ? 'حجز سريع ومباشر' : 'Fast & Direct Booking'}</span>
        </div>

        {/* Title */}
        <h2
          id="appointment-cta-title"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5"
        >
          {t.ctaBanner.title}
        </h2>

        {/* Text */}
        <p
          id="appointment-cta-description"
          className="text-base sm:text-lg md:text-xl text-teal-100/90 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {t.ctaBanner.text}
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="appointment-cta-whatsapp-btn"
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-98 text-slate-950 font-extrabold text-base sm:text-lg shadow-lg shadow-emerald-500/30 transition-all cursor-pointer group"
          >
            <MessageCircle className="w-6 h-6 text-slate-950 transition-transform group-hover:scale-110" />
            <span>{t.ctaBanner.button}</span>
          </a>

          <a
            id="appointment-cta-phone-link"
            href={`tel:+${CLINIC_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base transition-colors"
          >
            <PhoneCall className="w-5 h-5 text-teal-300" />
            <span dir="ltr">{CLINIC_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Support Note */}
        <p className="text-xs text-teal-300/80 mt-6">
          {t.ctaBanner.phoneSupport}
        </p>
      </div>
    </section>
  );
};
