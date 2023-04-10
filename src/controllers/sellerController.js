const proModel = require("../models/productModel")

async function addProduct(req, res) {
    try {
        const data = req.body
        const createdDoc = await proModel.create(data)
        res.status(201).send({ msg: "created sucessfully", createdDoc })
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

async function myProducts(req, res) {
    try {
        const data = req.body
        const { sellerId } = data
        const docs = await proModel.find(sellerId)
        res.status(201).send({ docs })
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

async function deleteProduct(req, res) {
    try {
        const data = req.body
        const { sellerId, productId } = data
        const docs = await proModel.findByIdAndDelete({ _id: productId })
        res.status(201).send({ msg: "deleted sucessfully" })
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

module.exports = { addProduct, myProducts, deleteProduct }