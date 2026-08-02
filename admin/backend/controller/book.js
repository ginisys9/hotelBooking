const Booking = require("../models/bookingModels");
const createBooking = async (req,res)=>{
     try {
           const booking = await Booking.create(req.body)
           if (!booking) {
               return res.status(400).json({message:"booking are not found"})
           }
           return res.status(200).json(booking)
     } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:"Internal server error"})
     }
}
const getBooking = async (req,res) => {
    try {
        const booking = await Booking.find()
         return res.status(200).json(booking)
    } catch (error) {
           console.log(error.message)
        return res.status(500).json({message:"Internal server error"})
    }
}
const updateBooking = async (req,res) => {
    try {
        const updateBooking = await Booking.findByIdAndUpdate(req.params.id,{$set:req.body},{returnDocument:"after"});
        if (!updateBooking) {
            return res.status(400).json({message:"cannot update booking"})
        }
        return res.status(200).json(updateBooking)
    } catch (error) {
         console.log(error.message)
        return res.status(500).json({message:"Internal server error"})
    }
}
const deleteBooking = async (req,res) => {
      await Booking.findByIdAndDelete(req.params.id)
      return res.status(200).json({id:req.params.id})
}
const singleBooking = async (req,res) => {
     try {
          const booking = await Booking.findById(req.params.id);
          if (!booking) {
            return res.status(400).json({message:"booking not found"})
          }
          return res.status(200).json(booking)

     } catch (error) {
          console.log(error.message)
        return res.status(500).json({message:"Internal server error"})
     }
}
module.exports = {
    createBooking,
    getBooking,
    updateBooking,
    deleteBooking,
    singleBooking
}