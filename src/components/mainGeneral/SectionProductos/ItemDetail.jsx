import ItemCount from "../ItemCount/ItemCount";
import AnchorJSX from "../anchorGlobal/Anchor";
import "./Items.css"
function ItemDetail({product}){
    function meterCarrito(){
       /*  const acceder = document.querySelector(".acceso")
        console.log(acceder) */
        alert("Has metido"/* , acceder.textContent  */, "a tu carrito")
    }
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
                        <AnchorJSX text="Comprar" onClick={meterCarrito} />
                    </div>
                </section>
            </main>
    )
}
export default ItemDetail