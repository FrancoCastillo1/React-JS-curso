import { useState } from "react"
function ItemCount({stock}){
    /* console.log("este es",  stock) */
    const [contador , setContador] = useState(1)
    const sumarCont = () =>{
       contador < stock? setContador(contador +1):
       setContador(contador +0)
    }
    const restarCont = () =>{
        contador > 1 ? setContador(contador -1):
        setContador(contador +0)
    }
    return(
        <div className="contador">
            <div className="mod" onClick={sumarCont}>+</div>
            <div className="mod">{contador}</div>
            <div className="mod" onClick={restarCont} >-</div>
        </div>
    )
}
export default ItemCount