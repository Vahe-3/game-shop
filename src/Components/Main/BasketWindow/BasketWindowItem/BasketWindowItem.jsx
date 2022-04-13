import React from 'react';
import "./BasketWindowItem.css"


const BasketWindowItem = ({ name, description, full_background, price, quantity, id, reduceQuantity, addQuantity, deleteOrder,}) => {

    
    return (
        <>
            <div className='basketWindowItem'>

                <img src={full_background} />

                <div className='info'>
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <b>{price} AMD.</b>
                </div>

                <div className='order-quantity'>
                    <a className="waves-effect waves-light btn-small " onClick={ () => addQuantity(id)}>+</a>
                    <h5>{quantity}</h5>
                    <a className="waves-effect waves-light btn-small" onClick={ () => reduceQuantity(id)}>-</a>
                </div>

                <div className='order-del-btn' onClick={() => deleteOrder(id)}>
                    <i className="material-icons">delete</i>
                </div>




            </div>

        </>
    )
}

export default BasketWindowItem