import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { deleteBooking, reset } from "../auth/bookingSlice"
import { useDispatch, useSelector } from "react-redux"

function NewBooking() {
    const { id } = useParams()
    const [booking, setBooking] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isSuccess } = useSelector((state) => state.booking)

    useEffect(() => {
        dispatch(reset())
        const getbooking = async function () {
            try {
                const res = await fetch(`http://localhost:3000/booking/${id} `);
                const data = await res.json()
                console.log(data)
                setBooking(data)
            } catch (error) {
                console.log(error)
            }
        }
        getbooking()
    }, [])
    useEffect(() => {
        if (isSuccess) {

            dispatch(reset())

        }

    }, [isSuccess])
    const handleClick = (e) => {
        dispatch(deleteBooking(id))
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="text-center  p-4" style={{ width: "400px" }}>
                <h1 className="mb-4">New Booking Details</h1>

                <h3>Name: {booking?.name}</h3>
                <h3>Room: {booking?.roomId?.name}</h3>
                <h3>Email: {booking?.email}</h3>
                <h3>Check In: {booking?.checkInDate}</h3>

                <div className="mt-4 d-flex justify-content-center gap-3">
                    <button className="color">
                        Approve
                    </button>

                    <button onClick={handleClick}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
export default NewBooking