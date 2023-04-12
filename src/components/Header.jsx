import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Header = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : "");
    const { countProducts} = useContext(MyContext);
    const { allProducts } = useContext(MyContext);

    return (
        <div className="header-container">
            <header>
                <div className="header-l">
                    <NavLink to="/">
                        <img src={logo} alt="logo" className="logo" />
                    </NavLink>
                </div>
                <div className="header-c">
                    <NavLink className={activeClass} to="/">
                        <i className="fa-solid fa-bell-concierge"></i>Menú
                    </NavLink>
                    <a>
                        <i className="fa-solid fa-pizza-slice"></i>Promos
                    </a>
                    <a>
                        <i className="fa-solid fa-shop"></i>Locales
                    </a>
                    <a>
                        <i className="fa-solid fa-note-sticky"></i>Mis Pedidos
                    </a>
                    <a>
                        <i className="fa-solid fa-user"></i>Ingresar
                    </a>
                </div>
                <NavLink className={activeClass} to="/cart">
                    <div className="header-r">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p className={`cart-num ${allProducts.length == 0 ? 'hidden' : ''}`}>{countProducts}</p>
                    </div>
                </NavLink>
            </header>
        </div>
    );
};

export default Header;
