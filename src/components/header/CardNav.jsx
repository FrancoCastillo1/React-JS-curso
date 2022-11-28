import "./header.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import {FaOpencart} from "react-icons/fa"
function CardNav(){
    const getItmesCart = useContext(cartContext)
    return(
       /*  <Link to="/cart" className="cartContent"><FaOpencart className="aCart"/></Link> */
        <span>{getItmesCart.itemsInCart() ? getItmesCart.itemsInCart():"0"}</span>
    )
}
export default CardNav