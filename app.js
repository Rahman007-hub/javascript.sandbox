// write a function that take in a strings and convert the first letter of everyword to upperCase
const firstLetter = (str) => {
    const result = str.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    return result.join(" ");
};
console.log(firstLetter("testing is fun and stressful"));

// write a function that check if the parameter is a number or not
const checkNumber = (arg) => typeof arg === "number";
console.log(checkNumber(80));

const currencytData = [
  { from: "GBP", to: "NGN", rate: 2200 },
  { from: "USD", to: "NGN", rate: 1700 },
  { from: "EUR", to: "NGN", rate: 1900 },
  { from: "YEN", to: "NGN", rate: 400 },
];

// iterate over the currencyData and log a message the exchange rate for USD to NGN is 1700
// write a func that returns the exchange rate for that currency pair
//or an appropriate message if the pair is not found
const findCurrencyPair = (baseCurrency, toCurrency) => {
  //search through the currencyData to find a match
  const pair = currencytData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
  });

  if (pair) {
    console.log(
      `The Exchange Rate for ${pair.from} to ${pair.to} is ${pair.rate}`
    );
  } else {
    console.log("The currency pair cannot be found");
  }
};
findCurrencyPair("YEN", "NGN");

const convertCurrency = (baseCurrency, toCurrency, amount) => {
      const pair = currencytData.find((currency) => {
        return currency.from === baseCurrency && currency.to === toCurrency;
      });
    if (pair) {
        console.log(`${amount} ${pair.from} is equaivalent to ${amount*pair.rate} ${pair.to}`);
    } else {
        console.log("Currency pair not found");
    }
}

convertCurrency("USD", "NGN", 500)

const addingMoreRate = (from, to, rate) => {
    currencytData.push({ from, to, rate })
        console.log(currencytData);
}
addingMoreRate("AUS","NGN",1040)