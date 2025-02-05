const mongoose = require(`mongoose`)

let User = new mongoose.Schema(
    {
        model: {type: String},
        colour: {type: String},
        year: {type: Number},
        price: {type: Number}
    },
    {
        collection: `users`
    })

module.exports = mongoose.model(`users`, User)
