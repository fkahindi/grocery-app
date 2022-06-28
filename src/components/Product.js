import React from "react";

const Product = props =>{
  const {index, id, title,price, votes,color} = props.product
  return(
    <tr>
      <td><span>{index}</span></td>
      <td><span className="product-title">{title}</span>{" "}</td>
      <td><span className="product-price">${price}</span>{" "}</td>
      <td><span style={{ color:color }}>{votes}</span></td>
      <td><button className="btn" onClick={()=>props.handleUpVote(id)}> + </button></td>
      <td><button className="btn" onClick={()=>props.handleDownVote(id)}> - </button></td>
    </tr>
  )
}
export default Product