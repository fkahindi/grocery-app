import React,{useState, useEffect, createContext} from "react";
import { Route, Routes } from "react-router-dom";

import '../App.css' 
import Header from "./Header";
import ProductList from "./ProductList";
import Dashboard from "./admin/Dashboard";
import Preferences from "./admin/Preferences";
import Singnup from "./authentication/Signup";
import EditProduct from "./admin/EditProduct";

export const UserContext = createContext("")

const App =()=>{

  //const user = "Francis"
  const [user, setUser] =useState("Guest")
  const [products, setProducts] =useState(getInitialProducts())

  
  /* useEffect(()=>{
    fetch('localhost:8080/login')
    .then(res=>res.json)
    .then(user=>setUser(user))
  },[user]) */


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
            <UserContext.Provider value={user}>
              <Header   />
            </UserContext.Provider>    
          
          <ProductList 
            className="product-list"
            productProps={products}
            handleUpVote={upVote}
            handleDownVote={downVote}      
          />
          </div>
        } />        
        <Route path="/dashboard" exact element={<div className="wrapper"><Dashboard /></div>} />
        <Route path="/edit" exact element={<div className="wrapper"><EditProduct /></div>}/>
        <Route path="/preferences" exact element={<div className="wrapper"><Preferences /></div>} />        
        <Route path="/signup" exact element={<div className="wrapper"><Singnup /></div>} />
      </Routes>
    </>
  )
}
export default App