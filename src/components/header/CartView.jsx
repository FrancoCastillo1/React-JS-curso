import AnchorJSX from "../mainGeneral/anchorGlobal/Anchor"
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import {useNavigate } from "react-router-dom"
import {createOrder} from "../mainGeneral/Json/firebase"
function CartView(){
    const {clearCart,agregar,priceCart} =useContext(cartContext)
    const navegar = useNavigate()
    async function handelCheckout(){
        const order={
            buyer:{
                Nombre:"Franco",
                email:"francocastillo@gamil.com",
                phone:"5378493"
                },
                items:agregar,
                total:priceCart(),
                data:new Date(),
            }
        const orderID = await createOrder(order)
            navegar(`/gracias/${orderID}`)
            clearCart()
        }
    if(agregar.length ==0) return <main><h2>Carrito vacio</h2></main>
    return(
            <section>
                {agregar.map((item,i)=>{
                return( 
                <>
                <div key={i} className="itemCart">
                    <h2>{item.nombre}</h2>
                    <span>Unidades:{item.count}</span>
                    <span>${item.precio}</span>    
                </div>
                </>
                )
                })}
                <div className="containerBottoms">
                <div className="total"><h2>Total de la compra{priceCart()}</h2></div>
                    <AnchorJSX text="Vaciar Carrito" event={clearCart} />
                    <AnchorJSX text="Finalizar Compra" event={handelCheckout} />
                </div>
            </section>
        )
}
export default CartView