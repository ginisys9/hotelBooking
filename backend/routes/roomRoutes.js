const express = require("express")
const router = express.Router()
const {auth} = require("../middleware/auth")
const roomController = require("../controller/room")
router.post("/create",auth,roomController.createRoom)
router.get("/allroom",roomController.getRooms)
router.get("/:id",roomController.singleRooms)
router.put("/:id",auth,roomController.updateRoom)
router.delete("/:id",auth,roomController.deleteRoom)
module.exports = router

