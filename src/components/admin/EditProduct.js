import React,{useState, useEffect}from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import ProductForm from './ProductForm';
import Header from './Header';

const EditProduct = ()=>{

  const [values, setValues] = useState("")
  //const [message, setMessage] = useState("")
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{

     const getProductById = async (id)=>{

      const  res = await axios.get(`http://localhost:5000/products/${id}`)
        setValues({
          title: res.data.title,
          price: res.data.price,
          description: res.data.description,
          keywords: res.data.keywords
        })
     }
      getProductById(id)

  },[id])

  const updateProduct =async (data)=>{//Ok
  //process image first

  const res = await axios.patch(`http://localhost:5000/products/${id}`,{
    title:data.title,
    price:data.price,
    description:data.description,
    keywords:data.keywords,
    updatedAt: new Date()
  })

  //Set reponse message and export it to dashboard

  navigate('/dashboard', /* setMessage(res.data.message) */)

 }

 return(
  <>
    <Header
      link ={'/dashboard'}
      text={"Cancel"}
      background={"red"}
    />
    {values ?
    <ProductForm
      onSubmit={updateProduct}
      buttonText={"Update"}
      formHeading={"Edit Product"}
      fetchedValues={values}
    />
    : <div>Something gone wrong... </div>}
  </>
 )
}
export default EditProduct