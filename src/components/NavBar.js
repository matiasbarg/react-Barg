import "./nabvar.css";
import CartWidget from "./CartWidjet"
import ItemListContainer from "./ItemListContainer"
import logo from "../logo.svg";

function Navbar() {
    return (
    <div className="navbar">    
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
            <li><a href="">Heroes</a></li>
            <li><a href="">Enemigos</a></li>
            <li><a href="">Terreno</a></li>
            <li><a href="">Promociones</a></li>
        </ul>
        <CartWidget/>
    </div>
    );
}

export default Navbar;

