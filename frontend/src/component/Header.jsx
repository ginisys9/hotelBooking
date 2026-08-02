import { Link } from "react-router-dom";
function Header() {
 
  return (
    <div className="container d-flex justify-content-between align-items-center py-3">
      <Link to="/" className="text-decoration-none text-dark">
        <h1 className="m-0">Logo</h1>
      </Link>
      <nav className="d-flex gap-3">
        <Link to="/" className="text-decoration-none text-dark">
          Home
        </Link>
         <Link to="/room" className="text-decoration-none text-dark">
          Room
        </Link>
      </nav>
    </div>
  );
}
export default Header;