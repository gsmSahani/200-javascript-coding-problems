function celsiusToFar(celsius) {
  return (celsius * 9) / 5 + 32;
}
function farToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
const celsius = 32;
const fahrenheit = 110;
console.log(celsiusToFar(celsius).toFixed(2));
console.log(farToCelsius(fahrenheit).toFixed(2));
console.log(`${celsius}°C is equal to ${celsiusToFar(celsius).toFixed(2)} °F `);
console.log(
  `${fahrenheit}°F is equal to ${farToCelsius(fahrenheit).toFixed(2)} °C `
);
