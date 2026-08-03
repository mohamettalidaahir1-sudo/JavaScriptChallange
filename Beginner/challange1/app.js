const celsiusToFahrenheit = (celc) => {
    let calculateCelsius = (celc * 9 / 5) + 32
    return `Celsius To Fahrenheit: ${calculateCelsius}`
}
// console.log(celsiusToFahrenheit(45));

const fahrenheitToCelsius = (fahrenheit) => {
    let calculationFahren = (fahrenheit - 32) * 5 / 9
    return `Fahrenheit To Celsius: ${calculationFahren.toFixed(2)}`
}
// console.log(fahrenheitToCelsius(45));

const formatTemperature = (value, unit) => {
    if (unit === 'C'.toLowerCase()) {
        let result = celsiusToFahrenheit(value)
        return `${result}°${unit.toUpperCase()} `
    }
    if (unit === 'F'.toLowerCase()) {
        let result = fahrenheitToCelsius(value)

        return `${result}${unit.toUpperCase()}`
    }
}

console.log(formatTemperature(78, 'c'));
console.log(formatTemperature(82, 'f'));


