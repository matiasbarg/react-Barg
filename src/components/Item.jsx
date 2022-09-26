import React from "react";
//import ItemCount from "./itemCount";



function Item(props) {
    let {price, title, img, detail, stock, initial} = props;
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
        <a href="#">Ver más</a>
        {/*<ItemCount stock={stock} initial={initial} />*/}
    </div>
    )
}

export default Item;