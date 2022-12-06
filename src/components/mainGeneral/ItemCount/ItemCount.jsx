import { useState} from "react"
import AnchorJSX from "../anchorGlobal/Anchor";
function ItemCount({stock,event,product}){
    const [contador , setContador] = useState(1);
    const sumarCont = () =>{
       contador < stock && setContador(contador +1)
    }
    const restarCont = () =>{
        contador > 1 && setContador(contador -1)
    }
    return(
        <>
        <div className="contador">
            <div className="mod" onClick={sumarCont}>+</div>
            <div className={`mod`}>{contador}</div>
            <div className="mod" onClick={restarCont}>-</div>
        </div>
        <AnchorJSX text="Comprar" event={() => event(product,contador)} />
        </>
    )
}
export default ItemCount 