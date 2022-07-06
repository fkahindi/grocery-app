import React,{useState, useEffect, useRef} from 'react';

const ProductForm = (props)=>{
  const [inputText, setInputText] =useState({
    title:"",
    price:""
  })

  const inputFocus = useRef(inputText)
  useEffect(()=>{
    inputFocus.current.focus()
  },[])

  const checkForm =(e)=>{
    e.preventDefault()
    if(inputText.title.trim() && inputText.price.trim()){
      props.handleSubmit(inputText.title,inputText.price)
      setInputText({title:"", price:""})
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
    <form className="form-container" onSubmit={checkForm}>
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
        {props.buttonText}
      </button>
    </form>
  )
}
export default ProductForm