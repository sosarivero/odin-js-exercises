// Uses Unary operators because .toFixed() returns strings.
// Also helps with the fact that the tests wanted whole numbers to not have decimals (.0)

function convertToCelsius(fahrenheitTemp) {
  return +((fahrenheitTemp - 32) * 5 / 9).toFixed(1); 
}

function convertToFahrenheit(celsiusTemp) {
  return +((celsiusTemp * 9 / 5) + 32).toFixed(1);
}

console.log(convertToCelsius(100))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
