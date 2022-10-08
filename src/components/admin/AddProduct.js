import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Header from './Header';
import ProductForm from "./ProductForm";

const AddProduct =()=>{

  const navigate = useNavigate()

  const saveProduct = async (data)=>{//Ok
    await axios.post('http://localhost:5000/products',{
        title: data.title,
        price: data.price,
        description: data.description,
        keywords: data.keywords,
      })
      navigate('/dashboard')
  }

  return(
    <>
      <Header
        link ={'/dashboard'}
        text={"Cancel"}
        background={"red"}
      />
      <ProductForm
        onSubmit={saveProduct}
        buttonText ={"Add"}
        formHeading ={"Add Product"}
        fetchedValues ={""}
      />
    </>
  )
}
export default AddProduct