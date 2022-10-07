import React, {useState, useEffect} from "react";
import {getItems, getItemsByCategory} from "../components/services/firestore";

import Item from "./Item"
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'



function ItemListContainer(){
    let [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { cat } = useParams([]);
useEffect(
    () => {
        setData([]);
        setIsLoading(true);
        if (cat === undefined){
            getItems()
            .then((respuestaDatos) => setData(respuestaDatos))
            .finally( () => setIsLoading(false))
        }
        else{
            getItemsByCategory(cat)
            .then((respuestaDatos) => setData(respuestaDatos))
            .finally( () => setIsLoading(false))
        }
        },[cat]);

        return (
        <div>
            {
                isLoading && 
                <div className="spinner">
                <DotSpinner 
                size={100}
                speed={0.9} 
                color="black"
                />
                </div>
            }
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
                    offer={item.offer}
                    />
                    );
                    })}
            </div>
        </div>
    );
}

export default ItemListContainer;