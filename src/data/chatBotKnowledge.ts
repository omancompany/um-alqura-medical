import {contact} from '../contact-config';
export interface BotQuickPrompt { id: string; labelAr: string; labelEn: string; icon: string; query: string }
export const BOT_QUICK_PROMPTS: BotQuickPrompt[] = [
  {id:'booking',labelAr:'طلب موعد',labelEn:'Request an appointment',icon:'calendar',query:'حجز موعد'},
  {id:'hours',labelAr:'مواعيد العمل',labelEn:'Opening hours',icon:'clock',query:'مواعيد العمل'},
  {id:'location',labelAr:'الموقع',labelEn:'Location',icon:'map-pin',query:'موقع المجمع'},
];
export function generateBotReply(userText: string, lang: 'ar' | 'en'): {text:string;action?:{type:'whatsapp'|'booking'|'call'|'location';label:string;payload?:string}} {
  const ar=lang==='ar',q=userText.toLowerCase();
  if(/ألم|وجع|اعراض|أعراض|pain|symptom/.test(q))return {text:ar?'لا أقدم تقييمًا طبيًا. تواصل مع المجمع أو اطلب موعدًا للتحدث مع الفريق الطبي.':'I cannot assess symptoms. Contact the clinic or request an appointment with its clinical team.',action:{type:'booking',label:ar?'طلب موعد':'Request appointment'}};
  if(contact.jokesEnabled&&/نكت|joke/.test(q))return {text:ar?'نترك النكت لفريق الاستقبال؛ كيف أساعدك في معلومات المجمع؟':'Our reception team can help; what clinic information do you need?'};
  if(/دوام|ساعات|مواعيد العمل|hours|opening/.test(q))return {text:ar?'المواعيد المعتمدة: '+contact.hoursAr+'؛ تواصل مع الاستقبال للتأكيد.':'Approved hours: '+contact.hoursEn+'; contact reception to confirm availability.',action:{type:'whatsapp',label:ar?'تواصل مع الاستقبال':'Contact reception'}};
  if(/موقع|عنوان|location|where|map/.test(q))return {text:ar?'المجمع في بركاء، سلطنة عمان. يمكنك فتح البحث باسم المجمع على الخريطة، أو طلب الموقع الدقيق من الاستقبال.':'The clinic is in Barka, Oman. Open the clinic map search or ask reception for the exact pin.',action:{type:'location',label:ar?'فتح الخريطة':'Open map'}};
  if(/حجز|موعد|book|appointment/.test(q))return {text:ar?'يمكنك إرسال طلب موعد إلى الاستقبال عبر واتساب. الموعد ينتظر تأكيد الفريق.':'You can send an appointment request to reception on WhatsApp. Your appointment remains pending until the team confirms.',action:{type:'booking',label:ar?'طلب موعد':'Request appointment'}};
  return {text:ar?'أنا دليل الموقع الآلي للأسئلة الشائعة والحجز، ولست مختصًا طبيًا. للأسئلة عن الأعراض أو العلاج تواصل مع الفريق الطبي. لا تكتب بيانات صحية حساسة هنا.':'I am an automated website guide for common questions and appointment requests, not a medical professional. Contact the clinical team about symptoms or treatment. Please do not enter sensitive health details here.',action:{type:'whatsapp',label:ar?'التواصل مع الاستقبال':'Contact reception'}};
}
