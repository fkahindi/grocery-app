import React from "react";

const Image = ({name})=>{
  try {
    //Import image on demand
    const image = require(`/assets/${name}`)

    //If image is not available
    if(!image){
      return <img src="/images/camera.jpg" alt="prifile" />
    }else{
      return <img src={image.default} alt="product" />
    }

  } catch (error) {
    //console.log("Image not available")
    return <img src="/images/camera.jpg" alt="prifile" />
  }
}
export default Image