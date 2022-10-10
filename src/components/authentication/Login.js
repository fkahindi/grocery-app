import React,{useState} from "react";
import {useForm} from 'react-hook-form'
import PropTypes from "prop-types";

import "../../App.css";

async function loginUser(credentials){
 /*  return fetch('http://localhost:8080/login',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(credentials)
  })
  .then(data=>data.json()) */
}

export default function Login({setToken}){
  const {register, handleSubmit, formState: {errors}} = useForm()

  /* const [email, setEmail] = useState()
  const [password, setPassword] = useState() */

  const onSubmit =async (data) =>{

    const token = await loginUser({
      /* email,
      password */
    })
    setToken(token)
  }
  const onError = (errors)=>{}
  return(
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit, onError)}>
      <h3 className="form-heading">Please Login</h3>
      <div>
         <label className="input-label">Email:</label>
        <input
          type="email"
          name="email"
          {...register('email', {required: "Email is required"})}
          className="input-text"
          placeholder="Type email...."
        />
        <div className="error">{errors.email?.message}</div>
      </div>

      <div>
        <label className="input-label">Password:</label>
        <input
          type="password"
          name="password"
          {...register('password',{required: "Password is required"})}
          className="input-text"
          placeholder="Enter password..."
        />
        <div className="error">{errors.password?.message}</div>
      </div>
      <button className="submit-btn">Login</button>
    </form>
    </>
  )
}
/* Login.propTypes = {
  setToken:PropTypes.func.isRequired
} */