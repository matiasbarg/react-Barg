import "./nabvar.css";
import logo from "../logo.png";

function Navbar() {
    return (
    <div className="navbar">    
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
            <li><a href="">Cuchillos con funda</a></li>
            <li><a href="">Cuchillos sin funda</a></li>
            <li><a href="">Promociones</a></li>
        </ul>
    </div>
    );
}

export default Navbar;

