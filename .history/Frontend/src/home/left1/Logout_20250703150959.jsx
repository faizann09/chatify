import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import LogoutIcon from '@mui/icons-material/Logout';
import toast from "react-hot-toast";

export default function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logout Successful");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Failed to logout");
    }
  };

  return (
    <div className="w-full flex justify-start px-4 py-2 bg-black">
      <button
        onClick={handleLogout}
        className="hover:text-gray-400 duration-300"
        title="Logout"
      >
        <LogoutIcon className="text-white h-6 w-6" />
      </button>
    </div>
  );
}
