import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CLINIC_INFO, translations } from '../data/translations';
import { Language } from '../types';

interface FloatingWhatsAppProps {
  currentLang: Language;
  onOpenBookingModal: (prefilledService?: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  currentLang,
  onOpenBookingModal,
}) => {
  const t = translations[currentLang];
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside
      id="floating-whatsapp-container"
      aria-label="Floating WhatsApp"
      className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-2 group"
    >
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border border-slate-200 shadow-xl text-slate-800 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>{t.floatingWhatsApp.label}</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="p-0.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Caret */}
          <div className="absolute -bottom-1.5 end-5 w-3 h-3 bg-white border-b border-e border-slate-200 transform rotate-45" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Um Alqura Polyclinic on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white shadow-xl shadow-emerald-600/30 transition-all duration-300 hover:rotate-6"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
};
