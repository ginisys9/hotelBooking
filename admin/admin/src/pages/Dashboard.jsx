import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


function Dashboard() {
  var navigate = useNavigate(),
      dispatch = useDispatch(),
      {user} = useSelector((state)=>state.auth);
   useEffect(()=>{
     if (!user) {
         navigate('/login')
     }
   },[user])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard