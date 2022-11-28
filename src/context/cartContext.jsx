import { createContext } from "react";
import { useState } from "react";
export const cartContext = createContext()
export function CartContext(prop){
    const [agregar,setAgregar] = useState([]) // este estado es inmutable
    function addToCart(product , count){
       let newAgregar = [...agregar]//todo lo que agregar,metelo aca 
       product.count = count
       newAgregar.push(product) //donde agrego es aca,ya que no es un estado    
       setAgregar(newAgregar) //agrego lo que es mutable a lo inmutable
     } 
    function itemsInCart(){
        if(agregar.length >=1){
            const mostar = agregar.reduce((acumm,item)=>{
                return acumm + item.count
               },0)
             return mostar
           }
        }
    function clearCart(){

    }
    function removeCart(){
        
    }
    let valores ={
        addToCart,
        itemsInCart,
    }
    return(
        <cartContext.Provider value={valores} >
            {prop.children}
        </cartContext.Provider>
    )
}