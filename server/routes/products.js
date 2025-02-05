const router = require(`express`).Router()

const Product = require(`../models/products`)

// read all records
router.get(`/cars`, (req, res) =>
{
    Product.find((error, data) =>
    {
        res.json(data)
    })
})

module.exports = router