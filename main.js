// accessing the DOM elements

const convert = document.getElementById("submit");
const output = document.getElementById("output");

var base = document.getElementById("base").value;

// var bases = base.options[base.selectedIndex].value;

var symbol = document.getElementById("symbol").value;

URL = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbol}`;

convert.addEventListener("click", () => {
  // getRate();

  console.log(base);
  console.log(symbol);
});

async function getRate() {
  var response = await fetch(URL);
  var data = await response.json();
  console.log(data);

  // const symbol = document.getElementById("symbol").value;

  newBase = data.base;
  newSymbol = data.rates[symbol];

  output.innerHTML = `1 <span>${newBase}</span> = ${newSymbol} <span class='output'>${symbol} </span> `;
}
