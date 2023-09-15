const express = require('express')
const { default: mongoose } = require('mongoose')


const useraccess = require("../middlewares/useraccess")
const adminaccess = require("../middlewares/adminaccess")
const router = express.Router()
const Update= mongoose.model("Update")



router.post('/admin/addupdate',adminaccess, async(req,res)=>{
    // 2images for addUPP
    console.log(req.body)
    try{
        const update = new Update(req.body)
        await  update.save();
         res.send("Update Added to database")
    } catch(err){
        console.log(err)
        return res.send("Sorry Something went Wrong")
    }
    
})


router.post('/user/getupdate',useraccess, async (req,res)=>{
    console.log(req.body)
    try{
    const allupdates = await   Update.find(req.body)
    res.send(allupdates)
    console.log(allupdates)
} catch(err){
    console.log(err)
    return res.send("Sorry Something went wrong please try again")
}
})






router.patch('/user/update/like',useraccess, async(req,res)=>{
    try{
        console.log(req.body)

     await Update.findOneAndUpdate(req.body ,  { $inc: { likes: 1 }}) 
     const likeditem = await Update.find(req.body)
        
           
            console.log(likeditem)
            res.send(likeditem)        }
  
     catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})



router.patch('/user/update/dislike',useraccess, async(req,res)=>{
    try{
        console.log(req.body)

     await Update.findOneAndUpdate(req.body ,  { $inc: { dislikes: 1 }}) 
     const dislikeditem = await Update.find(req.body)
            console.log(dislikeditem)
            res.send(dislikeditem)        }
  
     catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})




router.patch('/user/update/rating',useraccess, async(req,res)=>{
    try{
        console.log(req.body)

     await Update.findOneAndUpdate({_id:req.body.id},  { $push: { rating: req.body.rating } }) 
     const rateditem = await Update.find({_id:req.body.id})
            console.log(rateditem)
            res.send(rateditem)        }
  
     catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})


router.patch('/user/update/comment',useraccess, async(req,res)=>{
    try{
        console.log(req.body.id)

     await Update.findOneAndUpdate(req.body.id,  { $push: { comments: req.body.comment } }) 
     const commentitem = await Update.find(req.body.id)
            console.log(commentitem)
            res.send(commentitem)        }
  
     catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})


module.exports = router