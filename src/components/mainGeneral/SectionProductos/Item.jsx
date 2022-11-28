/* import "../Json/MOCK_DATA"; */
import AnchorJSX from "../anchorGlobal/Anchor";
import "./Items.css"
import {Link} from "react-router-dom"
function Item({ img,name, stock ,precio  ,id}){
    const urlDetail = `/products/detalles/${id} `
    return(
        <div className="itemCompra" >
            <div className="imgItem">
                <img src={img} alt={name}/>
            </div>
            <div className="divContenido">
                <h2>{name}</h2>
                <p>Precio:{precio}</p>
                <p>{stock === 0 ?"Producto sin stock":`Stock:${stock}`}</p> 
            <Link to={urlDetail}>
            <AnchorJSX text="Comprar" className="buttonModificar"/>
            </Link>
            </div>
        </div>
    )
}
export default Item