


import LogoutIcon from '@mui/icons-material/Logout';

export default function Logout(){
    const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };
    return(
        <div className="w-[3%] bg-slate-950 text-white flex flex-col justify-end p-3">
            <button>
          
          <LogoutIcon className="h-7 w-7 hover:text-gray-600 rounded-full duration-300 text-white " onClick={handleLogout} />
        </button>
        </div>
    )
}