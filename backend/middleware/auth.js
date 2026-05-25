const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const auth = async function(req,res,next) {
    try {
        // create the token 
         const token = req.cookies.jwt;
         if (!token) {
            return res.status(400).json({message:"no authorization"})
         }
           // verify the token
             const  {id }=  jwt.verify(token,process.env.JWT_SECRET)
          const user = await User.findById(id)
          if (!user) {
             return res.status(400).json({message:"user are not found"})
          }
          req.user = user
          next()
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:"internal server error"})
    }
}
module.exports = {
    auth
}