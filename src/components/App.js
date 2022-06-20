import React,{useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import {v4 as uuidv4} from 'uuid'

import '../App.css' 
import Header from "./Header";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import Dashboard from "./admin/Dashboard";
import Preferences from "./admin/Preferences";
import Singnup from "./authentication/Signup";

const App =()=>{
  const [products, setProducts] =useState(getInitialProducts())
  const [showInputForm, setShowInputForm] =useState(false)

  function getInitialProducts(){
    //get stored items
    const temp = localStorage.getItem("products")
    const savedProducts = JSON.parse(temp)
    return savedProducts || []
  }

  useEffect(()=>{
    //storing products    
    const temp = JSON.stringify(products)
    localStorage.setItem("products",temp)

  },[products])

 const addNewProduct =title=>{
   const newProduct ={
     id:uuidv4(),
     title:title,
     price:(Math.random()*(1-0)+0).toFixed(2),
     votes:0,
   }
  setProducts(
    [...products, newProduct]
  )
 } 
 
 const handleShowInputForm=()=>{
  setShowInputForm(!showInputForm)
 }

 const upVote =(id)=>{
   setProducts(
     products.map(product=>
       product.id === id
       ? {...product, votes: product.votes+1}
       : product
      )
   )
 }

 const downVote=(id)=>{
  setProducts(
     products.map(product=>
      product.id === id
       ? {...product, votes: product.votes-1}
       : product
      )
    )
 }
 
  return(
    <>
      <Routes>
        <Route path="/" exact element={
          <div className="container">
          <Header 
            addInputForm={handleShowInputForm}
            showForm ={showInputForm}
          />
          {showInputForm && <AddProduct addProductProps={addNewProduct}/>}
          <ProductList 
            className="product-list"
            productProps={products}
            handleUpVote={upVote}
            handleDownVote={downVote}      
          />
          </div>
        } />        
        <Route path="/dashboard" exact element={<div className="wrapper"><Dashboard /></div>} />
        <Route path="/preferences" exact element={<div className="wrapper"><Preferences /></div>} />        
        <Route path="/signup" exact element={<div className="wrapper"><Singnup /></div>} />
      </Routes>
    </>
  )
}
export default App