const products = [
    { id: 1, name: 'Notebook', category: 'stationery', price: 10, inStock: true },
    { id: 2, name: 'Desk Lamp', category: 'home', price: 35, inStock: false },
    { id: 3, name: 'Pen Set', category: 'stationery', price: 6, inStock: true },
    {
        id: 4,
        name: 'Water Bottle',
        category: 'fitness',
        price: 18,
        inStock: true,
    },
];

//Filter By Category

const categoryFilter = (productArry, category) => {
    const result = productArry.filter((prod) => {
        if (prod.category === category) {
            return {
                id: prod.id, name: prod.name, category: prod.category, price: prod.price, inStock: prod.inStock
            }
        }
    })
    return result
}

console.log(categoryFilter(products, 'stationery'));

//Max Price

const maxPrice = (productsArry, price) => {
    return productsArry.filter((pr) => {
        if (pr.price <= price) {
            return {
                id: pr.id, name: pr.name, category: pr.category, price: pr.price, inStock: pr.inStock
            }
        }
    })
}

console.log(maxPrice(products, 30));

//Instock

const checkStock = (productArry) => {
    console.log(`Availible Products:`);

    return productArry.filter((pr) => {
        if (pr.inStock === true) {
            return {
                id: pr.id,
                name: pr.name,
                category: pr.category,
                price: pr.price
            }
        }
    })
}

console.log(
    checkStock(products))

//find by id

const findProductById = (productArry, productId) => {
    return productArry.filter((id) => {
        if (id.id === productId) {
            return {
                id: id.id,
                name: id.name,
                category: id.category,
                price: id.price,
                inStock: id.inStock
            }
        }
    })
}
console.log(findProductById(products, 2));


//search Product

const searchProduct = (productsArr, searchText) => {
    const isFound = productsArr.find((word) => {
        return word.name === searchText
    })
    if (isFound) {
        return {
            id: isFound.id,
            name: isFound.name,
            category: isFound.category,
            price: isFound.price,
            inStock: isFound.inStock
        }
    } else {
        return `Not found`
    }
}

console.log(searchProduct(products, 'Notebook'));
