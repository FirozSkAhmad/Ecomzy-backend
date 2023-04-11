const proModel = require("../models/productModel")

async function getProducts(req, res) {
    try {
        const productDoc = await proModel.find()
        res.status(200).send({ msg: "sucessfully got products", productDoc })
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}


module.exports = { getProducts}