const convertToCelsius = function (fahrenheit) {
  let value1 = 0;
  value1 = ((fahrenheit - 32) * 5) / 9;
  return Math.round(value1 * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  let value2 = 0;
  value2 = (celsius * 9) / 5 + 32;
  return Math.round(value2 * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
