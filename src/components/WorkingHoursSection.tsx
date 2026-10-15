import {contact} from '../contact-config';
import React from 'react';
import { Clock } from 'lucide-react';
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

  return <section id="hours" aria-label={t.hours.title} className="bg-white px-5 py-16 dark:bg-slate-900"><div className="mx-auto max-w-4xl space-y-6 text-center"><span>{t.hours.sectionBadge}</span><h2 className="text-3xl font-bold">{t.hours.title}</h2><p>{t.hours.subtitle}</p><div className="rounded-3xl border p-8"><Clock className="mx-auto mb-4" aria-hidden="true"/><p className="whitespace-pre-line text-xl leading-loose">{isRtl ? contact.hoursAr : contact.hoursEn}</p></div><p>{t.hours.note}</p><button id="hours-book-slot-btn" className="rounded-xl bg-teal-800 px-6 py-3 text-white" onClick={()=>onOpenBookingModal()}>{t.hours.quickBookBtn}</button></div></section>;
};
