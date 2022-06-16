import React from "react";
import AddButton from "./AddButton";

const Header =()=>{
  const handleInputForm=()=>{
    console.log("Adding input form...")
  }
  return(
    <>
      <h1>Grocery Store</h1>
      <AddButton addInputForm={handleInputForm}/>
    </>
  )
}
export default Header