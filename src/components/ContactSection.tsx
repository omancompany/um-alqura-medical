import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
  ExternalLink,
  Copy,
  Check,
  Navigation,
} from 'lucide-react';
import { CLINIC_INFO, translations } from '../data/translations';
import { Language } from '../types';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CLINIC_INFO.phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span
            id="contact-badge"
            className="inline-block px-3 py-1 rounded-md bg-teal-100/70 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3"
          >
            {t.contact.sectionBadge}
          </span>
          <h2
            id="contact-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4"
          >
            {t.contact.title}
          </h2>
          <p
            id="contact-subtitle"
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
              {/* Facility Name */}
              <div id="contact-info-facility" className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-100 dark:border-teal-800 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider block">
                    {t.contact.facilityNameLabel}
                  </span>
                  <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-0.5">
                    {currentLang === 'ar' ? CLINIC_INFO.nameAr : CLINIC_INFO.nameEn}
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-100 dark:bg-slate-800" />

              {/* Location */}
              <div id="contact-info-location" className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-100 dark:border-teal-800 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider block">
                    {t.contact.locationLabel}
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                    {currentLang === 'ar' ? CLINIC_INFO.locationAr : CLINIC_INFO.locationEn}
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-100 dark:bg-slate-800" />

              {/* WhatsApp */}
              <div id="contact-info-whatsapp" className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider block">
                    {t.contact.whatsappLabel}
                  </span>
                  <div className="flex items-center gap-3 mt-0.5 flex-wrap">
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg sm:text-xl font-extrabold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
                      dir="ltr"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                    <button
                      id="contact-copy-phone-btn"
                      type="button"
                      onClick={handleCopyPhone}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors cursor-pointer"
                      title={t.contact.buttons.copyPhone}
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-700 dark:text-emerald-400 font-bold">{t.contact.buttons.copied}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                          <span>{t.contact.buttons.copyPhone}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100 dark:bg-slate-800" />

              {/* Instagram */}
              <div id="contact-info-instagram" className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-950/50 border border-pink-100 dark:border-pink-800 text-pink-700 dark:text-pink-400 flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider block">
                    {t.contact.instagramLabel}
                  </span>
                  <a
                    id="contact-instagram-link"
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-pink-700 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition-colors inline-flex items-center gap-1.5 mt-0.5"
                    dir="ltr"
                  >
                    <span>{CLINIC_INFO.instagramUsername}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                id="contact-whatsapp-action-btn"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-sm transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.contact.buttons.whatsapp}</span>
              </a>

              <a
                id="contact-instagram-action-btn"
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-pink-300 dark:border-pink-800 hover:border-pink-500 text-pink-700 dark:text-pink-400 hover:bg-pink-50/50 dark:hover:bg-slate-800 font-bold text-sm sm:text-base shadow-xs transition-all"
              >
                <Instagram className="w-5 h-5" />
                <span>{t.contact.buttons.instagram}</span>
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-6 flex flex-col">
            <div
              id="clinic-map-card"
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 font-bold text-base sm:text-lg">
                    <Navigation className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    <span>{t.contact.mapCardTitle}</span>
                  </div>
                  <span className="text-xs bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 px-2.5 py-1 rounded-md font-semibold border border-teal-100/50 dark:border-teal-900/50">
                    بركاء، مسقط
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4">
                  {t.contact.mapDirectionsHint}
                </p>

                {/* Map Frame */}
                <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-inner">
                  <iframe
                    title={currentLang === 'ar' ? 'خريطة مجمع أم القرى الطبي في بركاء' : 'Um Alqura Polyclinic map Barka'}
                    src="https://maps.google.com/maps?q=Barka%20Oman&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Overlay direct button */}
                  <div className="absolute bottom-3 inset-x-3 flex justify-center pointer-events-none">
                    <a
                      id="map-open-google-btn"
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 dark:bg-slate-800/95 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-bold shadow-md border border-slate-200 dark:border-slate-700 hover:border-teal-400 transition-all"
                    >
                      <MapPin className="w-4 h-4 text-rose-600" />
                      <span>{t.contact.buttons.googleMaps}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom directions note */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{currentLang === 'ar' ? 'سلطنة عمان - بركاء' : 'Sultanate of Oman - Barka'}</span>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 dark:text-teal-400 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>{t.contact.buttons.googleMaps}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
