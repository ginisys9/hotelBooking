import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editRoom ,reset} from "../auth/roomSlice"
import {useSelector,useDispatch} from "react-redux"
function EditRoom() {
  const { id } = useParams()
  var navigate = useNavigate(),
      dispatch = useDispatch(),
      {user,isSuccess} = useSelector((state)=>state.room)
    
        
      
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    roomNumber: ""
  })
  const { roomNumber, name, price, description } = form;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((pre) => ({
      ...pre,
      [name]: value
    }))
  }
   useEffect(()=>{
    if (isSuccess) {
      dispatch(reset())
       navigate("/room")
    }
   },[isSuccess])
  useEffect(() => {
    async function getRoom() {
      try {
        const res = await fetch(`http://localhost:3000/room/${id}`)
        const data = await res.json();

        const { roomNumber, ...rest } = data
        const roomMap = roomNumber.map((item) => item.number)
        const roomString = roomMap.join(",");
        setForm({
          ...rest,
          roomNumber: roomString
        })
      } catch (error) {
        console.log(error)
      }
    }
    getRoom()
  }, [])
  const formSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !roomNumber) {
      return;
    }
    const roomArray = roomNumber.split(",").map((item) => {
      return {
        number: parseInt(item),
        unavailbaleDate: []
      }
    });
    const dataToSubmit = {
      name,
      price,
      description,
      roomNumber: roomArray,
      roomId:id
    }
    dispatch(editRoom(dataToSubmit))
  }

  return (
    <div className="container d-flex justify-content-center pt-5">
      <form onSubmit={formSubmit} style={{ width: "600px" }}>
        <h1 className='mb-3 text-center'>Edit Room</h1>
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
        {/* <div className="mb-3">
          <label className="form-label">Images</label>
          <input
            type="file"
            name='file'
            multiple
            onChange={fileHandler}
            className="form-control"
          />
        </div> */}
        <button type="submit" className="color w-100">
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditRoom