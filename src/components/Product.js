import React from "react";

import Image from "./admin/Image";

const Product = props =>{
  const {title, price, description} = props.product
  return(
     <>
      <div className="product-view">
       <h2 style={{ textTransform:"capitalize" }}>{props.index}. {title}</h2>
        <div className="image"><Image />{/* {product.image && <img src={product.image} alt="img" />} */}</div>
        <div style={{display:"flex", justifyContent: "space-between" }}><span><strong>Price:</strong> ${price}</span> <button className="btn order-btn">Order Now</button></div>
        <dl>
          <dt><b>Description:</b></dt>
          <dd>{description}</dd>
        </dl>
      </div>
    </>
  )
}
export default Product