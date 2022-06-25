import React, {useState,useEffect,useRef} from "react";

const AddProduct =({addProductProps})=>{

  const [inputText, setInputText] =useState({
    title:"",
  })

  const inputFocus = useRef(inputText)
  useEffect(()=>{
    inputFocus.current.focus()
  },[])
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(inputText.title.trim()){
      addProductProps(inputText.title)
      setInputText({title:""})
    }else{
      alert("Fill product field.")
    }
 }
 const handleChange =e=>{
    setInputText({
      ...inputText,
      [e.target.name] : e.target.value
    })
  }
  return(
    <form className="form-container" onSubmit={handleSubmit}>
      <input 
        className="input-text"
        placeholder="Add product item ..."
        ref={inputFocus}
        onChange={handleChange} 
        name="title"
        value={inputText.title}
      />
      <input 
        className="input-text"
        placeholder="Add price..."
        onChange={handleChange} 
        name="price"
        value={inputText.price}
      />
      <button 
        style={{ 
          backgroundColor:"darkcyan", 
          color:"white", 
          border:"none",
          borderRadius:"calc(0.5*40px)",
          padding:"10px", 
          cursor:"pointer" 
         }}
      >
        Add
      </button>
    </form>
  )
}
export default AddProduct