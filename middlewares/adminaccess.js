const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Admin = mongoose.model("Admin")
const {jwtkey}= require("../keys")

module.exports = (req,res,next)=>{
    const {authorization}= req.headers;

    if (!authorization){
        return res.send("You must be logged in as Admin")
    }

    const token = authorization.replace("Bearer ","");

    jwt.verify(token,jwtkey, async (err, payload)=>{
        if(err){
            return res.send("You must be logged in")
        }
    const {userId}= payload;
    const admin = await Admin.findById(userId)
    if (admin!==null){
    next()
    }else{
        return res.send("You are not an admin")
    }

    } )
}