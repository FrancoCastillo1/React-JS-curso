import { useEffect } from "react";
import { useNavigate,Outlet } from "react-router-dom";
import {FaWindowClose} from "react-icons/fa"
import IconoText from "../mainGeneral/Iconos/IconoText";
export function RutaProtegida({children}){
    const user = JSON.parse(localStorage.getItem("User"))
    const navigate = useNavigate()
    useEffect(()=>{
      if(user) return;
      setTimeout(()=>{
        navigate("/")
      },2000)  
    },[user])
    if(!user){
      return(
        <IconoText icono={<FaWindowClose className="redIcon"/>} text="Ruta Bloqueda:Debes registrarte"/>
      ) 
    }
    return children ? children : <Outlet/>
}