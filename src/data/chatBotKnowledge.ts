export interface BotQuickPrompt {
  id: string;
  labelAr: string;
  labelEn: string;
  icon: string;
  query: string;
}

export const BOT_QUICK_PROMPTS: BotQuickPrompt[] = [
  {
    id: 'joke',
    labelAr: 'ضحكني شوية نكتة 😂',
    labelEn: 'Cheer me up with a joke 😂',
    icon: 'smile',
    query: 'ضحكني بنكتة طبية',
  },
  {
    id: 'back_pain',
    labelAr: 'عندي ألم في الظهر والرقبة 🦴',
    labelEn: 'Back & neck pain relief 🦴',
    icon: 'activity',
    query: 'عندي ألم في الظهر والرقبة وأحتاج استشارة',
  },
  {
    id: 'comfort',
    labelAr: 'متوتر وخايف من الفحص 🥺',
    labelEn: 'Anxious about checkup 🥺',
    icon: 'heart',
    query: 'أنا خايف ومتوتر من الفحص الطبي',
  },
  {
    id: 'booking',
    labelAr: 'حجز موعد واتساب سريع 📅',
    labelEn: 'Fast WhatsApp Booking 📅',
    icon: 'calendar',
    query: 'أريد حجز موعد في مجمع أم القرى',
  },
  {
    id: 'hours_location',
    labelAr: 'المواعيد والموقع في بركاء 📍',
    labelEn: 'Hours & Location in Barka 📍',
    icon: 'map-pin',
    query: 'وين موقعكم ومواعيد الدوام؟',
  },
  {
    id: 'health_tip',
    labelAr: 'نصيحة صحية طريفة 💡',
    labelEn: 'Fun Health Tip 💡',
    icon: 'sparkles',
    query: 'أعطني نصيحة صحية مفيدة وخفيفة دم',
  },
];

export const JOKES_COLLECTION = [
  {
    ar: "واحد بيقول للدكتور: يا دكتور كل ما أشرب فنجان شاي عيني بتوجعني! الدكتور قاله: طب شيل المعلقة من الفنجان يا غالي! 😂☕️\n\nألف سلامة عليك.. لا تشيل هم، صحتك أولويتنا وابتسامتك هي أولى خطوات العافية! 😊",
    en: "Patient asks: 'Doctor, every time I drink tea my eye hurts!' Doctor replies: 'Take the spoon out of the cup!' 😂☕️\n\nCheer up! Your recovery starts with a smile, and we're always here for you! 😊",
  },
  {
    ar: "مريض بيقول للدكتور: يا دكتور أنا بنسى كل حاجة بعد 5 ثواني! الدكتور قاله: من إمتى المشكلة دي؟ قاله: مشكلة إيه؟! 😅😂\n\nأهم شي ما تنسى تشرب موية وتاخذ راحة من الشاشات اليوم، وإذا محتاج موعد علاج طبيعي فالك طيب!",
    en: "Patient: 'Doctor, I forget everything after 5 seconds!' Doctor: 'Since when?' Patient: 'Since when what?!' 😅😂\n\nJust don't forget to drink water and take care of yourself today!",
  },
  {
    ar: "سألوا أخصائي العلاج الطبيعي في أم القرى: ليش دايماً مبتسم ورايق؟\nقالهم: 'عشان لو كشرت عضلات وجهي حتشد وأنا مش فاضي أعمل لنفسي جلسة مساج!' 💆‍♂️😂\n\nارخي عضلاتك وابتسم، الضحك بيحرك 15 عضلة بس، العبوس بيحرك 43 عضلة.. يعني وفر طاقة واضحك! 😉✨",
    en: "They asked our physiotherapy doctor: 'Why are you always smiling?'\nHe said: 'Because frowning strains 43 facial muscles, while smiling only uses 15—so I save energy!' 💆‍♂️😂\n\nRelax and let positive vibes do the healing!",
  },
  {
    ar: "واحد راح للدكتور وقاله: يا دكتور أنا حاسس إني حصان! 🐎 الدكتور قاله: من إمتى الحالة دي؟ قاله: من لما كنت مُهر صغير يا دكتور! ههههه 😂\n\nيا سيدي ألف سلامة عليك، شو ما كان التعب، كادرنا الطبي في مجمع أم القرى ببركاء أيديهم خفيفة وخبرتهم طويلة.",
    en: "Patient: 'Doctor, I feel like a horse!' Doctor: 'Since when?' Patient: 'Ever since I was a little pony!' 🐎😂\n\nStay cheerful, your health and peace of mind are in safe hands with us in Barka!",
  },
  {
    ar: "نصيحة بشوشية: بلاش تشخص تعبك في جوجل الساعة 3 الفجر.. لأنك حتكون داخل عشان وجع صباعك الصغير، ويطلع لك إنك مصاب بزكام فضائي متطور من كوكب زحل! 🚀😂\n\nتعال عندنا مجمع أم القرى في بركاء، دكاترتنا حقيقيين وطيبين وكلامهم يطمّن القلب!",
    en: "Cheer-up Tip: Never Google your symptoms at 3 AM! You'll search a minor toe stub and Google will diagnose you with space fever from Saturn! 🚀😂\n\nVisit real, compassionate doctors at Um Alqura in Barka instead!",
  },
];

export const HEALTH_TIPS = [
  {
    ar: "💡 نصيحة د. بشوش للعمود الفقري:\nلو جالس تتصفح الجوال وأنت محني رأسك للأمام.. ارفع رأسك الآن وافرد كتافك! رأسك وزنه تقريباً 5 كيلو، بس لما تحنيه للأمام رقبتك بتحس كأنها شايلة كيس رز 25 كيلو! 🍚😅 ارتاح ودلع رقبتك.",
    en: "💡 Dr. Cheerful's Spine Tip:\nIf you're hunched over your phone right now... lift your head and straighten your shoulders! An inclined neck feels like carrying a 25kg bag of rice! 🍚😅 Be gentle with your posture.",
  },
  {
    ar: "💡 نصيحة د. بشوش للنشاط والمفاصل:\nالمشي اليومي لمدة 20 دقيقة مش بس مفيد للمفاصل والقلب، ده كمان بيخلي مزاجك رايق ويفرز هرمونات السعادة! خذ لفة خفيفة في ممشى بركاء والجو الجميل. 🚶‍♂️🌴",
    en: "💡 Dr. Cheerful's Mobility Tip:\nA 20-minute daily brisk walk lubricates your joints and boosts natural happiness endorphins. Enjoy an easy stroll in Barka! 🚶‍♂️🌴",
  },
  {
    ar: "💡 سر النوم الهادئ:\nبلاش كوباية شاي كرك ثقيلة قبل النوم بعشر دقايق! خليك مع مشروب دافي خفيف، ونومة مريحة مع وسادة تدعم فقرات الرقبة، وبتصحى الصبح حصان ونشيط بإذن الله. 🌙☕️",
    en: "💡 Sleep Wellness Tip:\nAvoid heavy caffeine right before bed. A supportive cervical pillow will help you wake up pain-free and refreshed! 🌙☕️",
  },
];

export function generateBotReply(
  userText: string,
  lang: 'ar' | 'en'
): {
  text: string;
  isJoke?: boolean;
  action?: {
    type: 'whatsapp' | 'booking' | 'call' | 'location' | 'joke';
    label: string;
    payload?: string;
  };
} {
  const query = userText.toLowerCase().trim();

  // 1. Jokes & Laughs
  if (
    query.includes('نكت') ||
    query.includes('ضحك') ||
    query.includes('فرفش') ||
    query.includes('زهقان') ||
    query.includes('joke') ||
    query.includes('funny') ||
    query.includes('laugh') ||
    query.includes('cheer')
  ) {
    const randomJoke = JOKES_COLLECTION[Math.floor(Math.random() * JOKES_COLLECTION.length)];
    return {
      text: lang === 'ar' ? randomJoke.ar : randomJoke.en,
      isJoke: true,
      action: {
        type: 'joke',
        label: lang === 'ar' ? 'كمان نكتة تروق مزاجك؟ 😄' : 'Another joke? 😄',
      },
    };
  }

  // 2. Anxiety & Fear
  if (
    query.includes('خايف') ||
    query.includes('متوتر') ||
    query.includes('قلق') ||
    query.includes('رعب') ||
    query.includes('وجع') ||
    query.includes('ألم') ||
    query.includes('تعبان') ||
    query.includes('scared') ||
    query.includes('afraid') ||
    query.includes('anxious') ||
    query.includes('pain') ||
    query.includes('hurt')
  ) {
    if (lang === 'ar') {
      return {
        text: "يا بعد راسي والله ألف لا بأس عليك! 💚 خذ نفس عميييق.. شهيق 🫁.. وزفير 🌬️..\n\nصدقني كل وجع وتعب مآله يزول وتبقى السوالف الطيبة! أطباؤنا وكوادرنا في مجمع أم القرى ببركاء أصحاب خبرة طويلة ولمستهم بلسم وأيديهم خفيفة كالحرير، ما في شيء يخوف أبداً. إنت بين أهلك وناسك، وراحتك هي رأس مالنا! 😊\n\nتحب أحجز لك موعد استشارة هادي وبكل راحة؟",
        action: {
          type: 'booking',
          label: 'احجز موعد مريح الآن 📅',
        },
      };
    } else {
      return {
        text: "Take a deep, calming breath! 💚 Inhale slowly... and exhale.\n\nYou are never alone in this. At Um Alqura Polyclinic in Barka, our doctors are exceptionally gentle, experienced, and warm-hearted. We treat you like family, and keeping you comfortable and pain-free is our top priority! 😊\n\nWould you like me to set up a relaxed appointment for you?",
        action: {
          type: 'booking',
          label: 'Book a Comfortable Visit 📅',
        },
      };
    }
  }

  // 3. Physiotherapy / Back / Joints / Neck
  if (
    query.includes('ظهر') ||
    query.includes('رقب') ||
    query.includes('علاج طبيعي') ||
    query.includes('طبيعي') ||
    query.includes('غضروف') ||
    query.includes('ديسك') ||
    query.includes('مفاصل') ||
    query.includes('ركب') ||
    query.includes('كتف') ||
    query.includes('physio') ||
    query.includes('back') ||
    query.includes('neck') ||
    query.includes('joint') ||
    query.includes('knee') ||
    query.includes('spine')
  ) {
    if (lang === 'ar') {
      return {
        text: "آه يا ضهري ويا رقبتي! 🦴 أعرف تماماً هذا الشعور المزعج، قعدة المكاتب ومسك الجوال بتخلي العمود الفقري يشتكي! 📱😅\n\nلكن أبشر بالخير: قسم العلاج الطبيعي والتأهيل في مجمع أم القرى الطبي ببركاء مجهز بأحدث الأجهزة وجلسات يدوية وتقويم يخليك تقوم كأنك مولود من جديد، خفيف ونشيط ومرتاح!\n\nجاهز ترتاح من هذا الألم وتبدأ جلساتك؟",
        action: {
          type: 'whatsapp',
          label: 'تواصل مع أخصائي العلاج الطبيعي 🟢',
          payload: 'السلام عليكم، أود حجز موعد في قسم العلاج الطبيعي والتأهيل',
        },
      };
    } else {
      return {
        text: "Hunching over screens and long desk hours can truly take a toll on our back and neck! 🦴😅\n\nGood news: Um Alqura Polyclinic in Barka features a premier Physiotherapy & Rehabilitation clinic equipped with specialized care to restore mobility, ease stiffness, and get you feeling light and flexible again!\n\nReady to get back your active, pain-free life?",
        action: {
          type: 'whatsapp',
          label: 'Chat with Physio Specialist 🟢',
          payload: 'Hello, I would like to book a physiotherapy appointment at Um Alqura Polyclinic.',
        },
      };
    }
  }

  // 4. Booking & Appointments
  if (
    query.includes('حجز') ||
    query.includes('موعد') ||
    query.includes('احجز') ||
    query.includes('واتساب') ||
    query.includes('book') ||
    query.includes('appointment') ||
    query.includes('whatsapp')
  ) {
    if (lang === 'ar') {
      return {
        text: "فالك طيّب من عيوني! 🌟 الحجز عندنا في مجمع أم القرى أسهل من شرب فنجان قهوة، بضغطة زر وحدة على واتساب تختار الموعد اللي يريحك وبدون أي انتظار أو طوابير.\n\nرقم الواتساب المباشر: +968 7947 0050",
        action: {
          type: 'whatsapp',
          label: 'افتح واتساب واحجز مباشرة 📲',
          payload: 'السلام عليكم، أود حجز موعد في مجمع أم القرى الطبي',
        },
      };
    } else {
      return {
        text: "Delighted to help! 🌟 Booking at Um Alqura Polyclinic is seamless with direct WhatsApp access—no waiting in queues, picking the time that suits your schedule.\n\nDirect WhatsApp: +968 7947 0050",
        action: {
          type: 'whatsapp',
          label: 'Open WhatsApp Booking 📲',
          payload: 'Hello, I would like to schedule an appointment at Um Alqura Polyclinic.',
        },
      };
    }
  }

  // 5. Working Hours & Location
  if (
    query.includes('موقع') ||
    query.includes('مكان') ||
    query.includes('عنوان') ||
    query.includes('بركاء') ||
    query.includes('دوام') ||
    query.includes('ساعات') ||
    query.includes('وقت') ||
    query.includes('open') ||
    query.includes('hours') ||
    query.includes('location') ||
    query.includes('where') ||
    query.includes('barka')
  ) {
    if (lang === 'ar') {
      return {
        text: "يا هلا والله! نتشرف بزيارتك في أي وقت: 📍\n\n🏢 الموقع: ولاية بركاء، بالقرب من مسقط، سلطنة عُمان.\n\n⏰ أوقات الدوام (من السبت إلى الخميس):\n• صباحاً: 9:00 ص إلى 1:00 ظهراً ☀️\n• مساءً: 4:30 م إلى 9:30 ليلاً 🌙\n(الجمعة عطلة أسبوعية لك ولنا عشان تشحن طاقتك! 🏖️)",
        action: {
          type: 'location',
          label: 'عرض الموقع على خرائط جوجل 🗺️',
        },
      };
    } else {
      return {
        text: "Warmest welcome! Here are our details: 📍\n\n🏢 Location: Barka, near Muscat, Sultanate of Oman.\n\n⏰ Working Hours (Saturday to Thursday):\n• Morning: 9:00 AM – 1:00 PM ☀️\n• Evening: 4:30 PM – 9:30 PM 🌙\n(Friday is closed for weekly rest! 🏖️)",
        action: {
          type: 'location',
          label: 'View on Google Maps 🗺️',
        },
      };
    }
  }

  // 6. Health Tips
  if (
    query.includes('نصيح') ||
    query.includes('فائدة') ||
    query.includes('tip') ||
    query.includes('health') ||
    query.includes('advice')
  ) {
    const tip = HEALTH_TIPS[Math.floor(Math.random() * HEALTH_TIPS.length)];
    return {
      text: lang === 'ar' ? tip.ar : tip.en,
    };
  }

  // 7. General Friendly Greeting & Catch-all
  if (
    query.includes('مرحبا') ||
    query.includes('هلا') ||
    query.includes('السلام') ||
    query.includes('صباح') ||
    query.includes('مساء') ||
    query.includes('hi') ||
    query.includes('hello') ||
    query.includes('hey')
  ) {
    if (lang === 'ar') {
      return {
        text: "يا هلا ومية مرحبا نورت مجمع أم القرى الطبي! 🌸 معك د. بشوش، صديقك ومستشارك الودود.. أنا هنا عشان أطمنك، أجاوب على كل استفساراتك، ولو حابب أضحكك كمان! 😄\n\nطمني كيف صحتك اليوم؟ في شي تاعبك أو حابب تستفسر عنه؟",
        action: {
          type: 'booking',
          label: 'حجز موعد فحص 🩺',
        },
      };
    } else {
      return {
        text: "Hello and warmest welcome to Um Alqura Polyclinic! 🌸 I am Dr. Cheerful, your friendly virtual healthcare companion. I'm here to ease your mind, answer your questions, and share a bright smile! 😄\n\nHow are you feeling today? How can I assist you?",
        action: {
          type: 'booking',
          label: 'Book a Checkup 🩺',
        },
      };
    }
  }

  // Default Warm Empathetic Response
  if (lang === 'ar') {
    return {
      text: "وصلت رسالتك يا غالي بكل حب وتقدير! 💚 صحتك وراحتك هي همنا الأول في مجمع أم القرى الطبي. إذا في أي تعب أو استفسار محدد عن العلاج الطبيعي أو الفحوصات، لا تتردد تسألني أو تحجز مباشرة مع أطبائنا المتخصصين في بركاء، وألف لا بأس عليك مقدماً! ✨",
      action: {
        type: 'whatsapp',
        label: 'تحدث مع الفريق الطبي عبر واتساب 📲',
        payload: `استفسار: ${userText}`,
      },
    };
  } else {
    return {
      text: "Received with utmost care! 💚 Your health and wellbeing are our primary mission at Um Alqura Polyclinic. Whether you need physiotherapy advice, scheduling assistance, or reassurance, we are always by your side in Barka! ✨",
      action: {
        type: 'whatsapp',
        label: 'Chat with Medical Team on WhatsApp 📲',
        payload: `Inquiry: ${userText}`,
      },
    };
  }
}
