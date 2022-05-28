const quotes = [
  {
    quote:
      "For the message of the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God.",
    page: "1 Corinthians 1:18",
  },
  {
    quote:
      "Yet to all who received him, to those who believed in his name, he gave the right to become children of God-",
    page: "John 1:12",
  },
  {
    quote:
      "For it is by grace you have been saved, through faith-and this not from yourselves, it is the gift of God-not by works, so that no one can boast.",
    page: "Ephesians 2:8-9",
  },
  {
    quote:
      "Those who are wise will shine like the brightness of the heavens, and those who lead many to righteousness, like the stars for ever and ever.",
    page: "Daniel 12:3",
  },
  {
    quote:
      "'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    page: "John 3:16",
  },
];

const quote = document.querySelector(".quote span:first-child");
const page = document.querySelector(".quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
page.innerText = todaysQuote.page;

// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
