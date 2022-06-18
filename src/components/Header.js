import React from "react";
import AddButton from "./AddButton";

const Header =({showForm, addInputForm})=>{
  
  return(
    <>      
      <h1
        style={{ 
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#ececec",
          textTransform: "lowercase",
          textAlign: "center",
         }}
      >
        Groceries
      </h1>
      <AddButton 
        text ={showForm ? "Hide Form":"Add Product"}
        background ={showForm? "red":"teal"}  
        showInputForm={addInputForm}
      />
    </>
  )
}
export default Header