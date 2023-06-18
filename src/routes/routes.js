const express = require('express')

const router = express.Router()

const { createUser, loginUser, updateUserCart, updateUserOrders } = require("../controllers/userControler")

router.get("/test", (req, res) => {
    return res.send({ msg: "working fine" })
})

router.post("/createUser", createUser)
router.post("/loginUser", loginUser)
router.put("/updateCart", updateUserCart)
router.put("/updateOrders", updateUserOrders)

module.exports = router