import React from 'react'
import './PlaceOrder.css'

const PlaceOrder = () => {
  return (
    <div className="main">
      
      <div className="main-left">
      <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="mail" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="number" placeholder='PIN code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="number" placeholder='Phone'/>
      </div>
      <div className="main-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
          <p>Subtotal</p>
          <p>{0}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery fee</p>
          <p>{2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Total</p>
          <p>{4}</p>
        </div>
        <button onClick={()=>navigate('/order')}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
