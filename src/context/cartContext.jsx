import { createContext } from "react";
import { useState } from "react";
export const cartContext = createContext()
export function CartContext(prop){
   const [agregar,setAgregar] = useState([]) // este estado es inmutable
    function addToCart(count, product){
      let itemRepetido = agregar.findIndex((item)=> item.index === product.index )
      let newAgregar = [...agregar]
        if(itemRepetido !== -1){
            newAgregar[itemRepetido].count += count
            setAgregar(newAgregar)
        }else{
            product.count = count
            newAgregar.push(product) 
            setAgregar(newAgregar)
        }
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
            return acumm + item.precio*item.count
        },0)
        return precio
    }    
    function clearCart(){
        if(agregar.length >=1){
           setAgregar([])
        }
    }
    function removeCart(id){
      const itemRemove = agregar.findIndex((item)=> item.id === id)
      let nuevoArray = [...agregar]
      nuevoArray.splice(itemRemove,1)
      setAgregar(nuevoArray)
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