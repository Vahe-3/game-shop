import React from 'react';
import "./ShopItem.css"

const ShopItem = ({ id, name, description, price, full_background, addOrder, }) => {
  return (
    <div className='shopItem'>
        <div className="card">
        <div className="card-image">
          <img src={full_background} alt={name} />
          
        </div>
        <div className="card-content">
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button className='btn' onClick={() => addOrder(id)}>Buy</button>
          <span className='right price'>{price} AMD.</span>
        </div>
      </div>
    </div>
  )
}

export default ShopItem