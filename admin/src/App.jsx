import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './component/Header'
import Dashboard from './pages/Dashboard'
function App() {
    
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashbaord' element={<Dashboard/>}/>

    </Routes>
    </Router>
  )
}

export default App