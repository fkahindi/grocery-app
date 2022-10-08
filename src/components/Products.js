import React from "react";

import Product from "./Product";
const Products =props=>{

  return(
    <>
      {props.productProps.map((product, index) =>(
        <Product
          index={index+1}
          key={product.id}
          product={product}
        />
      ))
      }
    </>
  )
}
export default Products