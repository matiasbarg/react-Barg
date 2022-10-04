import cart from "./cart.svg"

function CartWidget() {
    return (
    <div className="cartWidget"> 
    <img src={cart} className="Cart-logo" alt="carrito" />
    <span>{}</span>
    <p>Carrito</p>
    </div>
    );
}

export default CartWidget;