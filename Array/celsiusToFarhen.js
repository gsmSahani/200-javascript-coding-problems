function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
const celsiusTemperature = 32;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(celsiusTemperature + "is C is equal to " + fahrenheitTemperature);
