const celsiusToFahrenheit = (celc) => {
    let calculateCelsius = (celc * 9 / 5) + 32
    return `Celsius To Fahrenheit: ${calculateCelsius}°C `
}
console.log(celsiusToFahrenheit(45));

const fahrenheitToCelsius = (fahrenheit) => {
    let calculationFahren = (fahrenheit - 32) * 5 / 9
    return `Fahrenheit To Celsius: ${calculationFahren.toFixed(2)}°F`
}
console.log(fahrenheitToCelsius(45));
