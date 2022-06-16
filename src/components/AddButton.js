import React from "react";

const AddButton =()=>{
  const buttonStyles ={
    position:"absolute",
    top:"20px",
    right:"10%",
    width:"100px",
    padding: "10px",
    border:"none",
    borderRadius:"calc(0.5*50px)",
    backgroundColor:"teal",
    color:"white",
    cursor:"pointer"
  }
 return(
   <button
    style={buttonStyles}
    onClick={"something will be done"}
   >
     Add Product
   </button>
 )
}
export default AddButton