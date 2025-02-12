const router = require(`express`).Router()

const Product = require(`../models/products`)

// read all records
router.get(`/products`, (req, res) =>
{
    Product.find((error, data) =>
    {
        res.json(data)
    })
})

module.exports = router