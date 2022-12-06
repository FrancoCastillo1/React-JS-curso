import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { capturarID } from "../Json/firebase";
function ItemDetailContainer(){
    const {id} = useParams() 
    const [arrayPro , setArrayPro] = useState({})
    async function capturar(){
        let capturarArray = await capturarID(id)
        setArrayPro({...capturarArray})
     }
     useEffect(() => {
        capturar()
      },[]);
    return(
        <ItemDetail product={arrayPro}/>
    )
}
export default ItemDetailContainer