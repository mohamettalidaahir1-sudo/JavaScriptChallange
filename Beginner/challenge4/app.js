const calculateDiscount = (price, discountPercentage) => {
    let amount = price * (discountPercentage / 100)
    let finalAmount = price - amount
    return finalAmount
}
console.log(calculateDiscount(65, 20));

const calculateTax = (priceAfterDiscount, taxPercent) => {
    let tax = priceAfterDiscount * (taxPercent / 100)
    let total = priceAfterDiscount + tax
    return total
}

console.log(calculateTax(52, 10));

const calculateFinalPrice = (price, discountPercentage, taxPercent) => {
    const originalPrice = price
    const discount = calculateDiscount(price, discountPercentage)
    const tax = calculateTax(discount, taxPercent)
    return `$${tax}`
}
console.log(calculateFinalPrice(65, 20, 5));

const createSummery = (price, discountPercent, taxPercent) => {
    return {
        price: price,
        discount: discountPercent,
        tax: taxPercent,
        finalPrice: calculateFinalPrice(price, discountPercent, taxPercent)
    }
}
console.log(createSummery(65, 20, 5));
console.log(createSummery(200, 25, 5));
console.log(createSummery(50, 0, 10));
