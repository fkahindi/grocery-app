import React from "react";
import AddButton from "./AddButton";

const Header =props=>{
  /* const handleInputForm=()=>{
    console.log("Adding input form...")
  } */
  return(
    <>
      <h1>Grocery Store</h1>
      <AddButton showInputForm={props.addInputForm}/>
    </>
  )
}
export default Header