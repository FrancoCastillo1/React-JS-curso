import {getItems} from "./Json/firebase";
import { FaSpinner } from "react-icons/fa";
import { useState , useEffect} from "react";
import ItemList from "./ItemList";
import ErrorURL from "./Error404";
function ItemListContainer(){
    const [arrayPro , setArrayPro] = useState([])
    const [load , setLoad] = useState(false)
    async function extarerPromesa(){
       try{
            const extarer = await getItems()
            console.log(extarer)
            setArrayPro(extarer)
             setLoad(true)         
        }catch{
            <ErrorURL error={"500"} causa="No es problema tuyo!,son errores de nuestros servidores, ten panciencia que pronto estará solucionado" img={"https://robohash.org/845"} />
        }
    }
    useEffect(()=>{
        extarerPromesa()
    },[])
    if(load){
        return(
            <ItemList recorrido={arrayPro} />
        ) 
    }else{
        return(
            <main>
                <FaSpinner/>
            </main>
        )

    }
}
export default ItemListContainer