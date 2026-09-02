import React from 'react';
import './Bottle.css';
const Bottle = ({bottle}) => {
    console.log(bottle);
    return (
        <div className="bottle">
            <h2>{bottle.name}</h2>
            <img src={bottle.img} alt="" />
            <p>Price: ${bottle.price.toFixed(2)}</p>
            <p>Description: {bottle.description}</p>
        </div>
    );
};

export default Bottle;