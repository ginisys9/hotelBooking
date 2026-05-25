const express = require("express")
const router = express.Router()
const {auth} = require("../middleware/auth")
const userController = require("../controller/user")
router.post("/create",userController.createUser)
router.post("/login",userController.loginUser)
router.get("/get",auth,userController.getUser)
router.get("/logout",userController.logoutUser)

module.exports = router
