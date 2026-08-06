const cartItems = [
    { name: 'Notebook', price: 10, quantity: 2 },
    { name: 'Pen', price: 2, quantity: 5 },
    { name: 'Bag', price: 30, quantity: 1 },
];

const calculateSubtotal = (items) => {
    let subtotal = 0

    for (const item of items) {
        subtotal += item.price * item.quantity
    }
    return subtotal
}
console.log(calculateSubtotal(cartItems));

const calculateDiscount = (subtotal, discountPercent) => {
    return subtotal * (discountPercent / 100)
}

const calculateTax = (priceAfterDiscount, taxPercent) => {
    return (priceAfterDiscount * taxPercent) / 100
}

const cartSummery = (items, discountPercent, taxPercent) => {
    const subtotal = calculateSubtotal(items)
    const discount = calculateDiscount(subtotal, discountPercent)
    let priceAfterDiscount = subtotal - discount
    const tax = calculateTax(priceAfterDiscount, taxPercent)
    const total = priceAfterDiscount + tax
    return {
        subtotal,
        discount,
        tax,
        total
    }
}
console.log(cartSummery(cartItems, 20, 5));

const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(cartSummery(singleItemCart, 0, 10));