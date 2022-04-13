import React, {useEffect, useReducer} from 'react';
import {API_KEY, API_URL} from '../../config';
import Main from './Main';
import Basket from './Basket/Basket';
import BasketWindow from './BasketWindow/BasketWindow';
import Hint from './Hint/Hint';
import mainReducer from "./MainReducer";


const MainContainer = () => {

    const [{goods, isLoading, orders, isBasketShow, isHintShow}, dispatch] = useReducer(mainReducer, {
        goods: [],
        isLoading: true,
        error: null,
        orders: [],
        isBasketShow: false,
        isHintShow: false
    });

    useEffect(() => {

        fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            }
        }).then(response => response.json())
            .then(response => dispatch({type: "ADD_GOODS", goods: response.featured}))
            .then(() => dispatch({type: "END_LOADING", loadState: false}))
            .catch(response => dispatch({type: "ADD_ERROR", error: response}))

    }, []);


    const addOrder = (id) => {
        dispatch({type: "IS_HINT_SHOW", val: true});
        const newOrder = orders.findIndex((order) => order.id === id);

        if (newOrder === -1) {
            goods.forEach((product) => {
                if (product.id === id) {
                    dispatch({type: "ADD_ORDER", order: {...product, quantity: 1}})
                }
            });

        } else {
            orders.forEach(order => {
                if (order.id === id) {
                    dispatch({type: "SET_OREDER_QUANTYTI", orderId: id, val: 1})
                }

            })
        };

    };

    const handleBasketShow = () => {
        dispatch({type: "IS_BASKET_SHOW"});
    };

    const addQuantity = (id) => {
        dispatch({type: "SET_OREDER_QUANTYTI", orderId: id, val: 1});
    };

    const reduceQuantity = (id) => {
        dispatch({type: "SET_OREDER_QUANTYTI", orderId: id, val: -1});
    };

    const deleteOrder = (id) => {

        dispatch({type: "DELETE_ORDER", orderId: id});
    };


    return <div>

        <Basket quantity={orders.length}
                handleBasketShow={handleBasketShow}
                isBasketShow={isBasketShow}/>

        <Main goods={goods}
              isLoading={isLoading}
              addOrder={addOrder}/>

        {isBasketShow ?
            <BasketWindow handleBasketShow={handleBasketShow}
                          deleteOrder={deleteOrder}
                          addQuantity={addQuantity}
                          reduceQuantity={reduceQuantity}
                          orders={orders}/>
            : null}

        {isHintShow ? <Hint orders={orders}
                            dispatch={dispatch}/>
            : null}


    </div>

};


export default MainContainer;









