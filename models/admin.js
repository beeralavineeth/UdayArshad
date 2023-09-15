const  mongoose = require("mongoose")
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    
    username:{
        type:String,
        unique:false,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true,
        unique:true

    },
    password:{
        type:String,
        unique:false,
        required:true

    }
})




userSchema.pre('save', function (next){
    const admin = this;
    bcrypt.genSalt(10, (err,salt)=>{
        if (err){
            console.log('next called 2')
            return next()
        }
    bcrypt.hash(admin.password,salt,(err,hash)=>{
        if(err){
            console.log('next called 3')
            return next(err)
        }
        admin.password=hash;
        console.log(admin)
        next()
    })
    })
})


userSchema.methods.comparePassword = function(candidatePassword){
    const admin = this;
    return new Promise ((resolve,reject)=>{
        bcrypt.compare(candidatePassword,admin.password,(err,isMatch)=>{
            if(err){
                return reject(err)
            }
            if (!isMatch){
                return reject(err)
            }

            resolve (true)
        })
    })
}




mongoose.model('Admin', userSchema)
