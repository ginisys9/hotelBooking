import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {userLogin,reset} from '../auth/authSlice'

function Login() {
    var navigate = useNavigate(),
        dispatch = useDispatch();
    const {user,isSuccess} = useSelector((state)=> state.auth)
    console.log({user,isSuccess})
    const [form,setForm] = useState({
        email:"",
        password:""
    })
     const {email,password} = form
    const changeHandler = (e) =>{
      const {name,value} = e.target;
      setForm((pre)=>({
        ...pre,
        [name]:value
      }))
    }
    useEffect(()=>{
      if (isSuccess) {
        navigate('/dashbaord')
        dispatch(reset())
      }
    },[isSuccess,user,dispatch,navigate])
   const formSubmit = async(e) =>{
      e.preventDefault();
      const data = {email,password}
      dispatch(userLogin(data))
   }
  return (
 <div className="container d-flex justify-content-center pt-5">
      <form onSubmit={formSubmit} style={{ width: "600px" }}>
        <h1 className='mb-3 text-center'>Login</h1>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
             name='email'
            value={form.email}
            onChange={changeHandler}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
             name='password'
            value={form.password}
            onChange={changeHandler}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="color w-100">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login