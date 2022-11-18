import "./header.css"
import CardNav from "./CardNav"
import {Link} from "react-router-dom"
const Header = () =>{
    return(
        <header className="headerNav">
            <nav>
                <h2 className="oneShotTitle">The One Shop</h2>
                <Link to="/">Inicio</Link>
                <Link to="/products">Catalogo</Link>
                <a href="#" className="aCategory">Categoria 
                <ul>
                    <li>
                        <Link to="/products/categoria/Celular">Celulares</Link>
                    </li>
                    <li>
                        <Link to="/products/categoria/Audio">Audio</Link> {/*aca remmplazamos los parámetros creados anteriormente,deben estar igual alas llaves del objeto */}
                    </li>
                    <li>
                        <Link to="/products/categoria/Electrodomésticos">Electrodomésticos</Link>
                    </li>
                </ul>
                </a>
                <CardNav/>
            </nav>
        </header>
    )
}
export default Header