import ItemCount from "../ItemCount/ItemCount";
import AnchorJSX from "../anchorGlobal/Anchor";
import "./Items.css";
import { Link } from "react-router-dom";
function ItemDetail({product}){
    const urlCategory = `/products/categoria/${product.categoria}`
    return(
        <main className="mainDetalles">
                <section className="productsDetail">
                    <div className="imgD">
                       {<img src={product.img} alt={product.nombre} />}
                    </div>
                    <div className="infoDe">
                        <h2>{product.nombre}</h2>
                        <p>${product.precio}</p>
                        <p>Stock:{product.Stock}</p>
                        <ItemCount stock={product.Stock}/>
                        <p>Categoria:{product.categoria}, Subcategoria:{product. subcategoria}</p>
                        <div className="buttonsConatiner">
                        <AnchorJSX text="Comprar"  event={meterCarrito} />
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