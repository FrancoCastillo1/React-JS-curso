import { useState } from "react"
import ItemForm from "./ItemsForm"
function FormContainer(){
  const [input,setInput] = useState({
    nombre:"",
    email:"",
    telefono:""
  })
    return(
       <main>
        <h2>Login</h2>
        <section>
            <h2>Registrate!</h2>
            <div className="formContainer">
              <ItemForm name="nombre" type="text" />
              <ItemForm name="email" type="" />
              <ItemForm />
            </div>
        </section>
      </main>
    )
}
export default FormContainer