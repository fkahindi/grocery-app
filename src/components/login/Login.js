import React,{useState} from "react";
import PropTypes from "prop-types";

import "./Login.css";

async function loginUser(credentials){
  return fetch('http://localhost:8080/login',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(credentials)
  })
  .then(data=>data.json())
}

export default function Login({setToken}){
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit =async e =>{
    e.preventDefault()
    const token = await loginUser({
      email,
      password
    })
    setToken(token)
  }
  return(
    <div className="login-wrapper">
      <h1>Please Log in</h1>
      <form className="" onSubmit={handleSubmit}>
      <input 
        type="email" 
        name="email" 
        placeholder="Type email...."
        onChange={e=>setEmail(e.target.value)}
      />
      <input 
        type="password" 
        name="password" 
        placeholder="Enter password..."
        onChange={e=>setPassword(e.target.value)}
      />
      <button className="btn">Login</button>
    </form>
    </div>    
  )
}
Login.propTypes = {
  setToken:PropTypes.func.isRequired
}