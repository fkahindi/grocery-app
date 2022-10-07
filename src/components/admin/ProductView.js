import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

import Image from "./Image";

const ProductView = ()=>{

  const [product, setProduct] = useState([])

  const {id} = useParams()

  useEffect(()=>{
   getProductInfo(id)

  },[id])

  const getProductInfo = async (id)=>{
    const res = await axios.get(`http://localhost:5000/products/${id}`)

    setProduct(res.data)
  }

  return(
    <>
      <div className="product-view">
        <h2 style={{ textTransform:"capitalize" }}>{product.title}</h2>
        <div className="image"><Image />{/* {product.image && <img src={product.image} alt="img" />} */}</div>
        <strong>Price:</strong> ${product.price}
        <dl>
          <dt><b>Description:</b></dt>
          <dd>{product.description}</dd>
        </dl>
      </div>
    </>
  )
}
export default ProductView