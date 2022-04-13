import React from 'react';
import "./BasketWindow.css";
import BasketWindowItem from './BasketWindowItem/BasketWindowItem';

const BasketWindow = ({orders, addQuantity, reduceQuantity, deleteOrder, handleBasketShow}) => {

    let totalPrice = orders.reduce((sum, order) => {

        return sum + order.quantity * order.price;

    }, 0);

    return (

        <div className='basketWindow'>
            <div className='basketWindow-header' onClick={() => handleBasketShow()}>
                <i className="small material-icons">close</i>
            </div>
            <div className='basketWindow-main'>

                {
                    orders.map((order) => <BasketWindowItem key={order.id} deleteOrder={deleteOrder}
                                                            addQuantity={addQuantity}
                                                            reduceQuantity={reduceQuantity}
                                                            {...order} />)
                }

            </div>
            <div className="basketWindow-footer">
                <h5>Total price</h5>
                <h6><b>{totalPrice} AMD.</b></h6>

                <a href="#!" className="waves-effect waves-light btn">Pay</a>
            </div>

        </div>
    )
}

export default BasketWindow;