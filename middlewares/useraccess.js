const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model("User")
const {jwtkey}= require("../keys")

module.exports = (req,res,next)=>{
    const {authorization}= req.headers;

    if (!authorization){
        return res.send("You must be logged in.")
    }

    const token = authorization.replace("Bearer ","");

    jwt.verify(token,jwtkey, async (err, payload)=>{
        if(err){
            return res.send("You must be logged in 2")
        }
    const {userId}= payload;
    const user = await User.findById(userId)
    if (user!==null){
        next()
        }else{
            return res.send("You are not an user")
        }
   

    } )
}