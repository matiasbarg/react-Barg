
import "../Checkout/checkout.css"
import { Link } from 'react-router-dom';
import Button from "../button/Button"
import React from 'react'


import { useParams } from "react-router-dom";

function Checkout(){
const { orderid } = useParams();


return(
    <div className="checkoutContainer">

<h2>¡Gracias por tu compra!</h2>
<h4>Tu código de transacción es: </h4> <span>{orderid}</span>
<Link to="/">
<Button>Volver a la tienda</Button>
</Link>

</div>
)
};







export default Checkout;