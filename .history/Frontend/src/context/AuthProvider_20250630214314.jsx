import { createContext } from "react"
import Cookies from "js-cookie";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const initialUserState=Cookies.get("jwt") || localStorage.getItem("messenger"); 
    const [user,setUser]= React.useState

    return(
        <>

        </>
    )
}