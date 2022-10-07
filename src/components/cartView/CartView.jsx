import React, {useContext} from 'react';
import {cartCtx} from "../../context/cartContext";
import CartCard from "./CartCard.jsx";
import "./cartView.css"
import { Link } from 'react-router-dom';
import Button from '../Button';
import FlexWrapper from "../../components/FlexWrapper"

export default function CartView() {
    const context = useContext(cartCtx);
    const {cart, emptyCart, getTotalPrice} = context;

    return (
        <FlexWrapper>
            {cart.length ?
                <div className='cartViewContainer'>
                    { cart.map (item => (
                    <CartCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        stock={item.stock}
                        category={item.category}
                        detail={item.detail} 
                        img={item.img}
                        initial={item.initial}
                        offer={item.offer}
                        count={item.count}
                    />))}
                    <div>
                        <h3>Total Carrito: {getTotalPrice()}</h3>
                        <Button className="btnCart"
                                onClick={() => {
                                emptyCart();
                        }}>
                        Vaciar Carrito
                        </Button>
                        <Link to="/">
                            <Button>Seguir comprando</Button>
                        </Link>
                        <Button>Finalizar Compra</Button>
                    </div>
                </div> : 
                <div>
                    <h2>Carrito Vacio</h2>
                    <Link to="/">
                        <Button>Volver a la tienda</Button>
                    </Link>
                </div>
            }
        </FlexWrapper>);
}
