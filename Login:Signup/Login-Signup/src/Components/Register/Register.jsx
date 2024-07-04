// import React, { useState } from 'react'
// import "./Register.css"
// import axios from "axios"
// import { response } from 'express';


// const Register = () => {

//   const [user,setUser] = useState({
//     name:"",
//     email:"",
//     password:"",
//     cpassword:""
//   })
  
//   const handleChange = (e) =>{
//     const {name,value} = e.target;
//     setUser({
//       ...user,
//       [name]:value
//     })
//   }
  

//   const register = () =>{
//     const {name,email,password,cpassword} = user;
//     if(name && email && password && (password === cpassword)){
//       alert("posted baby");
//       axios.post("http://localhost:5001/register",user).then(res => console.log(res));
//     }
//     else{
//       alert("Invalid Input Baby");
//     }
 
//   }
  
//   return (
//     <div className="register">
//             <h1>Register</h1>
//             {/* {console.log("User",user)}; */}
//             <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange} ></input>
//             <input type="text" name="email"  value={user.email}placeholder="Your Email" onChange={handleChange}></input>
//             <input type="password" name="password" value={user.password}placeholder="Your Password" onChange={handleChange}></input>
//             <input type="password" name="cpassword" value={user.cpassword}placeholder="Re-enter Password" onChange={handleChange}></input>
//             <div className="button" onClick={register}>Register</div>
//             <div>or</div>
//             <div className="button">Login</div>
//         </div>
//   )
// }

// export default Register

import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

const Register = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const register = () => {
    const { name, email, password, cpassword } = user;
    if (name && email && password && password === cpassword) {
      axios.post("http://localhost:5001/register", user)
        .then(res => {
          alert("Registration Successful");
          console.log(res.data);
        })
        .catch(err => {
          console.error("Error during registration: ", err);
          alert("User already Registered");
        });
    } else {
      alert("Please fill all fields correctly");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange} />
      <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange} />
      <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange} />
      <input type="password" name="cpassword" value={user.cpassword} placeholder="Re-enter Password" onChange={handleChange} />
      <div className="button" onClick={register}>Register</div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  );
};

export default Register;
