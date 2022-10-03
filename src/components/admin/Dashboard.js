import React,{useState, useEffect,createContext} from "react";
import {useNavigate} from 'react-router-dom';
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
  const navigate = useNavigate()
  const [admin, setAdmin] = useState("Admin")
  const [products, setProduct] = useState([])
  const[showInputForm, setShowInputForm]= useState(false)

  useEffect(()=>{
    getProducts()

    const interval = setInterval(()=>{
      getProducts()
    },10000)

    return ()=>clearInterval(interval)
  },[])

  const getProducts = async ()=>{//OK
    const response = await axios.get('http://localhost:5000/products')
    setProduct(response.data)
  }

  const deleteProduct = async (id)=>{//OK
    await axios.delete(`http://localhost:5000/products/${id}`)
    getProducts()
  }

  const saveProduct = (title, price)=>{//OK
     axios.post('http://localhost:5000/products',{
        title,
        price
      })
      .then(navigate('/dashboard'))
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
      <div>
        {showInputForm && <AddProduct saveProduct={saveProduct} />}
      </div>

      <div className="container">
        <ProductList
          className="product-list"
          products ={products}
          deleteProduct={deleteProduct}
        />

      </div>
    </>
  )
}