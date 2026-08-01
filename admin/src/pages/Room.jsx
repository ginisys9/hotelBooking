import { useDispatch, useSelector } from "react-redux"
import { getRoom,reset } from "../auth/roomSlice"
import { useEffect } from "react";
import RoomList from "./RoomList";

function Room() {
  const dispatch = useDispatch();
  const {room,isLoading,isSuccess} = useSelector((state)=>state.room)
  useEffect(()=>{
     dispatch(getRoom())
  },[])
   useEffect(()=>{
     if (isSuccess) {
        dispatch(reset())
     }
   },[isSuccess])
  if (isLoading) {
      return <h1 className="text-center">Loading...</h1>
  }
  return (
    <div>
      {room.length > 0 ? <RoomList room={room}/>: null}
    </div>
  )
}

export default Room