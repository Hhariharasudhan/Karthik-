export interface JourneyMilestone {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  iconName?: string;
  tag?: string;
}

export interface MemoryItem {
  id: string;
  date: string;
  title: string;
  caption: string;
  image: string;
  location?: string;
  mood?: string;
}

export interface LoveStoryConfig {
  partnerName: string;
  partnerNickname: string;
  myTitle: string;
  anniversaryNumber: number;
  anniversaryDate: string;
  secretCode: string;
  firstMeetingDate: string;
  musicUrl: string;
  finalMessage: string;
  intro: {
    greeting: string;
    message: string;
    subMessage: string;
    ctaText: string;
  };
  secretGate: {
    title: string;
    subtext: string;
    hint: string;
    incorrectMsg: string;
    correctMsg: string;
  };
  giftReveal: {
    teaserText: string;
    openBtnText: string;
    bigHeaderLine1: string;
    bigHeaderLine2: string;
    bigHeaderLine3: string;
    bigHeaderLine4: string;
    subRevealText: string;
  };
  journey: JourneyMilestone[];
  memories: MemoryItem[];
  letter: {
    title: string;
    subtitle: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    date: string;
  };
  butterflyMessages: string[];
  hugSection: {
    title: string;
    subtitle: string;
    btnText: string;
    afterHugTitle: string;
    afterHugSubtitle: string;
  };
  loveTree: {
    milestones: { year: number; title: string; subtitle: string }[];
    finalTextLine1: string;
    finalTextLine2: string;
  };
  finalReveal: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    subtitle: string;
  };
  finalQuestion: {
    question: string;
    btnYes: string;
    btnOfCourse: string;
    celebrationText1: string;
    celebrationText2: string;
  };
}

export const loveStory: LoveStoryConfig = {
  partnerName: "Roja Karthik",
  partnerNickname: "Roja",
  myTitle: "Forever Yours, Karthik",
  anniversaryNumber: 4,
  anniversaryDate: "02/12/2022",
  secretCode: "1721",
  firstMeetingDate: "02/01/2023",
  musicUrl: "/src/assets/music/sita-ramam-bgm.mp3",

  intro: {
    greeting: "Hey Roja... ❤️",
    message: "I made something just for you.",
    subMessage: "Don't rush. Take your time. ✨",
    ctaText: "Begin Our Story"
  },

  secretGate: {
    title: "A Secret World 🔐",
    subtext: "This space is reserved only for Roja. Enter our special PIN to unlock.",
    hint: "Hint: Our secret code (1721)",
    incorrectMsg: "Hehe... that's not it Roja 😜 Try again, my love ❤️",
    correctMsg: "Access Granted, Roja ✨"
  },

  giftReveal: {
    teaserText: "There's a special memory waiting inside...",
    openBtnText: "OPEN GIFT 🎁",
    bigHeaderLine1: "4",
    bigHeaderLine2: "YEARS",
    bigHeaderLine3: "OF",
    bigHeaderLine4: "US ❤️",
    subRevealText: "Happy 4th Anniversary, My Beloved Roja ❤️"
  },

  journey: [
    {
      id: "journey-1",
      date: "The Beginning",
      title: "Best Friends First",
      description: "Our story started as best friends. We shared every secret, every thought, and every moment with an effortless comfort that felt like home.",
      iconName: "Sparkles",
      tag: "Best Friends",
      image: "/src/assets/photos/journey-1.jpg"
    },
    {
      id: "journey-2",
      date: "Late Night Talks",
      title: "Connected By Voice",
      description: "Before we ever met in person, we spent countless hours connected through phone calls, talking until midnight and slowly falling in love.",
      iconName: "MoonStars",
      tag: "Midnight Call",
      image: "/src/assets/photos/journey-2.jpg"
    },
    {
      id: "journey-3",
      date: "02 Dec 2022",
      title: "Expressing Our Love",
      description: "The unforgettable moment when quiet feelings turned into spoken promises. Two best friends officially began their romantic journey.",
      iconName: "HeartHandshake",
      tag: "Anniversary Day",
      image: "/src/assets/photos/journey-3.jpg"
    },
    {
      id: "journey-4",
      date: "02 Jan 2023",
      title: "First In-Person Meeting",
      description: "On 2nd January 2023, we finally met in person for the very first time. Holding your hand in real life made the whole world freeze.",
      iconName: "Flame",
      tag: "First Date",
      image: "/src/assets/photos/journey-4.jpg"
    },
    {
      id: "journey-5",
      date: "Today & Forever",
      title: "4 Years of Endless Love",
      description: "From late-night calls to 4 years of beautiful memories. Roja, choosing you was the best decision of my entire life.",
      iconName: "Infinity",
      tag: "Forever Yours",
      image: "/src/assets/photos/journey-5.jpg"
    }
  ],

  memories: [
    {
      id: "mem-1",
      date: "Late Night Phone Call",
      title: "Hours Whispering Secrets",
      caption: "Those long phone calls where hours felt like minutes, laughing quietly in the dark and wishing morning would never come.",
      location: "Late Night Call",
      mood: "Sweet & Cozy",
      image: "/src/assets/photos/memory-01.jpg"
    },
    {
      id: "mem-2",
      date: "02 January 2023",
      title: "First Time Meeting You",
      caption: "Standing in front of you on 2nd Jan 2023... seeing your beautiful eyes in real life made my heart beat faster than ever before.",
      location: "Our First Meeting",
      mood: "Unforgettable",
      image: "/src/assets/photos/memory-02.jpg"
    },
    {
      id: "mem-3",
      date: "Best Friends Memories",
      title: "Laughter & Inside Jokes",
      caption: "Proof that the best romances come from being best friends first. Nobody understands me or makes me laugh like you do, Roja.",
      location: "Everywhere Together",
      mood: "Pure Joy",
      image: "/src/assets/photos/memory-03.jpg"
    },
    {
      id: "mem-4",
      date: "Special Dates",
      title: "Hand In Hand Walks",
      caption: "Walking beside you, feeling your warm grip in mine, knowing that whatever happens in life, we walk together.",
      location: "Our Favorite Spot",
      mood: "Magical",
      image: "/src/assets/photos/memory-04.jpg"
    },
    {
      id: "mem-5",
      date: "Quiet Moments",
      title: "Your Sweet Smile",
      caption: "Your smile is my absolute favorite view in the world. Just looking at you reminds me how lucky I am.",
      location: "Sweet Moments",
      mood: "Peaceful",
      image: "/src/assets/photos/memory-05.jpg"
    },
    {
      id: "mem-6",
      date: "4 Years Anniversary",
      title: "Our Continuing Story",
      caption: "Four years of growing together, supporting each other, and building a love that grows deeper with every passing day.",
      location: "Karthik ❤️ Roja",
      mood: "Forever Love",
      image: "/src/assets/photos/memory-06.jpg"
    }
  ],

  letter: {
    title: "A Letter For Roja",
    subtitle: "From Karthik's heart to yours",
    salutation: "My Dearest Roja,",
    paragraphs: [
      "Four years ago on 2nd December 2022, our love story officially began. But even before that day, being your best friend and talking to you for hours on end through phone calls made me realize how special you were to my heart.",
      "I will never forget 2nd January 2023—the day we finally met in person for the first time. Seeing your smile in real life and holding your hand was a moment I had dreamed of for so long, and reality was even more beautiful than my dreams.",
      "Thank you for being my best friend, my confidante, my biggest supporter, and the love of my life. Through every conversation, every smile, and every challenge, you have filled my life with immeasurable warmth.",
      "I love you more than words could ever convey, Roja. Happy 4th Anniversary, my love!"
    ],
    closing: "Forever & Always Yours,",
    signature: "Karthik ❤️",
    date: "2nd December 2026"
  },

  butterflyMessages: [
    "Roja, I still choose you. Every single day. ❤️",
    "From late-night phone calls to forever with you. ✨",
    "2nd January 2023... the day my world came alive. 💫",
    "Best friends, soulmates, forever yours. ♾️",
    "Four years with you, Roja, and I'd choose you all over again. 💖",
    "Thank you for being my home, my love. 🌸",
    "Your smile is Karthik's favorite view. 🎁",
    "Roja ❤️ Karthik — Forever & Always. 🏡"
  ],

  hugSection: {
    title: "Come here, Roja... 🥺",
    subtitle: "Karthik is sending you a warm hug.",
    btnText: "RECEIVE HUG 🤗",
    afterHugTitle: "Hug delivered to Roja ❤️",
    afterHugSubtitle: "No matter the distance, two hearts beat as one."
  },

  loveTree: {
    milestones: [
      { year: 1, title: "1 Year ❤️", subtitle: "Best Friends & Late Night Phone Calls" },
      { year: 2, title: "2 Years ❤️", subtitle: "First In-Person Meeting (02 Jan 2023)" },
      { year: 3, title: "3 Years ❤️", subtitle: "Deepening Love & Shared Dreams" },
      { year: 4, title: "4 Years ❤️", subtitle: "Full Blooming Love Tree for Roja" }
    ],
    finalTextLine1: "Four years of phone calls, first meetings, laughter, support, and deep love.",
    finalTextLine2: "And somehow... Karthik & Roja are just getting started."
  },

  finalMessage: "Thank you for being my best friend and the love of my life. Happy 4th Anniversary, my dearest Roja. ❤️",

  finalReveal: {
    line1: "4 YEARS.",
    line2: "Countless memories.",
    line3: "One special person.",
    line4: "Roja. ❤️",
    subtitle: "Happy 4th Anniversary, My Love."
  },

  finalQuestion: {
    question: "After everything...\n\n4 years of us.\nStarting as best friends.\nLate night calls & 2nd Jan 2023.\n\nRoja, would you choose me all over again? ❤️",
    btnYes: "YES KARTHIK ❤️",
    btnOfCourse: "ALWAYS & FOREVER 🥺",
    celebrationText1: "I knew it, Roja! ❤️",
    celebrationText2: "Here's to Year 5... and every year after that together. ♾️"
  }
};
