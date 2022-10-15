
import "../Checkout/checkout.css"
import React, {useContext} from 'react';
import {cartCtx} from "../../context/cartContext";

function Checkout() {

    const context = useContext(cartCtx);
    const {emptyCart} = context;
    emptyCart();
    return (
    <div className="checkoutContainer">
        <h2>Gracias por tu compra!</h2>
    </div>
    );

}




export default Checkout;