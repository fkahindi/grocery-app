import React from "react";
import Product from "./Product";
const ProductList =props=>{
  return(
    <>
    <table> 
        <thead>
          <tr>
            <th>Product name</th>
            <th>Votes count</th>
            <th>Upvote</th>
            <th>Downvote</th>
          </tr>
        </thead>
          <tbody>  
                {props.productProps.map(product =>(
                  <Product 
                    className="product-item"
                    key={product.id}
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