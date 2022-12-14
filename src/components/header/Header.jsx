import "./header.css"
import CardNav from "./CardNav"
import {Link} from "react-router-dom"
const Header = () =>{
    return(
            <header className="headerNav">
                <nav>
                    <h2 className="oneShotTitle">The One Shop</h2>
                    <Link to="/home" className="aHover">Inicio</Link>
                    <Link to="/products" className="aHover">Catalogo</Link>
                    <a href="#" className="aCategory aHover" >Categoria 
                    <ul>
                        <li>
                            <Link to="/products/categoria/Celular">Celulares</Link> 
                        </li>
                        <li>
                            <Link to="/products/categoria/Audio">Audio</Link> 
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