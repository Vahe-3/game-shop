import React from 'react';
import './Basket.css'

const Basket = ({quantity=0, handleBasketShow, isBasketShow}) => {
  return (
    <div className='basket' onClick={handleBasketShow}>
        <p className='order_count'>{quantity}</p>
        <i className="material-icons medium right light-blue accent-4">shopping_basket</i>
    </div>
  )
}

export default Basket