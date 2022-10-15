import React, {useContext} from 'react'
import "./cartView.css"
import {cartCtx} from "../../context/cartContext";
import Button from '../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faTrashAlt} />


function CartCard(props) {
    
    const context = useContext(cartCtx);
    const {removeFromCart} = context;
    let {price, title, img, count, id} = props;

    return (
    <div className="CartCard">
        <div className="CartCardDetail">
            <img src={img} alt="imagen CartCard" className='CartCardImg'></img>
            <h4>Producto:</h4> <span>{title}</span>
            <h4>Precio unidad:</h4> <span>${price}</span>
            <h4>Cantidad:</h4> <span>{count}</span>
            <h4>Precio parcial:</h4> <span>${count * price}</span>
            <div className='btnCart'>
            <Button onClick={() => removeFromCart(id)}>{element}</Button>
            </div>
        </div>

    </div>
)
}

export default CartCard;

