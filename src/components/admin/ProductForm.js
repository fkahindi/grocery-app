import React from 'react';
import { useForm } from 'react-hook-form';

const ProductForm = (props)=>{

  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      title: props.fetchedValues.title,
      price: props.fetchedValues.price,
      description: props.fetchedValues.description,
      keywords: props.fetchedValues.keywords
    }
  })

  const postData=(data)=>{
    props.onSubmit(data)
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
          {...register('title', {required: "Title is required"})}
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
          {...register('price', {required: "Price is required"})}
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

      <div>
        <label className="input-label">Description: </label>
        <textarea
          name="description"
          {...register('description', {required: false})}
          className="input-text"
          placeholder="Add description ..."
        ></textarea>
        <div className='error'>{errors.description?.message}</div>
      </div>

      <div>
        <label className="input-label">Keywords: </label>
        <input
          name="keywords"
          type="text"
          {...register('keywords', {required: false})}
          className="input-text"
          placeholder="Add keywords ..."
        />
        <div className='error'>{errors.keywords?.message}</div>
      </div>

      <button className="submit-btn">
        {props.buttonText}
      </button>
    </form>
  )
}
export default ProductForm