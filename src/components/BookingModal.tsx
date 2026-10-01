import React, { useState } from 'react';
import { X, MessageCircle, CalendarCheck, Clock, Check } from 'lucide-react';
import { CLINIC_INFO, translations } from '../data/translations';
import { Language } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  prefilledService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  prefilledService = 'physiotherapy',
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  const [name, setName] = useState('');
  const [service, setService] = useState<'physiotherapy' | 'general'>(
    prefilledService === 'general' ? 'general' : 'physiotherapy'
  );
  const [shift, setShift] = useState<'morning' | 'evening'>('morning');
  const [day, setDay] = useState('');

  if (!isOpen) return null;

  const daysOptions = isRtl
    ? ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس']
    : ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceName =
      service === 'physiotherapy'
        ? isRtl
          ? 'العلاج الطبيعي'
          : 'Physiotherapy'
        : isRtl
        ? 'استفسار / استشارة عامة'
        : 'General Inquiry';

    const shiftName =
      shift === 'morning'
        ? isRtl
          ? 'الفترة الصباحية (9:00 ص – 1:00 م)'
          : 'Morning Shift (9:00 AM – 1:00 PM)'
        : isRtl
        ? 'الفترة المسائية (4:00 م – 8:00 م)'
        : 'Evening Shift (4:00 PM – 8:00 PM)';

    let messageText = '';
    if (isRtl) {
      messageText = `السلام عليكم ورحمة الله وبركاته،\nأود التنسيق لحجز موعد في مجمع أم القرى الطبي في بركاء:\n` +
        `• الخدمة المطلوبة: ${serviceName}\n` +
        `• الفترة المفضلة: ${shiftName}\n` +
        (day ? `• اليوم المفضل: ${day}\n` : '') +
        (name.trim() ? `• اسم المراجع: ${name.trim()}\n` : '') +
        `شاكرين ومقدرين لكم حسن الرعاية.`;
    } else {
      messageText = `Hello, I would like to schedule an appointment at Um Alqura Polyclinic in Barka:\n` +
        `• Service: ${serviceName}\n` +
        `• Preferred Shift: ${shiftName}\n` +
        (day ? `• Preferred Day: ${day}\n` : '') +
        (name.trim() ? `• Patient Name: ${name.trim()}\n` : '') +
        `Thank you.`;
    }

    const url = `${CLINIC_INFO.whatsappUrl}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="booking-modal-content"
        className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          id="booking-modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 end-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-teal-100 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 flex items-center justify-center shrink-0">
            <CalendarCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
              {t.bookingModal.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.bookingModal.subtitle}
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {/* Service Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              {t.bookingModal.serviceLabel}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setService('physiotherapy')}
                className={`px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-between transition-all cursor-pointer ${
                  service === 'physiotherapy'
                    ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-200 shadow-xs'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                }`}
              >
                <span>{t.bookingModal.serviceOptionPhysio}</span>
                {service === 'physiotherapy' && <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />}
              </button>

              <button
                type="button"
                onClick={() => setService('general')}
                className={`px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-between transition-all cursor-pointer ${
                  service === 'general'
                    ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-200 shadow-xs'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                }`}
              >
                <span>{t.bookingModal.serviceOptionGeneral}</span>
                {service === 'general' && <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />}
              </button>
            </div>
          </div>

          {/* Shift Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              {t.bookingModal.shiftLabel}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setShift('morning')}
                className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                  shift === 'morning'
                    ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-200'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                }`}
              >
                <span>{t.bookingModal.shiftMorning}</span>
                {shift === 'morning' && <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />}
              </button>

              <button
                type="button"
                onClick={() => setShift('evening')}
                className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                  shift === 'evening'
                    ? 'border-teal-600 bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-200'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/60'
                }`}
              >
                <span>{t.bookingModal.shiftEvening}</span>
                {shift === 'evening' && <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />}
              </button>
            </div>
          </div>

          {/* Preferred Day (Optional) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              {t.bookingModal.dayLabel}
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
              {daysOptions.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDay(day === d ? '' : d)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                    day === d
                      ? 'border-teal-600 bg-teal-600 text-white font-bold'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Patient Name (Optional) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              {t.bookingModal.nameLabel}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.bookingModal.namePlaceholder}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
          </div>

          {/* Direct note */}
          <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
            {t.bookingModal.directNote}
          </p>

          {/* Submit CTA */}
          <div className="pt-3">
            <button
              id="booking-modal-submit-btn"
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-base shadow-md shadow-emerald-700/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.bookingModal.sendWhatsAppBtn}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
