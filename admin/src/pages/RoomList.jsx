import { Link } from "react-router-dom"
import Crousal from "../component/Crousal"
function RoomList({ room }) {
  return (
    <div className="container mt-5">
      <div className="row g-4">
        {room.map((item) => (
          <Link className=" text-decoration-none text-dark col-lg-4 col-md-6 col-sm-12" key={item._id} to={`/room/all/${item._id}`}>
            <div className="h-100">
              {/* <img
                src={item.img[0]}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
                alt=""
              /> */}
              <Crousal data={item.img}/>
              <div className="card-body">
                <h4 className="text-center">{item.name}</h4>
              
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  )

}

export default RoomList