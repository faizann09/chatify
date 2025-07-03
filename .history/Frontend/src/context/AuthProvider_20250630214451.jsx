import { createContext, useState } from "react"
import Cookies from "js-cookie";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const initialUserState=Cookies.get("jwt") || localStorage.getItem("messenger"); 
    const [user,setUser]= useState(initialUserState ? JSON.parse(initialUserState));

    return(
        <>

        </>
    )
}