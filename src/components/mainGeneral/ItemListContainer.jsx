import {getItems} from "./Json/firebase";
import { FaSpinner } from "react-icons/fa";
import { useState , useEffect} from "react";
import ItemList from "./ItemList";
import ErrorURL from "./Error404";
function ItemListContainer(){
    const [arrayPro , setArrayPro] = useState([])
    const [load , setLoad] = useState(null)
    async function extarerPromesa(){
       getItems("none").then((res)=>{
            setArrayPro(res)
            setLoad(true)          
        })
        .catch(()=> setLoad(false)) //preguntar porque no funciona .cath
    }
    useEffect(()=>{
        extarerPromesa()
    },[])
    if(load ===true){
            arrayPro.length <1 && setLoad(false)  
            return(
                <ItemList recorrido={arrayPro} />
            ) 
    }else{
        if(load ===null){
        return(
               <main><FaSpinner/></main> 
        )
        }
        else if(load ===false){
            return(
            <main>
                <ErrorURL error={"500"} causa="No es problema tuyo!,son errores de nuestros servidores, ten panciencia que pronto estará solucionado" img={"https://robohash.org/845"}/> 
            </main>
             ) 
           }
        }
    } 

export default ItemListContainer