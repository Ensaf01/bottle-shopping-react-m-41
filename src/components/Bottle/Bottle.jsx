import React from 'react';
import './Bottle.css';
const Bottle = ({bottle,handleAddToCart}) => {
    // console.log(bottle);
    return (
        <div className="bottle">
            <h2>{bottle.name}</h2>
            <img src={bottle.img} alt="" />
            <p>Price: ${bottle.price.toFixed(2)}</p>
            <p>Description: {bottle.description}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;