import ItemCount from "../ItemCount/ItemCount";
import AnchorJSX from "../anchorGlobal/Anchor";
import "./Items.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../../context/cartContext";
function ItemDetail({product}){
    const {addToCart}= useContext(cartContext);
    const meterCarrito = (contador,product) => addToCart(product,contador) 
    const {Stock ,categoria ,descuento ,precio,nombre,subcategoria,img} = product
    const urlCategory = `/products/categoria/${categoria}`
    return(
        <main className="mainDetalles">
                <section className="productsDetail">
                    <div className="imgD">
                       <img src={img} alt={nombre}/>
                    </div>
                    <div className="infoDe">
                        <h2>{nombre}</h2>
                        {descuento && <p style={{textDecoration:"line-through"}} >{precio}</p>}
                        <p>${descuento ?Math.round(precio*(1-descuento)):precio}</p>
                        <p>{Stock === 0 ?"Producto sin stock":`Stock:${Stock}`}</p>
                        <p>Categoria:{categoria}, Subcategoria:{ subcategoria} </p>
                        <div className="buttonsConatiner">
                        {Stock >0  && <ItemCount stock={Stock} product={product} event={meterCarrito}/>}  
                        <Link to={urlCategory}>
                        <AnchorJSX text="Ver productos similares" className="buttonCategory" />
                        </Link>
                        </div>
                    </div>
                </section>
            </main>
    )
}
export default ItemDetail