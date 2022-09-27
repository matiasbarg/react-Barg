import React from "react";
import { Link } from "react-router-dom";


function Item(props) {
    let {price, title, img, detail, id} = props;
    const urlDetalle = `/minis/${id}`




    return (
    <div className="Card">
        <div className="card-img">
            <img src={img} alt="imagen card"></img>
        </div>
        <div className="card-detail">
            <h3>{title}</h3>
            <p>{detail}</p>
            <h4>$ {price}</h4>
        </div>
        <Link to={urlDetalle}>Ver más</Link>
    </div>
    )
}

export default Item;