/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkingHoursSection } from './components/WorkingHoursSection';
import { AppointmentCtaSection } from './components/AppointmentCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { PrivacyModal } from './components/PrivacyModal';
import { FriendlyChatBot } from './components/FriendlyChatBot';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('um_alqura_theme') as Theme | null;
      if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string>('physiotherapy');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Sync HTML document direction and language attribute
  useEffect(() => {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Sync Dark / Light Mode with HTML document class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('um_alqura_theme', theme);
    } catch {
      // Ignore quota / private mode storage error
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenBookingModal = (prefilledService?: string) => {
    if (prefilledService) {
      setBookingService(prefilledService);
    } else {
      setBookingService('physiotherapy');
    }
    setIsBookingModalOpen(true);
  };

  return (
    <div
      id="um-alqura-app"
      className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300"
    >
      {/* 1. Sticky Header with Logo, Nav, Theme Switcher, WhatsApp CTA, and Language Switcher */}
      <Header
        currentLang={currentLang}
        theme={theme}
        onLanguageChange={setCurrentLang}
        onToggleTheme={toggleTheme}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 3. Trust and Introduction Section */}
        <AboutSection
          currentLang={currentLang}
        />

        {/* 4. Medical Services Section (Confirmed: Physiotherapy) */}
        <ServicesSection
          currentLang={currentLang}
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 5. Working Hours Section */}
        <WorkingHoursSection
          currentLang={currentLang}
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 6. Appointment CTA Section */}
        <AppointmentCtaSection
          currentLang={currentLang}
        />

        {/* 7. Contact Section */}
        <ContactSection
          currentLang={currentLang}
        />
      </main>

      {/* 8. Footer */}
      <Footer
        currentLang={currentLang}
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
      />

      {/* Friendly Automated AI Doctor Bot (د. بشوش 🩺) */}
      <FriendlyChatBot
        currentLang={currentLang}
        theme={theme}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Floating WhatsApp Action for Quick Booking */}
      <FloatingWhatsApp
        currentLang={currentLang}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Interactive WhatsApp Booking Preparation Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        currentLang={currentLang}
        prefilledService={bookingService}
      />

      {/* Privacy Notice Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}

