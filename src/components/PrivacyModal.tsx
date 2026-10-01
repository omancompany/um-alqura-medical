import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { translations } from '../data/translations';
import { Language } from '../types';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose, currentLang }) => {
  const t = translations[currentLang];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="privacy-modal-content"
        className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="privacy-modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 end-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {t.privacy.title}
          </h3>
        </div>

        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
          <p>{t.privacy.p1}</p>
          <p>{t.privacy.p2}</p>
          <p>{t.privacy.p3}</p>
        </div>

        <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm transition-colors cursor-pointer"
          >
            {t.privacy.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
