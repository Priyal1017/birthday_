/**
 * BIRTHDAY GIFT WEBSITE CONFIGURATION 🎂
 * 
 * Personalized for your best friend!
 */

export const BIRTHDAY_DATA = {
  // Friend's Name
  FRIEND_NAME: "Jay",

  // Browser Tab & Page Title
  WEBSITE_TITLE: "Happy Birthday 🎂",

  // 1. OPENING SURPRISE SCREEN
  OPENING_SCREEN: {
    greeting: "Hey Jay 👀",
    subtitle1: "Today isn't just another day...",
    subtitle2: "Because someone very special is celebrating their birthday today. 🎂✨",
    question: "Ready for your surprise? 👀",
    buttonText: "Open Your Gift 🎁"
  },

  // 2. MAIN HERO BIRTHDAY MESSAGE
  HERO_SECTION: {
    title: "Happy Birthday, Jay! 🎉",
    messageLines: [
      "Some people enter your life and become unforgettable.",
      "You're one of those people.",
      "",
      "Thank you for all the laughs, random conversations,",
      "stupid moments, unforgettable memories,",
      "and for simply being there.",
      "",
      "I'm really lucky to have a best friend like you. 🤝✨"
    ],
    buttonText: "Keep Going... 👀"
  },

  // 3. MEMORIES SECTION (CONFIGURED WITH YOUR PHOTOS)
  MEMORIES_SECTION: {
    title: "Unforgettable Moments 📸✨",
    subtitle: "A collection of my favorite moments, laughs, and memories with you.",
    
    photos: [
      {
        id: 1,
        url: "/images/jay-handsome-1.jpg",
        caption: "Handsome boy with the coolest vibe 😎🖤"
      },
      {
        id: 2,
        url: "/images/jay-handsome-2.jpg",
        caption: "Cute boy, classy look, effortless charm 🫶🏻✨"
      },
      {
        id: 3,
        url: "/images/jay-handsome-3.jpg",
        caption: "Just casually looking this good 🌊🤍"
      }
    ]
  },

  // 4. REASONS SECTION
  REASONS_SECTION: {
    title: "Why You're One of My Favorite People 🤝",
    subtitle: "Real talk — a few things that make our friendship special.",
    cards: [
      {
        icon: "Shield",
        title: "Always Got My Back",
        text: "You're always there when I need you, no questions asked."
      },
      {
        icon: "Sparkles",
        title: "Master of Good Vibes",
        text: "You can turn even a boring day into a memorable one."
      },
      {
        icon: "MessageSquare",
        title: "Zero Filters Needed",
        text: "I can talk to you about literally anything without judging."
      },
      {
        icon: "Laugh",
        title: "The Funniest Banter",
        text: "We can laugh about the stupidest things until our stomachs hurt."
      },
      {
        icon: "HeartHandshake",
        title: "100% Genuine",
        text: "Thank you for always being real and genuine with me."
      },
      {
        icon: "Star",
        title: "Irreplaceable Friend",
        text: "Some friendships are simply irreplaceable. Ours is one of them."
      }
    ]
  },

  // 5. SECRET MESSAGE (HANDWRITTEN LETTER)
  SECRET_MESSAGE: {
    title: "Okay... One Last Thing 👀",
    subtitle: "I put together a small personal note for you.",
    buttonText: "Open This 🔐",
    letter: {
      salutation: "Dear Jay,",
      paragraphs: [
        "Happy Birthday to one of the most important people in my life! 🎉",
        "Life would honestly be a lot more boring without your random jokes, stupid conversations, and endless teasing. 😂",
        "Thank you for always being there, for listening to my nonsense, and for making even normal days memorable.",
        "We've made so many crazy memories together, and I hope we keep making many more. 🤝✨",
        "Stay exactly the way you are—genuine, crazy, supportive, and impossible to replace.",
        "Happy Birthday, and here's to another year of friendship, laughter, and unforgettable memories! 🥳🎂"
      ],
      signoff: "— Your Best Friend 🤝"
    }
  },

  // 6. FINAL SURPRISE SCREEN
  FINAL_SURPRISE: {
    title: "Happy Birthday, Jay! 🎂🎉",
    lines: [
      "Another year.",
      "Another chapter.",
      "Another collection of memories waiting to happen."
    ],
    highlight: "Here's to many more years of friendship, laughter and unforgettable moments. ✨",
    buttonText: "One Final Surprise 🎁",
    postSurpriseText1: "Thank you for being you. 🤝✨",
    postSurpriseText2: "Now go enjoy your birthday! 🎉"
  },

  // 7. BACKGROUND MUSIC CONFIGURATION
  MUSIC: {
    trackTitle: "Birthday Celebration Acoustic",
    src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=acoustic-guitars-ambient-11619.mp3",
    autoplay: false
  }
};
