import React from "react";
import AddButton from "./AddButton";
import UserInfo from "./UserInfo";
import NavBar from "../NavBar";
import Feedback from "./Feedback";

const Header =(props)=>{
  return(
    <>

       <div style={{ display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <div>
          <NavBar />
          <UserInfo />
        </div>

        <div>
          <AddButton
            text ={props.text}
            background ={props.background}
            link={props.link}
          />
        </div>
      </div>
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "600",
            marginBottom: "1rem",
            lineHeight: "1em",
            color: "#ececec",
            textTransform: "lowercase",
            textAlign: "center",
          }}
        >
          Groceries
        </h1>
      </div>
      <div style={{ marginBottom:"1rem" }}>
          <Feedback message ={props.message}/>
      </div>
    </div>

    </>
  )
}
export default Header