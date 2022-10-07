import React from "react";
import AddButton from "./AddButton";
import UserInfo from "./UserInfo";
import NavBar from "../NavBar";

const Header =(props)=>{

  return(
    <>
      <NavBar />
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
      <AddButton
        text ={props.text}
        background ={props.background}
        link={props.link}
      />
    </>
  )
}
export default Header