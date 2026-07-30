import React, { useEffect, useState } from 'react'
import {registerUser,reset} from "../auth/authSlice"
import {useDispatch, useSelector} from 'react-redux'
import {isSession, useNavigate} from "react-router-dom"
function Register() {
     var  dispatch = useDispatch(),
          navigate =  useNavigate();
    const {user,isSuccess} = useSelector((state)=>state.auth)

    const [form,setForm] = useState({
        name:"",
        email:"",
        password:""
    })
      useEffect(()=>{
        if (isSuccess) {
          navigate('/login')
          dispatch(reset())
        }
      },[isSuccess,user,dispatch,navigate])
    const {name,email,password} = form
    const changeHandler = (e) =>{
      const {name,value} = e.target;
      setForm((pre)=>({
        ...pre,
        [name]:value
      }))
    }
   const formSubmit = async(e) =>{
       e.preventDefault();
       const dataToSubmit = {
         name,email,password
       }
       dispatch(registerUser(dataToSubmit))
   }
  return (
 <div className="container d-flex justify-content-center pt-5">

      <form onSubmit={formSubmit} style={{ width: "600px" }}>

        <h1 className='mb-3 text-center'>Register</h1>

        <h5 className='mb-4 text-center'>
          Please create an account
        </h5>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name='name'
            value={form.name}
            onChange={changeHandler}
            className="form-control"
            placeholder="Enter name"
          />
        </div>
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

export default Register