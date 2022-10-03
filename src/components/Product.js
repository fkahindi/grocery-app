import React from "react";

const Product = props =>{
  const {index, id, title,price, upVote,downVote,color} = props.product
  return(
    <tr>
      <td><span>{index}</span></td>
      <td><span className="product-title">{title}</span>{" "}</td>
      <td><span className="product-price">${price}</span>{" "}</td>
      <td><span style={{ color:color }}>{upVote}</span></td>
      <td><span style={{ color:color }}>{downVote}</span></td>
      <td>
        <button className="btn" onClick={()=>props.handleUpVote(id)}> + </button>
        <button className="btn" onClick={()=>props.handleDownVote(id)}> - </button>
      </td>
    </tr>
  )
}
export default Product