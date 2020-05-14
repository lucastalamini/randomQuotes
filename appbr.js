// Targeting elements

const btn = document.getElementById("btn");

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
  message += `Em breve!`;
  console.log(quotes.author, quotes.quote);

  document.querySelector(".message").innerHTML = message;
});

// Adding event listeners

btn.addEventListener("click", refreshPage);

// Refresh page function

function refreshPage() {
  window.location.reload();
}
