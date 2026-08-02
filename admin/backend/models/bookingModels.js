const mongoose = require("mongoose")
const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    },
    email: {
        type: String,
        required: true
    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    confirmed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })
module.exports = mongoose.model("Booking", bookingSchema)