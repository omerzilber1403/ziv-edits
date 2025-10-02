/**
 * Internationalization dictionary for Hebrew (default) and English
 */

export type Lang = 'he' | 'en';

export interface Translations {
  nav: {
    about: string;
    portfolio: string;
    contact: string;
    toggleLabel: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    header: string;
    body: string;
  };
  whyWorkWithMe: {
    header: string;
    fast: string;
    sound: string;
    passion: string;
  };
  portfolio: {
    header: string;
    driveIntro: string;
    socialHeader: string;
    tiktok: string;
    instagram: string;
    product: string;
  };
  process: {
    header: string;
    body: string;
  };
  results: {
    header: string;
    item1: string;
    item2: string;
    item3: string;
    quote: string;
    quoteAuthor: string;
  };
  tools: {
    header: string;
    list: string;
  };
  faq: {
    header: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
  };
  contact: {
    header: string;
    button: string;
    cv: string;
  };
  modal: {
    close: string;
    openDrive: string;
  };
  footer: {
    built: string;
  };
}

export const translations: Record<Lang, Translations> = {
  he: {
    nav: {
      about: 'אודות',
      portfolio: 'תיק עבודות',
      contact: 'יצירת קשר',
      toggleLabel: 'EN',
    },
    hero: {
      title: 'ZIV',
      subtitle: 'אנימציות תלת־ממד שמושכות את העין והופכות עסקים ורעיונות למותגים.',
      cta: 'צפו בתיק העבודות',
    },
    about: {
      header: 'קצת עליי',
      body: 'אני זיו (Z-I-V), עורך וידאו ואמן Motion Graphics.\nההתעסקות שלי בעיקר בעריכת סרטוני After Effects, סרטוני VSL, וסרטוני תדמית לחברות גדולות.\n\nאני שולט ב־Premiere, After Effects, DaVinci Resolve ו־Illustrator, ומסוגל להוציא לפועל מגוון רחב של פרויקטים.\n\nאני מתייחס לעריכה כמו ליצירת מוזיקה — עם קצב, הרמוניה ואומנות.\nכל פרויקט מגיע ממקום של תשוקה אמיתית, כדי ליצור תוצאה מושלמת וחיה על המסך.',
    },
    whyWorkWithMe: {
      header: 'למה לעבוד איתי?',
      fast: '⚡ עבודה זריזה – מסירה מהירה בלי להתפשר על איכות',
      sound: '🎧 סאונד דיזיין אומנותי – חיבור ייחודי בין ויזואל לסאונד',
      passion: '🎨 אומנות ותשוקה – כל פרויקט נוצר מאהבה לאומנות ובשאיפה לשלמות',
    },
    portfolio: {
      header: 'תיק עבודות',
      driveIntro: 'סרטוני תלת־ממד, רילז וקמפיינים שנוצרו עבור עסקים, מותגים וסטארטאפים. לחצו כדי לצפות בסרטונים המאוחסנים ב־Google Drive.',
      socialHeader: 'הצלחות ברשתות החברתיות',
      tiktok: 'טיקטוק אורגני — 3.2M צפיות בחודש',
      instagram: 'אינסטגרם רילז — 1.8M צפיות, חשיפה בינלאומית',
      product: 'וידאו מוצר — 750K צפיות + ↑30% אינגייג׳מנט',
    },
    process: {
      header: 'איך אני עובד',
      body: 'אני עובד בעיקר מול צוותים שכבר מביאים קריאייטיב, קונספטים ורעיונות — ואני זה שמוציא אותם לפועל בעריכה. אני לוקח את הבריף, מוסיף קצב, צבע, סאונד דיזיין ותנועה, ומייצר סרטון שעובד. המיקוד שלי הוא לגרום לתוכן להיראות חד, ממותג ומוכן לפרסום.',
    },
    results: {
      header: 'תוצאות ומספרים',
      item1: 'סרטוני טיקטוק ואינסטגרם עם מיליוני צפיות אורגניות',
      item2: 'קמפיינים עם ביצועים שמעלו משמעותית את המעורבות',
      item3: 'תוכן שהפך מותגים לבולטים ברשתות',
      quote: 'זיו יודע לקחת רעיון ולהפוך אותו לווידאו שעובד ומביא מספרים.',
      quoteAuthor: 'רון חורש',
    },
    tools: {
      header: 'כלים וכישורים',
      list: 'DaVinci Resolve (כולל Color Grading) • Adobe Premiere Pro • Adobe Illustrator • Adobe After Effects • Sound Design • התאמות לפלטפורמות: Instagram Reels, YouTube (רגיל + Shorts) • התמחות בסרטוני VSL ותדמית',
    },
    faq: {
      header: 'שאלות נפוצות',
      q1: 'תוך כמה זמן טיוטה ראשונה?',
      a1: 'לרוב תוך 48 שעות לסרטון קצר.',
      q2: 'איך מעבירים קבצים?',
      a2: 'דרך Google Drive או Frame.io מסודר.',
      q3: 'האם גורם לויז\'ן להיראות בול אותו דבר כמו שהלקוח רוצה?',
      a3: 'כן!!!!',
    },
    contact: {
      header: 'מחפשים עורך לרילז ואנימציות?',
      button: 'דברו איתי במייל',
      cv: 'הורדת קו״ח',
    },
    modal: {
      close: 'סגור',
      openDrive: 'פתח ב-Drive',
    },
    footer: {
      built: 'נבנה עם Next.js',
    },
  },
  en: {
    nav: {
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
      toggleLabel: 'HE',
    },
    hero: {
      title: 'ZIV',
      subtitle: '3D animations that grab attention and turn businesses and concepts into brands.',
      cta: 'View Portfolio',
    },
    about: {
      header: 'About',
      body: "I'm Z-I-V, a video editor and Motion Graphics artist.\nMy work focuses mainly on After Effects editing, VSL videos, and corporate brand videos for large companies.\n\nI'm skilled in Premiere, After Effects, DaVinci Resolve, and Illustrator, capable of executing a wide variety of projects.\n\nI approach editing like creating music — with rhythm, harmony, and artistry.\nEvery project comes from a place of true passion, to create a perfect and alive result on screen.",
    },
    whyWorkWithMe: {
      header: 'Why Work With Me',
      fast: '⚡ Fast Delivery – Quick turnaround without compromising quality',
      sound: '🎧 Artistic Sound Design – Unique synergy between visuals and sound',
      passion: '🎨 Passion for Art – Every project made with love and pursuit of perfection',
    },
    portfolio: {
      header: 'Portfolio',
      driveIntro: '3D videos, reels, and campaigns created for businesses, brands, and startups. Click to watch videos hosted on Google Drive.',
      socialHeader: 'Social Media Highlights',
      tiktok: 'TikTok Organic — 3.2M views in one month',
      instagram: 'Instagram Reel — 1.8M views, global exposure',
      product: 'Product video — 750K views + ↑30% engagement',
    },
    process: {
      header: 'How I Work',
      body: 'I usually work with teams that provide the creative direction and concepts — and I execute them through editing. I take the brief, add rhythm, color, sound design, and motion, and deliver a video that works. My focus is to make the content look sharp, branded, and ready to publish.',
    },
    results: {
      header: 'Results & Social Proof',
      item1: 'TikTok and Instagram videos with millions of organic views',
      item2: 'Campaigns that significantly boosted engagement',
      item3: 'Content that helped brands stand out on social media',
      quote: 'Ziv knows how to take a concept and turn it into a video that performs.',
      quoteAuthor: 'Creative Director',
    },
    tools: {
      header: 'Tools & Skills',
      list: 'DaVinci Resolve (including Color Grading) • Adobe Premiere Pro • Adobe Illustrator • Adobe After Effects • Sound Design • Platform Adaptations: Instagram Reels, YouTube (regular + Shorts) • Specialization in VSL and corporate videos',
    },
    faq: {
      header: 'FAQ',
      q1: 'How fast is the first draft?',
      a1: 'Usually within 48 hours for short videos.',
      q2: 'How do we share files?',
      a2: 'Through Google Drive or Frame.io organized.',
      q3: 'Do you make the vision look exactly like what the client wants?',
      a3: 'Yes!!!!',
    },
    contact: {
      header: 'Looking for an editor for reels & animations?',
      button: 'Email Me',
      cv: 'Download CV',
    },
    modal: {
      close: 'Close',
      openDrive: 'Open on Drive',
    },
    footer: {
      built: 'Built with Next.js',
    },
  },
};

export function getTranslations(lang: Lang): Translations {
  return translations[lang];
}

