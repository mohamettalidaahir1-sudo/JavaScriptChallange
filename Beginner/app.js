//CHECK NUMBER

const isPositive = (num) => {
    return num > 0
}
const isNegative = (num) => {
    return num < 0
}

const isZero = (num) => {
    return num === 0
}
const isEven = (num) => {
    return num % 2 === 0
}
const describeNumber = (num) => {
    return {
        Positive: isPositive(num),
        Negative: isNegative(num),
        Zero: isZero(num),
        Even: isEven(num)
    }
}

console.log(describeNumber(8));
