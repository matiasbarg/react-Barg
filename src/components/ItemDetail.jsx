import React, {useState, useContext} from "react";
import FlexWrapper from "./FlexWrapper";
import ItemCount from "./itemCount";
import { Link } from "react-router-dom";
import Button from "./Button";
import { cartCtx } from "../context/cartContext"

function ItemDetail({item}) {
const {addItem} = useContext(cartCtx)
const [ showItemCount, setShowItemCount ] = useState(true);

    function AddToCart(Count) {
    addItem(item, Count);
    setShowItemCount(false);
    }

    return (
    <FlexWrapper rows={true}>
        <div className="main container">
        <h1>{item.title}</h1>
        <img src={item.img} alt={item.title}/>
        <h2>{item.title}</h2>
        <h4>{item.category}</h4>
        <h3>{item.detail}</h3>
        <h3>$ {item.price}</h3>
        </div>
    
        {showItemCount ? <ItemCount stock={5} onAddToCart={AddToCart} /> : <Link to="/cart"><Button>Finalizar Compra</Button></Link>}
    </FlexWrapper>
    );
}

export default ItemDetail;