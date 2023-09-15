const express = require('express')
const { default: mongoose } = require('mongoose')


const useraccess = require("../middlewares/useraccess")
const adminaccess = require("../middlewares/adminaccess")
const router = express.Router()
const Offer= mongoose.model("Offer")



router.post('/admin/addoff',adminaccess, async(req,res)=>{
    //2 images upload admin access
    console.log(req.body)
    try{
        const offer = new Offer(req.body)
        await  offer.save();
         res.send("Offer Added to database")
    } catch(err){
        console.log(err)
        return res.send("Sorry Something went Wrong")
    }
    
})


router.post('/user/getoff',useraccess, async (req,res)=>{
    console.log(req.body)
    try{
    const alloffers = await   Offer.find(req.body)
    res.send(alloffers)
    console.log(alloffers)
} catch(err){
    console.log(err)
    return res.send("Sorry Something went wrong please try again")
}
})


router.patch('/user/off/like',useraccess, async(req,res)=>{
    try{
        console.log(req.body)

     await Offer.findOneAndUpdate(req.body ,  { $inc: { likes: 1 }}) 
     const likeditem = await Offer.find(req.body)
        
           
            console.log(likeditem)
            res.send(likeditem)        }
  
     catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})



router.patch('/user/off/dislike',useraccess, async(req,res)=>{
    try{
        console.log(req.body)

     await Offer.findOneAndUpdate(req.body ,  { $inc: { dislikes: 1 }}) 
     const dislikeditem = await Offer.find(req.body)
            console.log(dislikeditem)
            res.send(dislikeditem)        }
  
     catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})




router.patch('/user/off/rating',useraccess, async(req,res)=>{
    try{
        console.log(req.body)

     await Offer.findOneAndUpdate({_id:req.body.id},  { $push: { rating: req.body.rating } }) 
     const rateditem = await Offer.find({_id:req.body.id})
            console.log(rateditem)
            res.send(rateditem)        }
  
     catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})


router.patch('/user/off/comment',useraccess, async(req,res)=>{
    try{
        console.log(req.body.id)

     await Offer.findOneAndUpdate(req.body.id,  { $push: { comments: req.body.comment } }) 
     const commentitem = await Offer.find(req.body.id)
            console.log(commentitem)
            res.send(commentitem)        }
  
     catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})




module.exports = router