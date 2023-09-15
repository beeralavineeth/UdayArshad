const  mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    
    code:{
        type:String,
        unique:false,
        required:true
    },kanshopname:{
        type:String,
        unique:false,
        required:true

    },
    shopname:{
        type:String,
        unique:false,
        required:true

    },
    likes:{
        type:Number,
        unique:false,
        required:true

    },
    dislikes:{
        type:Number,
        unique:false,
        required:true

    },
    rating:{
        type:[Number],
        unique:false,
        required:false

    },
    image1:{
        type:String,
        unique:false,
        required:true

    },
    image2:{
        type:String,
        unique:false,
        required:true

    },
    timestamp:{
        type:Date,
        default:Date.now,
     },
    comments:[{
        user:{
            type:String,
            required:false 
             },
    message:{
            
            type:String,
            required:false 
         },
         timestamp:{
            type:Date,
            default:Date.now,
         }
            
    }]
})



mongoose.model('Offer', userSchema)
