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
  const [products, setProducts] = useState([])
  const[showInputForm, setShowInputForm]= useState(false)

  useEffect(()=>{
    getProducts()

  },[])

  const getProducts = async ()=>{//OK
    const response = await axios.get('http://localhost:5000/products')
    setProducts(response.data.sort((a,b)=>a.title > b.title ? 1:-1))
  }

  const deleteProduct = async (id)=>{//OK
    await axios.delete(`http://localhost:5000/products/${id}`)
    getProducts()
  }

  const saveProduct = async (title, price)=>{//OK
    await axios.post('http://localhost:5000/products',{
        title,
        price
      })
      getProducts()
      handleShowInputForm()
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