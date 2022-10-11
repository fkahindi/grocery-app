import React,{useState, useEffect, createContext} from "react";
import axios from "axios";
import {confirmAlert} from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
import { useSearchParams } from "react-router-dom";

//import Login from "../authentication/Login";
//import useToken from "./useToken"

import ProductList from "./ProductList";
import Header from "../Header";

export const UserContext = createContext("")

export default function Dashboard(){

  /* const {token, setToken} = useToken()

  if(!token){
    return <Login setToken={setToken}/>
  } */
  const [searchParams] = useSearchParams()
  const [user, setUser] = useState("Admin")
  const [products, setProducts] = useState([])
  const [message, setMessage] = useState("")

  useEffect(()=>{
    getProducts()

  },[])

  const getProducts = async ()=>{//OK
    const response = await axios.get('http://localhost:5000/products')
    setProducts(response.data.sort((a,b)=>a.title > b.title ? 1:-1))
  }

  const deleteProduct = (id)=>{//OK
    confirmAlert({
      title:"Confirm Delete",
      message: "Are you sure? Deleted product cannot be recovered.",
      buttons:[
        {
          label: "Yes",
          onClick:  async ()=>{
            const res = await axios.delete(`http://localhost:5000/products/${id}`)
            getProducts()

            setMessage(res.data.message)
          }
          },
          {
            label: "No",
            onClick: ()=>{return}
          }
      ],
      closeOnEscape: true,
      closeOnClickOutside:true,
      willUnmount:()=>{},
      keyCodeForClose:[8,32],
      afterClose:()=>{},
      onClickOutside:()=>{},
      onKeypress:()=>{},
      onKeypressEscape:()=>{},
      overlayClassName:"overlay-custom-class-name",
    })
  }

  return(
    <>
      <UserContext.Provider value={"Admin"}>
        <Header
          link ={'/add'}
          text={"Add Product"}
          background={"teal"}
          message={message? message : searchParams.get("message")}
          user={user}
       />
      </UserContext.Provider>

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