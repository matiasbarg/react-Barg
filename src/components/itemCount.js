import React,  {useState} from "react";
import './contador.css';

function ItemCount(props) {
let [Count, setCount] = useState(props.initial);

function handleClickAdd(){
    if (Count === props.stock){
        alert("maximo de stock")
    }
    else{
        setCount(Count + 1)
    }
}
function handleClickMinus(){
    if (Count>0){
    setCount(Count-1)
}
}
function addToCart(){
    alert("agregaste al carrito")
}

return(
    <div className="contador">
        <button onClick={handleClickMinus}>-</button>
        <span> {Count} </span>
        <button onClick={handleClickAdd}>+</button>
        <div></div>
        <button onClick={addToCart}>Agregar al carrito</button>
    </div>
)
}


export default ItemCount