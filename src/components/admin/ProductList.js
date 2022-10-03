import React from 'react';
import { Link } from 'react-router-dom';

const ProductList =(props)=>{

  return(
    <>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Price</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index)=>(
            <tr key={product.id}>
              <td>{index+1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/edit/${product.id}`} className="button">Edit</Link>
              </td>
              <td>
                <button onClick={()=>props.deleteProduct(product.id)} className="button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default ProductList