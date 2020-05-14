// Targeting elements

const btn = document.getElementById("btn");
const preloader = document.querySelector(".preloader");

// Selecting a quote

async function getQuotes() {
  const response = await fetch("https://freequote.herokuapp.com/");

  const data = await response.json();

  return data;
}

getQuotes().then((quotes) => {
  if (quotes.author === "") {
    quotes.author = "Unknown Author";
  }
  let message = "";
  message += `${quotes.quote} <br><br>"<i>${quotes.author}"</i>`;
  console.log(quotes.author, quotes.quote);

  document.querySelector(".message").innerHTML = message;
});

// Adding event listeners

btn.addEventListener("click", refreshPage);

// Refresh page function

function refreshPage() {
  window.location.reload();
}

// Hide preloader
window.addEventListener("load", function () {
  setTimeout(() => {
    preloader.classList.add("hide-preloader");
  }, 1000);
});
