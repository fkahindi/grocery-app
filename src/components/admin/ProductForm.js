import React from 'react';
import { useForm } from 'react-hook-form';

const ProductForm = (props)=>{
  const {register, handleSubmit, formState: {errors}} = useForm()

  const postData=(data)=>{
    props.onSubmit(data.title, data.price)
  }

  const handleError = (errors)=>{}

  return(
    <form className="form-container" onSubmit={handleSubmit(postData, handleError)}>
      <h3 className="form-heading">{props.formHeading}</h3>
      <div>
        <label className="input-label">Title:</label>
        <input
          name="title"
          type="text"
          {...register('title', {required: "Title required"})}
          className="input-text"
          placeholder="Add product item ..."
        />
        <div className='error'>{errors.title?.message}</div>
      </div>

      <div>
        <label className="input-label">Price: </label>
        <input
          name="price"
          type="text"
          {...register('price', {required: "Price required"})}
          className="input-text"
          placeholder="Add price ..."
        />
        <div className='error'>{errors.price?.message}</div>
      </div>

      <div>
        <label className="input-label">Image:</label>
        <input
          name="image"
          type="file"
          {...register('image',{required: false})}
          className="input-text"
        />
      </div>
      <button
        style={{
          backgroundColor:"darkcyan",
          color:"white",
          border:"none",
          /* borderRadius:"calc(0.5*40px)", */
          marginTop:"1rem",
          padding:"10px",
          cursor:"pointer"
         }}
      >
        {props.buttonText}
      </button>
    </form>
  )
}
export default ProductForm