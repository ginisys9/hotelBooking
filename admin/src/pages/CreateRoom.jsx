import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import {uploadImage} from '../util/utils'
import { createRoom,reset } from "../auth/roomSlice";
function CreateRoom() {
   const navigate  = useNavigate();
   const dispatch = useDispatch();
   const {user} =  useSelector((state)=>state.auth)
   const {isSuccess,rooms} = useSelector((state)=>state.room)
   const [file,setFile] = useState("")
   const [form,setForm] = useState({
    name:"",
    price:"",
    description:"",
    roomNumber:"757, 464, 354, 299"
   })
   const changeHandler = (e) =>{
    console.log(e.target.value)
      const {name,value} = e.target;
      setForm((pre)=>({
        ...pre,
        [name]:value
      }))
   }
   const {name,price,description,roomNumber} = form;
   useEffect(()=>{
    if (!user) {
        navigate('/login')
    }
   },[user])
   useEffect(()=>{
    if (isSuccess) {
        dispatch(reset())
       navigate('/dashbaord')
    }
   },[isSuccess])
   const fileHandler = (e) =>{
       setFile(e.target.files)
   }
   const formSubmit = async  (e) =>{
      e.preventDefault();
      if (!name || !price || !roomNumber) {
         return;
      }
    const roomArray = roomNumber.split(",").map((item)=>{
     return{
         number:parseInt(item),
         unavailbaleDate:[]
     }
   });
     // upload image into the cloudinary
     let list = [];
     list = await Promise.all(Object.values(file).map(async (fileValue)=>{
        const url = await uploadImage(fileValue)
       
         return url
     }))
     const dataToSubmit = {
      name,
      price,
      description,
      roomNumber:roomArray,
      img:list
     }
   
     // dispatch the data
      dispatch(createRoom(dataToSubmit))
   }
  
  
  return (
    <div className="container d-flex justify-content-center pt-5">
      <form onSubmit={formSubmit} style={{ width: "600px" }}>
        <h1 className='mb-3 text-center'>Create Room</h1>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name='name'
            value={form.name}
            onChange={changeHandler}
            className="form-control"
            placeholder="Enter room name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="price"
             name='price'
            value={form.price}
            onChange={changeHandler}
            className="form-control"
            placeholder="Enter room price"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            type="text"
            rows='3'
             name='description'
            value={form.description}
            onChange={changeHandler}
            className="form-control"
            placeholder="Enter Description room "
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Room Number</label>
          <textarea
            type="text"
            rows='3'
            name='roomNumber'
            value={form.roomNumber}
            onChange={changeHandler}
            className="form-control"
            placeholder="Enter room number seprated by comma eg: 244, 204, 567,708 "
          />
        </div>
         <div className="mb-3">
          <label className="form-label">Images</label>
          <input
            type="file"
            name='file'
            multiple
            onChange={fileHandler}
            className="form-control"
          />
        </div>
        <button type="submit" className="color w-100">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateRoom