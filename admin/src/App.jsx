import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './component/Header'
import Dashboard from './pages/Dashboard'
import CreateRoom from './pages/CreateRoom'
import Room from './pages/Room'
import SingleRoom from './pages/SingleRoom'
function App() {
    
  return (
    <Router>
      <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashbaord' element={<Dashboard/>}/>
      <Route path='/room' element={<Room/>}/>
      <Route path='/create/room' element={<CreateRoom/>}/>
      <Route path='/room/all/:id' element={<SingleRoom/>}/>

    </Routes>
    </Router>
  )
}

export default App