import React from 'react';
import { Clock, Calendar, AlertCircle, CalendarCheck, Sun, Moon } from 'lucide-react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface WorkingHoursSectionProps {
  currentLang: Language;
  onOpenBookingModal: (prefilledService?: string) => void;
}

export const WorkingHoursSection: React.FC<WorkingHoursSectionProps> = ({
  currentLang,
  onOpenBookingModal,
}) => {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  return (
    <section
      id="hours"
      aria-label="Working Hours"
      className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span
            id="hours-badge"
            className="inline-block px-3 py-1 rounded-md bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-900 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3"
          >
            {t.hours.sectionBadge}
          </span>
          <h2
            id="hours-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4"
          >
            {t.hours.title}
          </h2>
          <p
            id="hours-subtitle"
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {t.hours.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Working Schedule Container */}
          <div
            id="working-hours-card"
            className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-sm"
          >
            {/* Main Header of the Schedule */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {t.hours.scheduleDays}
                  </h3>
                  <span className="text-xs sm:text-sm text-teal-800 dark:text-teal-400 font-medium">
                    {isRtl ? 'أيام الاستقبال الرسمية للأسبوع' : 'Weekly Official Receiving Days'}
                  </span>
                </div>
              </div>

              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 text-xs font-bold w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{isRtl ? 'نظام الفترتين (صباحي ومسائي)' : 'Two-Shift System'}</span>
              </div>
            </div>

            {/* Shifts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {/* Morning Shift */}
              <div
                id="shift-morning"
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-start gap-4 hover:border-teal-300 dark:hover:border-teal-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200/70 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-800 dark:text-teal-400 uppercase tracking-wider block mb-1">
                    {t.hours.morningShiftLabel}
                  </span>
                  <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                    {t.hours.morningShiftTime}
                  </p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
                    {isRtl ? 'استقبال المراجعين وجلسات العلاج' : 'Reception and therapy sessions'}
                  </span>
                </div>
              </div>

              {/* Evening Shift */}
              <div
                id="shift-evening"
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-start gap-4 hover:border-teal-300 dark:hover:border-teal-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/70 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300 flex items-center justify-center shrink-0">
                  <Moon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-800 dark:text-teal-400 uppercase tracking-wider block mb-1">
                    {t.hours.eveningShiftLabel}
                  </span>
                  <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                    {t.hours.eveningShiftTime}
                  </p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
                    {isRtl ? 'استقبال المراجعين وجلسات العلاج' : 'Reception and therapy sessions'}
                  </span>
                </div>
              </div>
            </div>

            {/* Friday / Weekend note */}
            <div className="flex items-center justify-between flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-900/70 p-4 rounded-xl border border-slate-200/60 dark:border-slate-700/60 mb-6">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {t.hours.fridayLabel}:
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                {t.hours.fridayStatus}
              </span>
            </div>

            {/* Mandatory Note according to requirements */}
            <div
              id="hours-important-note"
              className="p-4 sm:p-5 rounded-2xl bg-teal-50/90 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/60 flex items-start gap-3 text-teal-950 dark:text-teal-200"
            >
              <AlertCircle className="w-5 h-5 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
              <div className="text-sm sm:text-base font-semibold">
                <span className="font-bold">{isRtl ? 'ملاحظة هامة: ' : 'Important Notice: '}</span>
                <span>{t.hours.note}</span>
              </div>
            </div>

            {/* Quick Action */}
            <div className="mt-8 text-center">
              <button
                id="hours-book-slot-btn"
                type="button"
                onClick={() => onOpenBookingModal()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 active:scale-98 text-white font-bold text-sm sm:text-base shadow-sm transition-all cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{t.hours.quickBookBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
