let product = {
    company : 'Mango',
    price : 861,
    item_name : "T-Shirt",   
    'item-name': "Shirt",
};

// console.log(product)
// console.log(product.price)
// console.log(product.company)
// console.log(product.item_name)
// product.company = "Banana"
// console.log(product.company)

// console.log(product['company'])
// console.log(product["item-name"])


// delete product.company;
delete product['company']
console.log(product)