import { useParams } from "react-router-dom"
import {ordenExistente} from "../Json/firebase"
import ErrorURL from "../Error404"
import { useState,useEffect } from "react"
/* import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss' */
function Gracias(){
    /* let [orden,setOrden] = useState(null) */
    function verComprobante(){
       /*  const verMap = orden.map((item)=> console.log(item) ) */
       /*  Swal.fire({
            title: 'Resumen',
            text: 'Este es el resumen de tu compra',
            icon: 'succesful',
            confirmButtonText: 'Confirmar'
          }) */
    }
    const {id} = useParams()
   /*  useEffect(()=>
    async function order(){
        const orden =  await ordenExistente(id)
        setOrden(orden)
    }
    ,[orden]) */
    return(
       <main>
       {/*  {orden?
        <h2 onClick={verComprobante}>Gracias por su compra su id es: {id}</h2>
        :<ErrorURL img="https://robohash.org/16" error="Error 404" causa="Tal vez la página no exista, asegurate de a ver indroducido bien la URL"/>
        } */}
        <h2 onClick={verComprobante}>Gracias por su compra su id es: {id}</h2>
      </main>
    )
}
export default Gracias