import { createContext } from "react"
import Cookies from "js-cookie";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const initialState=Cookies.get("jwt") || localStorage.getItem("messenger");

    return(
        <>

        </>
    )
}