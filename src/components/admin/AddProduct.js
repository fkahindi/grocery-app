import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

import ProductForm from "./ProductForm";

const AddProduct =()=>{ 

  const navigate = useNavigate()  

  const saveProduct = async (title, price)=>{
    await axios.post('http://localhost:5000/products',{
      title:title,
      price:price,
      created_at:new Date()
    })
    navigate('/dashboard')
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