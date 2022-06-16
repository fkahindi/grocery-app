import React from "react";

const Product =props=>{
 
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
            {props.products.map(product=>(                    
            <tr key={product.id}>
              <td><span className="">{product.title}</span>{" "}</td>
              <td><span className="">votes: {product.votes}</span></td>
              <td><button className="btn" onClick={props.handleUpVote}> + </button></td>
              <td><button className="btn" onClick={props.handleDownVote}> - </button></td>
            </tr>                               
            )) }  
          </tbody>
      </table>
    </>
  )
}
export default Product