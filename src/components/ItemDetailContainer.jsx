import React, {useState, useEffect} from "react";
import {getSingleItem} from "../components/services/firestore";
import ItemDetail from "./ItemDetail"; 
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'




function ItemDetailContainer(){
    let [data, setData] = useState({});
    const [error, setError] = useState(false);

    const { id } = useParams();

useEffect(() => {
        getSingleItem(id)
        .then((respuestaDatos) => setData(respuestaDatos))
        .catch((errormsg) => {
            setError(errormsg.message)
        });
    }, [id]);

    if (!data.title) {
        return <> 
        {error ?
        <div className="loadError">
            <h3>Error obteniendo los datos</h3>
            <p>{error}</p>
        </div>
        :
        <div className="spinner">
        <DotSpinner 
            size={100}
            speed={0.9} 
            color="black"
        
        /></div>}
        </>
    }

    return (
            <div className="itemDetail">
                <ItemDetail item={data}/>
            </div>
    );
}

export default ItemDetailContainer;