import React from 'react';
//import axios from 'axios';
//import {useNavigate} from 'react-router-dom';

import ProductForm from "./ProductForm";

const AddProduct =(props)=>{ 
  
  return(
    <>
      <ProductForm 
        handleSubmit={props.saveProduct}
        buttonText ={"Add"}
      />
    </>    
  )
}
export default AddProduct