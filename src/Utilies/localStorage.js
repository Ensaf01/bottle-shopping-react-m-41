// check oi cart ache kina
const getStoredCart = () => {
    const storedCart = localStorage.getItem('xy'); //ay name 'cart' ta localStorage theke niye asche
    if (storedCart) {
        return JSON.parse(storedCart);//sring ke object e convert kora hocche. karon localStorage e data string hishebe store hoy.
    }
    return [];
}

// getStoredCard ke call kore data niye ase cart a rakbo mane arry asbe akhne(object)
const addToLS = (id) => { // it call from Bottles.jsx file when user click on purchase button
    const cart = getStoredCart();//array asbe akhne
    cart.push(id);

    // localStorage.setItem('cart', JSON.stringify(cart));//array ke string e convert kore localStorage e store kora hocche
    localStorage.setItem('xy', JSON.stringify(cart)); // key is xy and convert stringify form object
}

export { getStoredCart, addToLS };