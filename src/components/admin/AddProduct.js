import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, createSearchParams } from 'react-router-dom';

import Header from './Header';
import ProductForm from "./ProductForm";


const AddProduct =()=>{

  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const saveProduct = async (data)=>{//Ok
    //process image first before posting

    const res = await axios.post('http://localhost:5000/products',{
        title: data.title,
        price: data.price,
        description: data.description,
        keywords: data.keywords,
      })

    //Send post response back with url
    const getMessage = ()=>{
    const message = data.title.toUpperCase() + ", " + res.data.message
      navigate({
        pathname: "/dashboard",
        search: createSearchParams({
          message:message
        }).toString()
      })
    }
    setMessage(res.data.message)
    getMessage()
  }

  return(
    <>
      <Header
        link ={'/dashboard'}
        text={"Cancel"}
        background={"red"}
        message={message}
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