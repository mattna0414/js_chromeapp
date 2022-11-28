const quotes = [
  {quote: "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius"
  },
  {quote:"ou will face many defeats in life, but never let yourself be defeated.",
    author:"Maya Angelou"
  },
  {quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela"
  },
  {quote:"Life is either a daring adventure or nothing at all.",
    author:"Helen Keller"
  },
  {quote:"All you need in this life is ignorance and confidence, then success is sure. ",
    author:"Mark Twain"
  },
  {quote:"Life is a mountain. Your goal is to find your path, not to reach the top.",
    author:"Maxime Lagacé"
  },
  {quote:"Life is from the inside out. When you shift on the inside, life shifts on the outside.",
    author:"amal Ravikant"
  },
  {quote:"The two most important days in your life are the day you are born and the day you find out why.",
    author:"Mark Twain"
  },
  {quote:"Great minds have purposes, others have wishes.",
    author:"Washington Irving"
  },
  {quote:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author:"Winston S."
  }
];

const quote = document.querySelector("span:first-child");
const author = document.querySelector("span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;