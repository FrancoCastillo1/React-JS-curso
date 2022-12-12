import AnchorJSX from "../mainGeneral/anchorGlobal/Anchor"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import {useNavigate } from "react-router-dom"
import {createOrder} from "../mainGeneral/Json/firebase"
import {FaWindowClose} from "react-icons/fa"
import {MdOutlineRemoveShoppingCart} from "react-icons/md"
import IconoText from "../mainGeneral/Iconos/IconoText"
function CartView(){
    const {clearCart,agregar,priceCart,removeCart} =useContext(cartContext)
    const navegar = useNavigate()
    async function handelCheckout(){
        const local = JSON.parse(localStorage.getItem("User"))
        const order={
            buyer:{
              nombre:local.nombre,
              email:local.email,
                },
                items:agregar,
                total:priceCart(),
                data:new Date(),
            }
        const orderID = await createOrder(order)
            navegar(`/gracias/${orderID}`)
            clearCart()
        }
    if(agregar.length ==0){
        return(
            <IconoText icono={<MdOutlineRemoveShoppingCart className="redIcon"/>} text="El carrito se encuentra vacío" />
        ) 
    } 
    return(
        <main>
            <section className="sectionCart" >
                <div className="itemsinCart">
                {agregar.map((item,i)=>{
                return( 
                <div key={i} className="itemCart">
                    <span>{item.nombre}</span>
                    <span>Unidades: {item.count}</span>
                    <span>Precio c/u: ${item.precio}</span>
                    <span><FaWindowClose onClick={()=> removeCart(item.id)} className="closeItem"  ></FaWindowClose></span>    
                </div>
                )
                })}
                </div>
                <div className="containerBottoms">
                <h2>Total de la compra: ${priceCart()}</h2>
                 <div className="botonesCart">
                    <AnchorJSX text="Vaciar Carrito" event={clearCart} />
                    <AnchorJSX text="Finalizar Compra" event={handelCheckout} />
                 </div>
                </div>
            </section>
        </main>
        )
}
export default CartView