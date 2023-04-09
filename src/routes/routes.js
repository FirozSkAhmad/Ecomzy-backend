const express = require('express')

const router = express.Router()

const { createUser, loginUser } = require("../controllers/userControler")
const { addProduct, myProducts } = require('../controllers/sellerController')

router.get("/test", (req, res) => {
    return res.send({ msg: "workin fine" })
})

router.post("/createUser", createUser)
router.post("/loginUser", loginUser)
router.post("/seller/addproduct", addProduct)
router.get("/seller/myproducts", myProducts)

module.exports = router