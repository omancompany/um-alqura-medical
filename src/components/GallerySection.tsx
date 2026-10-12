import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Images, MessageCircle, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/translations';
import { Language } from '../types';

const photos = [
  { image: 'clinic-entrance', group: 'clinic', ar: 'مدخل المجمع', en: 'Clinic entrance', descriptionAr: 'تعرف على مدخل مجمع أم القرى قبل زيارتك.', descriptionEn: 'Get familiar with the entrance before your visit.' },
  { image: 'reception', group: 'clinic', ar: 'منطقة الاستقبال', en: 'Reception area', descriptionAr: 'هنا تبدأ زيارتك وتنسيق موعدك مع فريق الاستقبال.', descriptionEn: 'The starting point for your visit and appointment coordination.' },
  { image: 'treatment-room', group: 'equipment', ar: 'غرفة العلاج الطبيعي', en: 'Physiotherapy room', descriptionAr: 'نظرة على غرفة الجلسات وتجهيزاتها.', descriptionEn: 'A look at the treatment room and its equipment.' },
  { image: 'therapy-equipment', group: 'equipment', ar: 'تجهيزات الجلسات', en: 'Session equipment', descriptionAr: 'تواصل معنا لمعرفة تفاصيل الجلسات المتاحة.', descriptionEn: 'Contact us for details about available sessions.' },
  { image: 'rehabilitation-station', group: 'equipment', ar: 'تجهيزات التأهيل', en: 'Rehabilitation equipment', descriptionAr: 'نظرة أقرب على تجهيزات قسم العلاج الطبيعي.', descriptionEn: 'A closer look at the physiotherapy department equipment.' },
  { image: 'exercise-equipment', group: 'equipment', ar: 'معدات التمارين', en: 'Exercise equipment', descriptionAr: 'معدات التمارين ضمن تجهيزات القسم.', descriptionEn: 'Exercise equipment within the department.' },
  { image: 'therapy-accessories', group: 'equipment', ar: 'ملحقات العلاج الطبيعي', en: 'Physiotherapy accessories', descriptionAr: 'مجموعة من الملحقات المستخدمة في القسم.', descriptionEn: 'A selection of accessories used in the department.' },
];

export const GallerySection: React.FC<{ currentLang: Language }> = ({ currentLang }) => {
  const ar = currentLang === 'ar';
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState<(typeof photos)[number] | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const imageUrl = (name: string) => `${import.meta.env.BASE_URL}branded/${name}.webp`;

  useEffect(() => {
    if (selected) dialog.current?.showModal();
    else dialog.current?.close();
  }, [selected]);

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 dark:text-teal-300 mb-3"><Images className="w-4 h-4" />{ar ? 'أم القرى بالصور' : 'Um Alqura in pictures'}</span>
            <h2 id="gallery-title" className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">{ar ? 'تعرّف على المكان قبل زيارتك' : 'Explore before your visit'}</h2>
            <p className="text-slate-600 dark:text-slate-300">{ar ? 'المجمع وتجهيزاته، بنظرة أقرب.' : 'A closer look at our clinic and equipment.'}</p>
          </div>
          <div role="group" aria-label={ar ? 'تصفية الصور' : 'Filter photos'} className="flex flex-wrap gap-2">
            {[{id: 'all', ar: 'الكل', en: 'All'}, {id: 'clinic', ar: 'المجمع', en: 'Clinic'}, {id: 'equipment', ar: 'التجهيزات', en: 'Equipment'}].map(item => (
              <button key={item.id} type="button" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)} className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${filter === item.id ? 'bg-teal-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-teal-50 dark:hover:bg-teal-950'}`}>{ar ? item.ar : item.en}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.filter(photo => filter === 'all' || filter === photo.group).map(photo => (
            <article key={photo.image} className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 transition-shadow hover:shadow-lg hover:shadow-teal-900/10">
              <button type="button" onClick={() => setSelected(photo)} aria-label={ar ? `تكبير صورة ${photo.ar}` : `Enlarge ${photo.en}`} className="block w-full group relative bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600">
                <img src={imageUrl(photo.image)} alt={ar ? photo.ar : photo.en} width="880" height="1100" loading="lazy" className="w-full h-72 sm:h-80 object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
                <span className="absolute top-3 end-3 p-2 rounded-full bg-white/90 text-teal-800 border border-teal-100"><ArrowUpRight className="w-4 h-4" /></span>
              </button>
              <div className="p-5">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{ar ? photo.ar : photo.en}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{ar ? photo.descriptionAr : photo.descriptionEn}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-teal-50 dark:bg-teal-950 border border-teal-100 dark:border-teal-900 p-6">
          <p className="font-semibold text-teal-900 dark:text-teal-200">{ar ? 'لديك سؤال عن التجهيزات أو الجلسات؟' : 'Questions about equipment or sessions?'}</p>
          <a href={CLINIC_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-bold text-sm"><MessageCircle className="w-4 h-4" />{ar ? 'اسألنا عبر واتساب' : 'Ask on WhatsApp'}</a>
        </div>
      </div>
      <dialog ref={dialog} onClose={() => setSelected(null)} aria-labelledby="gallery-photo-title" className="m-auto w-[min(92vw,700px)] max-h-[90dvh] overflow-auto rounded-2xl p-0 bg-white dark:bg-slate-900 text-slate-900 dark:text-white backdrop:bg-slate-950/70">
        {selected && <>
          <div className="flex items-center justify-between gap-3 p-4 border-b border-slate-200 dark:border-slate-700">
            <h3 id="gallery-photo-title" className="font-bold">{ar ? selected.ar : selected.en}</h3>
            <button type="button" onClick={() => setSelected(null)} aria-label={ar ? 'إغلاق الصورة' : 'Close photo'} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"><X className="w-5 h-5" /></button>
          </div>
          <img src={imageUrl(selected.image)} alt={ar ? selected.ar : selected.en} width="880" height="1100" className="w-full max-h-[65dvh] object-contain bg-white" />
          <p className="p-4 text-sm text-slate-600 dark:text-slate-300">{ar ? selected.descriptionAr : selected.descriptionEn}</p>
        </>}
      </dialog>
    </section>
  );
};
