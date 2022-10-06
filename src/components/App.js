import React,{useState, useEffect, createContext} from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import '../App.css'
import Header from "./Header";
import ProductList from "./ProductList";
import Dashboard from "./admin/Dashboard";
import Preferences from "./admin/Preferences";
import Singnup from "./authentication/Signup";
import EditProduct from "./admin/EditProduct";
import ProductView from "./admin/ProductView";

export const UserContext = createContext("")

const App =()=>{

  //const user = "Francis"
  const [user, setUser] =useState("Guest")
  const [products, setProducts] =useState([])
  const [upvote, setUpvote] = useState(0)
  const [downvote, setDownvote] = useState(0)


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
    //retrive products from server

     const res = await axios.get('http://localhost:5000/products')
     setProducts(res.data.sort((a,b)=>a.title > b.title ? 1 : -1))
  }


 const upVote = async(id)=>{

    const res = await axios.patch(`http://localhost:5000/products/${id}`,{
      upVote: upvote + 1
    })


   setUpvote(res.data.upVote)
   console.log(res.data.upVote)
 }

 const downVote= async(id)=>{
  const res = await axios.patch(`http://localhost:5000/products/${id}`,{
      downVote: downvote - 1
    })

   setDownvote(res.data.downVote)
   console.log(res.data.upVote)
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
        <Route path="/dashboard/*" exact element={<div className="wrapper"><Dashboard /></div>} />
        <Route path="/view/:id" exact element={<div className="wrappwer"><ProductView /></div>}/>
        <Route path="/edit/:id" exact element={<div className="wrapper"><EditProduct /></div>}/>
        <Route path="/preferences" exact element={<div className="wrapper"><Preferences /></div>} />
        <Route path="/signup" exact element={<div className="wrapper"><Singnup /></div>} />
      </Routes>
    </>
  )
}
export default App