import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { createBooking,reset } from "../redux/bookingSlice"
function Booking() {
    const { id: roomId } = useParams()
    const dispatch = useDispatch()
    const {isSuccess,booking} = useSelector((state)=>state.booking)
    console.log(booking)
    const navigate = useNavigate()
    const [room, setRoom] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkInDate: "",
        checkOutDate: ""
    })
    const {name,email,checkInDate,checkOutDate} = formData
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((pre) => ({
            ...pre,
            [name]: value
        }))
    }
    useEffect(() => {
        const getBooking = async () => {
            try {
                const res = await fetch(`http://localhost:3000/room/${roomId}`);
                const data = await res.json()
                console.log(data)
                return setRoom(data);
            } catch (error) {
                console.error(error)
            }
        }
        getBooking()
    }, [])

     useEffect(()=>{
        if (isSuccess) {
             navigate("/success");
              dispatch(reset())
        }
     },[isSuccess])

    const formSubmit = async (e) => {
           e.preventDefault()
         const dataToSubmit = {name,email,checkInDate,checkOutDate,roomId}
           dispatch(createBooking(dataToSubmit))
    }
    return (
        <div className="container d-flex justify-content-center pt-5">

            <form onSubmit={formSubmit} style={{ width: "600px" }}>

                <h1 className='mb-3 text-center'>Booking</h1>

                <h5 className='mb-4 text-center'>
                    Please create Booking
                </h5>

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter name"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">CheckInDate</label>
                    <input
                        type="date"
                        name='checkInDate'
                        value={formData.checkInDate}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">CheckOutDate</label>
                    <input
                        type="date"
                        name='checkOutDate'
                        value={formData.checkOutDate}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <button type="submit" className="color w-100">
                    Submit
                </button>

            </form>

        </div>
    )
}

export default Booking