const mongoose = require("mongoose")
const roomSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true 
    },
    price:{
        type:Number,
        required:true
    },
    description:{
       type:String,
       required:true 
    },
    roomNumber:{
        type:[{
            number:Number,
            unavailbaleDate:[Date]
        }]
    }
})
module.exports = mongoose.model("Room",roomSchema)