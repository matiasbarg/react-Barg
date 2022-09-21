import React, {useState, useEffect} from "react";
import getItems from "./mockAPI";
import Item from "./Item"




function ItemListContainer(){
    let [data, setData] = useState([]);

useEffect(
    () => {
        getItems().then( (respuestaDatos) => {
            setData(respuestaDatos);
        });
    },
    []
);




    return (
        <div>
            <div className="itemListContainer">
                {data.map((item) => {
                    return <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    stock={item.stock}
                    category={item.category}
                    detail={item.detail} 
                    img={item.img}
                    initial={item.initial}/>
                    })}
            </div>
        </div>
    );
}

export default ItemListContainer;