const quotes = [
  {
    quote: "java",
    author: "james gosling"
  },
  {
    quote: "python",
    author: "Guido van Rossum"
  },
  {
    quote: "javascript",
    author: "Brendan Eich"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuoate = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todayQuoate.quote;
author.innerHTML = todayQuoate.author;
