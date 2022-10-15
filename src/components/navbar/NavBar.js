import "./nabvar.css";
import CartWidget from "./CartWidjet"
import logo from "../../logo.svg";
import { Link } from "react-router-dom";


function BarraNav() {
    return (
    <div className="navbar">    
        <Link to="/"> <img src={logo} className="App-logo" alt="logo" /> </Link>
        <ul>
            <li><Link to="/categoria/heroes">Heroes</Link></li>
            <li><Link to="/categoria/enemigos">Enemigos</Link></li>
            <li><Link to="/categoria/terreno">Terreno</Link></li>
            <li><Link to="/categoria/promociones">Promociones</Link></li>
        </ul>
        <Link to="/cart" className="linkCart"><CartWidget/></Link>
        
    </div>
    );
}

export default BarraNav;

