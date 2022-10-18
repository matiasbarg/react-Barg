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
    cart.forEach((item) => total += item.count);
    return total

}
    function getTotalPrice() {
    let totalPrice = 0;
    cart.forEach((item) => totalPrice += item.count * item.price);
    return totalPrice

}

function isInCart(id) {
    let found = cart.some((item) => item.id === id);
    return found;
}


const emptyCart = () => {
    return setCart([]);
  };

  function removeFromCart(id) {
    return setCart(cart.filter(item => item.id !== id))
}

return (
    <cartCtx.Provider value={{ cart, addItem, getTotalItemsInCart, isInCart, getTotalPrice, removeFromCart, emptyCart }}>
    {children}
    </cartCtx.Provider>
);
}

export { cartCtx };