import React from "react";
import Product from "./Product";
const ProductList =props=>{
  return(
    <>
    <table> 
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Votes Count</th>
            <th>Up Vote</th>
            <th>Down Vote</th>
          </tr>
        </thead>
          <tbody>  
                {props.productProps.map(product =>(
                  <Product 
                    //className="product-item"
                    key={product.id}
                    color={product.votes<1 ? "red":"black"}
                    product={product}
                    handleUpVote={props.handleUpVote}
                    handleDownVote={props.handleDownVote}
                  />
                )) }
          </tbody>
      </table>
    </>    
  )
}
export default ProductList