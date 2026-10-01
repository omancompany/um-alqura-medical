import React from 'react';
import { Activity, CheckCircle2, MessageCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, translations } from '../data/translations';
import { Language } from '../types';
import physioImg from '../assets/images/gulf_doctor_desk_1789342615606.jpg';

interface ServicesSectionProps {
  currentLang: Language;
  onOpenBookingModal: (prefilledService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onOpenBookingModal,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const handleBookPhysioWhatsApp = () => {
    const text = isRtl
      ? 'السلام عليكم، أود حجز موعد لخدمة العلاج الطبيعي في مجمع أم القرى الطبي في بركاء'
      : 'Hello, I would like to book an appointment for Physiotherapy at Um Alqura Polyclinic in Barka';
    window.open(`${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="services"
      aria-label="Medical Services"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span
            id="services-badge"
            className="inline-block px-3 py-1 rounded-md bg-teal-100/70 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3"
          >
            {t.services.sectionBadge}
          </span>
          <h2
            id="services-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4"
          >
            {t.services.title}
          </h2>
          <p
            id="services-subtitle"
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {t.services.subtitle}
          </p>
        </div>

        {/* Confirmed Medical Service: العلاج الطبيعي (Physiotherapy) */}
        <div className="max-w-5xl mx-auto">
          <div
            id="service-card-physiotherapy"
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-black/50 overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all hover:border-teal-300 dark:hover:border-teal-600"
          >
            {/* Visual Media Column */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
              <img
                src={physioImg}
                alt={isRtl ? 'عيادة العلاج الطبيعي في مجمع أم القرى الطبي' : 'Physiotherapy suite at Um Alqura Polyclinic'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:hidden" />
              
              {/* Badge overlay */}
              <div className="absolute top-4 start-4 px-3 py-1.5 rounded-lg bg-teal-800/90 backdrop-blur-md text-white text-xs font-bold shadow-sm flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-teal-300" />
                <span>{t.services.physiotherapy.badge}</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded-md">
                    {isRtl ? 'رعاية متخصصة' : 'Specialized Care'}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {CLINIC_INFO.locationAr.split('،')[0]} • Barka
                  </span>
                </div>

                <h3
                  id="physiotherapy-service-title"
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-4"
                >
                  {t.services.physiotherapy.title}
                </h3>

                <p
                  id="physiotherapy-service-description"
                  className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6"
                >
                  {t.services.physiotherapy.description}
                </p>

                {/* Service Quality Points */}
                <div className="space-y-3 mb-8">
                  {t.services.physiotherapy.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  id="physiotherapy-appointment-cta"
                  type="button"
                  onClick={handleBookPhysioWhatsApp}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 active:scale-98 text-white font-bold text-base shadow-md shadow-teal-700/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.services.physiotherapy.cta}</span>
                </button>

                <button
                  id="physiotherapy-quick-plan-btn"
                  type="button"
                  onClick={() => onOpenBookingModal('physiotherapy')}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-teal-400 bg-white dark:bg-slate-800 hover:bg-teal-50/40 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-colors cursor-pointer"
                >
                  <span>{isRtl ? 'اختيار الموعد المناسب' : 'Select Preferred Time'}</span>
                  <ArrowIcon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
