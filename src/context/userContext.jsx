import { createContext } from "react";
export const userContext = createContext()
export function UserContext(prop){
    function returnUser(user){
    delete user.contraseña
     localStorage.setItem("User",JSON.stringify(user))
    }
    let valores ={
        returnUser,
    }
    return(
        <userContext.Provider value={valores} >
            {prop.children}
        </userContext.Provider>
    )
}