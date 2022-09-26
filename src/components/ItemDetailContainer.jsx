import React, {useState, useEffect} from "react";
import {getSingleItem} from "./mockAPI";
import ItemDetail from "./ItemDetail"; 



function ItemDetailContainer(){
    let [data, setData] = useState({});

useEffect(() => {
        getSingleItem().then((respuestaDatos) => setData(respuestaDatos));
        }, []);

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