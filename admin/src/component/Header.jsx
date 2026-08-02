import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser,reset } from "../auth/authSlice";
function Header() {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const handleLogOut = () =>{
     dispatch(logOutUser())
     dispatch(reset())
  }
  return (
    <div className="container d-flex justify-content-between align-items-center py-3">
      <Link to="/" className="text-decoration-none text-dark">
        <h1 className="m-0">Hotel Name</h1>
      </Link>
     <nav className="d-flex gap-3">
     <Link to="/room" className="text-decoration-none text-dark">
        Room
      </Link>
  {user ? (
    <>
  <Link to="/dashboard" className="text-decoration-none text-dark">
    Dashboard
  </Link>

      <Link to="/create/room" className="text-decoration-none text-dark">
        create
      </Link>

      <button onClick={handleLogOut} className="border-0">
        Logout
      </button>
    </>
  ) : (
    <>
      <Link to="/login" className="text-decoration-none text-dark">
        Login
      </Link>

      <Link to="/register" className="text-decoration-none text-dark">
        Register
      </Link>
    </>
  )}
</nav>
    </div>
  );
}
export default Header;