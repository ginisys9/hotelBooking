import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBooking } from "../auth/bookingSlice";
import BookingList from "./BookingList";
function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {bookings} = useSelector((state)=>state.booking)

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    dispatch(getBooking());
  }, [user, dispatch, navigate]);

   return (
    <div>
       <h1 className="text-center">Dashboard</h1>
        {bookings.length > 0 ? <BookingList 
          data={bookings}
        /> : null}
    </div>
   )
}

export default Dashboard;