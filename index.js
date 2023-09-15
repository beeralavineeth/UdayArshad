const express = require("express")
const res = require("express/lib/response")
const app = express()
const PORT =3000;
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const {mongoURL} =require("./keys")


require('./models/user')
require("./models/category")
require("./models/admin")
require("./models/offer")
require("./models/update")
require("./models/request")
require("./models/slideshow")
const authRoutes = require("./routes/authrouter")
const categoryRoutes = require("./routes/categoryrouter")
const offerRoutes = require("./routes/offerrouter")
const updateRoutes = require("./routes/updaterouter")
const requestRoutes = require("./routes/requestrouter")
const slidesRoutes = require("./routes/slidesrouter")
const imageRoutes=require("./routes/imageRoutes")

app.use(bodyparser.json())
mongoose.connect(mongoURL)
app.use(authRoutes)
app.use(categoryRoutes)
app.use(offerRoutes)
app.use(updateRoutes)
app.use(requestRoutes)
app.use(slidesRoutes)
app.use(imageRoutes)

mongoose.connection.on("connected", ()=>{
    console.log("Server Connected to Database Successfully..!")
})

mongoose.connection.on("error", ()=>{
    console.log("Sorry Cant Connect to database:(")
})







app.listen(PORT, ()=>{
    console.log("Serving is running on Port :" + PORT)
})