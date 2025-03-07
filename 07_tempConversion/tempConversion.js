const convertToCelsius = function (fahrenheitTemp) {
  let celciusTemp = (fahrenheitTemp - 32) * (5 / 9);
  return Number(celciusTemp.toFixed(1));
};

const convertToFahrenheit = function (celciusTemp) {
  let fahrenheitTemp = celciusTemp * (9 / 5) + 32;
  return Number(fahrenheitTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
