import carrito from "./cart.svg"
import React, {useContext} from "react";
import {cartCtx} from "../../context/cartContext";

function CartWidget() {
    const { getTotalItemsInCart } = useContext(cartCtx)

    return (
    <div className="cartWidget"> 
    <img src={carrito} className="Cart-logo" alt="carrito" />
    <span className="cartNumber">{getTotalItemsInCart() > 0 && getTotalItemsInCart()}</span>
    </div>
    );
}

export default CartWidget;