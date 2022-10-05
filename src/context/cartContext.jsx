import React, { useState, createContext } from "react";

const cartCtx = createContext();

export default function CartContextProvider({ children }) {
const [cart, setCart] = useState([]);

function addItem(item, Count) {
    if (isInCart(item.id)) {
    let newCart = cart.map((itemMapeo) => {
        if (itemMapeo.id === item.id) {
        itemMapeo.count += Count;
        return itemMapeo;
        } else return itemMapeo;
    });

    setCart(newCart);
    } else {
    let newCart = cart.map((item) => item);
    newCart.push({ ...item, count: Count });
    setCart(newCart);
    }
}

    function getTotalItemsInCart() {
    let total = 0;
    cart.forEach((item) => total = item.count);
    console.log("items en carrito", total)
    return total

}

function isInCart(id) {
    let found = cart.some((item) => item.id === id);
    return found;
}

return (
    <cartCtx.Provider value={{ cart, addItem, getTotalItemsInCart, isInCart }}>
    {children}
    </cartCtx.Provider>
);
}

export { cartCtx };