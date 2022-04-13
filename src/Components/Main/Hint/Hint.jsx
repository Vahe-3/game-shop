import React from 'react';
import "./Hint.css";
import {useEffect} from 'react';

const Hint = ({orders, dispatch}) => {

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            dispatch({type: "IS_HINT_SHOW", val: false});
        }, 1000)

        return () => {
            clearTimeout(timeoutId)
        }

    }, [orders, dispatch]);

    return (
        <div className='hint'>
            <b>Your order has been added</b>
        </div>
    )
}

export default Hint;