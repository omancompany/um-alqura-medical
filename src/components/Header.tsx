import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, MessageCircle, Phone, CalendarCheck, Sun, Moon } from 'lucide-react';
import { ClinicLogo } from './ClinicLogo';
import { CLINIC_INFO, translations } from '../data/translations';
import { Language, Theme } from '../types';

interface HeaderProps {
  currentLang: Language;
  theme: Theme;
  onLanguageChange: (lang: Language) => void;
  onToggleTheme: () => void;
  onOpenBookingModal: (prefilledService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  theme,
  onLanguageChange,
  onToggleTheme,
  onOpenBookingModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.hours, href: '#hours' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const toggleLanguage = () => {
    onLanguageChange(currentLang === 'ar' ? 'en' : 'ar');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm shadow-slate-200/50 dark:shadow-black/40 py-2.5 border-b border-slate-100 dark:border-slate-800'
          : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm py-4 border-b border-slate-100 dark:border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Clinic Logo */}
          <a
            id="header-logo-link"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg transition-transform active:scale-95"
            aria-label={currentLang === 'ar' ? CLINIC_INFO.nameAr : CLINIC_INFO.nameEn}
          >
            <ClinicLogo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-teal-800 dark:hover:text-teal-400 hover:bg-teal-50/70 dark:hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle + Lang Switcher + WhatsApp Appointment CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Dark/Light Mode Switcher */}
            <button
              id="theme-switcher-btn"
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center justify-center p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-teal-50/50 dark:hover:bg-slate-800 transition-all cursor-pointer"
              title={
                theme === 'dark'
                  ? currentLang === 'ar'
                    ? 'التحويل للوضع النهاري ☀️'
                    : 'Switch to Light Mode ☀️'
                  : currentLang === 'ar'
                  ? 'التحويل للوضع الليلي 🌙'
                  : 'Switch to Dark Mode 🌙'
              }
              aria-label="Toggle dark/light mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Language Switcher */}
            <button
              id="lang-switcher-btn"
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 hover:border-teal-300 hover:bg-teal-50/50 dark:hover:bg-slate-800 transition-all cursor-pointer"
              title={currentLang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{t.nav.switchLang}</span>
            </button>

            {/* WhatsApp Appointment CTA */}
            <button
              id="header-appointment-btn"
              type="button"
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 active:scale-98 text-white text-sm font-bold shadow-sm shadow-teal-700/20 transition-all cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{t.nav.bookAppointment}</span>
            </button>
          </div>

          {/* Mobile Actions: Theme + Lang + Hamburger */}
          <div className="flex sm:hidden items-center gap-1.5">
            {/* Mobile Theme Toggle */}
            <button
              id="mobile-theme-btn"
              type="button"
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <button
              id="mobile-lang-btn"
              type="button"
              onClick={toggleLanguage}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            </button>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-teal-50 dark:hover:bg-slate-800 hover:text-teal-800 dark:hover:text-teal-400 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <button
                id="mobile-nav-book-btn"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-teal-700 text-white font-bold text-base shadow-sm hover:bg-teal-800 transition-colors"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>{t.nav.bookAppointment}</span>
              </button>

              <a
                id="mobile-nav-wa-direct"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-500/50 text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب مباشر: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
