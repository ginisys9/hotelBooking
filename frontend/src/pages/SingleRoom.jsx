import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { reset } from "../redux/roomSlice"
import { deleteRoom } from "../redux/roomSlice"
import Crousal from "../component/Crousel"
function SingleRoom() {
  const { id } = useParams()
  // const { user } = useSelector((state) => state.auth)
  const { isSuccess } = useSelector((state) => state.room)
  const [room, setRoom] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    const getRoom = async () => {
      dispatch(reset())
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
 
  const handleClick = function () {
    dispatch(deleteRoom(id))
  }
   
  return (
    <div className=" container mt-5">

      <div className="card-body text-center">

        <Crousal data={room.img}/>
        {/* <img src={room?.img?.[0]} alt="" width="90%" height="90%" /> */}
        <p className="card-text mt-4">{room.name}</p>
        <h4>{room.description}</h4>
        <h2>Rs {room?.price?.toFixed(2)}</h2>

        <Link
          to={`/booking/${room._id}`}
          className=" text-decoration-none color mt-3"
        >
          Book Now
        </Link>
     
      </div>
    </div>
  )
}

export default SingleRoom