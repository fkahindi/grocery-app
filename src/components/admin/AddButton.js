import React from "react";
import { Link } from "react-router-dom";

const AddButton =({background,text, link})=>{

 return(
   <button
    className="btn add-btn"
    style={{ backgroundColor:background}}
   >
    <Link to={link} style={{ color: "white", textDecoration:"none" }}>{text}</Link>
   </button>
 )
}
export default AddButton