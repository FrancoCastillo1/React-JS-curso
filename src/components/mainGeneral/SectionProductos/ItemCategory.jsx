import { useParams } from "react-router-dom";
import Loading from "../../Loading";
import { useState , useEffect } from "react";
import ItemList from "../ItemList";
import ErrorURL from "../Error404";
import { capturarCategoria } from "../Json/firebase";
function ItemCategory(){
        const [arrayCat , setArrayCat ] = useState([])
        const {categoria} = useParams()
        async function categoriaFunction(){
            try{
                let esperar = await capturarCategoria(categoria);
                setArrayCat(esperar)
            }catch{
                setArrayCat(undefined)
            }
        }
        useEffect(()=>{ 
            categoriaFunction()
        },[categoria])
        if(!arrayCat){
            return  <main> <ErrorURL error={"500"} causa="No es problema tuyo!,son errores de nuestros servidores, ten panciencia que pronto estará solucionado" img={"https://robohash.org/845"}/> </main>
        }
        if (arrayCat.length > 0){
            return (
              <main className="sectionProducts">
                <h1 className="productsSimilar">Productos similares</h1>
                <ItemList recorrido={arrayCat} />
              </main>
            );
        
        }
        return <Loading/> 
        
        
}
export default ItemCategory