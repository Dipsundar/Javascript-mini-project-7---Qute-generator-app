const quote = document.getElementById("quote");
const author = document.getElementById("author");
const tweetQuoteBtn = document.getElementById("tweet_quote_btn");

// quote api url
const api_url = "https://api.quotable.io/random";

// data fetch async function
const getQuote = async (url) => {
  const response = await fetch(url);
  var data = await response.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
};

// invoke function
getQuote(api_url);

// tweet window open function
function tweetQuote() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " -- by " +
      author.innerHTML,
    "tweet window",
    "width=600, height=300"
  );
}
