import React,{useContext} from "react";
import { UserContext } from "./App";
import Product from "./Product";
const ProductList =props=>{
  const user = useContext(UserContext)
if(user ==="Guest"){
   console.log("Hurrey")
}
  return(
    <>
    <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Price</th>
            <th>Upvote</th>
            <th>Downvote</th>
            <th>Vote</th>
          </tr>
        </thead>
          <tbody>

                {props.productProps.map((product, index) =>(
                  <Product
                    //className="product-item"
                    index= {index + 1}
                    key={product.id}
                    /* color={product.votes<1 ? "red":"black"} */
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