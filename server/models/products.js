const mongoose = require(`mongoose`)

let Product = new mongoose.Schema(
    {
        model: {type: String},
        colour: {type: String},
        year: {type: Number},
        price: {type: Number}
    },
    {
        collection: `products`
    })

module.exports = mongoose.model(`products`, Product)
