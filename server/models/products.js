const mongoose = require(`mongoose`)

let Product = new mongoose.Schema(
    {

        name: {type: String},
        category: {type: String},
        brand: {type: String},
        price: {type: Number},
        currency: {type: String},
        description: {type: String},
        image: {type: String},
        inStock: {type: Boolean}
    },
    {
        collection: `products`
    })

module.exports = mongoose.model(`products`, Product)
