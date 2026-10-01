import React from 'react';
import {
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
  ShieldAlert,
  ArrowUp,
  Heart,
} from 'lucide-react';
import { ClinicLogo } from './ClinicLogo';
import { CLINIC_INFO, translations } from '../data/translations';
import { Language } from '../types';

interface FooterProps {
  currentLang: Language;
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenPrivacyModal }) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.hours, href: '#hours' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer
      id="main-footer"
      aria-label="Footer"
      className="bg-slate-900 dark:bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 dark:border-slate-850 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Clinic Brand & Short Description */}
          <div className="lg:col-span-5 space-y-4">
            <ClinicLogo variant="light" size="md" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              {t.footer.shortDescription}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-teal-400 font-semibold">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>{isRtl ? CLINIC_INFO.locationAr : CLINIC_INFO.locationEn}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  id="footer-privacy-link-btn"
                  type="button"
                  onClick={onOpenPrivacyModal}
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>{t.footer.privacyNoticeLink}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Confirmed Medical Service */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.contactTitle}
            </h4>

            <div className="space-y-3 text-sm">
              {/* WhatsApp */}
              <a
                id="footer-whatsapp-link"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400">WhatsApp</span>
                  <span dir="ltr" className="font-semibold text-slate-200">
                    {CLINIC_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                id="footer-instagram-link"
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-pink-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-pink-950/80 border border-pink-800/60 text-pink-400 flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400">Instagram</span>
                  <span dir="ltr" className="font-semibold text-slate-200">
                    {CLINIC_INFO.instagramUsername}
                  </span>
                </div>
              </a>

              {/* Location link */}
              <a
                id="footer-maps-link"
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-teal-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-950/80 border border-teal-800/60 text-teal-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400">Google Maps</span>
                  <span className="font-semibold text-slate-200 text-xs">
                    {isRtl ? 'بركاء، مسقط، سلطنة عمان' : 'Barka, Muscat, Oman'}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p id="footer-copyright">
            {t.footer.copyright}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              {t.footer.locationCity}
            </span>
            <button
              id="footer-scroll-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label={isRtl ? 'الرجوع للأعلى' : 'Scroll to top'}
              title={isRtl ? 'الرجوع للأعلى' : 'Scroll to top'}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
