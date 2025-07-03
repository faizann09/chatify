
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";


import LogoutIcon from '@mui/icons-material/Logout';
import toast from "react-hot-toast";

export default function Logout(){
    const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      setLoading(false);
      toast.su("Logout Successful")
      
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      
    }
  };
    return(
        <div className="w-[3%] bg-slate-950 text-white flex flex-col justify-end p-3">
            <button onClick={handleLogout}>
          
          <LogoutIcon className="h-7 w-7 hover:text-gray-600 rounded-full duration-300 text-white "  />
        </button>
        </div>
    )
}