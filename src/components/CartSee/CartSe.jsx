
import './Cartsee.css'
const CartSe = ({ carts }) => {
    return (

        <div className="cart-show">
            <div>
                <p>cart:{carts.length}</p>
            </div>
            {
                carts.map(bolt => <img src={bolt.img}></img>)
            }

        </div>
    );
};

export default CartSe;