import { Link } from "react-router-dom"
function Header() {
  return (
 <div className="d-flex container main justify-content-between align-items-center">
    <Link to='/' className="text-decoration-none text-dark">
    <h1 className="text-decoration-none">Hotel Name</h1>
  </Link>

  <nav className="d-flex text gap-3">
    <Link className="" to='/'>Home</Link>
    <Link className="" to='/login'>Login</Link>
    <Link className="" to='/register'>Register</Link>
  </nav>

</div>
  )
}
export default Header