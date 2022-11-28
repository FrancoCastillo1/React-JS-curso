import ItemCount from "../ItemCount/ItemCount";
import AnchorJSX from "../anchorGlobal/Anchor";
import "./Items.css";
import { Link } from "react-router-dom";
import { useState } from "react";
/* import { useContext } from "react";
import { cartContext } from "../../../context/cartContext"; */
function ItemDetail({product}){
    const [contador , setContador] = useState(1)
    /* const {addToCart}= useContext(cartContext);
    addToCart(product,contador) */ // porque da error??????
    const urlCategory = `/products/categoria/${product.categoria}`
    const {Stock , descuento ,precio} = product
    return(
        <main className="mainDetalles">
                <section className="productsDetail">
                    <div className="imgD">
                       <img src={product.img} alt={product.nombre}/>
                    </div>
                    <div className="infoDe">
                        <h2>{product.nombre}</h2>
                        {descuento && <p style={{textDecoration:"line-through"}} >{precio}</p>}
                        <p>${descuento ?Math.round(precio*(1-descuento)):precio}</p>
                        <p>{Stock === 0 ?"Producto sin stock":`Stock:${Stock}`}</p>
                        {Stock >0  && <ItemCount stock={Stock} contador={contador} setContador={setContador()} /* product={product} */ />} 
                        <p>Categoria:{product.categoria}, Subcategoria:{product. subcategoria}</p>
                        <div className={descuento?"buttonTogether":"buttonsConatiner"}>
                        {Stock>0 && <AnchorJSX text="Comprar"/>}
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