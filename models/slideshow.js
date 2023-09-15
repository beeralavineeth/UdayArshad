const  mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    
    code:{
        type:String,
        unique:true,
        required:true
    },image1:{
        type:String,
        unique:false,
        required:true

    },
    image2:{
        type:String,
        unique:false,
        required:true

    },
    image3:{
        type:String,
        unique:false,
        required:true

    }
})



mongoose.model('Slideshow', userSchema)
