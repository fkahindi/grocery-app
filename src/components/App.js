import React,{useState} from "react";
import Header from "./Header";
import Product from "./Product";

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
 const upVote =()=>{
   console.log("Upvoting...")
 }
 const downVote=()=>{
   console.log("Downvoting...")
 }
  return(
    <>
      <Header />
      <Product 
        products={products}
        handleUpVote={upVote}
        handleDownVote={downVote}
      
      />
    </>
  )
}
export default App