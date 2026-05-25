const Room = require("../models/roomModels")
const createRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body)
        if (!room) {
            return res.status(400).json({ message: "room are not found" })
        }
        return res.status(200).json(room)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "internal server error" })
    }
}
const getRooms = async (req, res) => {
    const rooms = await Room.find()
    return res.status(200).json(rooms)
}
const singleRooms = async (req, res) => {
    try {
        const rooms = await Room.findById(req.params.id)
        if (!rooms) {
            return res.status(400).json({ message: "room are not found" })
        }
        return res.status(200).json(rooms)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "internal server error" })
    }
}
const updateRoom = async (req, res) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
              returnDocument:"after"
            }
        )
        if (!updateRoom) {
            return res.status(400).json({message:"cannot updated rooms"})
        }
        return res.status(200).json(updateRoom)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "internal server error" })
    }
}
const deleteRoom = async (req,res)=>{
    try {
          await Room.findByIdAndDelete(req.params.id)
          return res.status(200).json({message:"room deleted"})
    } catch (error) {
           console.log(error.message)
        return res.status(500).json({ message: "internal server error" })
    }
}
module.exports = {
    createRoom,
    getRooms,
    singleRooms,
    updateRoom,
    deleteRoom
}