import React, {useState, useEffect} from "react";
import getItems from "./mockAPI";
import {getItemsByCategory} from "./mockAPI"
import Item from "./Item"
import { useParams } from "react-router-dom";


function ItemListContainer(){
    let [data, setData] = useState([]);
    const { cat } = useParams([]);
useEffect(
    () => {
        if (cat === undefined){
            getItems().then((respuestaDatos) => setData(respuestaDatos));
            console.log("categoria sin definir")
        }
        else{
            getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
            console.log("categoria", cat)
        }
        },[cat]);
        return (
        <div>
            <div className="itemList">
                {data.map((item) => {
                    return (
                    <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    stock={item.stock}
                    category={item.category}
                    detail={item.detail} 
                    img={item.img}
                    initial={item.initial}
                    />
                    );
                    })}
            </div>
        </div>
    );
}

export default ItemListContainer;