const  mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    
    code:{
        type:String,
        unique:false,
        required:true
    },
    name:{
        type:String,
        required:true,
        unique:false
    },
    type:{
        type:String,
        unique:false,
        required:false

    },
    from:{
        type:String,
        unique:false,
        required:false

    },
    to:{
        type:String,
        unique:false,
        required:false

    }
    ,
    area:{
        type:String,
        unique:false,
        required:false

    },
    landmark:{
        type:String,
        unique:false,
        required:false

    },
    services:{
        type:String,
        unique:false,
        required:false

    },
    contact:{
        type:String,
        unique:false,
        required:false

    },
    desc:{
        type:String,
        unique:false,
        required:false

    },
    offer:{
        type:String,
        unique:false,
        required:false

    }
})



mongoose.model('Request', userSchema)
