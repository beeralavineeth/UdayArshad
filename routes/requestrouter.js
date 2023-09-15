const express = require('express')
const { default: mongoose } = require('mongoose')


const useraccess = require("../middlewares/useraccess")
const adminaccess = require("../middlewares/adminaccess")
const router = express.Router()
const Request= mongoose.model("Request")



router.post('/user/addreq',useraccess, async(req,res)=>{
    try{
        console.log(req.body)
    const request = new Request(req.body)
   await  request.save();
    res.send("Request Added to database")

    }catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})


router.post('/admin/getreq',adminaccess, async (req,res)=>{
    try{
        console.log(req.body)
    const chosenrequest = await   Request.find(req.body)
    res.send(chosenrequest)
    console.log(chosenrequest)
    }catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})

module.exports = router