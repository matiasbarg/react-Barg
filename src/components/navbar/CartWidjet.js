import cart from "./cart.svg"

function CartWidget() {
    return (
    <div className="cartWidget"> 
    <img src={cart} className="Cart-logo" alt="carrito" />
    <p>Carrito</p>
    </div>
    );
}

export default CartWidget;