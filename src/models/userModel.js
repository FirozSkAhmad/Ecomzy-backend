const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true,
        enum:["buyer","seller"]
    }
}, {
    timeStamps: true
})

module.exports = mongoose.model("user", userSchema)