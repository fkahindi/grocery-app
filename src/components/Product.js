import React from "react";

const Product = props =>{
  const {id, title,price, votes} = props.product
  return(
    <tr>
      <td><span className="product-title">{title}</span>{" "}</td>
      <td><span className="product-price">${price}</span>{" "}</td>
      <td><span className="votes">{votes}</span></td>
      <td><button className="btn" onClick={()=>props.handleUpVote(id)}> + </button></td>
      <td><button className="btn" onClick={()=>props.handleDownVote(id)}> - </button></td>
    </tr>
  )
}
export default Product