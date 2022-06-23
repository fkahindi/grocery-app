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
  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const handleInputChange = e =>{
    setInputText({
      ...inputText,
      [e.target.name] : e.target.value
    })
    setSubmitted(false)
  }
  
  const handleSubmit = e =>{
    e.preventDefault()
    
    if(!inputText.userName.trim()){
      setFormError(true)
      setNameError("Username is required")
    }
    if(!inputText.email.trim()){
      setFormError(true)
      setEmailError("Email is requird")
    }
    if(!inputText.password.trim()){
      setFormError(true)
      setPasswordError("Password is requird")
    }
    if(!inputText.confirmPassword.trim()){
      setFormError(true)
      setConfirmPasswordError("Confirm password")
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
          display: submitted ? "" : "none"
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
          display: formError? "": "none"
         }}
      >
        <h4>Fix form errors!</h4>
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
        <div className="error">{nameError===""? "": nameError}</div> 

        <label htmlFor="email" className="form-lbl">Email:</label>     
        <input 
          type="email"
          name="email"
          value={inputText.email}
          placeholder="Type email..."
          onChange={handleInputChange}
        />
        <div className="error">{emailError ===""? "": emailError}</div>

        <label htmlFor="password" className="form-lbl">Password:</label>
        <input 
          type="password"
          name="password"
          value={inputText.password}
          placeholder="Type password..."
          onChange={handleInputChange}
        />
        <div className="error">{passwordError===""? "": passwordError}</div>
        
        <label htmlFor="confirmPassword" className="form-lbl">Confirm Password:</label>
        <input 
          type="password"
          name="confirmPassword"
          value={inputText.confirmPassword}
          placeholder="Confirm password..."
          onChange={handleInputChange}
        />
        <div className="error">{confirmPasswordError===""? "": confirmPasswordError}</div>
        
        <button className="submit-btn">Signup</button>
      </form>
    </div>    
  )
}