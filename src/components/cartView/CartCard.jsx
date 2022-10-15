import React, {useContext} from 'react'
import "./cartView.css"
import {cartCtx} from "../../context/cartContext";
import Button from '../Button';

function CartCard(props) {
    
    const context = useContext(cartCtx);
    const {removeFromCart} = context;
    let {price, title, img, count, id} = props;

    return (
    <div className="CartCard">
        <div>
            <img src={img} alt="imagen CartCard" className='CartCardImg'></img>
        </div>
        <div className="CartCardDetail">
            <h4>Producto:</h4> <span>{title}</span>
            <h4>Precio unidad:</h4> <span>${price}</span>
            <h4>Cantidad:</h4> <span>{count}</span>
            <h4>Precio parcial:</h4> <span>${count * price}</span>
        </div>
        <Button onClick={() => removeFromCart(id)}>Quitar</Button>
    </div>
)
}

export default CartCard;

