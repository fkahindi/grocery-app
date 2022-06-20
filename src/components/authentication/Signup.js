import React,{useState} from 'react';

import "./Auth.css";

export default function Singnup(){
  const [inputText, setInputText] = useState({
    userName: "",
    email: "",
    password:"",
    confirmPassword: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState(false)

  const handleInputChange = e =>{
    setInputText({
      ...inputText,
      [e.target.name] : e.target.value
    })
    setSubmitted(false)
  }
  
  const handleSubmit =e=>{
    e.preventDefault()
    let nameError, emailError, passwordError, confirmPasswordError =""
    if(!inputText.userName.trim()){
      setFormError(true)
      nameError = 'Username is required'
    }
    if(!inputText.email.trim()){
      setFormError(true)
      emailError = 'Email is requird'
    }
    if(!inputText.password.trim()){
      setFormError(true)
      passwordError = 'Password is requird'
    }
    if(!inputText.confirmPassword.trim()){
      setFormError(true)
      confirmPasswordError = 'Confirm password'
    }
    if(!formError){
      setSubmitted(false)            
    }else{
      setFormError(false)
      setSubmitted(true)
      console.log(JSON.stringify(inputText, null,2))
      setInputText({
        userName:"",
        email:"",
        password:"",
        confirmPassword:"",
      })
    }    
  }
  
  const successMessage =()=>{
    return (
      <div
        className="success"
        style={{ 
          display: submitted ? '' : 'none'
         }}
      >
         <h4>User successfully registered! </h4>
      </div>
    )
  }

  const errorMessage = ()=>{
    return(
      <div
        className="error"
        style={{ 
          display: formError? '': 'none'
         }}
      >
        <h6>Fix form errors!</h6>
      </div>
    )
  }
  return(
    <div className="form-wrapper" onSubmit={handleSubmit}>
      <h1>Please Signup</h1>
      <form className="form"> 
        <div className="messages">
          {successMessage()}
          {errorMessage()}
        </div>
        <label htmlFor="userName" className="form-lbl">Username:</label>
        <input 
          type="text"
          name="userName"
          value={inputText.userName}
          placeholder="Username here..."
          onChange={handleInputChange}
        />
        <label htmlFor="email" className="form-lbl">Email:</label>     
        <input 
          type="email"
          name="email"
          value={inputText.email}
          placeholder="Type email..."
          onChange={handleInputChange}
        />
        <label htmlFor="password" className="form-lbl">Password:</label>
        <input 
          type="password"
          name="password"
          value={inputText.password}
          placeholder="Type password..."
          onChange={handleInputChange}
        />
        <label htmlFor="confirmPassword" className="form-lbl">Confirm Password:</label>
        <input 
          type="password"
          name="confirmPassword"
          value={inputText.confirmPassword}
          placeholder="Confirm password..."
          onChange={handleInputChange}
        />
        <button className="auth-btn">Signup</button>
      </form>
    </div>    
  )
}