import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";
import  {promesaDemorar}  from "../Json/promesaDemorar";
import ItemDetail from "./ItemDetail";
/* import Errror404 from "../Error404"; */
function ItemDetailContainer(/* {img , name,stock,price,categoria,subcategoria} */){
    const {id} = useParams() // se conecta con el parámetro
    const [arrayPro , setArrayPro] = useState([])
    async function capturar(){ 
        const capturarArray = await promesaDemorar(id)
       setArrayPro(capturarArray)
     }
    useEffect(()=>{
         capturar()
    },[])
    return(
        <ItemDetail product={arrayPro}/>
    )
}
export default ItemDetailContainer