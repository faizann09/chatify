
import LogoutIcon from '@mui/icons-material/Logout';
export default function Logout(){
    const handleLogout = async()=>{
        
    }

    return(
        <div className="w-[3%] bg-slate-950 text-white flex flex-col justify-end p-3">
            <button>
          
          <LogoutIcon className="h-7 w-7 hover:text-gray-600 rounded-full duration-300 text-white " onClick={handleLogout} />
        </button>
        </div>
    )
}