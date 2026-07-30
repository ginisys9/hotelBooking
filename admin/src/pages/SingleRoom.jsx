import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function SingleRoom() {
    const { id } = useParams()
    const [room,setRoom] = useState("")
    console.log(id)
    useEffect(() => {
        const getRoom = async () => {
            try {
                const res = await fetch(`http://localhost:3000/room/${id}`)
                const data = await res.json()
                setRoom(data)
            } catch (error) {
                console.log(error)
            }
        }
        getRoom()
    }, [])
  
  console.log(room)
    return (
    <div className=" container mt-5">
   
  <div className="card-body">
     <img src={room?.img?.[0]} alt="" width='90%' height='100%'/>
    <p className="card-text mt-4 text-center">{room.name}</p>
    <h4 className="text-center">{room.description}</h4>
    <h2 className="text-center"> Rs {room.price.toFixed(2)}</h2>
  </div>
</div>
    )
}

export default SingleRoom