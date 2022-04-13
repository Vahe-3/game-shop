import React from 'react';
import Shop from './Shop/Shop';


const Main = (props) => {
    return (
        <main className="Main">
            <Shop {...props} />
        </main>
    )
};

export default Main;