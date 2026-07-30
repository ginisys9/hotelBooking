import { useDispatch, useSelector } from "react-redux"
import { getRoom } from "../auth/roomSlice"
import { useEffect } from "react";
import RoomList from "./RoomList";

function Room() {
  const dispatch = useDispatch();
  const {room,isLoading} = useSelector((state)=>state.room)
  useEffect(()=>{
     dispatch(getRoom())
  },[])
  if (isLoading) {
      return <h1 className="text-center">Loading...</h1>
  }
  return (
    <div>
      {room.length > 0 ? <RoomList data={room}/>: null}
    </div>
  )
}

export default Room