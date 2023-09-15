const express = require('express')
const { default: mongoose } = require('mongoose')
const jwt = require('jsonwebtoken')
const {jwtkey} = require("../keys")

const useraccess = require("../middlewares/useraccess")
const router = express.Router()
const User = mongoose.model('User');
const Admin = mongoose.model("Admin")



router.post('/user/signup', async (req, res) => {
  console.log(req.body);

  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).send("User with this already exists.");
    }

    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ userId: user._id }, jwtkey);
    user.token = token;
    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong. Please try again.");
  }
});






router.post('/admin/signup', async (req,res)=>{
  console.log(req.body)
try{
  const admin = new Admin(req.body)
  await admin.save();
  const token = jwt.sign({userId: admin._id },jwtkey )
  res.send({token})

}catch (err){
  console.log(err)
 return  res.send("something went wrong please try again")
}
  
})



router.post('/user/login',   async (req,res)=>{
  console.log(req.body)
  try{
    const user = req.body
    const {phonenumber, password} = req.body
    const checkuser = await   User.findOne({phonenumber})
    console.log(checkuser)
    if(checkuser==null){
     return res.send("Invalid credentials 1")  
    }
    await checkuser.comparePassword(password)
    if(checkuser.phonenumber==user.phonenumber ){
    const token = jwt.sign({userId: checkuser._id },jwtkey )
    res.send({token:token, userfound:checkuser})
  }else{
    res.send("Invalid credentials 2")
  }

  }catch (err){
    console.log(err)
   return  res.send("something went wrong please try again")
  }
})






router.post('/admin/login',   async (req,res)=>{
  console.log(req.body)
  try{
    const admin = req.body
    const {phonenumber, password} = req.body
    const checkadmin = await   Admin.findOne({phonenumber})
    console.log(checkadmin)
    if(checkadmin==null){
     return res.send("Invalid credentials - you are not admin")  
    }
     await checkadmin.comparePassword(password)
    if(checkadmin.phonenumber==admin.phonenumber ){
    const token = jwt.sign({userId: checkadmin._id },jwtkey )
    res.send({token:token, adminfound:checkadmin})
  }else{
    res.send("Invalid credentials -not admin")
  }

  }catch (err){
    console.log(err)
   return  res.send("something went wrong please try again")
  }
})

module.exports = router