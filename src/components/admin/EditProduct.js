import React,{useState, useEffect}from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import ProductForm from './ProductForm';

const EditProduct = (props)=>{
  const [inputText, setInputText] = useState()

  const navigate = useNavigate()
  const {id} = useParams()

  const updateProduct =async (title, price)=>{//OK
  await axios.patch(`http://localhost:5000/products/${id}`,{
    title:title,
    price:price,
    updatedAt: new Date()
  })
  navigate('/dashboard')
 }

 useEffect(()=>{
  getProductById(id)
 },[id])

 const getProductById = async (id)=>{
  const res = await axios.get(`http://localhost:5000/products/${id}`)
  console.log(res.data.title, res.data.price)

  //update form fields with record from database

 }

 return(
  <ProductForm
    handleSubmit={updateProduct}
    buttonText={"Update"}
    formHeading={"Edit Product"}
  />
 )
}
export default EditProduct