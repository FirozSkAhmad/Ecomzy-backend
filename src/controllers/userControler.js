const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function createUser(req, res) {
    try {
        const data = req.body

        const hashPassword = await bcrypt.hash(data.password, 10)
        data.password = hashPassword

        const uniqueData = await userModel.findOne({ email: data.email })

        if (uniqueData) {
            return res.status(400).send({ msg: "given email is already in exists" })
        }

        const createdData = await userModel.create(data)

        return res.status(201).send({ msg: "created successfully", createdData })
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

async function loginUser(req, res) {
    try {
        const data = req.body

        const { email, password } = data

        const uniqueData = await userModel.findOne({ email })

        if (!uniqueData) {
            return res.status(400).send({ msg: "no user exists with the given emailId" })
        }

        const hashPassword = await bcrypt.compare(password, uniqueData.password)

        if (!hashPassword) {
            return res.status(201).send({ msg: "incorrect password" })
        }

        const token = jwt.sign({ userId: uniqueData._id, name: uniqueData.fname, userType: uniqueData.usertype }, "my_key")

        return res.status(201).send({ msg: "logined successfully", token })
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

module.exports = { createUser, loginUser }