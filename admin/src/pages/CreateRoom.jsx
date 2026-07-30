import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

function CreateRoom() {
   const navigate  = useNavigate();
   const {user} =  useSelector((state)=>state.auth)
   useEffect(()=>{
    if (!user) {
        navigate('/login')
    }
   },[user])
  return (
    <div>CreateRoom</div>
  )
}

export default CreateRoom