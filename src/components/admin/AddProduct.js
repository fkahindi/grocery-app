import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import ProductForm from "./ProductForm";

const AddProduct =()=>{ 

  const navigate = useNavigate()  

  const saveProduct = async (title,price)=>{
    
    try {
      await axios.post('http://localhost:5000/products',{
        title,
        price      
      })
      navigate('/dashboard')
      console.log("Title is: "+title+ " Price is: "+price)
    } catch (error) {
      console.log(error)
    } 
  }
 
 
  return(
    <>
      <ProductForm 
        handleSubmit={saveProduct}
      />
    </>    
  )
}
export default AddProduct