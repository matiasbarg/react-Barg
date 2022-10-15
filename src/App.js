import './App.css';
import BarraNav from './components/navbar/NavBar';
import ItemListContainer from "./components/itemlist/ItemListContainer";
import ItemDetailContainer from "./components/itemdetail/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from './context/cartContext';
import CartView from './components/cartView/CartView';
import Checkout from "./components/Checkout/Checkout.jsx";
/*import { exportDataToFirestore } from './components/services/firestore';*/

function App() {

  return (
    <CartContextProvider>
    {/* <button onClick={exportDataToFirestore}>enviar datos</button>*/}
    <BrowserRouter>
    <div className="App">    
            <header>
            <BarraNav/>
            </header>
            <Routes>
              <Route path="/" element={
                <ItemListContainer/>
              }/>
              <Route path="/categoria/:cat" element={
              <ItemListContainer/>
              }/>
              <Route path="/minis/:id" element={
                <ItemDetailContainer/>
              }/>
              <Route path="/checkout/:orderid" element={
              <Checkout />
              } />
              <Route path="*" element={
                <h1>Estás Perdido...</h1>
              }/>
              <Route path="/cart" element={
                <CartView/>
              }/>
            </Routes>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;


