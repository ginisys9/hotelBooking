import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function NewBooking() {
     const {id} = useParams()
    const [booking,setBooking] = useState("")
    console.log(booking?.email)
    useEffect(()=>{
           
           const getbooking = async function() {
            try {
                const res = await fetch(`http://localhost:3000/booking/${id} `);
                const data  = await res.json()
                console.log(data)
                 setBooking(data)
            } catch (error) {
              console.log(error)   
            } 
        }
        getbooking()
    },[])
  return (
    <div>
        <h1 className="text-center">New Booking Details</h1>
          <h1>{booking?.name}</h1>
          <h3>{booking?.roomId?.name}</h3>
          <h3>{booking?.email}</h3>
          <h3>{booking?.checkInDate}</h3>
    </div>
  )
}
export default NewBooking