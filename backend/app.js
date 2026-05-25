const express = require('express')
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")
const connectDB = require("./config/db")
const roomRoutes = require("./routes/roomRoutes")
const bookingRoutes = require("./routes/bookingRoutes")
const userRoutes = require("./routes/userRoutes")
require('dotenv').config()
// database connections
connectDB()
// middleware declartions
app.use(express.json())
app.use(cookieParser())
app.use(cors(
//     origin: "http://localhost:5173", // frontend url
//   credentials: true
))
// routes are defined
app.use("/room",roomRoutes)
app.use("/booking",bookingRoutes)
app.use("/user",userRoutes)
const port = process.env.PORT || 5000
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))