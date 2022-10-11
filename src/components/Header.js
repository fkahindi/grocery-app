import React from "react";
import AddButton from "./admin/AddButton";
import UserInfo from "./admin/UserInfo";
import NavBar from "./NavBar";
import Feedback from "./admin/Feedback";

const Header =(props)=>{
  return(
    <div className="header-container">
       <div style={{ display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <div>
          <NavBar />
          <UserInfo />
        </div>
        <div>
          {props.user  &&
              <AddButton
                text ={props.text}
                background ={props.background}
                link={props.link}
              />
          }
        </div>
      </div>
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "600",
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
    </div>
  )
}
export default Header