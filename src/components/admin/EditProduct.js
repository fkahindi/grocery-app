import React,{useEffect}from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import ProductForm from './ProductForm';
import Header from './Header';

const EditProduct = ()=>{

  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
  getProductById(id)

 },[id])

 const getProductById = async (id)=>{
  const res = await axios.get(`http://localhost:5000/products/${id}`)

  console.log("Product Id: "+ id +" "+ res.data.title, res.data.price)

  //Populate form fields with records from database

 }

  const updateProduct =async (data)=>{//Ok
  await axios.patch(`http://localhost:5000/products/${id}`,{
    title:data.title,
    price:data.price,
    description:data.description,
    keywords:data.keywords,
    updatedAt: new Date()
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
      onSubmit={updateProduct}
      buttonText={"Update"}
      formHeading={"Edit Product"}
    />
  </>
 )
}
export default EditProduct