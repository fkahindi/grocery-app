import React,{useState} from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import {v4 as uuidv4} from 'uuid'

import '../App.css' 
import AddProduct from "./AddProduct";
const App =()=>{
  const [products, setProducts] =useState([
    {
      id:uuidv4(),
      title:"Oranges",
      votes:0,
    },
    {
      id:uuidv4(),
      title:"Mangoes",
      votes:0,
    },
    {
      id:uuidv4(),
      title:"Bananas",
      votes:0,
    },
  ])
  
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
     products.map(product=>{
     if(product.id === id){
       return {...product, votes: product.votes-1}
     }else{
       return product
     } 
   })
  )
 }
 const addProductItem =title=>{
   const newProduct ={
     id:uuidv4(),
     title:title,
     votes:0,
   }
  setProducts(
    [...products, newProduct]
  )
   console.log("Adding product...")
 }
  return(
    <div className="container">
      <Header />
      <AddProduct addProductItemProps={addProductItem}/>
      <ProductList 
        className="product-list"
        productProps={products}
        handleUpVote={upVote}
        handleDownVote={downVote}
      
      />
    </div>
  )
}
export default App