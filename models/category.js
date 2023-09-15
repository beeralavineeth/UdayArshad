const  mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    
    code:{
        type:String,
        required:true,
        unique:false
    },
    profile:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        unique:false,
        required:true

    },
    class:{
        type:String,
        unique:false,
        required:false

    },
    subclass:{
        type:String,
        unique:false,
        required:false

    },
    kansubclass:{
        type:String,
        unique:false,
        required:false

    },
    address:{
        type:String,
        unique:false,
        required:true

    },
    timings:{
        type:String,
        unique:false,
        required:true

    }
    ,
    area:{
        type:String,
        unique:false,
        required:true

    },
    landmark:{
        type:String,
        unique:false,
        required:true

    },
    kanname:{
        type:String,
        unique:false,
        required:true

    },
    kanclass:{
        type:String,
        unique:false,
        required:false

    },
    kanarea:{
        type:String,
        unique:false,
        required:true

    },
    kanlandmark:{
        type:String,
        unique:false,
        required:true

    },
    services:{
        type:[String],
        unique:false,
        required:true

    },
    contact:{
        type:String,
        unique:false,
        required:true

    },
    about:{
        type:String,
        unique:false,
        required:true

    },
    kanabout:{
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
    image3:{
        type:String,
        unique:false,
        required:true

    },
    image4:{
        type:String,
        unique:false,
        required:true

    },
    image5:{
        type:String,
        unique:false,
        required:true

    },
    lattitude:{
        type:String,
        unique:false,
        required:true

    },
    longitude:{
        type:String,
        unique:false,
        required:true

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



mongoose.model('Category', userSchema)
