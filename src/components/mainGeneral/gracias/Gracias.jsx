import { useParams } from "react-router-dom"
import {ordenExistente} from "../Json/firebase"
import ErrorURL from "../Error404"
import Loading from "../../Loading"
import { useState,useEffect } from "react"
import "./Gracias.css"
function Gracias(){
  let [orden,setOrden] = useState("load")
  let [comprobante,setComprobante] = useState(null)
  async function hayComprobante(){
    const filtrar = await ordenExistente()
    try{
      const filtardo = filtrar.filter((item) => item.id === id)
      if(filtardo.length >0){
          setOrden(true)
          setComprobante([...filtardo])
      }else{
        setOrden(null)
      }
    }catch(e){
      console.log(e)
    }

  }
  useEffect(()=>{
    hayComprobante()
  },[])
  function borrarInfoConfidencial(){
    let {items} = comprobante[0]
    const recorridoItem = items.map((item,i)=>{
      return(
        <div className="productsOrden" key={i} >
        <p>Nombre: {item.nombre}</p>
        <p>Unidades llevadas: {item.count} </p>
        <p>Precio c/u: {item.precio} </p>
        </div>
      )
    })
    return recorridoItem
    }
    const {id} = useParams()
    if(orden === "load") return <Loading/>
    if(!orden){
      return(
        <main>
          <ErrorURL img="https://robohash.org/16" error="Error 404" causa="Tal vez la página no exista, asegurate de a ver indroducido bien la URL"/>
        </main>
      )} 
    return(
       <main>
        <h2 className="h2Pago" >Comprobante de pago</h2>
        <div className="comprobanteDePago">
        {comprobante.map((item)=>{
            return(
              <>
              <div className="info">
                  <h3>Informacion principal</h3>
                  <p>Nombre:{item.buyer.nombre}</p>
                  <p>Email:{item.buyer.email}</p>
                  <p>Total de la compra:${item.total}</p>
                  <p>ID del comrpobante:{id}</p>
              </div>
              <div className="pedido">
                  <h3>Productos</h3>
                  {borrarInfoConfidencial()}
              </div>
              </>
            )
        })}
        </div>
      </main>
    )
}
export default Gracias