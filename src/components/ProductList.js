import React from "react";
import Product from "./Product";
const ProductList =props=>{
  return(
    <>
    <table> 
        <thead>
          <tr>
            <th>No.</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Votes Count</th>
            <th>Up Vote</th>
            <th>Down Vote</th>
          </tr>
        </thead>
          <tbody>  
                {props.productProps.map((product, index) =>(
                  <Product 
                    //className="product-item"
                    index= {index + 1}
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