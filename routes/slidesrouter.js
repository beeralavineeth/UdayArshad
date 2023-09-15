const express = require('express')
const { default: mongoose } = require('mongoose')


const useraccess = require("../middlewares/useraccess")
const adminaccess = require("../middlewares/adminaccess")
const router = express.Router()
const Slideshow= mongoose.model("Slideshow")

//each had 3 tabs and each upload 3 images

router.post('/admin/addss',adminaccess, async(req,res)=>{
    try{
        console.log(req.body)
    const slides = new Slideshow(req.body)
   await  slides.save();
    res.send("Slideshow Added to database")

    }catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})

router.patch('/admin/updatess',adminaccess, async(req,res)=>{
    try{
        console.log(req.body)

     await Slideshow.findOneAndUpdate(req.body.id ,  req.body.slides) 
     const slides = await Slideshow.find(req.body.id)
        
           
            console.log(slides)
            res.send(slides)        }
  
     catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})


router.post('/user/getss',useraccess, async (req,res)=>{
    console.log(req.body)
    try{
    const slides = await   Slideshow.find(req.body)
    res.send(slides)
    console.log(slides)
} catch(err){
    console.log(err)
    return res.send("Sorry Something went wrong please try again")
}
})


module.exports = router