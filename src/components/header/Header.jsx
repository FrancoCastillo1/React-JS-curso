import "./header.css"
import CardNav from "./CardNav"
const Header = () =>{
    return(
        <header className="headerNav">
            <nav>
                <h2 className="oneShotTitle">The One Shop</h2>
                <a href="#">Inicio</a>
                <a href="#">Catalogo</a>
                <a href="#">Formulario</a> 
                <CardNav/>
            </nav>
        </header>
    )
}
export default Header