const mongoose = require("mongoose")
const objectId = mongoose.Types.ObjectId

const ProSchema = mongoose.Schema({
    sellerId: {
        type: objectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timeStamps: true
})

module.exports = mongoose.model("product", ProSchema)