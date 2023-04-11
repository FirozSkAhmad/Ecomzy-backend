const express = require('express')

const router = express.Router()

const { createUser, loginUser } = require("../controllers/userControler")
const { addProduct, myProducts, deleteProduct } = require('../controllers/sellerController')
const { getProducts } = require('../controllers/buyerController')

router.get("/test", (req, res) => {
    return res.send({ msg: "working fine" })
})

router.post("/createUser", createUser)
router.post("/loginUser", loginUser)
router.get("/getproducts", getProducts)
router.post("/seller/addproduct", addProduct)
router.get("/seller/myproducts", myProducts)
router.delete("/seller/myproduct", deleteProduct)

module.exports = router