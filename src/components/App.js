import React,{useState} from "react";
import Header from "./Header";
import ProductList from "./ProductList";

import '../App.css' 
const App =()=>{
  const [products, setProducts] =useState([
    {
      id:1,
      title:"Oranges",
      votes:0,
    },
    {
      id:2,
      title:"Mangoes",
      votes:0,
    },
    {
      id:3,
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
  return(
    <div className="container">
      <Header />
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