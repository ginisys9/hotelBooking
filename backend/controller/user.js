const User = require("../models/userModel")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const createUser = async (req,res) => {
     try {
         const { name, email, password } = req.body
    const hashedPassword = await bcryptjs.hash(password, 12);
    const user = await User.create({
      name,
      email,
      password:hashedPassword
    })
    return res.status(200).json(user)
     } catch (error) {
        console.log(error)
    return res.status(500).json({ message: "internal server error" })
     }
}
const loginUser = async (req,res) => {
    try {
          const {email,password} = req.body
       const user = await User.findOne({email});
       if (!user) {
          return res.status(400).json({message:"user are not found"})
       }
       const isMatch = await bcryptjs.compare(password,user.password)
       if (!isMatch) {
         return res.status(400).json({message:"invalid credentials"})
       }
           //generate token
       const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
       // set cookies
        res.cookie("jwt",token)
        return res.status(200).json({user,token})
    } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "internal server error" })
    }
}
const getUser = async function(req,res) {
    return res.status(200).json({message:"get user"})
}
const logoutUser = async (req,res) => {
      res.cookie("jwt"," ",{expiresIn:"-1"});
      return res.status(200).json({message:"you have been logged out"})
}
module.exports = {
    createUser,
    loginUser,
    getUser,
    logoutUser
}