import React from 'react';
import Preloader from '../../../Preloader/Preloader';
import ShopItem from './ShopItem/ShopItem';
import "./Shop.css"

const Shop = ({isLoading, goods, addOrder}) => {

    if(isLoading){
        return <Preloader />
    }


    return (
        <div className='shop'>
            {
                goods.map(product => <ShopItem key={product.id} {...product} addOrder={addOrder} />)
            }
        </div>
    )
}

export default Shop