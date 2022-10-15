import React,  {useState} from "react";
import './itemcount.css';
import Button from "../button/Button"

function ItemCount({ stock , onAddToCart }) {
    const [Count, setCount] = useState(1);

    function handleAdd() {
    if (Count < stock) setCount(Count + 1);
    }

    function handleSubstract() {
    if (Count > 1) setCount(Count - 1);
    }

    return (
    <div className="ItemCount">
        <div className="contador">
        <Button onClick={handleSubstract}>
            -
        </Button>
        <span>{Count}</span>
        <Button onClick={handleAdd}>
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