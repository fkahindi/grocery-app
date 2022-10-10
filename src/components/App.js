import React,{useState, useEffect, createContext} from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import '../App.css'
import Header from "./Header";
import Products from "./Products";
import Dashboard from "./admin/Dashboard";
import Preferences from "./admin/Preferences";
import Singnup from "./authentication/Signup";
import Login from "./authentication/Login";
import EditProduct from "./admin/EditProduct";
import ProductView from "./admin/ProductView";
import AddProduct from "./admin/AddProduct";

export const UserContext = createContext("")

const App =()=>{

  //const user = "Francis"
  const [user, setUser] =useState("Guest")
  const [products, setProducts] =useState([])

  /* useEffect(()=>{
    fetch('localhost:8080/login')
    .then(res=>res.json)
    .then(user=>setUser(user))
  },[user]) */

  useEffect(()=>{
    getProducts()

   /*  const interval = setInterval(()=>{
      getProducts()
    },10000)

    return ()=>clearInterval(interval) */
  },[])

  const getProducts = async ()=>{

     const res = await axios.get('http://localhost:5000/products')
     setProducts(res.data.sort((a,b)=>a.title > b.title ? 1 : -1))
  }

  return(
    <>
      <Routes>
        <Route path="/" exact element={
          <div className="container">
            <UserContext.Provider value={user}>
              <Header   />
            </UserContext.Provider>

          <Products
            productProps={products}
          />
          </div>
        } />
        <Route path="/dashboard/*" exact element={<div className="wrapper"><Dashboard /></div>} />
        <Route path="/view/:id" exact element={<div className="wrappwer"><ProductView /></div>} />
        <Route path="/add" exact element={<div className="wrapper"><AddProduct /></div>} />
        <Route path="/edit/:id" exact element={<div className="wrapper"><EditProduct /></div>}/>
        <Route path="/preferences" exact element={<div className="wrapper"><Preferences /></div>} />
        <Route path="/signup" exact element={<div className="wrapper"><Singnup /></div>} />
        <Route path="/login" exaxt element={<div className="wrapper"><Login /></div>} />
      </Routes>
    </>
  )
}
export default App