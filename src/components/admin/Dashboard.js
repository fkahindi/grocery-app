import React,{useState, useEffect,createContext} from "react";
import {Routes, Route} from "react-router-dom"
import axios from "axios";

//import Login from "../authentication/Login";
//import useToken from "./useToken"

import ProductList from "./ProductList";
import Header from "./Header";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

export const AdminContext = createContext("")

export default function Dashboard(){

  /* const {token, setToken} = useToken()

  if(!token){
    return <Login setToken={setToken}/>
  } */
  const [admin, setAdmin] = useState("Admin")
  const [products, setProduct] = useState([])
  const[showInputForm, setShowInputForm]= useState(false)

  useEffect(()=>{
    getProducts()
  },[])

  const getProducts = async ()=>{
    const response = await axios.get('http://localhost:5000/products')
    setProduct(response.data)
  }

  const deleteProduct = async (id)=>{
    await axios.delete(`http://localhost:5000/${id}`)
    getProducts()
  }

  const handleShowInputForm=()=>{
    setShowInputForm(!showInputForm)
  }
  return(
    <>
      <AdminContext.Provider value={admin}>
        <Header
         addInputForm={handleShowInputForm}
          showForm ={showInputForm}
       />
      </AdminContext.Provider>  
      {showInputForm && <AddProduct />}    
      <ProductList 
        products ={products}
        deleteProduct={deleteProduct}
      />
      <Routes>
        <Route path="/edit" exact element={<div className="wrapper"><EditProduct /></div>}/>
      </Routes>

    </>
  )
}