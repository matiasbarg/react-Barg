import React from "react";

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
    </div>
    )
}

export default Card;