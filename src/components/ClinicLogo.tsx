import React from 'react';

interface ClinicLogoProps {
  className?: string;
  variant?: 'full' | 'icon-only' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const textSizes = {
    sm: {
      ar: 'text-base font-bold',
      en: 'text-[10px] tracking-wider font-medium',
    },
    md: {
      ar: 'text-lg md:text-xl font-extrabold',
      en: 'text-xs tracking-wider font-semibold',
    },
    lg: {
      ar: 'text-2xl font-extrabold',
      en: 'text-sm tracking-wider font-semibold',
    },
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Circular Clinic Emblem (Matches official Um Alqura Polyclinic logo) */}
      <div
        className={`relative flex items-center justify-center rounded-full bg-white shadow-sm border border-slate-200/80 p-0.5 shrink-0 overflow-hidden ${iconSizes[size]}`}
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Outer fine circle border */}
          <circle cx="60" cy="60" r="58" stroke="#E2E8F0" strokeWidth="1.5" fill="#FFFFFF" />

          {/* --- Right Islamic Arch (Taupe / Sand Gold #9D9283) --- */}
          {/* Secondary architectural pointed arch */}
          <path
            d="M62 61 V39 C62 31 72 20 75 17 C78 20 88 31 88 39 V61"
            stroke="#9D9283"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner architectural accent line */}
          <path
            d="M68 61 V42 C68 36 73 27 75 24 C77 27 82 36 82 42 V61"
            stroke="#B6ABA0"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Arch pointed finial */}
          <path
            d="M75 14 V17"
            stroke="#9D9283"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* --- Left Islamic Arch (Teal / Turquoise #0D9488) --- */}
          <path
            d="M45 61 V36 C45 28 55 18 58 15 C61 18 71 28 71 36 V61"
            stroke="#0D9488"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner peak line */}
          <path
            d="M58 12 V15"
            stroke="#0D9488"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* --- Stethoscope (Medical Symbol on Left) --- */}
          {/* Earpieces / Binaurals at top-left */}
          <path
            d="M21 34 C21 32 23 32 23 34 V40 C23 44 26 47 30 47 C34 47 37 44 37 40 V34 C37 32 39 32 39 34"
            stroke="#0D9488"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Small ear tips */}
          <circle cx="22" cy="33" r="1.8" fill="#0D9488" />
          <circle cx="38" cy="33" r="1.8" fill="#0D9488" />
          {/* Connecting tube from fork */}
          <path
            d="M30 47 V53 C30 65 20 62 20 73 C20 83 31 83 34 76"
            stroke="#0D9488"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Stethoscope chestpiece / diaphragm */}
          <circle cx="35" cy="74" r="3.6" fill="#0D9488" />
          <circle cx="35" cy="74" r="1.8" fill="#FFFFFF" />

          {/* --- Arabic Calligraphy inside Logo Emblem --- */}
          {/* "مجمع" in prominent Teal */}
          <text
            x="64"
            y="76"
            textAnchor="middle"
            fill="#0D9488"
            fontSize="18"
            fontWeight="800"
            fontFamily="'Cairo', 'Tajawal', sans-serif"
            style={{ letterSpacing: '0.5px' }}
          >
            مـجـمـع
          </text>

          {/* "أم القرى الطبي" in elegant Taupe / Slate */}
          <text
            x="64"
            y="89"
            textAnchor="middle"
            fill="#78716C"
            fontSize="9.5"
            fontWeight="700"
            fontFamily="'Cairo', 'Tajawal', sans-serif"
            style={{ letterSpacing: '0.2px' }}
          >
            أم القرى الطبي
          </text>
        </svg>
      </div>

      {/* Brand Text */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col leading-tight">
          <span
            className={`${textSizes[size].ar} ${
              variant === 'light' ? 'text-white' : 'text-slate-900'
            }`}
          >
            مجمع أم القرى الطبي
          </span>
          <span
            className={`${textSizes[size].en} uppercase ${
              variant === 'light' ? 'text-teal-200' : 'text-teal-700'
            }`}
          >
            Um Alqura Polyclinic
          </span>
        </div>
      )}
    </div>
  );
};
