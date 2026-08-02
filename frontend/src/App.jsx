import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Room from "./pages/Room"
import SingleRoom from "./pages/SingleRoom"
import Header from "./component/Header"
import Booking from "./pages/Booking"
import Success from "./component/Success"
function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/room" element={<Room/>}/>
          <Route path="/room/all/:id" element={<SingleRoom/>}/>
          <Route path="/booking/:id" element={<Booking/>}/>
          <Route path="/success" element={<Success/>}/>

        </Routes>
    </Router>
  )
}

export default App
