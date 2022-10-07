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
            <h4>Producto: {title}</h4>
            <h4>Precio unidad: ${price}</h4>
            <h4>Cantidad: {count}</h4>
            <h4>Precio parcial: ${count * price}</h4>
        </div>
        <Button onClick={() => removeFromCart(id)}>Quitar</Button>
    </div>
)
}

export default CartCard;

