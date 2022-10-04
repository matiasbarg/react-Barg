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
            <div className="itemDetail">
                <ItemDetail item={data}/>
            </div>
    );
}

export default ItemDetailContainer;