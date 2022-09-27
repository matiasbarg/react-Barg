import React, {useState, useEffect} from "react";
import {getSingleItem} from "./mockAPI";
import ItemDetail from "./ItemDetail"; 
import { useParams } from "react-router-dom";


function ItemDetailContainer(){
    let [data, setData] = useState({});

    const { id } = useParams();

useEffect(() => {
        getSingleItem(id).then((respuestaDatos) => setData(respuestaDatos));
        }, [id]);

    return (
        <div>
            <div className="itemDetail">
                <ItemDetail
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    price={data.price}
                    stock={data.stock}
                    category={data.category}
                    detail={data.detail} 
                    img={data.img}
                    initial={data.initial}
                />
            </div>
        </div>
    );
}

export default ItemDetailContainer;