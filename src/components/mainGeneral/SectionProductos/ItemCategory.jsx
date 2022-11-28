import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import  {CapturarCategoria} from "../Json/promesaDemorar";
/* import { getItems } from "../Json/firebase"; */
import Item from "./Item";
/* import { Link } from "react-router-dom"; */
function ItemCategory(){
        const [arrayCat , setArrayCat ] = useState([])
        const {categoria} = useParams()
        async function categoriaFunction(){
          let  esperar = await CapturarCategoria(categoria);
            setArrayCat(esperar) 
        }
        useEffect(()=>{ 
            categoriaFunction()
        },[categoria])
        return(
            <main className="sectionProducts">
                <h1 className="productsSimilar">Productos similares</h1>
             <section className="divContainerProductos">
                {arrayCat.map((producto , i)=>{
                return(
                    <Item key={i}
                    id={producto.id}
                    img={producto.img}
                    name={producto.nombre}
                    stock={producto.Stock}
                    precio={producto.precio}
                    />
                )
                })  }
                </section>
            </main>
           
        )
}
export default ItemCategory