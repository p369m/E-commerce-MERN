import React, { useState } from 'react'
import './FoodItem.css'
import { frontend_assets } from '../../assets/frontend_assets/assets'

const FoodItem = ({name,price,id,image,description}) => {

  const [itemCount,setItemCount]=useState(0)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {
          !itemCount
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={frontend_assets.rating_starts}/>
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
