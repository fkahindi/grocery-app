import React from "react";
import UserInfo from "./UserInfo";
import Nav from "./NavBar";

const Header =({showForm, addInputForm})=>{

  return(
    <>
      <UserInfo />
      <Nav />
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