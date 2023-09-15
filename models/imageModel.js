const  mongoose = require("mongoose")


const imageSchema=new mongoose.Schema({
    images1:{
        type:String,
        unique:false,
        required:true

    },
    timestamp:{
        type:Date,
        default:Date.now,
     }
        
})
mongoose.model('Images',imageSchema)