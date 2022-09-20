import React from "react";
import ItemCount from "./itemCount";



function Card(props) {
    return (
    <div className="Card">
        <div className="card-img">
            <img src={props.img} alt="imagen card"></img>
        </div>
        <div className="card-detail">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <h4>$ {props.price}</h4>
        </div>
        <a href="#">Ver más</a>
        <ItemCount stock={props.stock} initial={props.initial} />
    </div>
    )
}

export default Card;