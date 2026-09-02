import React, { use } from 'react';
import Bottle from '../Bottle/Bottle';
import { useEffect } from 'react';
import './Bottles.css';

const Bottles = () => {
    const [bottles, setBottles] = React.useState([]);

    useEffect(()=>{
        fetch('bottlesAll.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[]);
    return (
        <div>
            <h1 style={{backgroundColor:'orange',color:"blue",width:'100%',height:'100px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'10px'}}>Welcome to Bottle shopping Mall</h1>
            <div className='bottles'>
                {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}> </Bottle>)
            }
            </div>
            
            
        </div>
    );
};

export default Bottles;