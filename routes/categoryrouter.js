const express = require('express')
const { default: mongoose } = require('mongoose')


const useraccess = require("../middlewares/useraccess")
const adminaccess = require("../middlewares/adminaccess")
const router = express.Router()
const Category= mongoose.model("Category")



router.post('/admin/addcat',adminaccess, async(req,res)=>{
    //admin wants to add category
    try{
        console.log(req.body)
    const category = new Category(req.body)
   await  category.save();
    res.send("Category Added to database")

    }catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})
//https://sendgb.com/lRjGnkYL2MJ


router.post('/user/getcat',useraccess, async (req,res)=>{
    try{
        console.log(req.body)
    const chosencategory = await   Category.find(req.body)
    res.send(chosencategory)
    console.log(chosencategory)
    }catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})





router.patch('/user/cat/like',useraccess, async(req,res)=>{
    try{
        console.log(req.body)

     await Category.findOneAndUpdate(req.body ,  { $inc: { likes: 1 }}) 
     const likeditem = await Category.find(req.body)
        
           
            console.log(likeditem)
            res.send(likeditem)        }
  
     catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})



router.patch('/user/cat/dislike',useraccess, async(req,res)=>{
    try{
        console.log(req.body)

     await Category.findOneAndUpdate(req.body ,  { $inc: { dislikes: 1 }}) 
     const dislikeditem = await Category.find(req.body)
            console.log(dislikeditem)
            res.send(dislikeditem)        }
  
     catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})




router.patch('/user/cat/rating',useraccess, async(req,res)=>{
    try{
        console.log(req.body)

     await Category.findOneAndUpdate({_id:req.body.id},  { $push: { rating: req.body.rating } }) 
     const rateditem = await Category.find({_id:req.body.id})
            console.log(rateditem)
            res.send(rateditem)        }
  
     catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})


router.patch('/user/cat/comment',useraccess, async(req,res)=>{
    try{
        console.log(req.body.id)

     await Category.findOneAndUpdate(req.body.id,  { $push: { comments: req.body.comment } }) 
     const commentitem = await Category.find(req.body.id)
            console.log(commentitem)
            res.send(commentitem)        }
  
     catch(err){
        console.log(err)
        return res.send("Sorry Something went wrong")
    }
    
})


module.exports = router