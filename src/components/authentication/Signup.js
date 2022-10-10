import React, {useState} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate} from 'react-router-dom';

import "../../App.css"

export default function Singnup(){

  const [message, setMessage] = useState("")
  const {register, handleSubmit, formState: {errors}} = useForm("")
  const navigate = useNavigate()

  const onSubmit = async (data)=>{
    if(data.password !== data.confirmPassword){
      setMessage("Your passwords do not much")
      errors.confirmPassword ={message}
      return errors.confirmPassword
    }
 /*   const res = await axios.post('localhost:5000/users',{
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    password: data.password,
   });

   setMessage(res.message) */

    console.log(data)
    navigate('/login')
  }

  const onErrors = (errors)=>{}
  return(
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit, onErrors)}>
        <h3 className="form-heading">Signup</h3>
        <div>
          <label className="input-label">Firstname:</label>
          <input
            type="text"
            name="firstname"
            {...register('firstname', {required: "Firsname is required"})}
            className="input-text"
            placeholder="Firstname here..."
          />
          <div className='error'>{errors.firstname?.message}</div>
        </div>

        <div>
           <label className="input-label">Lastname:</label>
          <input
            type="text"
            name="lastname"
            {...register('lastname', {required: "Lastname is required"})}
            className="input-text"
            placeholder="Lastname here..."
          />
          <div className="error">{errors.lastname?.message}</div>
        </div>

        <div>
          <label className="input-label">Email:</label>
          <input
            type="email"
            name="email"
            {...register('email', {required: "Email is required"})}
            className="input-text"
            placeholder="Type email..."
          />
          <div className="error">{errors.email?.message }</div>
        </div>

        <div>
          <label className="input-label">Password:</label>
          <input
            type="password"
            name="password"
            {...register('password', {required: "Password is required",
            minLength:{
              value:8,
              message: "Password must have atleast 8 characters"
            }
          })}
            className="input-text"
            placeholder="Type password..."
          />
          <div className="error">{errors.password?.message}</div>
        </div>

        <div>
          <label className="input-label">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            {...register('confirmPassword', {required: "Password should be confirmed"})}
            className="input-text"
            placeholder="Confirm password..."
          />
          <div className="error">{errors.confirmPassword?.message} {message}</div>
        </div>
        <button className="submit-btn">Signup</button>
      </form>
    </>
  )
}