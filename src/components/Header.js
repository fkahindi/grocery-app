import React from "react";
import UserInfo from "./UserInfo";

const Header =({showForm, addInputForm})=>{
  
  return(
    <>   
      <UserInfo />   
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
      
    </>
  )
}
export default Header