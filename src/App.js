import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from './context/cartContext';
import CartView from './components/cartView/CartView';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <div className="App">    
            <header>
            <NavBar/>
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


