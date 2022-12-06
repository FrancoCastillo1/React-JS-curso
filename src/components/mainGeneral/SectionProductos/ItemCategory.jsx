import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import ItemList from "../ItemList";
import ErrorURL from "../Error404";
import { getItems } from "../Json/firebase";
function ItemCategory(){
        const [arrayCat , setArrayCat ] = useState([])
        const {categoria} = useParams()
        async function categoriaFunction(){
            try{
                let esperar = await getItems(categoria);
                setArrayCat(esperar)
            }catch(e){
                console.log(e)
            }
        }
        useEffect(()=>{ 
            categoriaFunction()
        },[categoria])
        if(arrayCat.length >=1)
            return(
                <main className="sectionProducts">
                    <h1 className="productsSimilar">Productos similares</h1>
                    <ItemList recorrido={arrayCat}/>
                </main>
               
            )
        return <main><ErrorURL img="https://robohash.org/16" error="Error 404" causa="Tal vez la página no exista, asegurate de a ver indroducido bien la URL"/></main>
        
}
export default ItemCategory