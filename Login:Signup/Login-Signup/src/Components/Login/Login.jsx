import React, { useState } from 'react'
import "./Login.css"
import axios from "axios"
import Register from '../Register/Register'

const Login = () => {
  const [user,setUser] = useState({
    email:"",
    password:"",
  })
  
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setUser({
      ...user,
      [name]:value
    })
  }
  const login = () =>{
    axios.post("http://localhost:5001/login",user)
    .then(res=>
      alert(res.data.message)
    )
  }
  const register = () =>{
    <Register/>
  }
  return (
    <div className="login">
      {console.log(user)}
    <h1>Login</h1>
    <input type="text" name="email" placeholder="Enter your Email" value={user.email} onChange={handleChange}></input>
    <input type="password" name="password"  placeholder="Enter your Password"  value={user.password} onChange={handleChange}></input>
    <div className="button" onClick={login}>Login</div>
    or
    <div className="button">Register</div>
</div>
  )
}

export default Login