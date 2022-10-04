import React,  {useState} from "react";
import './itemcount.css';
import Button from "./Button"

// onAddToCart
function ItemCount({ stock, onAddToCart }) {
    const [Count, setCount] = useState(1);

    function handleAdd() {
    if (Count < stock) setCount(Count + 1);
    }

    function handleSubstract() {
    if (Count > 1) setCount(Count - 1);
    }

    return (
    <div>
        <div>
        <Button color={"firebrick"} onClick={handleSubstract}>
            -
        </Button>
        <span>{Count}</span>
        <Button color="darkgreen" onClick={handleAdd}>
            +
        </Button>
        </div>
        <div>
        <Button
            onClick={() => {
            onAddToCart(Count);
            }}
        >
            Agregar al carrito
        </Button>
        </div>
    </div>
    );
}

export default ItemCount;