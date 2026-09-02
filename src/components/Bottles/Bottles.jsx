
import Bottle from '../Bottle/Bottle';

import { useEffect,useState } from 'react';
import './Bottles.css';
import { addToLS } from '../../Utilies/localStorage';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottlesAll.json')
        .then(res => res.json())
        .then(data => setBottles(data.slice(0, 9)))
    },[]);

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }
    return (
        <div>
            <h1 style={{backgroundColor:'orange',color:"blue",width:'100%',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'10px'}}>Welcome to Bottle shopping Mall</h1>
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