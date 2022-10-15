import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartCtx } from "../../context/cartContext"
import { createBuyOrder } from "../services/firestore";
import Button from "../button/Button";
import "../checkoutform/checkoutform.css"

function CheckoutForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();
  const context = useContext(cartCtx);
  const { cart, getTotalPrice } = context;

  function handleCheckout(event) {
    event.preventDefault();
    
    const orderData = {
      buyer: dataForm,
      items: cart,
      date: new Date(),
      total: getTotalPrice(),
    };
    createBuyOrder(orderData).then((orderid) => {
      navigate(`/checkout/${orderid}`);
    });
  }

  function inputChangeHandler(event) {
    let inputName = event.target.name;
    let value = event.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleCheckout}>
        <div className="form-item">
          <label htmlFor="name">Nombre</label>
          <input
            value={dataForm.name}
            onChange={inputChangeHandler}
            name="name"
            type="text"
            placeholder="Nombre"
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="telefono">Telefono</label>
          <input
            value={dataForm.phone}
            onChange={inputChangeHandler}
            name="phone"
            type="text"
            placeholder="Telefono"
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            value={dataForm.email}
            onChange={inputChangeHandler}
            name="email"
            type="text"
            placeholder="Correo"
            required
          />
        </div>
        <div className="btnFinalizar"><Button type="submit">Finalizar Compra</Button>
</div>
      </form>
    </div>
  );
}

export default CheckoutForm;