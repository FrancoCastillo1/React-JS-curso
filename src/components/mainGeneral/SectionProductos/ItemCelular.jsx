import { useParams } from "react-router-dom";
import { useState , useEfect } from "react";
import  {CapturarCategoria} from "../Json/promesaDemorar";
import Item from "./Item";
function ItemCelular(){
    const {Celular} = useParams()
    console.log(Celular)
    const [arrayCat , setArrayCat ] = useState([])
    async function categoriaFunction(){
        const esperar = await CapturarCategoria(Celular.slice(1));
        console.log("xddddeefff",esperar)
        setArrayCat(esperar)
    }
    useEfect(()=>{
        categoriaFunction()
    },[])
    arrayCat.map((producto , i)=>{
        return(
            <Item key={i}
            id={producto.id}
            img={producto.img}
            name={producto.nombre}
            stock={producto.Stock}
            precio={producto.precio}
            />
        )
    })
}
export default ItemCelular