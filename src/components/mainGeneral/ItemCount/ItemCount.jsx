/* import { useContext } from "react"; */
/* import { cartContext } from "../../../context/cartContext"; */
function ItemCount({stock , contador,setContador /* ,product */}){
    /* const {addToCart}= useContext(cartContext);
    addToCart(product,contador) */
    const sumarCont = () =>{
       contador < stock && setContador(contador +1)
    }
    const restarCont = () =>{
        contador > 1 && setContador(contador -1)
    }
    return(
        <div className="contador">
            <div className="mod" onClick={sumarCont}>+</div>
            <div className={`mod`}>{contador}</div>
            <div className="mod" onClick={restarCont} >-</div>
        </div>
    )
}
export default ItemCount 