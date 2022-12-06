import { createContext } from "react";
import { useState } from "react";
export const cartContext = createContext()
export function CartContext(prop){
   const [agregar,setAgregar] = useState([]) // este estado es inmutable
    function addToCart(count, product){
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
        }else{
            return "0"
        }
    }
    function priceCart(){
        const precio = agregar.reduce((acumm,item)=>{
            return acumm + item.precio
        },0)
        return precio
    }    
    function clearCart(){
        if(agregar.length >=1){
           setAgregar([])
        }
    }
    function removeCart(index){
      const itemRemove = agregar.findIndex((item)=> item.index === index)
       agregar.splice(0,itemRemove) 

    }
    let valores ={
        addToCart,
        itemsInCart,
        priceCart,
        clearCart,
        removeCart,
        agregar,
    }
    return(
        <cartContext.Provider value={valores} >
            {prop.children}
        </cartContext.Provider>
    )
}