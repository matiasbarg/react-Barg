import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

function Item(props) {
    let {price, title, img, detail, id, offer, stock} = props;
    const urlDetalle = `/minis/${id}`




    return (
    <div className="Card">
    {stock === 0 && <div className="listStock">sin stock</div>}
    {offer === true && <div className="listOffer">oferta</div>}
        <div className="card-img">
            <img src={img} alt="imagen card"></img>
        </div>
        <div className="card-detail">
            <h3>{title}</h3>
            <p>{detail}</p>
            <h4>$ {price}</h4>
        </div>
        <Link to={urlDetalle}><Button>Ver más</Button></Link>
    </div>
    
    )
}

export default Item;