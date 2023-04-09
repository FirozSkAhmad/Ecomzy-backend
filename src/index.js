const express = require('express')

const cors = require('cors')

const app = express()

const route = require("./routes/routes")

app.use(express.json())

app.use(cors({
    origin: "*"
}))

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Firoz_Shaik_:XaFPzUPEGu5fK1KS@cluster0.dshhzz6.mongodb.net/Ecomzy-DB", { useNewUrlParser: true })
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err.message));

app.use('/', route)

app.listen(4000, () => console.log("App was running on port:" + 4000))



