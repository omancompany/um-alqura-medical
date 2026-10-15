import { demoRequested } from '../demo-preview';
import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Language, Theme } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { BOT_QUICK_PROMPTS, generateBotReply } from '../data/chatBotKnowledge';
interface FriendlyChatBotProps { currentLang: Language; theme: Theme; onOpenBookingModal: (service?: string) => void }
export const FriendlyChatBot: React.FC<FriendlyChatBotProps> = ({currentLang,onOpenBookingModal}) => {
  const ar=currentLang==='ar';
  const [open,setOpen]=useState(false),[input,setInput]=useState(''),[reply,setReply]=useState<ReturnType<typeof generateBotReply>|null>(null);
  const inputRef=useRef<HTMLInputElement>(null);
  const triggerRef=useRef<HTMLButtonElement>(null);
  useEffect(()=>{setReply(null)},[currentLang]);
  useEffect(()=>{if(open)inputRef.current?.focus()},[open]);
  function close(){setOpen(false);triggerRef.current?.focus()}
  function send(text:string){if(text.trim()){setReply(generateBotReply(text.slice(0,500),currentLang));setInput('')}}
  function action(){const a=reply?.action;if(!a)return;if(a.type==='booking'){close();onOpenBookingModal();return}if(demoRequested())return;window.open(a.type==='location'?CLINIC_INFO.googleMapsUrl:a.type==='call'?`tel:+${CLINIC_INFO.phoneRaw}`:CLINIC_INFO.whatsappUrl,'_blank','noopener,noreferrer')}
  return <div className="fixed bottom-24 end-5 z-40">
    {open&&<section aria-label={ar?'دليل الموقع':'Website guide'} onKeyDown={e=>{if(e.key==='Escape')close()}} className="mb-3 w-80 max-w-[calc(100vw-40px)] rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:text-white">
      <div className="flex items-center justify-between"><h2 className="font-bold">{ar?'دليل مجمع أم القرى':'Um Alqura website guide'}</h2><button onClick={close} aria-label={ar?'إغلاق':'Close'}><X size={20}/></button></div>
      <p className="my-3 text-sm">{ar?'إجابات آلية عن الموقع والحجز. لا يقدم تشخيصًا أو استشارة طبية.':'Automated information about our clinic and booking. No diagnosis or medical advice.'}</p>
      <div className="flex flex-wrap gap-2">{BOT_QUICK_PROMPTS.map(p=><button key={p.id} className="rounded-lg border p-2 text-xs" onClick={()=>send(p.query)}>{ar?p.labelAr:p.labelEn}</button>)}</div>
      {reply&&<div role="status" className="my-3 text-sm leading-relaxed"><p>{reply.text}</p>{reply.action&&<button className="mt-3 rounded-lg bg-teal-700 px-3 py-2 text-white" onClick={action}>{reply.action.label}</button>}</div>}
      <form className="mt-4 flex gap-2" onSubmit={e=>{e.preventDefault();send(input)}}><input ref={inputRef} className="min-w-0 flex-1 rounded-lg border bg-transparent p-2 text-sm" aria-label={ar?'سؤالك':'Your question'} maxLength={500} value={input} onChange={e=>setInput(e.target.value)}/><button aria-label={ar?'إرسال':'Send'}><Send size={20}/></button></form>
    </section>}
    <button ref={triggerRef} onClick={()=>open?close():setOpen(true)} aria-expanded={open} aria-label={ar?'دليل الموقع':'Website guide'} className="rounded-full bg-teal-700 p-4 text-white shadow-lg"><MessageSquare/></button>
  </div>;
};
