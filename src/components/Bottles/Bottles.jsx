
import Bottle from '../Bottle/Bottle';

import { useEffect, useState } from 'react';
import './Bottles.css';
import { addToLS, getStoredCart } from '../../Utilies/localStorage';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottlesAll.json')
            .then(res => res.json())
            .then(data => setBottles(data.slice(0, 9)))
    }, []);

    // load cart from localStorage,jeno user jokhon page reload kore tokhon cart er data thake ui te

    useEffect(() => {
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            const saveCart=[];
            for(const id of storedCart){
                const bolt=bottles.find(botle => botle.id==id);
                if(bolt){
                  saveCart.push(bolt)
                } 
        }
        setCart(saveCart);// set cart call kore cart a set korbe
    }

    }, [bottles]); //dependency added, jeno bottles load howar por cart load hoy ,mane setbottles jodi data new data load kore thokon jeno cart load hoy


    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    return (
        <div>
            <h1 style={{ backgroundColor: 'orange', color: "blue", width: '100%', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>Welcome to Bottle shopping Mall</h1>
            <div>Available bottle: {bottles.length}</div>
            <div>AddToCart : {cart.length}</div>

            <div className='bottles'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}
                        handleAddToCart={handleAddToCart}> </Bottle>)
                }
            </div>


        </div>
    );
};

export default Bottles;