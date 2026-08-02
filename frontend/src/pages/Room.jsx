import { useEffect } from "react"
import { getRoom,reset } from "../../../admin/src/auth/roomSlice"
import {useDispatch,useSelector} from "react-redux"
import RoomList from "./RoomList"
function Room() {
  const dispatch = useDispatch()
  const {room} = useSelector((state)=>state.room)
  console.log(room)
  useEffect(()=>{
     dispatch(getRoom())
     dispatch(reset())
  },[])
  return (
      <div>
      {room.length > 0 ? <RoomList room={room}/>: null}
    </div>
  )
}

export default Room