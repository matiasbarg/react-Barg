import React from "react";
import ItemCount from "./itemCount";
import "./itemDetail.css"



function ItemDetail(props) {
    let {price, title, img, detail, stock, initial, category} = props;
    return (
    <div className="CardDetail">
        <div className="detail-img">
            <img src={img} alt="imagen detail"></img>
        </div>
        <div className="cardDetail-detail">
            <h2>{title}</h2>
            <h4>{category}</h4>
            <h3>{detail}</h3>
            <h3>$ {price}</h3>
        </div>
        <ItemCount stock={stock} initial={initial} />
    </div>
    )
}

export default ItemDetail;