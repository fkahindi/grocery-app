import React from "react";

const AddButton =({background,text, showInputForm})=>{
  
 return(
   <button
    className="add-btn"
    style={{ backgroundColor:background}}
    onClick={showInputForm}
   >
     {text}
   </button>
 )
}
export default AddButton