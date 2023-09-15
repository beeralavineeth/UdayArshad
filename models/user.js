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
    const user = this;
    bcrypt.genSalt(10, (err,salt)=>{
        if (err){
            console.log('next called 2')
            return next()
        }
    bcrypt.hash(user.password,salt,(err,hash)=>{
        if(err){
            console.log('next called 3')
            return next(err)
        }
        user.password=hash;
        console.log(user)
        next()
    })
    })
})


userSchema.methods.comparePassword = function(candidatePassword){
    const user = this;
    return new Promise ((resolve,reject)=>{
        bcrypt.compare(candidatePassword,user.password,(err,isMatch)=>{
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


mongoose.model('User', userSchema)
