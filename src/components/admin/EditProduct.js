import React,{useState,useEffect, useRef}from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import ProductForm from './ProductForm';

const EditProduct = ()=>{
 
  const [title, setTitle] = useState()
  const [price, setPrice] = useState()
  const navigate = useNavigate()
  const {id} = useParams()

  const updateProduct =async (title, price)=>{
  await axios.patch(`http://localhost:5000/products/${id}`,{
    title:title,
    price:price,
    updated_at: new Date()
  })
  navigate('/dashboard')
 }

 useEffect(()=>{
   getProductById()
 },[])

 const getProductById = async ()=>{
    const res = await axios.get(`http://localhost:5000/products/${id}`)

     setTitle(res.data.title)
     setPrice(res.data.price)
   
 }
 return(
  <ProductForm 
    handleSubmit={updateProduct}
  />
 )
}
export default EditProduct