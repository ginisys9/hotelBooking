import { Link } from "react-router-dom";

function BookingList({ data }) {
  
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Booking List</h3>

      <table className="table table-bordered table-hover table-striped text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Room</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.roomId.name}</td>
                <td>
                  <Link
                    to={`/newBooking/${item._id}`}
                  className=" text-decoration-none text-black me-2">
                    Edit
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No Bookings Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookingList;