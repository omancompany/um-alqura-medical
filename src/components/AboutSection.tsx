import React from 'react';
import { UserCheck, Award, HeartHandshake } from 'lucide-react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'userCheck':
        return <UserCheck className="w-7 h-7 text-teal-700 dark:text-teal-400" />;
      case 'awardBadge':
        return <Award className="w-7 h-7 text-teal-700 dark:text-teal-400" />;
      case 'heartHand':
        return <HeartHandshake className="w-7 h-7 text-teal-700 dark:text-teal-400" />;
      default:
        return <UserCheck className="w-7 h-7 text-teal-700 dark:text-teal-400" />;
    }
  };

  return (
    <section
      id="about"
      aria-label="About Us"
      className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span
            id="about-badge"
            className="inline-block px-3 py-1 rounded-md bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-900 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3"
          >
            {t.about.sectionBadge}
          </span>
          <h2
            id="about-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-5"
          >
            {t.about.title}
          </h2>
          <p
            id="about-description"
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {t.about.description}
          </p>
        </div>

        <details className="group">
          <summary className="mx-auto w-fit cursor-pointer list-none rounded-xl border border-teal-200 dark:border-teal-800 px-6 py-3 font-bold text-teal-800 dark:text-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600">
            <span className="group-open:hidden">{currentLang === 'ar' ? 'تعرّف علينا' : 'Learn about us'}</span>
            <span className="hidden group-open:inline">{currentLang === 'ar' ? 'إخفاء التفاصيل' : 'Hide details'}</span>
          </summary>
        {/* 3 Elegant Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.about.trustCards.map((card) => (
            <div
              key={card.id}
              id={`trust-card-${card.id}`}
              className="group p-7 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-teal-300 dark:hover:border-teal-500 hover:bg-teal-50/20 dark:hover:bg-slate-800 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-100/80 dark:bg-teal-950/80 border border-teal-200/60 dark:border-teal-800/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {getIcon(card.iconName)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        </details>
      </div>
    </section>
  );
};
