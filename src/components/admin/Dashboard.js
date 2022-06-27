import React,{useState, useEffect,createContext} from "react";
import axios from "axios";

//import Login from "../authentication/Login";
//import useToken from "./useToken"

import ProductList from "./ProductList";
import Header from "./Header";
import AddProduct from "./AddProduct";

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

  
  /* const addNewProduct =title=>{
   const newProduct ={
     title:title,
     price:(Math.random()*(1-0)+0).toFixed(2),
     votes:0,
   }
  setProducts(
    [...products, newProduct]
  )
 } */ 

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
    </>
  )
}