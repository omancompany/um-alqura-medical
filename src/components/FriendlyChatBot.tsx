import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Smile,
  Calendar,
  Phone,
  MapPin,
  Sparkles,
  Bot,
  Heart,
  ChevronDown,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { ChatMessage, Language, Theme } from '../types';
import { CLINIC_INFO } from '../data/translations';
import {
  BOT_QUICK_PROMPTS,
  generateBotReply,
  JOKES_COLLECTION,
} from '../data/chatBotKnowledge';

interface FriendlyChatBotProps {
  currentLang: Language;
  theme: Theme;
  onOpenBookingModal: (service?: string) => void;
}

export const FriendlyChatBot: React.FC<FriendlyChatBotProps> = ({
  currentLang,
  theme,
  onOpenBookingModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeaserVisible, setIsTeaserVisible] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome messages
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text:
        currentLang === 'ar'
          ? 'يا أهلاً ومرحباً بك في مجمع أم القرى الطبي ببركاء! 🌸\nأنا "د. بشوش" 🩺 رفيقك الطبي الودود.. هنا عشان أسمعك، أطمن قلبك، وأرسم ابتسامة حلوة على وجهك! 😊'
          : 'Welcome to Um Alqura Polyclinic in Barka! 🌸\nI am "Dr. Cheerful" 🩺, your warm healthcare companion. I am here to listen, reassure you, and brighten your day! 😊',
      timestamp: 'الآن',
    },
    {
      id: 'welcome-2',
      sender: 'bot',
      text:
        currentLang === 'ar'
          ? 'طمني، حاسس بأي وجع أو تعب؟ ولا بس حابب تروق بموقف طريف أو نكتة طبية تسليك؟ 😉 اختر من الخيارات السريعة بالأسفل أو اكتبلي براحتك!'
          : 'Tell me, are you feeling any pain, or would you simply like a lighthearted joke to cheer up? 😉 Choose an option below or chat with me freely!',
      timestamp: 'الآن',
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Audio effect for friendly feedback (Web Audio API synthesis - safe & non-blocking)
  const playFriendlyPing = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {
      // Audio not permitted or supported; safely ignore
    }
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Realistic empathetic typing delay
    setTimeout(() => {
      const reply = generateBotReply(text, currentLang);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: reply.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isJoke: reply.isJoke,
        suggestedAction: reply.action,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      playFriendlyPing();
    }, 700);
  };

  const handleActionClick = (action: ChatMessage['suggestedAction']) => {
    if (!action) return;

    if (action.type === 'joke') {
      const randomJoke = JOKES_COLLECTION[Math.floor(Math.random() * JOKES_COLLECTION.length)];
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-joke-${Date.now()}`,
          sender: 'bot',
          text: currentLang === 'ar' ? randomJoke.ar : randomJoke.en,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isJoke: true,
          suggestedAction: {
            type: 'joke',
            label: currentLang === 'ar' ? 'كمان نكتة تروق مزاجك؟ 😄' : 'One more joke? 😄',
          },
        },
      ]);
      playFriendlyPing();
      return;
    }

    if (action.type === 'booking') {
      onOpenBookingModal('physiotherapy');
      return;
    }

    if (action.type === 'whatsapp') {
      const text = action.payload || 'السلام عليكم، أود حجز موعد في مجمع أم القرى الطبي';
      window.open(`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank');
      return;
    }

    if (action.type === 'location') {
      window.open(CLINIC_INFO.googleMapsUrl, '_blank');
      return;
    }
  };

  return (
    <>
      {/* Floating Chat Launcher Button */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start select-none">
        {/* Friendly speech bubble teaser */}
        {isTeaserVisible && !isOpen && (
          <div className="relative mb-3.5 max-w-xs animate-bounce duration-1000">
            <div className="flex items-center gap-2.5 rounded-2xl bg-white dark:bg-slate-800 px-3.5 py-2.5 shadow-xl shadow-teal-900/10 border border-teal-100 dark:border-teal-900/50 text-xs sm:text-sm text-slate-800 dark:text-slate-100">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 dark:bg-teal-950/60 text-base shrink-0">
                🩺
              </span>
              <div>
                <p className="font-bold text-teal-700 dark:text-teal-400">
                  {currentLang === 'ar' ? 'د. بشوش يرحب بك!' : 'Dr. Cheerful says hi!'}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-tight mt-0.5">
                  {currentLang === 'ar'
                    ? 'حاسس بألم أو محتاج تبتسم وتروق؟ كلمني! 😊'
                    : 'Feeling down or need a smile? Chat with me! 😊'}
                </p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsTeaserVisible(false);
                }}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
                title="إغلاق"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            {/* Small triangle arrow */}
            <div className="absolute -bottom-1.5 left-6 w-3 h-3 rotate-45 bg-white dark:bg-slate-800 border-r border-b border-teal-100 dark:border-teal-900/50" />
          </div>
        )}

        {/* Main Launcher Button */}
        <button
          id="friendly-chatbot-launcher"
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setIsTeaserVisible(false);
          }}
          className={`group flex items-center gap-2.5 rounded-full p-3.5 shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            isOpen
              ? 'bg-slate-800 dark:bg-slate-700 text-white'
              : 'bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-700 text-white shadow-teal-700/30'
          }`}
          aria-label={currentLang === 'ar' ? 'شات د. بشوش الودود' : 'Chat with Dr. Cheerful'}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative flex items-center justify-center">
              <span className="text-2xl animate-pulse">🩺</span>
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
              </span>
            </div>
          )}
          {!isOpen && (
            <span className="hidden sm:inline-block font-bold text-sm px-1">
              {currentLang === 'ar' ? 'د. بشوش (مستشارك الودود)' : 'Dr. Cheerful (AI Guide)'}
            </span>
          )}
        </button>
      </div>

      {/* Floating Chat Modal Box */}
      {isOpen && (
        <div
          id="friendly-chatbot-window"
          className="fixed bottom-24 left-4 right-4 sm:right-auto sm:left-6 z-50 w-auto sm:w-96 md:w-[420px] max-h-[640px] h-[80vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-teal-100 dark:border-slate-800 overflow-hidden transition-all duration-300"
          dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-teal-700 via-teal-800 to-emerald-800 text-white shadow-md">
            <div className="flex items-center gap-3">
              {/* Doctor Avatar with Heart Beat */}
              <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border-2 border-emerald-300/40 shadow-inner">
                <span className="text-2xl">👨‍⚕️</span>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-teal-900"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-base leading-tight">
                    {currentLang === 'ar' ? 'د. بشوش 🩺' : 'Dr. Cheerful 🩺'}
                  </h3>
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 text-[10px] font-medium border border-emerald-400/30">
                    {currentLang === 'ar' ? 'مجمع أم القرى' : 'Um Alqura'}
                  </span>
                </div>
                <p className="text-teal-100/90 text-xs flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  {currentLang === 'ar'
                    ? 'ودود، مريح، ويخفف همومك دايماً 😊'
                    : 'Friendly, caring, and ready to make you smile'}
                </p>
              </div>
            </div>

            {/* Header Action Buttons */}
            <div className="flex items-center gap-1 text-teal-100">
              <button
                type="button"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-1.5 rounded-full hover:bg-white/10 transition"
                title={soundEnabled ? 'كتم الصوت' : 'تشغيل الصوت'}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-70" />}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 transition"
                title="إغلاق الشات"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Disclaimer / Peace of Mind Banner */}
          <div className="bg-teal-50/80 dark:bg-slate-800/80 px-3.5 py-1.5 border-b border-teal-100 dark:border-slate-800 text-[11px] text-teal-800 dark:text-teal-300 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3 text-red-500 fill-red-500 shrink-0" />
              {currentLang === 'ar'
                ? 'استشارات ودية ودعم نفسي للتطمين. الحالات الطارئة تتوجه للمشفى.'
                : 'Friendly guidance & cheer. For medical emergencies visit ER.'}
            </span>
            <span className="font-semibold text-teal-600 dark:text-teal-400">
              {currentLang === 'ar' ? 'ولاية بركاء' : 'Barka'}
            </span>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/60 dark:bg-slate-950/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`relative max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-teal-600 dark:bg-teal-700 text-white rounded-br-none'
                      : msg.isJoke
                      ? 'bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-slate-800 dark:text-slate-100 rounded-bl-none'
                      : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-bl-none'
                  }`}
                >
                  {/* Joke badge */}
                  {msg.isJoke && (
                    <div className="mb-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 text-[11px] font-bold">
                      <Smile className="w-3 h-3" />
                      <span>{currentLang === 'ar' ? 'جرعة فرفشة وطاقة إيجابية 😂' : 'A healthy smile dose 😂'}</span>
                    </div>
                  )}

                  {/* Message content formatted with line breaks */}
                  <div className="whitespace-pre-line">{msg.text}</div>

                  {/* Action button inside message */}
                  {msg.suggestedAction && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700/60">
                      <button
                        type="button"
                        onClick={() => handleActionClick(msg.suggestedAction)}
                        className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-bold text-xs transition shadow-sm"
                      >
                        {msg.suggestedAction.type === 'joke' && <Smile className="w-3.5 h-3.5" />}
                        {msg.suggestedAction.type === 'booking' && <Calendar className="w-3.5 h-3.5" />}
                        {msg.suggestedAction.type === 'whatsapp' && <Phone className="w-3.5 h-3.5" />}
                        {msg.suggestedAction.type === 'location' && <MapPin className="w-3.5 h-3.5" />}
                        <span>{msg.suggestedAction.label}</span>
                      </button>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <div className="flex items-center gap-1 bg-white dark:bg-slate-800 px-3 py-2 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="mr-1 text-[11px] text-teal-600 dark:text-teal-400">
                    {currentLang === 'ar' ? 'د. بشوش يكتب لك...' : 'Dr. Cheerful is typing...'}
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
              {BOT_QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt.id}
                  type="button"
                  onClick={() => handleSendMessage(prompt.query)}
                  className="shrink-0 px-2.5 py-1.5 rounded-full bg-teal-50 hover:bg-teal-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-teal-800 dark:text-teal-300 border border-teal-100 dark:border-slate-700 transition flex items-center gap-1"
                >
                  <span>{currentLang === 'ar' ? prompt.labelAr : prompt.labelEn}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Message Input Bar */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                id="friendly-chat-input"
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={
                  currentLang === 'ar'
                    ? 'فضفض لدكتور بشوش.. شو حاسس؟'
                    : 'Chat with Dr. Cheerful... How are you?'
                }
                className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm rounded-2xl px-4 py-2.5 border border-transparent focus:border-teal-500 focus:bg-white dark:focus:bg-slate-900 outline-none transition"
              />

              {/* Instant Joke button */}
              <button
                type="button"
                onClick={() => handleSendMessage(currentLang === 'ar' ? 'ضحكني بنكتة طبية' : 'Tell me a joke')}
                className="p-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 transition"
                title={currentLang === 'ar' ? 'نكتة سريعة تروقك' : 'Cheer me up!'}
              >
                <Smile className="w-5 h-5" />
              </button>

              {/* Send message button */}
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="p-2.5 rounded-2xl bg-teal-600 hover:bg-teal-700 disabled:opacity-40 text-white transition active:scale-95 shadow-sm"
                title="إرسال"
              >
                <Send className="w-5 h-5 rtl:rotate-180" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
