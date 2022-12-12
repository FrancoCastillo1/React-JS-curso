import { useState } from "react"
import ItemForm from "./ItemsForm"
import {mandarUser} from "../Json/firebase"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { userContext } from "../../../context/userContext"
import {TiTickOutline} from "react-icons/ti"
import "./Form.css"
import { useEffect } from "react"
import IconoText from "../Iconos/IconoText"
function FormContainer(){
  const {returnUser} = useContext(userContext)
  const navigate = useNavigate()
  const datos = JSON.parse(localStorage.getItem("User")) 
  let [input,setInput] = useState({
    email:"",
    contraseña : "",
  })
  function registerUser(e){
    let name = e.target.name
    let value = e.target.value
    let newData = {...input}
    newData[name] = value
    setInput(newData)
  }
  async function submitInput(e){
    e.preventDefault()
    const user = {
      email:input.email,
      contraseña:input.contraseña,
      nombre:input.email.substring(0,6)
    }
    if((input.contraseña.length >=7)&&(input.email.length >=10)){
       const verificarEmail = await mandarUser(user)
        if(verificarEmail){
          returnUser(user) 
          navigate("/home")
        }else{
          alert("El email: " + user.email + " ya fue utilizado,prueba con otro" )
        }
    }else{
        alert("Por favor sigue completando el formulario")
    }
  }
  useEffect(()=>{
  if(!datos) return;
  setTimeout(()=>{
     navigate("/home")
  },2000)  
},[datos])
  if(datos){
    return(
      <IconoText icono={<TiTickOutline className="progresoExitoso" />} text="Tu proceso de registro ya fue exitoso,redirigiendo a /home"/> 
    ) 
  }return(
       <main>
        <section className="sectionForm" >
        <h2>Registrate</h2>
            <form className="formContainer" onSubmit={submitInput} >
              <ItemForm name="email" type="email" placeholder="Introduzca su Email" valor={input.email} event={registerUser}/>
              <ItemForm name="contraseña" type="password" placeholder="Introduzca su contraseña telefónico" valor={input.contraseña} event={registerUser}/>
             {/*  <ItemForm name="nombre" type="text" placeholder="Introduzca su Nombre" valor={input.nombre} event={registerUser}/>  */}
             {/*  porfe misteriosamente me da error en el tercer input(no deja escribir) por eso lo dejo aca comentado me hubiera gustado poner más pero si lo podes solucionar estaría joya */}
              <input type="submit" className="submitInput" />
            </form>
        </section>
      </main>
    )
}
export default FormContainer